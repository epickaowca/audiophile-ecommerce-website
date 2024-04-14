import { Product, UpdateQuantityProps } from "./types";
import { LOCAL_STORAGE_PRODUCT_LIST } from "../constants";

export const isProductAlreadyAdded = (
  product: Product,
  productList: Product[]
) => productList.findIndex((obj) => obj.tag === product.tag) !== -1;

export const getProductListFromLocalStorage = () => {
  const productListRaw = localStorage.getItem(LOCAL_STORAGE_PRODUCT_LIST);
  if (productListRaw) {
    return JSON.parse(productListRaw);
  }
  return [];
};

export const getTotal = (productList: Product[]) => {
  return productList.reduce(
    (accumulator, { price, quantity }) => accumulator + price * quantity,
    0
  );
};

export const getQuantityUpdatedList = (
  productList: Product[],
  payload: UpdateQuantityProps
) => {
  return productList
    .map((product) => {
      const isTagMatch = product.tag === payload.tag;
      if (isTagMatch) {
        if (payload.quantity === 0) {
          return undefined;
        }
        return { ...product, quantity: payload.quantity };
      }
      return product;
    })
    .filter((product) => product) as Product[];
};
