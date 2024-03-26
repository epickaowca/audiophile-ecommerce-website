import { screen } from "@testing-library/react";
import { Button } from "./index";
import { render } from "../../../../tests/render";

const text = "text test";

it("should render button", async () => {
  render(<Button as="button" text={text} />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent(text);
});

it("should render div", async () => {
  render(<Button as="div" text={text} />);
  const div = screen.getByText(text);
  expect(div).toBeInTheDocument();
});

it("should render link", async () => {
  const href = "#hrefText";
  render(<Button as="link" text={text} href={href} />);
  const link = screen.getByRole("link");
  expect(link).toBeInTheDocument();
  expect(link).toHaveTextContent(text);
  expect(link).toHaveAttribute("href", `/${href}`);
});
