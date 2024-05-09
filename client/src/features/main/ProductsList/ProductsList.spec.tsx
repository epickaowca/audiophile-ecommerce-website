import { render } from "@tests/render";
import { screen, waitFor } from "@testing-library/dom";
import { ProductList } from "./index";
import { getCategoryList } from "./services/category";

const mockedGetCategoryList = getCategoryList as jest.Mock<any>;

jest.mock("../../shared/Product", () => ({
  Product: jest.fn(() => <div data-testId="Product"></div>),
}));

jest.mock("./services/category");

it("displays Product", async () => {
  render(<ProductList dataLoaded={jest.fn()} />);
  await waitFor(async () => {
    expect(screen.getByTestId("Product")).toBeInTheDocument();
  });
});

it("displays Error page", async () => {
  mockedGetCategoryList.mockRejectedValue({});
  render(<ProductList dataLoaded={jest.fn()} />);
  await waitFor(async () => {
    expect(screen.getByText("error loading products")).toBeInTheDocument();
  });
});
