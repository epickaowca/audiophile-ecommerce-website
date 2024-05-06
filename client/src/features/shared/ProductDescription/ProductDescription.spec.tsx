import { screen } from "@testing-library/react";
import { ProductDescription } from "./index";
import { render } from "@tests/render";

const defaultProps = {
  name: "XY1",
  category: "earphones",
} as const;

it("displays name and category", async () => {
  render(<ProductDescription {...defaultProps} />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    `${defaultProps.name}${defaultProps.category}`
  );
});

it("displays description", async () => {
  const description = "description test";
  render(<ProductDescription {...defaultProps} description={description} />);
  expect(screen.getByText(description)).toBeInTheDocument();
});

it("displays NEW PRODUCT text", async () => {
  render(<ProductDescription {...defaultProps} isNew={true} />);
  expect(screen.getByText("NEW PRODUCT")).toBeInTheDocument();
});

it("displays link button", async () => {
  const href = "#test";
  render(<ProductDescription {...defaultProps} href={href} />);
  expect(screen.getByRole("link")).toHaveAttribute("href", `/${href}`);
});

it("displays ariaLabel on button", async () => {
  const href = "#test";
  const ariaLabel = "button";
  render(
    <ProductDescription {...defaultProps} href={href} ariaLabel={ariaLabel} />
  );
  expect(screen.getByRole("link")).toHaveAttribute("aria-label", ariaLabel);
});
