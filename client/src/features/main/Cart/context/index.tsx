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
export { getTotal };

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
  const [{ isCartOpen, productList }, dispatch] = useReducer(reducer, {
    isCartOpen: false,
    productList: getProductListFromLocalStorage(),
  });

  useEffect(
    function onListUpdate() {
      localStorage.setItem(
        LOCAL_STORAGE_PRODUCT_LIST,
        JSON.stringify(productList)
      );
    },
    [productList]
  );

  const toggleCart = (props: "open" | "close") => {
    const isOpen = props === "open";

    dispatch({
      type: ActionType.TOGGLE_CART,
      payload: { isCartOpen: isOpen },
    });
  };

  const addProduct = (payload: Product) => {
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
    dispatch({
      type: ActionType.REMOVE_ALL,
      payload: {},
    });
  };

  const value = staticState || {
    isCartOpen,
    productList,
    toggleCart,
    addProduct,
    updateQuantity,
    removeAll,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
