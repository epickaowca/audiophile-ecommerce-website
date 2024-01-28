import { FC } from "react";
import {
  ProductDescription,
  StyledProductDescription,
} from "../ProductDescription";
import { styled, css } from "styled-components";
import heroImageDesktop from "./assets/image-hero-desktop.jpg";
import heroImageTablet from "./assets/image-hero-tablet.jpg";
import heroImageMobile from "./assets/image-hero-mobile.jpg";
import { myTheme } from "../../styles/styled";
import { wrapperStyles } from "../../styles/wrapperStyles";
import { headerHeight } from "../Header";

export const MainHeroSection: FC = () => {
  return (
    <Wrapper>
      <div className="bg"></div>
      <div className="mask"></div>
      <div className="img-wrapper">
        <picture>
          <source media={myTheme.media.desktop} srcSet={heroImageDesktop} />
          <source media={myTheme.media.tablet} srcSet={heroImageTablet} />
          <img src={heroImageMobile} alt="hero-image" />
        </picture>
      </div>

      <ProductDescription
        darkTheme={true}
        isNew={true}
        productName="XX99 Mark II"
        productCategory="headphones"
        description="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
      />
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme }) => {
  return css`
    --wrapper-height: 600px;
    --position-offset: 2px;
    --top-with-offset: calc(calc(${headerHeight} + 2px) * -1);
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--wrapper-height);
    padding-bottom: ${headerHeight};
    margin-bottom: -${headerHeight};

    & > .img-wrapper {
      position: absolute;
      z-index: -2;
      left: calc(50% - var(--position-offset));
      top: calc(var(--top-with-offset) + 50%);
      transform: translate(-50%, -50%);
      width: calc(100% + var(--position-offset));
      max-width: 1440px;
      height: 100%;
      min-width: 375px;
      display: flex;
      align-items: center;
      overflow: hidden;
      & > picture {
        width: 100%;
        & > img {
          width: 100%;
          height: 100%;
          min-height: calc(var(--wrapper-height) + var(--position-offset));
        }
      }
    }

    & > .mask {
      position: absolute;
      left: 0;
      top: var(--top-with-offset);
      background-color: rgba(0, 0, 0, 0.4);
      z-index: -1;
      width: 100%;
      height: 100%;
    }

    & > .bg {
      position: absolute;
      left: 0;
      top: var(--top-with-offset);
      background-color: #191919;
      z-index: -2;
      width: 100%;
      height: 100%;
    }

    @media ${theme.media.tablet} {
      --wrapper-height: 730px;
    }

    @media ${theme.media.desktop} {
      justify-content: flex-start;

      & > ${StyledProductDescription} {
        ${wrapperStyles};
        width: 100vw;
      }
    }
  `;
});
