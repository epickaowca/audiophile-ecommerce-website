import { screen } from "@testing-library/react";
import { CartComponent } from "./index";
import { render } from "../../../../../../tests/render";
import { stateWithProductsTest } from "../../../../../../tests/Mocks/cartProvider";

it("should render empty cart", async () => {
  render(<CartComponent cartType="modal" />);
  const h1 = screen.getByText("Your cart is empty");
  expect(h1).toBeInTheDocument();
});

it("should render cart with items", async () => {
  render(<CartComponent cartType="modal" />, stateWithProductsTest);
  const h1 = screen.getByText(
    `cart (${stateWithProductsTest.productList.length})`
  );
  expect(h1).toBeInTheDocument();
});

it("should render remove btn", async () => {
  render(<CartComponent cartType="modal" />, stateWithProductsTest);
  const removeBtn = screen.getByText("Remove all");
  expect(removeBtn).toBeInTheDocument();
  await removeBtn.click();
  expect(stateWithProductsTest.removeAll).toHaveBeenCalledTimes(1);
});
