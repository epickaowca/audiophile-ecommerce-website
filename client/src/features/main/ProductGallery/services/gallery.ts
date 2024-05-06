import { makeRequest } from "@root/services/makeRequest";
import { Image } from "@root/types";

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
