import { screen } from "@testing-library/react";
import { ProductList } from "./index";
import { productList } from "../../../../../../tests/constants";
import { render } from "../../../../../../tests/render";
import { useCart } from "../../context";

const mockedUseCart = useCart as jest.Mock<any>;

jest.mock("../Product", () => ({
  Product: jest.fn(({ imgSrc, name, price, quantity, tag, cartType }) => (
    <>
      <h1>{imgSrc}</h1>
      <h1>{name}</h1>
      <h1>{price}</h1>
      <h1>{quantity}</h1>
      <h1>{tag}</h1>
      <h1>{cartType}</h1>
    </>
  )),
}));

it("displays Products", async () => {
  render(<ProductList cartType="modal" />);
  expect(screen.getAllByText("modal")).toHaveLength(productList.length);
  for (let product of productList) {
    for (let prop of Object.values(product)) {
      expect(screen.getByText(prop)).toBeInTheDocument();
    }
  }
});

it("displays Products static", async () => {
  render(<ProductList cartType="static" />);
  expect(screen.getAllByText("static")).toHaveLength(productList.length);
  for (let product of productList) {
    for (let prop of Object.values(product)) {
      expect(screen.getByText(prop)).toBeInTheDocument();
    }
  }
});

it("displays customList", async () => {
  render(<ProductList cartType="static" customList={[productList[0]]} />);
  expect(screen.getAllByText("static")).toHaveLength(1);
  for (let prop of Object.values(productList[0])) {
    expect(screen.getByText(prop)).toBeInTheDocument();
  }
});

it("displays empty state", async () => {
  mockedUseCart.mockReturnValue({ productList: [] });
  render(<ProductList cartType="static" />);
  expect(
    screen.getByText("You don't have any items added")
  ).toBeInTheDocument();
});
