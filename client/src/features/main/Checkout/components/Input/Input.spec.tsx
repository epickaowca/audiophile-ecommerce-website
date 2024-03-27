import { screen } from "@testing-library/react";
import { Input } from "./index";
import { render } from "../../../../../../tests/render";

const label = "labelTest";
const name = "address";
const placeholder = "placeholderTest";

it("should render Input", async () => {
  render(
    <Input
      register={jest.fn()}
      label={label}
      name={name}
      placeholder={placeholder}
    />
  );

  const input = screen.getByLabelText(label);

  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("placeholder", placeholder);
});
