import { Product, UpdateQuantityProps } from "./types";
import { isProductAlreadyAdded } from "../utils";

export function reducer(
  state: {
    isCartOpen: boolean;
    productList: Product[];
  },
  { type, payload }: Action
) {
  switch (type) {
    case ActionType.TOGGLE_CART:
      return {
        ...state,
        isCartOpen: payload.isCartOpen,
      };

    case ActionType.ADD_PRODUCT: {
      return {
        ...state,
        isCartOpen: true,
        productList: isProductAlreadyAdded(payload, state.productList)
          ? state.productList
          : [...state.productList, payload],
      };
    }

    case ActionType.UPDATE_QUANTITY: {
      const productList = state.productList
        .map((product) => {
          const isTagMatch = product.productTag === payload.productTag;
          if (isTagMatch) {
            if (payload.quantity === 0) {
              return undefined;
            }
            return { ...product, quantity: payload.quantity };
          }
          return product;
        })
        .filter((product) => product) as Product[];

      return {
        ...state,
        productList,
      };
    }
    case ActionType.REMOVE_ALL: {
      return {
        ...state,
        productList: [],
      };
    }

    default:
      return state;
  }
}

export enum ActionType {
  TOGGLE_CART = "USE_CART/TOGGLE_CART",
  ADD_PRODUCT = "USE_CART/ADD_PRODUCT",
  UPDATE_QUANTITY = "USE_CART/UPDATE_QUANTITY",
  REMOVE_ALL = "USE_CART/REMOVE_ALL",
}

type ToggleCart = {
  type: ActionType.TOGGLE_CART;
  payload: { isCartOpen: boolean };
};

type AddProduct = {
  type: ActionType.ADD_PRODUCT;
  payload: Product;
};

type UpdateQuantity = {
  type: ActionType.UPDATE_QUANTITY;
  payload: UpdateQuantityProps;
};

type RemoveAll = {
  type: ActionType.REMOVE_ALL;
  payload: {};
};

type Action = ToggleCart | AddProduct | UpdateQuantity | RemoveAll;
