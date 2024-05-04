import { screen } from "@testing-library/react";
import { Product } from "./index";
import { render } from "../../../../../../tests/render";

const props = {
  href: "hrefTest",
  initialImg: { mobile: "imgTestInit" },
  largeImg: { mobile: "imgTestLarge" },
  productName: "headphones",
} as const;

it("displays product img", async () => {
  render(<Product {...props} />);
  expect(screen.getByAltText(props.productName)).toHaveAttribute(
    "src",
    props.initialImg.mobile
  );
});

it("displays product name", async () => {
  render(<Product {...props} />);
  expect(screen.getByText(props.productName)).toBeInTheDocument();
});

it("displays shop button", async () => {
  render(<Product {...props} />);
  expect(screen.getByText("SHOP")).toBeInTheDocument();
});

it("displays product as menuitem", async () => {
  render(<Product {...props} navigationCase />);
  expect(screen.getByRole("menuitem")).toBeInTheDocument();
});

it("displays not focused link", async () => {
  render(<Product {...props} />);
  expect(screen.getByRole("link")).not.toHaveFocus();
});

it("displays focused link", async () => {
  render(<Product {...props} autoFocus />);
  expect(screen.getByRole("link")).toHaveFocus();
});
