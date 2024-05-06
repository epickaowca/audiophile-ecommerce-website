import { screen } from "@testing-library/react";
import { SpinLoader } from "./index";
import { render } from "../../../../tests/render";

it("displays spinLoader", async () => {
  render(<SpinLoader />);
  expect(screen.getByLabelText("Loading...")).toBeInTheDocument();
});
