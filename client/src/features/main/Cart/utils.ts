import { Product } from "./context/types";

export const returnVat = (price: number) => {
  return Math.ceil(price * 0.23);
};

export const isProductAlreadyAdded = (
  product: Product,
  productList: Product[]
) =>
  productList.findIndex((obj) => obj.productTag === product.productTag) !== -1;
