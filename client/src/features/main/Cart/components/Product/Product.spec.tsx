import { screen } from "@testing-library/react";
import { Product } from "./index";
import { render } from "@tests/render";
import { productList } from "@tests/constants";
import { priceWithComma } from "@root/utils";

jest.mock("@root/features/shared/QuantitySelector", () => ({
  QuantitySelector: jest.fn(({ checkoutCase, value, ariaLabel, setValue }) => {
    setValue("test");
    return (
      <>
        <h1>checkoutCase:{checkoutCase?.toString()}</h1>
        <h1>{value}</h1>
        <h1>{ariaLabel}</h1>
      </>
    );
  }),
}));

const product = productList[0];
const setQuantity = jest.fn(() => {});

const ProductComponent = (
  <Product cartType="static" {...product} setQuantity={setQuantity} />
);

it("displays product name", async () => {
  render(ProductComponent);
  expect(screen.getByText(product.name)).toBeInTheDocument();
});

it("displays product img", async () => {
  render(ProductComponent);
  expect(screen.getByAltText(product.name)).toHaveAttribute(
    "src",
    product.imgSrc
  );
});

it("displays product price", async () => {
  render(ProductComponent);
  expect(
    screen.getByText(`$ ${priceWithComma(product.price * product.quantity)}`)
  ).toBeInTheDocument();
});

it("displays product quantity", async () => {
  render(ProductComponent);
  expect(screen.getByText(`x${product.quantity}`)).toBeInTheDocument();
});

it("displays product quantity", async () => {
  render(ProductComponent);
  expect(screen.getByText(`x${product.quantity}`)).toBeInTheDocument();
});

it("displays QuantitySelector", async () => {
  render(<Product cartType="modal" {...product} setQuantity={setQuantity} />);
  expect(screen.getByText("checkoutCase:true")).toBeInTheDocument();
  expect(screen.getByText(product.quantity)).toBeInTheDocument();
  expect(
    screen.getByText(`${product.name} product quantity`)
  ).toBeInTheDocument();
  expect(setQuantity).toHaveBeenCalledWith("test");
});
