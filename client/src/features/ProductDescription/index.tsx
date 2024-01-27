import { FC, useState } from "react";
import { Button } from "../Button";
import { styled, css } from "styled-components";
import { ProductCategory } from "../../data/constants";
import { QuantitySelector } from "../QuantitySelector";

type ProductDescriptionProps = {
  isNew?: boolean;
  price?: number;
  darkTheme?: boolean;
  productName: string;
  productCategory: ProductCategory;
  description: string;
};

export const ProductDescription: FC<ProductDescriptionProps> = ({
  description,
  productCategory,
  productName,
  darkTheme,
  isNew,
  price,
}) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <Wrapper $darkTheme={darkTheme} $priceCase={!!price}>
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
              onMinus={() => setQuantity((prev) => prev - 1)}
              onPlus={() => setQuantity((prev) => prev + 1)}
            />
            <Button text="ADD TO CART" variant="primary" onClick={() => {}} />
          </div>
        </>
      ) : (
        <Button text="SEE PRODUCT" variant="primary" onClick={() => {}} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $darkTheme?: boolean; $priceCase?: boolean }>(
  ({ theme, $darkTheme, $priceCase }) => {
    return css`
      display: flex;
      flex-direction: column;
      text-align: ${$priceCase ? "left" : "center"};
      align-items: ${$priceCase ? "flex-start" : "center"};
      gap: 25px;

      & > .quantity_wrapper {
        display: flex;
        align-items: center;
        gap: 25px;
      }

      & > .price {
        font-weight: bold;
      }

      & > .new-product {
        text-align: center;
        color: ${$darkTheme ? theme.grayText : theme.orangeMedium};
        letter-spacing: 10px;
        margin-right: -10px;
        font-size: 0.9rem;
      }

      & > .title_wrapper {
        & > h1 {
          color: ${$darkTheme ? "#ffffff" : "#000000"};
          font-size: 1.8rem;
          letter-spacing: 1px;
          margin-right: -1px;
          &:first-child {
            margin-bottom: 10px;
          }
          text-transform: uppercase;
        }
      }

      & > p {
        max-width: 327px;
        line-height: 1.5rem;
        color: ${$darkTheme ? theme.grayTextLight : theme.grayText};
      }
    `;
  }
);
