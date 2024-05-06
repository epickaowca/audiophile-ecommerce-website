import { screen } from "@testing-library/react";
import { CloseBtn } from "./index";
import { render } from "@tests/render";
import { toggleCart } from "@tests/constants";

it("displays close icon", async () => {
  render(<CloseBtn />);
  const icon = screen.getByAltText("close icon");
  expect(icon).toBeInTheDocument();
});

it("clicking close icon calls toggleCart", async () => {
  render(<CloseBtn />);

  await screen.getByRole("button", { name: "close icon" }).click();
  expect(toggleCart).toHaveBeenCalledWith("close");
});
