import { Product, UpdateQuantityProps } from "./types";

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
      const isProductAlreadyAdded =
        state.productList.findIndex(
          (obj) => obj.productTag === payload.productTag
        ) !== -1;

      return {
        ...state,
        isCartOpen: true,
        productList: isProductAlreadyAdded
          ? state.productList
          : [...state.productList, payload],
      };
    }

    case ActionType.UPDATE_QUANTITY: {
      const productList = state.productList.map((product) => {
        const isTagMatch = product.productTag === payload.productTag;
        if (isTagMatch) {
          return { ...product, quantity: payload.quantity };
        }
        return product;
      });

      return {
        ...state,
        productList,
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

type Action = ToggleCart | AddProduct | UpdateQuantity;
