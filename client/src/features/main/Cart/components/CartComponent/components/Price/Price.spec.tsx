import { screen } from "@testing-library/react";
import { Price } from "./index";
import { render } from "../../../../../../../../tests/render";
import { priceWithComma } from "../../../../../../../utils";

const name = "test name";
const price = 15;

it("displays name and price", async () => {
  render(<Price name={name} price={price} />);
  expect(screen.getByText(`$ ${priceWithComma(price)}`)).toBeInTheDocument();
  expect(screen.getByText(name)).toBeInTheDocument();
});
