import { ProductCategory } from "../../../types";
import { Image } from "../../../types";

export type CardType = "medium" | "large" | "divided";

export type BannerProps = {
  cardType: CardType;
  initialImg: Image;
  largeImg: Image;
};

export type DescriptionProps = {
  buttonHref: string;
  description?: string;
  productCategory: ProductCategory;
  productName: string;
};
