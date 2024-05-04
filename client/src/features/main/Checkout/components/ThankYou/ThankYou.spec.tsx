import { screen } from "@testing-library/react";
import { ThankYou } from "./index";
import { render } from "../../../../../../tests/render";
import { productListTotal } from "../../../../../../tests/constants";
import { SHIPPING_PRICE } from "../../../Cart";
import { getVat } from "../../../../../utils";

jest.mock("../../../Cart", () => ({
  ...jest.requireActual("../../../Cart"),
  ProductList: jest.fn(({ cartType }) => <h1>productList:{cartType}</h1>),
}));

it("displays confirm icon", () => {
  render(<ThankYou />);
  expect(screen.getByAltText("confirm-icon")).toBeInTheDocument();
});

it("displays title", async () => {
  render(<ThankYou />);
  expect(screen.getByText("Thank You For Your Order")).toBeInTheDocument();
});

it("displays email information", async () => {
  render(<ThankYou />);
  expect(
    screen.getByText("You will receive an email confirmation shortly.")
  ).toBeInTheDocument();
});

it("displays ProductList", async () => {
  render(<ThankYou />);
  expect(screen.getByText("productList:static")).toBeInTheDocument();
});

it("displays grand total price", async () => {
  const vat = getVat(SHIPPING_PRICE + productListTotal);
  const grandTotal = vat + productListTotal + SHIPPING_PRICE;
  render(<ThankYou />);
  expect(screen.getByText("Grand Total")).toBeInTheDocument();
  expect(screen.getByText(`$ ${grandTotal}`)).toBeInTheDocument();
});

it("displays go back home link", async () => {
  render(<ThankYou />);
  expect(screen.getByRole("link")).toHaveTextContent("BACK TO HOME");
  expect(screen.getByRole("link")).toHaveAttribute("href", "/");
});
