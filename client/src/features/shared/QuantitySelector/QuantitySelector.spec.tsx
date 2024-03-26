import { screen, act, fireEvent } from "@testing-library/react";
import { QuantitySelector } from "./index";
import { render } from "../../../../tests/render";

it("should render QuantitySelector with aria label", async () => {
  const onMinus = jest.fn();
  const onPlus = jest.fn();
  const onValueChange = jest.fn();
  const ariaLabel = "test";

  const { rerender } = render(
    <QuantitySelector
      onMinus={onMinus}
      onPlus={onPlus}
      onValueChange={onValueChange}
      value={5}
      ariaLabel={ariaLabel}
    />
  );

  const input = screen.getByLabelText(ariaLabel);
  expect(input).toBeInTheDocument();
});

it("should call onMinus fn", async () => {
  const onMinus = jest.fn();
  const onPlus = jest.fn();
  const onValueChange = jest.fn();
  const component = (
    <QuantitySelector
      onMinus={onMinus}
      onPlus={onPlus}
      onValueChange={onValueChange}
      value={5}
    />
  );
  const { rerender } = render(component);

  const onMinusBtn = screen.getByText("-");

  await act(async () => {
    await onMinusBtn.click();
  });
  rerender(component);
  expect(onMinus).toHaveBeenCalledTimes(1);
});

it("should call onPlus fn", async () => {
  const onMinus = jest.fn();
  const onPlus = jest.fn();
  const onValueChange = jest.fn();
  const component = (
    <QuantitySelector
      onMinus={onMinus}
      onPlus={onPlus}
      onValueChange={onValueChange}
      value={5}
    />
  );
  const { rerender } = render(component);

  const onPlusBtn = screen.getByText("+");

  await act(async () => {
    await onPlusBtn.click();
  });
  rerender(component);
  expect(onPlus).toHaveBeenCalledTimes(1);
});

it("should call onValueChange fn", async () => {
  const value = "25";
  const onMinus = jest.fn();
  const onPlus = jest.fn();
  const onValueChange = jest.fn();
  const component = (
    <QuantitySelector
      onMinus={onMinus}
      onPlus={onPlus}
      onValueChange={onValueChange}
      value={5}
    />
  );
  const { rerender } = render(component);

  const input = screen.getByRole("textbox");

  await act(async () => {
    await fireEvent.change(input, { target: { value } });
  });
  rerender(component);
  expect(onValueChange).toHaveBeenCalledTimes(1);
  expect(onValueChange).toHaveBeenCalledWith(value);
});
