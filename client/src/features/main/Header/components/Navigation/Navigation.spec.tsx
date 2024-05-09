import { screen } from "@testing-library/react";
import { render } from "@tests/render";
import { Navigation, navId } from "./index";

jest.mock("../NavList", () => ({
  NavList: jest.fn(() => <div data-testId="NavList"></div>),
}));

const ProductCategoriesProps = jest.fn();
jest.mock("@root/features/main/ProductCategories", () => ({
  ProductCategories: jest.fn((props) => ProductCategoriesProps(props)),
}));

const defaultProps = {
  closeNav: jest.fn(),
  $headerHeight: "50",
  $isNavOpen: true,
};

it("displays NavList", async () => {
  render(<Navigation {...defaultProps} />);
  expect(screen.getByTestId("NavList")).toBeInTheDocument();
});

it("displays ProductCategories", async () => {
  render(<Navigation {...defaultProps} />);
  expect(ProductCategoriesProps).toHaveBeenCalledWith({
    autoFocus: true,
    navigationCase: true,
  });
});

it("displays navigation with id", async () => {
  render(<Navigation {...defaultProps} />);
  expect(screen.getByRole("navigation")).toHaveAttribute("id", navId);
});
