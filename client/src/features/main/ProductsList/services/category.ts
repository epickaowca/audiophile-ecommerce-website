import { makeRequest } from "../../../../services/makeRequest";
import { Image, ProductCategory } from "../../../../types";

export const getCategory: GetCategory = ({ categoryName }) => {
  return makeRequest(`/category/${categoryName}`, {
    method: "get",
  });
};

export type GetCategory = ({
  categoryName,
}: {
  categoryName: string;
}) => Promise<CategoryObjApi[]>;

type CategoryObjApi = {
  name: string;
  tagName: string;
  category: ProductCategory;
  description: string;
  isNew: boolean;
  _id: number;
  imgPreviewLarge: Image;
  imgPreviewMicro: Image;
};
