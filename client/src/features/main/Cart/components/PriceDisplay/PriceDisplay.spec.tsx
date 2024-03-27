import { screen } from "@testing-library/react";
import { PriceDisplay } from "./index";
import { render } from "../../../../../../tests/render";
import { priceWithComma } from "../../../../../utils";

const name = "test name";
const price = 15;

it("should render name and price", async () => {
  render(<PriceDisplay name={name} price={price} />);
  const priceEl = screen.getByText(`$ ${priceWithComma(price)}`);
  const nameEl = screen.getByText(name);
  expect(priceEl).toBeInTheDocument();
  expect(nameEl).toBeInTheDocument();
});
