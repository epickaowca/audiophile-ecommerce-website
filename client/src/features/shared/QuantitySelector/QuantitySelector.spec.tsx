import { screen, act, fireEvent, waitFor } from "@testing-library/react";
import { QuantitySelector } from "./index";
import { render } from "../../../../tests/render";

const defaultProps = { setValue: jest.fn(), value: 5 };

it("displays input with aria label", () => {
  const ariaLabel = "test";
  render(<QuantitySelector {...defaultProps} ariaLabel={ariaLabel} />);
  expect(screen.getByLabelText(ariaLabel)).toBeInTheDocument();
});

it("calls onMinus handler after clicking minus button", () => {
  render(<QuantitySelector {...defaultProps} />);
  screen.getByText("-").click();
  expect(defaultProps.setValue).toHaveBeenCalledWith(defaultProps.value - 1);
});

it("calls onPlus handler after clicking minus button", () => {
  render(<QuantitySelector {...defaultProps} />);
  screen.getByText("+").click();
  expect(defaultProps.setValue).toHaveBeenCalledWith(defaultProps.value + 1);
});

it("calls onValueChange handler after changing input value", () => {
  const value = 25;
  render(<QuantitySelector {...defaultProps} />);
  fireEvent.change(screen.getByRole("textbox"), { target: { value } });
  expect(defaultProps.setValue).toHaveBeenCalledWith(value);
});
