import { screen } from "@testing-library/react";
import { render } from "../../../../../../../../tests/render";
import { AdditionalPricingDetails } from "./index";
import { productListTotal } from "../../../../../../../../tests/constants";
import { SHIPPING_PRICE } from "../../../../index";
import { getVat } from "../../../../../../../utils";

const vat = getVat(SHIPPING_PRICE + productListTotal);
const grandTotal = vat + productListTotal + SHIPPING_PRICE;

it("displays pricing details", () => {
  render(<AdditionalPricingDetails />);
  expect(screen.getByText("shipping")).toBeInTheDocument();
  expect(screen.getByText(`$ ${SHIPPING_PRICE}`)).toBeInTheDocument();
  expect(screen.getByText("vat")).toBeInTheDocument();
  expect(screen.getByText(`$ ${vat}`)).toBeInTheDocument();
  expect(screen.getByText("grand total")).toBeInTheDocument();
  expect(screen.getByText(`$ ${grandTotal}`)).toBeInTheDocument();
});
