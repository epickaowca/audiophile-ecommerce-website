import { FC } from "react";
import { Product } from "./components/Product";
import speakersImg from "./assets/image-category-thumbnail-speakers.png";
import earphonesImg from "./assets/image-category-thumbnail-earphones.png";
import headphonesImg from "./assets/image-category-thumbnail-headphones.png";
import { styled, css } from "styled-components";
import { wrapperStyles } from "../../styles/wrapperStyles";

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
    : { title: "productCategories" };
  return (
    <StyledProductCategories {...attrs} as={navigationCase ? "ul" : "section"}>
      <Product
        navigationCase={navigationCase}
        autoFocus={autoFocusFirstCategory}
        imgSrc={headphonesImg}
        productName="headphones"
        url="#headphones"
      />
      <Product
        navigationCase={navigationCase}
        imgSrc={speakersImg}
        productName="speakers"
        url="#speakers"
      />
      <Product
        navigationCase={navigationCase}
        imgSrc={earphonesImg}
        productName="earphones"
        url="#earphones"
      />
    </StyledProductCategories>
  );
};

export const StyledProductCategories = styled.section(
  ({ theme: { media } }) => {
    return css`
      ${wrapperStyles};
      margin-top: 90px;
      margin-bottom: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 70px;

      @media ${media.tablet} {
        margin-top: 140px;
        margin-bottom: 90px;
        justify-content: center;
        flex-direction: row;
        gap: 15px;
      }
      @media ${media.desktop} {
        gap: 45px;
      }
    `;
  }
);
