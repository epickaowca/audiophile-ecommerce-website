import { screen } from "@testing-library/react";
import { ThankYou } from "./index";
import { render } from "../../../../../../tests/render";

it("should render correct total price", async () => {
  render(<ThankYou />);

  const price = screen.getByText("$ 372");

  expect(price).toBeInTheDocument();
});
