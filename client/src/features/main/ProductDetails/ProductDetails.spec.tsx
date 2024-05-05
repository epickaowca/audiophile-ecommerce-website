import { ProductDetails } from "./index";
import { render } from "../../../../tests/render";
import { screen, waitFor } from "@testing-library/react";
import { getProductDetails } from "./services/details";

const mockedGetProductDetails = getProductDetails as jest.Mock<any>;

jest.mock("../../shared/Product", () => ({
  Product: jest.fn(() => <h1>Product</h1>),
}));

jest.mock("./components/Info", () => ({
  Info: jest.fn(() => <h1>Info</h1>),
}));

jest.mock("./services/details");

it("displays Product", async () => {
  render(<ProductDetails dataLoaded={jest.fn} />);
  await waitFor(async () => {
    expect(screen.getByText("Product")).toBeInTheDocument();
  });
});

it("displays Info", async () => {
  render(<ProductDetails dataLoaded={jest.fn} />);
  await waitFor(async () => {
    expect(screen.getByText("Info")).toBeInTheDocument();
  });
});

it("displays error page", async () => {
  mockedGetProductDetails.mockRejectedValue({ message: "error" });
  render(<ProductDetails dataLoaded={jest.fn} />);
  await waitFor(async () => {
    expect(screen.getByText("error loading product")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Go back to home" })
    ).toHaveAttribute("href", "/");
  });
});
