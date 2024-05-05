import { ButtonIcon } from "./index";
import { render } from "../../../../../../tests/render";
import { screen } from "@testing-library/react";

const onClick = jest.fn();

const defaultProps = {
  "aria-controls": "testId",
  "aria-expanded": false,
  btnIcon: "cart",
  onClick,
} as const;

it("displays cart icon", () => {
  render(<ButtonIcon {...defaultProps} />);
  expect(screen.getByAltText("cartIcon")).toBeInTheDocument();
});

it("displays menu icon", () => {
  render(<ButtonIcon {...defaultProps} btnIcon="menu" />);
  expect(screen.getByAltText("menuIcon")).toBeInTheDocument();
});

it("displays aria-controls attr", () => {
  render(<ButtonIcon {...defaultProps} />);
  expect(screen.getByRole("button")).toHaveAttribute(
    "aria-controls",
    defaultProps["aria-controls"]
  );
});

it("displays aria-expanded false by default", () => {
  render(<ButtonIcon {...defaultProps} />);
  expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "false");
});

it("displays aria-expanded true", () => {
  render(<ButtonIcon {...defaultProps} aria-expanded={true} />);
  expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "true");
});

it("calls clickHandler onClick", async () => {
  render(<ButtonIcon {...defaultProps} aria-expanded={true} />);
  await screen.getByRole("button").click();
  expect(onClick).toHaveBeenCalled();
});
