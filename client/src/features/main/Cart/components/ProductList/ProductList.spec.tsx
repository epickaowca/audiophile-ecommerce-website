import { screen } from "@testing-library/react";
import { ProductList } from "./index";
import { render } from "../../../../../../tests/render";
import { stateWithProductsTest } from "../../../../../../tests/Mocks/cartProvider";

it("should render products", async () => {
  render(<ProductList cartType="modal" />, stateWithProductsTest);
  for (let product of stateWithProductsTest.productList) {
    const element = screen.getByText(product.name);
    expect(element).toBeInTheDocument();
  }
});
