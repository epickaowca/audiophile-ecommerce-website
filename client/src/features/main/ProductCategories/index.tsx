import { FC } from "react";
import { Product } from "./components/Product";
import { styled, css } from "styled-components";
import speakersImgMicro from "./assets/micro/image-category-thumbnail-speakers.png";
import earphonesImgMicro from "./assets/micro/image-category-thumbnail-earphones.png";
import headphonesImgMicro from "./assets/micro/image-category-thumbnail-headphones.png";
import speakersImg from "./assets/image-category-thumbnail-speakers.png";
import earphonesImg from "./assets/image-category-thumbnail-earphones.png";
import headphonesImg from "./assets/image-category-thumbnail-headphones.png";

type ProductCategoriesProps = {
  autoFocusFirstCategory?: boolean;
  navigationCase?: boolean;
};

export const ProductCategories: FC<ProductCategoriesProps> = ({
  autoFocusFirstCategory,
  navigationCase,
}) => {
  const attrs = navigationCase
    ? { role: "menu" }
    : { title: "productCategories", as: navigationCase ? "ul" : "section" };

  const productAttrs = {
    navigationCase,
  };

  return (
    <StyledProductCategories {...attrs}>
      <Product
        {...productAttrs}
        autoFocus={autoFocusFirstCategory}
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
