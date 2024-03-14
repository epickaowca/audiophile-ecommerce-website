import { makeRequest } from "../../../../services/makeRequest";
import { Image, ProductCategory } from "../../../../types";

export const getProductDetails: GetProductDetails = ({ tagName }) => {
  return makeRequest(`/details/${tagName}`, {
    method: "get",
  });
};

type GetProductDetails = ({
  tagName,
}: {
  tagName: string;
}) => Promise<DetailsObjectApi>;

type DetailsObjectApi = {
  name: string;
  tagName: string;
  category: ProductCategory;
  description: string;
  isNew: boolean;
  _id: number;
  imgProductLarge: Image;
  imgProductMicro: Image;
  price: number;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
  imgCart: string;
};
