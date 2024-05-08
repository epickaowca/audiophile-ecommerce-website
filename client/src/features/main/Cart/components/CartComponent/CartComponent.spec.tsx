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
  ProductList: jest.fn((props) => {
    ProductListProps(props);
  }),
}));

jest.mock("./components/AdditionalPricingDetails", () => ({
  AdditionalPricingDetails: jest.fn(() => <h1>AdditionalPricingDetails</h1>),
}));

jest.mock("./components/CloseBtn", () => ({
  CloseBtn: jest.fn(() => <h1>CloseBtn</h1>),
}));

const navigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(() => navigate),
}));

it("displays static cart", () => {
  render(<CartStatic />);
  expect(ProductListProps).toHaveBeenCalledWith({});
  expect(screen.getByText("summary")).toBeInTheDocument();
  expect(screen.getByText("total")).toBeInTheDocument();
  expect(screen.getByText(`$ ${productListTotal}`)).toBeInTheDocument();
  expect(screen.getByText("AdditionalPricingDetails")).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "CONTINUE & PAY" })
  ).toBeInTheDocument();
});

it("displays modal cart", () => {
  render(<CartModal />);
  expect(screen.getByText("CloseBtn")).toBeInTheDocument();
  expect(screen.getByText(`cart (${productList.length})`)).toBeInTheDocument();
  expect(screen.getByText("productList:modal")).toBeInTheDocument();
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
