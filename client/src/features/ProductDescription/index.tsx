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
              onMinus={() => setQuantity((prev) => prev - 1)}
              onPlus={() => setQuantity((prev) => prev + 1)}
            />
            <Button text="ADD TO CART" variant="primary" onClick={() => {}} />
          </div>
        </>
      ) : (
        <Button text="SEE PRODUCT" variant="primary" onClick={() => {}} />
      )}
    </StyledProductDescription>
  );
};

export const StyledProductDescription = styled.div<{
  $darkTheme?: boolean;
  $priceCase?: boolean;
}>(({ theme, $darkTheme, $priceCase }) => {
  return css`
    --gap: 25px;
    display: flex;
    flex-direction: column;
    text-align: ${$priceCase ? "left" : "center"};
    align-items: ${$priceCase ? "flex-start" : "center"};
    gap: var(--gap);

    & > .quantity_wrapper {
      display: flex;
      align-items: center;
      gap: var(--gap);
    }

    & > .price {
      font-weight: bold;
    }

    & > .new-product {
      --letter-spacing: 10px;
      text-align: center;
      color: ${$darkTheme ? theme.grayText : theme.orangeMedium};
      letter-spacing: var(--letter-spacing);
      margin-right: calc(var(--letter-spacing) * -1);
      font-size: 0.9rem;
    }

    & > .title_wrapper {
      & > h1 {
        --letter-spacing: ${$darkTheme ? "3px" : "1px"};
        color: ${$darkTheme ? "#ffffff" : "#000000"};
        font-size: ${$darkTheme ? "2.3rem" : "1.8rem"};
        letter-spacing: var(--letter-spacing);
        margin-right: calc(var(--letter-spacing) * -1);
        line-height: 2.1rem;
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

    @media ${theme.media.tablet} {
      --gap: 30px;
      & > .title_wrapper {
        & > h1 {
          font-size: ${$darkTheme ? "3.3rem" : "2.1rem"};
          line-height: 3rem;
          letter-spacing: 4px;
          margin-right: -4px;
        }
      }
      & > p {
        max-width: ${$darkTheme ? "400px" : "700px"};
        line-height: 1.6rem;
        font-size: 1rem;
      }

      & > .new-product {
        --letter-spacing: ${$darkTheme ? "12px" : "10px"};
      }
    }

    @media ${theme.media.desktop} {
      --gap: 35px;
      text-align: left;
      align-items: flex-start;
    }
  `;
});
