import { screen } from "@testing-library/react";
import { ErrorPage } from "./index";
import { render } from "@tests/render";

it("displays error description", async () => {
  render(<ErrorPage />);
  expect(screen.getByText("something wrong")).toBeInTheDocument();
});

it("displays go back home link", async () => {
  render(<ErrorPage />);
  expect(screen.getByText("Go back to home")).toHaveAttribute("href", "/");
});
