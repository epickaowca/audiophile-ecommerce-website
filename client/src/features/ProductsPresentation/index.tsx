import { FC } from "react";
import { Product } from "./components/Product";
import speakersImg from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphonesImg from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import { styled, css } from "styled-components";
import { wrapperStyles } from "../../styles/wrapperStyles";

export const ProductsPresentation: FC = () => {
  return (
    <Wrapper>
      <Product
        imgSrc={headphonesImg}
        productName="headphones"
        url="#headphones"
      />
      <Product imgSrc={speakersImg} productName="speakers" url="#speakers" />
      <Product imgSrc={earphonesImg} productName="earphones" url="#earphones" />
    </Wrapper>
  );
};

const Wrapper = styled.div(() => {
  return css`
    ${wrapperStyles};
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 70px;
  `;
});
