import { screen } from "@testing-library/react";
import { render } from "@tests/render";
import { ProductCategories } from "./index";

jest.mock("./components/Product", () => ({
  Product: jest.fn(({ autoFocus }) => (
    <>
      <h1>Product</h1>
      <h1>{`autoFocus:${autoFocus}`}</h1>
    </>
  )),
}));

it("displays Products", () => {
  render(<ProductCategories />);
  expect(screen.getAllByText("Product")).toHaveLength(3);
});

it("displays first Products focused", () => {
  render(<ProductCategories autoFocus />);
  expect(screen.getAllByText(`autoFocus:true`)).toHaveLength(1);
});

it("displays first Products focused", () => {
  render(<ProductCategories autoFocus />);
  expect(screen.getAllByText(`autoFocus:true`)).toHaveLength(1);
});

it("displays as menuBar", () => {
  render(<ProductCategories navigationCase />);
  expect(screen.getByRole("menubar")).toBeInTheDocument();
});
