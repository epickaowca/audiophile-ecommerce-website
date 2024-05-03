import { screen } from "@testing-library/react";
import { ThankYou } from "./index";
import { render } from "../../../../../../tests/render";
import { stateWithProductsTest } from "../../../../../../tests/mocks/cartProvider";

it("should render correct total price", async () => {
  render(<ThankYou />, stateWithProductsTest);

  const price = screen.getByText("$ 372");

  expect(price).toBeInTheDocument();
});
