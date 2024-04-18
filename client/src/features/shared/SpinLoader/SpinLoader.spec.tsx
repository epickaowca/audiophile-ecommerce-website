import { screen } from "@testing-library/react";
import { SpinLoader } from "./index";
import { render } from "../../../../tests/render";

it("should render spinLoader with correct className", async () => {
  render(<SpinLoader height="500px" />);
  const div = screen.getByLabelText("spin-loader");
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("spin-loader");
});
