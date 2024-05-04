import "@testing-library/jest-dom";
import {
  productList,
  addProduct,
  removeAll,
  toggleCart,
  updateQuantity,
} from "./constants";

const useCart = jest.fn(() => ({
  isCartOpen: false,
  productList,
  toggleCart,
  addProduct,
  updateQuantity,
  removeAll,
}));

jest.mock("../src/features/main/Cart/context", () => ({
  ...jest.requireActual("../src/features/main/Cart/context"),
  useCart,
}));
