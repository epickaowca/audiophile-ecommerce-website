import { toggleBodyOverflow } from "./utils";
import { screen } from "@testing-library/react";
import { render } from "@tests/render";
import { Overlay } from "./index";

jest.mock("./utils", () => ({
  toggleBodyOverflow: jest.fn(),
}));

it("calls toggleBodyOverflow on initial render", () => {
  render(<Overlay />);
  expect(toggleBodyOverflow).toHaveBeenCalledWith("hidden", false);
});

it("calls toggleBodyOverflow on initial render without displayOnDesktop", () => {
  render(<Overlay displayOnDesktop={false} />);
  expect(toggleBodyOverflow).toHaveBeenCalledWith("hidden", true);
});

it("calls onClick handler", () => {
  const clickHandler = jest.fn();
  render(<Overlay displayOnDesktop={false} onClick={clickHandler} />);
  screen.getByLabelText("overlay").click();
  expect(clickHandler).toHaveBeenCalled();
});
