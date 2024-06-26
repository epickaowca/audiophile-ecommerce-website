import { Header } from "./index";
import { screen } from "@testing-library/react";
import { render } from "@tests/render";
import { useCart } from "@root/features/main/Cart";

const mockedUseCart = useCart as jest.Mock<any>;

jest.mock("@root/features/shared/Overlay", () => ({
  Overlay: jest.fn(() => <div data-testId="Overlay"></div>),
}));

const NavigationProps = jest.fn();
jest.mock("./components/Navigation", () => ({
  Navigation: jest.fn((props) => NavigationProps(props)),
}));

jest.mock("./components/Headline", () => ({
  Headline: jest.fn(() => <h1>Headline</h1>),
}));

it("displays icon button", () => {
  render(<Header />);
  expect(screen.getByAltText("menuIcon")).toBeInTheDocument();
  expect(screen.getByAltText("cartIcon")).toBeInTheDocument();
});

it("displays Headline", () => {
  render(<Header displayHeadline />);
  expect(screen.getByText("Headline")).toBeInTheDocument();
});

it("does not display Navigation by default", () => {
  render(<Header displayHeadline />);
  expect(NavigationProps).toHaveBeenCalledWith(
    expect.objectContaining({
      $headerHeight: "91px",
      $isNavOpen: false,
    })
  );
  expect(screen.queryByTestId("Overlay")).toBeNull();
  expect(screen.getByAltText("menuIcon").closest("button")).toHaveAttribute(
    "aria-expanded",
    "false"
  );
});

it("displays Navigation after clicking hamburger button", async () => {
  render(<Header displayHeadline />);
  const hamburgerButton = screen.getByAltText("menuIcon").closest("button");
  await hamburgerButton?.click();

  expect(screen.getByTestId("Overlay")).toBeInTheDocument();
  expect(NavigationProps).toHaveBeenCalledWith(
    expect.objectContaining({
      $headerHeight: "91px",
      $isNavOpen: true,
    })
  );
  expect(hamburgerButton).toHaveAttribute("aria-expanded", "true");
});

it("displays cartButton aria-expanded=false by default", () => {
  render(<Header displayHeadline />);
  expect(screen.getByAltText("cartIcon").closest("button")).toHaveAttribute(
    "aria-expanded",
    "false"
  );
});

it("calls toggleCart after clicking cartButton", () => {
  const { toggleCart } = useCart();
  render(<Header displayHeadline />);
  screen.getByAltText("cartIcon").closest("button")?.click();
  expect(toggleCart).toHaveBeenCalledWith("open");
});

it("displays cartButton aria-expanded=true if cart is open", () => {
  mockedUseCart.mockImplementation(() => ({
    isCartOpen: true,
  }));
  render(<Header displayHeadline />);
  expect(screen.getByAltText("cartIcon").closest("button")).toHaveAttribute(
    "aria-expanded",
    "true"
  );
});
