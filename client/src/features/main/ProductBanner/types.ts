import { ProductCategory } from "../../../types";
import { Image } from "../../../types";

export type CardType = "medium" | "large" | "divided";

export type BannerProps = {
  cardType: CardType;
  initialImg: Image;
  largeImg: Image;
};

export type DescriptionProps = {
  href: string;
  description?: string;
  category: ProductCategory;
  name: string;
};
