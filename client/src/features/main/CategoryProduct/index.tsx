import { FC } from "react";
import desktop from "./assets/image-category-page-preview-desktop.jpg";
import tablet from "./assets/image-category-page-preview-tablet.jpg";
import mobile from "./assets/image-category-page-preview-mobile.jpg";
import { styled, css } from "styled-components";
import {
  ProductDescription,
  StyledProductDescription,
} from "../../shared/ProductDescription";
import { myTheme } from "../../../styles/styled";

export const CategoryProduct: FC = () => {
  return (
    <Wrapper>
      <picture>
        <source media={myTheme.media.desktop} srcSet={desktop} />
        <source media={myTheme.media.tablet} srcSet={tablet} />
        <img src={mobile} alt="YX1 wireless earphone" />
      </picture>
      <ProductDescription
        isNew={true}
        buttonHref="/detail/YX1"
        productCategory="earphones"
        productName="YX1 wireless"
        description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
      />
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme }) => {
  return css`
    width: 90%;
    position: relative;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 25px;

    & > picture {
      width: 100%;
      border-radius: 7px;
      height: 352px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      background-color: ${theme.grayLight};

      & > img {
        width: 100%;
        max-width: 327px;
      }
    }

    @media ${theme.media.tablet} {
      gap: 50px;
      & > picture {
        & > img {
          max-width: 654px;
        }
      }
    }

    @media ${theme.media.desktop} {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      max-width: 1200px;

      & > picture {
        max-width: 540px;
        height: 560px;
      }
      & > ${StyledProductDescription} {
        width: 100%;
        max-width: 445px;
      }
    }
  `;
});
