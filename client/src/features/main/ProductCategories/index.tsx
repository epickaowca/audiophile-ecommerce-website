import { FC } from "react";
import { Product } from "./components/Product";
import { styled, css } from "styled-components";
import speakersImgMicro from "./assets/micro/speakers.png";
import earphonesImgMicro from "./assets/micro/earphones.png";
import headphonesImgMicro from "./assets/micro/headphones.png";
import speakersImg from "./assets/speakers.png";
import earphonesImg from "./assets/earphones.png";
import headphonesImg from "./assets/headphones.png";

type ProductCategoriesProps = {
  autoFocus?: boolean;
  navigationCase?: boolean;
};

export const ProductCategories: FC<ProductCategoriesProps> = ({
  autoFocus,
  navigationCase,
}) => {
  const attrs = navigationCase
    ? { role: "menubar", as: "ul" }
    : {
        "aria-label": "Product categories",
      };

  const productAttrs = {
    navigationCase,
  };

  return (
    <StyledProductCategories {...attrs}>
      <Product
        {...productAttrs}
        autoFocus={autoFocus}
        initialImg={{ mobile: headphonesImgMicro }}
        largeImg={{ mobile: headphonesImg }}
        productName="headphones"
        href="/category/headphones"
      />
      <Product
        {...productAttrs}
        initialImg={{ mobile: speakersImgMicro }}
        largeImg={{ mobile: speakersImg }}
        productName="speakers"
        href="/category/speakers"
      />
      <Product
        {...productAttrs}
        initialImg={{ mobile: earphonesImgMicro }}
        largeImg={{ mobile: earphonesImg }}
        productName="earphones"
        href="/category/earphones"
      />
    </StyledProductCategories>
  );
};

export const StyledProductCategories = styled.section(
  ({ theme: { media } }) => {
    return css`
      width: 90%;
      margin: 90px auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 70px;

      @media ${media.tablet} {
        margin: 100px auto;
        justify-content: center;
        flex-direction: row;
        gap: 15px;
      }

      @media ${media.desktop} {
        max-width: 1300px;
        padding: 0 50px;
        gap: 45px;
      }
    `;
  }
);
