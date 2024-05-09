import { screen } from "@testing-library/react";
import { render } from "@tests/render";
import { ProductCategories } from "./index";

const ProductProps = jest.fn();
jest.mock("./components/Product", () => ({
  Product: jest.fn((props) => {
    ProductProps(props);
    return <div data-testId="Product"></div>;
  }),
}));

it("displays Products", () => {
  render(<ProductCategories />);
  expect(screen.getAllByTestId("Product")).toHaveLength(3);
});

it("displays Product with props", () => {
  render(<ProductCategories autoFocus />);
  expect(ProductProps).toHaveBeenCalledWith(
    expect.objectContaining({
      href: "/category/headphones",
      productName: "headphones",
    })
  );
  expect(ProductProps).toHaveBeenCalledWith(
    expect.objectContaining({
      href: "/category/speakers",
      productName: "speakers",
    })
  );
  expect(ProductProps).toHaveBeenCalledWith(
    expect.objectContaining({
      href: "/category/earphones",
      productName: "earphones",
    })
  );
});

it("displays first Product focused", () => {
  render(<ProductCategories autoFocus />);
  expect(ProductProps).toHaveBeenNthCalledWith(
    1,
    expect.objectContaining({ autoFocus: true })
  );
});

it("displays as menuBar", () => {
  render(<ProductCategories navigationCase />);
  expect(screen.getByRole("menubar")).toBeInTheDocument();
});
