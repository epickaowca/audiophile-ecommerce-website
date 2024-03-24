import React, { FC, useContext, useReducer, ReactNode } from "react";
import { reducer, ActionType } from "./reducer";
import { isProductAlreadyAdded } from "../utils";
import { Product, ContextType, UpdateQuantityProps } from "./types";

type CartProviderProps = {
  children?: ReactNode;
};

const CART_PRODUCT_LIST = "CART_PRODUCT_LIST";

const defaultState = {
  isCartOpen: false,
  productList: [],
  toggleCart: () => {},
  addProduct: () => {},
  updateQuantity: () => {},
  removeAll: () => {},
};

const Context = React.createContext<ContextType>(defaultState);

export const useCart = () => {
  return useContext(Context);
};

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [{ isCartOpen, productList }, dispatch] = useReducer(reducer, {
    isCartOpen: false,
    productList: getProductListFromLocalStorage(),
  });

  const toggleCart = (props: "open" | "close") => {
    const isOpen = props === "open";

    dispatch({
      type: ActionType.TOGGLE_CART,
      payload: { isCartOpen: isOpen },
    });
  };

  const addProduct = (payload: Product) => {
    if (!isProductAlreadyAdded(payload, productList)) {
      localStorage.setItem(
        CART_PRODUCT_LIST,
        JSON.stringify([...productList, payload])
      );
    }

    window.scroll(0, 0);
    dispatch({
      type: ActionType.ADD_PRODUCT,
      payload,
    });
  };

  const updateQuantity = (payload: UpdateQuantityProps) => {
    dispatch({
      type: ActionType.UPDATE_QUANTITY,
      payload,
    });
  };

  const removeAll = () => {
    localStorage.setItem(CART_PRODUCT_LIST, JSON.stringify([]));
    dispatch({
      type: ActionType.REMOVE_ALL,
      payload: {},
    });
  };

  return (
    <Context.Provider
      value={{
        isCartOpen,
        productList,
        toggleCart,
        addProduct,
        updateQuantity,
        removeAll,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const getProductListFromLocalStorage = () => {
  const productListRaw = localStorage.getItem(CART_PRODUCT_LIST);
  if (productListRaw) {
    return JSON.parse(productListRaw);
  }
  return [];
};
