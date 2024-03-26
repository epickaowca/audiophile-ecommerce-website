import { makeRequest } from "../../../../services/makeRequest";
import { Image, ProductCategory } from "../../../../types";

export const getCategoryList: GetCategoryList = ({ categoryName }) => {
  return makeRequest(`/category/${categoryName}`, {
    method: "get",
  });
};

type GetCategoryList = ({
  categoryName,
}: {
  categoryName: string;
}) => Promise<CategoryObjApi[]>;

type CategoryObjApi = {
  name: string;
  tag: string;
  category: ProductCategory;
  description: string;
  isNew: boolean;
  _id: number;
  imgPreviewLarge: Image;
  imgPreviewMicro: Image;
};
