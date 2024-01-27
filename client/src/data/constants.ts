export const productCategories = {
  HEADPHONES: "headphones",
  SPEAKERS: "speakers",
  EARPHONES: "earphones",
} as const;

export const productCategory = {
  HEADPHONES: "headphones",
  SPEAKER: "speaker",
  EARPHONES: "earphones",
} as const;

export type ProductCategories =
  (typeof productCategories)[keyof typeof productCategories];

export type ProductCategory =
  (typeof productCategory)[keyof typeof productCategory];
