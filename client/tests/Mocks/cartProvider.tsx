import { CartProvider } from "../../src/features/main/Cart";
import { FC, ReactNode } from "react";
import { ContextType } from "../../src/features/main/Cart/context/types";

export const MockCart: FC<{
  children?: ReactNode;
  staticState: ContextType;
}> = ({ children, staticState }) => {
  return <CartProvider staticState={staticState}>{children}</CartProvider>;
};

export const emptyStateTest = {
  isCartOpen: false,
  productList: [],
  toggleCart: jest.fn(),
  addProduct: jest.fn(),
  updateQuantity: jest.fn(),
  removeAll: jest.fn(),
};

export const stateWithProductsTest = {
  total: 293,
  isCartOpen: false,
  productList: [
    {
      name: "nameTest",
      tag: "tagTest",
      price: 120,
      imgSrc: "imgSrcTest",
      quantity: 2,
    },
    {
      name: "nameTest2",
      tag: "tagTest2",
      price: 53,
      imgSrc: "imgSrcTest2",
      quantity: 1,
    },
  ],
  toggleCart: jest.fn(),
  addProduct: jest.fn(),
  updateQuantity: jest.fn(),
  removeAll: jest.fn(),
};
