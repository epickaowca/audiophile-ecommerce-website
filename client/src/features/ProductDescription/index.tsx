import { FC, useState } from "react";
import { Button } from "../Button";
import { StyledProductDescription as SPD } from "./ProductDescription.styled";
import { ProductCategory } from "../../data/constants";
import { QuantitySelector } from "../QuantitySelector";

type ProductDescriptionProps = {
  productName: string;
  productCategory: ProductCategory;
  description: string;
  isNew?: boolean;
  price?: number;
  darkTheme?: boolean;
  buttonHref?: string;
  buttonAriaLabel?: string;
};

export const StyledProductDescription = SPD;
export const ProductDescription: FC<ProductDescriptionProps> = ({
  description,
  productCategory,
  productName,
  darkTheme,
  isNew,
  price,
  buttonAriaLabel,
  buttonHref,
}) => {
  const [quantity, setQuantity] = useState(0);

  const hrefAttr = buttonHref
    ? ({ as: "link", href: buttonHref } as const)
    : {};

  return (
    <StyledProductDescription $darkTheme={darkTheme} $priceCase={!!price}>
      {isNew && <span className="new-product">NEW PRODUCT</span>}
      <div className="title_wrapper">
        <h1>{productName}</h1>
        <h1>{productCategory}</h1>
      </div>
      <p>{description}</p>
      {price ? (
        <>
          <span className="price">
            $ {price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
          </span>
          <div className="quantity_wrapper">
            <QuantitySelector
              value={quantity}
              onValueChange={(newVal) => setQuantity(+newVal)}
              onMinus={() => setQuantity((prev) => prev - 1)}
              onPlus={() => setQuantity((prev) => prev + 1)}
            />
            <Button text="ADD TO CART" variant="primary" onClick={() => {}} />
          </div>
        </>
      ) : (
        <Button
          {...hrefAttr}
          ariaLabel={buttonAriaLabel}
          text="SEE PRODUCT"
          variant="primary"
          onClick={() => {}}
        />
      )}
    </StyledProductDescription>
  );
};
