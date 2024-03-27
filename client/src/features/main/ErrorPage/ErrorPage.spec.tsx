import { screen } from "@testing-library/react";
import { ErrorPage } from "./index";
import { render } from "../../../../tests/render";

it("should render Error Page", async () => {
  render(<ErrorPage />);
  const somethingWrong = screen.getByText("something wrong");
  const link = screen.getByText("Go back to home");

  expect(somethingWrong).toBeInTheDocument();
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/");
});
