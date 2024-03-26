import { FC } from "react";
import { Button, Variant } from "../Button";
import { StyledProductDescription as SPD } from "./ProductDescription.styled";
import { ProductCategory } from "../../../types";

type ButtonProps = {
  href?: string;
  ariaLabel?: string;
  variant?: Variant;
};

export type ProductDescriptionProps = {
  name: string;
  category: ProductCategory;
  description?: string;
  isNew?: boolean;
};

export const StyledProductDescription = SPD;
export const ProductDescription: FC<ProductDescriptionProps & ButtonProps> = ({
  description,
  category,
  name,
  isNew,
  ...btnProps
}) => {
  return (
    <StyledProductDescription>
      {isNew && <span className="new_product">NEW PRODUCT</span>}
      <div className="title_wrapper">
        <h1>{name}</h1>
        <h1>{category}</h1>
      </div>
      {description && <p className="description">{description}</p>}
      {btnProps.href && <Button as="link" text="SEE PRODUCT" {...btnProps} />}
    </StyledProductDescription>
  );
};
