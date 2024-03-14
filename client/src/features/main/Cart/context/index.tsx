import React, { FC, useContext, useReducer, ReactNode } from "react";
import { reducer, ActionType } from "./reducer";
import { toggleBodyOverflow } from "../../../../utils";
import { Product, ContextType, UpdateQuantityProps } from "./types";

type CartProviderProps = {
  children?: ReactNode;
};

const defaultState = {
  isCartOpen: false,
  productList: [],
  toggleCart: () => {},
  addProduct: () => {},
  updateQuantity: () => {},
};

const Context = React.createContext<ContextType>(defaultState);

export const useCart = () => {
  return useContext(Context);
};

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [{ isCartOpen, productList }, dispatch] = useReducer(reducer, {
    isCartOpen: false,
    productList: [],
  });

  const toggleCart = (props: "open" | "close") => {
    const isOpen = props === "open";
    dispatch({
      type: ActionType.TOGGLE_CART,
      payload: { isCartOpen: isOpen },
    });
    toggleBodyOverflow(isOpen ? "hidden" : "visible");
  };

  const addProduct = (payload: Product) => {
    dispatch({
      type: ActionType.ADD_PRODUCT,
      payload,
    });
    toggleBodyOverflow("hidden");
  };

  const updateQuantity = (payload: UpdateQuantityProps) => {
    dispatch({
      type: ActionType.UPDATE_QUANTITY,
      payload,
    });
    toggleBodyOverflow("hidden");
  };

  return (
    <Context.Provider
      value={{
        isCartOpen,
        productList,
        toggleCart,
        addProduct,
        updateQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};
