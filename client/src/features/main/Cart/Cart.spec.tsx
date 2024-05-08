import { render } from "@tests/render";
import { screen } from "@testing-library/react";
import { Cart } from "./index";
import { useCart } from "./context";

const mockedUseCart = useCart as jest.Mock<any>;

jest.mock("./components/CartComponent", () => ({
  CartModal: jest.fn(() => <div data-testId="cartModal"></div>),
  CartStatic: jest.fn(() => <div data-testId="cartStatic"></div>),
}));

it("displays static cart", () => {
  render(<Cart cartType="static" />);
  expect(screen.getByTestId("cartStatic")).toBeInTheDocument();
});

it("does not displays modal cart by default", () => {
  render(<Cart cartType="modal" />);
  expect(screen.queryByTestId("cartModal")).toBeNull();
});

it("displays modal cart if isCartOpen=true", () => {
  mockedUseCart.mockReturnValue({
    isCartOpen: true,
    toggleCart: () => jest.fn(),
  });
  render(<Cart cartType="modal" />);
  expect(screen.getByTestId("cartModal")).toBeInTheDocument();
});
