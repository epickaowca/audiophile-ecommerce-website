import { ProductDetails } from "./index";
import { render } from "../../../../tests/render";
import { screen, waitFor } from "@testing-library/react";
import { getProductDetails } from "./services/details";

const mockedGetProductDetails = getProductDetails as jest.Mock<any>;

const ErrorPageProps = jest.fn();
jest.mock("@root/features/main/ErrorPage", () => ({
  ...jest.requireActual("@root/features/main/ErrorPage"),
  ErrorPage: jest.fn((props) => ErrorPageProps(props)),
}));

jest.mock("@root/features/shared/Product", () => ({
  Product: jest.fn(() => <div data-testId="Product"></div>),
}));

jest.mock("./components/Info", () => ({
  Info: jest.fn(() => <div data-testId="Info"></div>),
}));

jest.mock("./services/details");

it("displays Product", async () => {
  render(<ProductDetails dataLoaded={jest.fn} />);
  await waitFor(async () => {
    expect(screen.getByTestId("Product")).toBeInTheDocument();
  });
});

it("displays Info", async () => {
  render(<ProductDetails dataLoaded={jest.fn} />);
  await waitFor(async () => {
    expect(screen.getByTestId("Info")).toBeInTheDocument();
  });
});

it("displays error page", async () => {
  mockedGetProductDetails.mockRejectedValue({ message: "error" });
  render(<ProductDetails dataLoaded={jest.fn} />);
  await waitFor(async () => {
    expect(ErrorPageProps).toHaveBeenCalledWith({
      message: "error loading product",
    });
  });
});
