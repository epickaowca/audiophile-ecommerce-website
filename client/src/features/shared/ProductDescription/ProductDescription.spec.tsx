import { screen } from "@testing-library/react";
import { ProductDescription } from "./index";
import { render } from "../../../../tests/render";

const baseProps = {
  category: "earphones",
  name: "XY1",
} as const;

it("should render category and name", async () => {
  render(<ProductDescription {...baseProps} />);
  const category = screen.getByText(baseProps.category);
  const name = screen.getByText(baseProps.name);
  expect(category).toBeInTheDocument();
  expect(name).toBeInTheDocument();
});

it("should render isNew text", async () => {
  render(<ProductDescription {...baseProps} isNew={true} />);
  const newProduct = screen.getByText("NEW PRODUCT");
  expect(newProduct).toBeInTheDocument();
});

it("should render description text", async () => {
  const descriptionText = "description test";
  render(<ProductDescription {...baseProps} description={descriptionText} />);
  const description = screen.getByText(descriptionText);
  expect(description).toBeInTheDocument();
});

it("should render link", async () => {
  const href = "#test";
  render(<ProductDescription {...baseProps} href={href} />);
  const link = screen.getByRole("link");
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", `/${href}`);
});
