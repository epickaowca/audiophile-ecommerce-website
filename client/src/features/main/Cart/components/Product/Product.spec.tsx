import { screen } from "@testing-library/react";
import { Product } from "./index";
import { render } from "../../../../../../tests/render";
import { stateWithProductsTest } from "../../../../../../tests/Mocks/cartProvider";
import { priceWithComma } from "../../../../../utils";

const product = stateWithProductsTest.productList[0];

it("should render product", async () => {
  render(
    <Product
      cartType="static"
      {...product}
      setQuantity={(quantity: number) => {}}
    />,
    stateWithProductsTest
  );

  const name = screen.getByText(product.name);
  const img = screen.getByAltText(product.name);
  const price = screen.getByText(
    `$ ${priceWithComma(product.price * product.quantity)}`
  );

  expect(name).toBeInTheDocument();
  expect(img).toBeInTheDocument();
  expect(price).toBeInTheDocument();
  expect(img).toHaveAttribute("src", product.imgSrc);
});
