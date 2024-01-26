import { FC } from "react";
import { Product } from "./components/Product";
import speakersImg from "./assets/image-category-thumbnail-speakers.png";
import earphonesImg from "./assets/image-category-thumbnail-earphones.png";
import headphonesImg from "./assets/image-category-thumbnail-headphones.png";
import { styled, css } from "styled-components";
import { wrapperStyles } from "../../styles/wrapperStyles";

export const ProductsPresentation: FC = () => {
  return (
    <StyledProductsPresentation>
      <Product
        imgSrc={headphonesImg}
        productName="headphones"
        url="#headphones"
      />
      <Product imgSrc={speakersImg} productName="speakers" url="#speakers" />
      <Product imgSrc={earphonesImg} productName="earphones" url="#earphones" />
    </StyledProductsPresentation>
  );
};

export const StyledProductsPresentation = styled.div(({ theme: { media } }) => {
  return css`
    ${wrapperStyles};
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 70px;
    @media ${media.tablet} {
      justify-content: center;
      flex-direction: row;
      gap: 15px;
    }
    @media ${media.desktop} {
      gap: 45px;
    }
  `;
});
