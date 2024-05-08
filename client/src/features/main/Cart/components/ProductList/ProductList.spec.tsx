import { screen } from "@testing-library/react";
import { ProductList } from "./index";
import { productList } from "@tests/constants";
import { render } from "@tests/render";
import { useCart } from "../../context";

const mockedUseCart = useCart as jest.Mock<any>;

const ProductProps = jest.fn();
jest.mock("../Product", () => ({
  Product: jest.fn((props) => ProductProps(props)),
}));

it("displays Products", async () => {
  render(<ProductList cartType="modal" />);
  expect(ProductProps).toHaveBeenCalledWith(
    expect.objectContaining({
      cartType: "modal",
      imgSrc: "imgSrcTest",
      name: "nameTest",
      price: 120,
      quantity: 2,
      tag: "tagTest",
    })
  );
});

it("displays Products static", async () => {
  render(<ProductList cartType="static" />);
  expect(ProductProps).toHaveBeenCalledWith(
    expect.objectContaining({
      cartType: "static",
      imgSrc: "imgSrcTest",
      name: "nameTest",
      price: 120,
      quantity: 2,
      tag: "tagTest",
    })
  );
});

it("displays customList", async () => {
  render(<ProductList cartType="static" customList={[productList[0]]} />);
  expect.objectContaining({
    cartType: "static",
    imgSrc: "imgSrcTest",
    name: "nameTest",
    price: 120,
    quantity: 2,
    tag: "tagTest",
  });
});

it("displays empty state", async () => {
  mockedUseCart.mockReturnValue({ productList: [] });
  render(<ProductList cartType="static" />);
  expect(
    screen.getByText("You don't have any items added")
  ).toBeInTheDocument();
});
