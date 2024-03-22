import { makeRequest } from "../../../../services/makeRequest";
import { Image } from "../../../../types";

export const getProductGallery: GetProductGallery = ({ tagName }) => {
  return makeRequest(`/gallery/${tagName}`, {
    method: "get",
  });
};

type GetProductGallery = ({
  tagName,
}: {
  tagName: string;
}) => Promise<GalleryObjectApi>;

type GalleryObjectApi = {
  img1: Image;
  img2: Image;
  img3: { large: Image; micro: Image };
};
