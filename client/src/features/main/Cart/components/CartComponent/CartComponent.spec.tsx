import { screen } from "@testing-library/react";
import { CartModal, CartStatic } from "./index";
import { render } from "@tests/render";
import {
  productListTotal,
  productList,
  removeAll,
  toggleCart,
} from "@tests/constants";

const ProductListProps = jest.fn();
jest.mock("../ProductList", () => ({
  ProductList: jest.fn((props) => ProductListProps(props)),
}));

jest.mock("./components/AdditionalPricingDetails", () => ({
  AdditionalPricingDetails: jest.fn(() => (
    <div data-testId="AdditionalPricingDetails"></div>
  )),
}));

jest.mock("./components/CloseBtn", () => ({
  CloseBtn: jest.fn(() => <div data-testId="CloseBtn"></div>),
}));

const navigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(() => navigate),
}));

it("displays static cart", () => {
  render(<CartStatic />);
  expect(ProductListProps).toHaveBeenCalledWith({ cartType: "static" });
  expect(screen.getByText("summary")).toBeInTheDocument();
  expect(screen.getByText("total")).toBeInTheDocument();
  expect(screen.getByText(`$ ${productListTotal}`)).toBeInTheDocument();
  expect(screen.getByTestId("AdditionalPricingDetails")).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "CONTINUE & PAY" })
  ).toBeInTheDocument();
});

it("displays modal cart", () => {
  render(<CartModal />);
  expect(screen.getByTestId("CloseBtn")).toBeInTheDocument();
  expect(screen.getByText(`cart (${productList.length})`)).toBeInTheDocument();
  expect(ProductListProps).toHaveBeenCalledWith({ cartType: "modal" });
  expect(screen.getByText("total")).toBeInTheDocument();
  expect(screen.getByText(`$ ${productListTotal}`)).toBeInTheDocument();
});

it("calls removeAll function ", async () => {
  render(<CartModal />);
  await screen.getByRole("button", { name: "Remove all" }).click();
  expect(removeAll).toHaveBeenCalled();
});

it("calls navigate and toggleCart functions", async () => {
  render(<CartModal />);
  await screen.getByRole("button", { name: "CHECKOUT" }).click();
  expect(toggleCart).toHaveBeenCalledWith("close");
  expect(navigate).toHaveBeenCalledWith("/checkout");
});
