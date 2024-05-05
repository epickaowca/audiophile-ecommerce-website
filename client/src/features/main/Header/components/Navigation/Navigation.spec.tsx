import { screen } from "@testing-library/react";
import { render } from "../../../../../../tests/render";
import { Navigation, navId } from "./index";

jest.mock("../NavList", () => ({
  NavList: jest.fn(() => <h1>NavList</h1>),
}));

jest.mock("../../../ProductCategories", () => ({
  ProductCategories: jest.fn(() => <h1>ProductCategories</h1>),
}));

const defaultProps = {
  closeNav: jest.fn(),
  $headerHeight: "50",
  $isNavOpen: true,
};

it("displays NavList", async () => {
  render(<Navigation {...defaultProps} />);
  expect(screen.getByText("NavList")).toBeInTheDocument();
});

it("displays ProductCategories", async () => {
  render(<Navigation {...defaultProps} />);
  expect(screen.getByText("ProductCategories")).toBeInTheDocument();
});

it("displays navigation with id", async () => {
  render(<Navigation {...defaultProps} />);
  expect(screen.getByRole("navigation")).toHaveAttribute("id", navId);
});
