import { screen } from "@testing-library/react";
import { Button } from "./index";
import { render } from "@tests/render";

const text = "text test";

it("displays button", async () => {
  render(<Button as="button" text={text} />);
  expect(screen.getByRole("button")).toHaveTextContent(text);
});

it("displays aria-label", async () => {
  const ariaLabel = "test button";
  render(<Button as="button" text={text} ariaLabel={ariaLabel} />);
  expect(screen.getByRole("button")).toHaveAttribute("aria-label", ariaLabel);
});

it("displays type", async () => {
  const type = "submit";
  render(<Button as="button" text={text} type={type} />);
  expect(screen.getByRole("button")).toHaveAttribute("type", type);
});

it("calls onClick handler after clicking button", async () => {
  const onClick = jest.fn();
  render(<Button as="button" text={text} onClick={onClick} />);
  screen.getByRole("button").click();
  expect(onClick).toHaveBeenCalled();
});

it("displays button as div", async () => {
  render(<Button as="div" text={text} />);
  expect(screen.getByText(text)).toBeInTheDocument();
});

it("displays button as link", async () => {
  const href = "#hrefText";
  render(<Button as="link" text={text} href={href} />);
  const link = screen.getByRole("link");
  expect(link).toHaveTextContent(text);
  expect(link).toHaveAttribute("href", `/${href}`);
});
