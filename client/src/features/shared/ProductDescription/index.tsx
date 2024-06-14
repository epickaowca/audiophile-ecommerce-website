import { FC } from "react";
import { Button, Variant } from "@root/features/shared/Button";
import { StyledProductDescription } from "./ProductDescription.styled";
import { ProductCategory } from "@root/types";
import { useEvent } from "@owcaofficial/web-analytics";
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
  const sendEvent = useEvent();
  const { styledComponentId: Product } = StyledProductDescription;
  return (
    <StyledProductDescription $className={Product}>
      {isNew && <span className={`${Product}_newProduct`}>NEW PRODUCT</span>}
      <h1 className={`${Product}_title`}>
        {name}
        {!withoutBr && <br />}
        {category}
      </h1>
      {description && <p className={`${Product}_description`}>{description}</p>}
      {btnProps.href && (
        <Button
          onClick={() => sendEvent("SEE_PRODUCT_button_click", btnProps.href!)}
          as="link"
          text="SEE PRODUCT"
          {...btnProps}
        />
      )}
    </StyledProductDescription>
  );
};
