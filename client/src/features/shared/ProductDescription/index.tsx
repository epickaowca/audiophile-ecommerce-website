import { FC } from "react";
import { Button, Variant } from "../Button";
import { StyledProductDescription as SPD } from "./ProductDescription.styled";
import { ProductCategory } from "../../../types";

type ProductDescriptionProps = {
  productName: string;
  productCategory: ProductCategory;
  description?: string;
  isNew?: boolean;
  buttonHref?: string;
  buttonAriaLabel?: string;
  buttonVariant?: Variant;
};

export const StyledProductDescription = SPD;
export const ProductDescription: FC<ProductDescriptionProps> = ({
  description,
  productCategory,
  productName,
  isNew,
  buttonAriaLabel,
  buttonHref,
  buttonVariant = "primary",
}) => {
  return (
    <StyledProductDescription>
      {isNew && <span className="new-product">NEW PRODUCT</span>}
      <div className="title_wrapper">
        <h1>{productName}</h1>
        <h1>{productCategory}</h1>
      </div>
      {description && <p className="description">{description}</p>}
      {buttonHref && (
        <Button
          as="link"
          text="SEE PRODUCT"
          href={buttonHref}
          ariaLabel={buttonAriaLabel}
          variant={buttonVariant}
        />
      )}
    </StyledProductDescription>
  );
};
