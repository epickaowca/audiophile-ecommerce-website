import { FC } from "react";
import { Product } from "./components/Product";
import speakersImg from "./assets/image-category-thumbnail-speakers.png";
import earphonesImg from "./assets/image-category-thumbnail-earphones.png";
import headphonesImg from "./assets/image-category-thumbnail-headphones.png";
import { styled, css } from "styled-components";

type ProductCategoriesProps = {
  autoFocusFirstCategory?: boolean;
  navigationCase?: boolean;
  onEscapeKeyDown?: () => void;
};

export const ProductCategories: FC<ProductCategoriesProps> = ({
  autoFocusFirstCategory,
  navigationCase,
  onEscapeKeyDown,
}) => {
  const attrs = navigationCase
    ? { role: "menu" }
    : { title: "productCategories", as: navigationCase ? "ul" : "section" };

  const productAttrs = {
    onEscapeKeyDown,
    navigationCase,
  };
  return (
    <StyledProductCategories {...attrs}>
      <Product
        {...productAttrs}
        autoFocus={autoFocusFirstCategory}
        imgSrc={headphonesImg}
        productName="headphones"
        href="#headphones"
      />
      <Product
        {...productAttrs}
        imgSrc={speakersImg}
        productName="speakers"
        href="#speakers"
      />
      <Product
        {...productAttrs}
        imgSrc={earphonesImg}
        productName="earphones"
        href="#earphones"
      />
    </StyledProductCategories>
  );
};

export const StyledProductCategories = styled.section(
  ({ theme: { media } }) => {
    return css`
      max-width: 90%;
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
