import { FC } from "react";
import { css, styled } from "styled-components";
import { myTheme } from "../../styles/styled";
import { Button } from "../Button";
import imgDesktop from "./assets/earphones-yx1-desktop.jpg";
import imgTablet from "./assets/earphones-yx1-tablet.jpg";
import imgMobile from "./assets/earphones-yx1-mobile.jpg";

export const ProductBannerDivided: FC = () => {
  return (
    <Wrapper>
      <div className="card picture">
        <picture>
          <source media={myTheme.media.desktop} srcSet={imgDesktop} />
          <source media={myTheme.media.tablet} srcSet={imgTablet} />
          <img
            // ref={imageRef}
            src={imgMobile}
            alt="background-product-image"
          />
        </picture>
      </div>
      <div className="card gray">
        <h1>YX1 EARPHONES</h1>
        <Button text="SEE PRODUCT" variant="secondary" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme }) => {
  return css`
    display: flex;
    flex-direction: column;
    gap: 25px;
    justify-content: center;
    align-items: center;
    margin-top: 50px;

    & > .card {
      width: 90%;
      max-width: 327px;
      width: 100%;
      height: 200px;
      border-radius: 7px;
    }
    & > .card.picture {
      overflow: hidden;
      & > picture > img {
        width: 100%;
        min-height: 200px;
      }
    }
    & > .card.gray {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding-left: 20px;
      gap: 25px;
      & > h1 {
        font-size: 1.7rem;
      }
    }
    & > .card.gray {
      background-color: ${theme.grayLight};
    }

    @media ${theme.media.tablet} {
      flex-direction: row;
      width: 90%;
      margin: auto;
      margin-top: 50px;
      max-width: 1300px;

      & > .card {
        flex-grow: 1;
        max-width: unset;
        height: 320px;
      }
      & > .card.picture {
        & > picture > img {
          width: 100%;
          min-height: 320px;
        }
      }
    }

    @media ${theme.media.desktop} {
      & > .card {
        height: 350px;
      }
      & > .card.picture {
        & > picture > img {
          min-height: 350px;
        }
      }
    }
  `;
});
