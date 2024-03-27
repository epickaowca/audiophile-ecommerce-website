import { screen } from "@testing-library/react";
import { CloseBtn } from "./index";
import { render } from "../../../../../../tests/render";
import { stateWithProductsTest } from "../../../../../../tests/Mocks/cartProvider";

it("should render close icon", async () => {
  render(<CloseBtn />);
  const icon = screen.getByAltText("close icon");
  expect(icon).toBeInTheDocument();
});

it("should render close button", async () => {
  render(<CloseBtn />, stateWithProductsTest);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();

  await button.click();
  expect(stateWithProductsTest.toggleCart).toHaveBeenCalledWith("close");
});
