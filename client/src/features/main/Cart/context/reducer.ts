import { Product, UpdateQuantityProps } from "./types";
import {
  isProductAlreadyAdded,
  getTotal,
  getQuantityUpdatedList,
} from "./utils";

export function reducer(
  state: {
    isCartOpen: boolean;
    productList: Product[];
    total: number;
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
      const productList = isProductAlreadyAdded(payload, state.productList)
        ? state.productList
        : [...state.productList, payload];
      const total = getTotal(productList);

      return {
        ...state,
        isCartOpen: true,
        productList,
        total,
      };
    }

    case ActionType.UPDATE_QUANTITY: {
      const productList = getQuantityUpdatedList(state.productList, payload);
      const total = getTotal(productList);

      return {
        ...state,
        productList,
        total,
      };
    }
    case ActionType.REMOVE_ALL: {
      return {
        ...state,
        productList: [],
        total: 0,
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
