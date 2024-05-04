import { screen } from "@testing-library/react";
import { Input } from "./index";
import { render } from "../../../../../../tests/render";

const label = "labelTest";
const placeholder = "placeholderTest";

it("displays input and label", async () => {
  render(
    <Input
      register={jest.fn()}
      label={label}
      name="address"
      placeholder={placeholder}
    />
  );

  expect(screen.getByLabelText(label)).toHaveAttribute(
    "placeholder",
    placeholder
  );
});
