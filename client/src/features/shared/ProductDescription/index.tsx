import { FC } from "react";
import { Button, Variant } from "../Button";
import { StyledProductDescription } from "./ProductDescription.styled";
import { ProductCategory } from "../../../types";
export { StyledProductDescription };

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
  withoutBr?: boolean;
};

export const ProductDescription: FC<ProductDescriptionProps & ButtonProps> = ({
  description,
  category,
  name,
  isNew,
  withoutBr,
  ...btnProps
}) => {
  const { styledComponentId: Product } = StyledProductDescription;
  return (
    <StyledProductDescription $className={Product}>
      {isNew && <span className={`${Product}_newProduct`}>NEW PRODUCT</span>}
      <h1 className={`${Product}_title`}>
        {name}
        {` `}
        {!withoutBr && <br />}
        {category}
      </h1>
      {description && <p className={`${Product}_description`}>{description}</p>}
      {btnProps.href && <Button as="link" text="SEE PRODUCT" {...btnProps} />}
    </StyledProductDescription>
  );
};
