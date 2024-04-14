import React, { FC, useContext, useReducer, ReactNode, useEffect } from "react";
import { reducer, ActionType } from "./reducer";
import {
  isProductAlreadyAdded,
  getProductListFromLocalStorage,
  getTotal,
  getQuantityUpdatedList,
} from "./utils";
import { Product, ContextType, UpdateQuantityProps } from "./types";
import { LOCAL_STORAGE_PRODUCT_LIST } from "../constants";
type CartProviderProps = {
  children?: ReactNode;
  staticState?: ContextType;
};

const defaultStateEmpty = {
  total: 0,
  isCartOpen: false,
  productList: [],
  toggleCart: () => {},
  addProduct: () => {},
  updateQuantity: () => {},
  removeAll: () => {},
};

const Context = React.createContext<ContextType>(defaultStateEmpty);

export const useCart = () => {
  return useContext(Context);
};

export const CartProvider: FC<CartProviderProps> = ({
  children,
  staticState,
}) => {
  const [{ isCartOpen, productList, total }, dispatch] = useReducer(reducer, {
    isCartOpen: false,
    productList: getProductListFromLocalStorage(),
    total: getTotal(getProductListFromLocalStorage()),
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
        LOCAL_STORAGE_PRODUCT_LIST,
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
    if (payload.quantity === 0) {
      localStorage.setItem(
        LOCAL_STORAGE_PRODUCT_LIST,
        JSON.stringify(productList.filter((e) => e.tag !== payload.tag))
      );
    } else {
      localStorage.setItem(
        LOCAL_STORAGE_PRODUCT_LIST,
        JSON.stringify(getQuantityUpdatedList(productList, payload))
      );
    }

    dispatch({
      type: ActionType.UPDATE_QUANTITY,
      payload,
    });
  };

  const removeAll = () => {
    localStorage.setItem(LOCAL_STORAGE_PRODUCT_LIST, JSON.stringify([]));
    dispatch({
      type: ActionType.REMOVE_ALL,
      payload: {},
    });
  };

  const value = staticState || {
    total,
    isCartOpen,
    productList,
    toggleCart,
    addProduct,
    updateQuantity,
    removeAll,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
