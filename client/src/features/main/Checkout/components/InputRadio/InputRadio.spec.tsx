import { screen } from "@testing-library/react";
import { InputRadio } from "./index";
import { render } from "@tests/render";

const value = "testValue";
const onChange = jest.fn();
const fieldset = (
  <fieldset>
    <InputRadio
      defaultChecked
      onChange={onChange}
      register={jest.fn()}
      value={value}
      name="address"
    >
      radioInput1
    </InputRadio>

    <InputRadio
      onChange={onChange}
      register={jest.fn()}
      value={value}
      name="address"
    >
      radioInput2
    </InputRadio>
  </fieldset>
);

it("displays radio input", async () => {
  render(
    <InputRadio
      onChange={onChange}
      register={jest.fn()}
      value={value}
      name="address"
    />
  );
  const input = screen.getByRole("radio");
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("value", value);
});

it("input1 checked by default", async () => {
  render(fieldset);
  const input1 = screen.getByRole("radio", { name: "radioInput1" });
  const input2 = screen.getByRole("radio", { name: "radioInput2" });
  expect(input1).toBeChecked();
  expect(input2).not.toBeChecked();
});

it("fires onChange event", async () => {
  render(fieldset);
  const input1 = screen.getByRole("radio", { name: "radioInput1" });
  const input2 = screen.getByRole("radio", { name: "radioInput2" });
  expect(input1).toBeChecked();
  expect(input2).not.toBeChecked();
  await input2.click();
  expect(onChange).toHaveBeenCalledTimes(1);
});
