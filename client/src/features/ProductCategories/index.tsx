import { FC } from "react";
import { Product } from "./components/Product";
import speakersImg from "./assets/image-category-thumbnail-speakers.png";
import earphonesImg from "./assets/image-category-thumbnail-earphones.png";
import headphonesImg from "./assets/image-category-thumbnail-headphones.png";
import { styled, css } from "styled-components";

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

  return (
    <StyledProductCategories {...attrs}>
      <Product
        navigationCase={navigationCase}
        autoFocus={autoFocusFirstCategory}
        imgSrc={headphonesImg}
        productName="headphones"
        href="#headphones"
      />
      <Product
        navigationCase={navigationCase}
        imgSrc={speakersImg}
        productName="speakers"
        href="#speakers"
      />
      <Product
        navigationCase={navigationCase}
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
        max-width: 1400px;
        padding: 0 50px;
        gap: 45px;
      }
    `;
  }
);
