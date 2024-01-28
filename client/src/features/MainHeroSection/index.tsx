import { FC, useRef } from "react";
import {
  ProductDescription,
  StyledProductDescription,
} from "../ProductDescription";
import { styled, css } from "styled-components";
import heroImageDesktop from "./assets/image-hero-desktop.jpg";
import heroImageTablet from "./assets/image-hero-tablet.jpg";
import heroImageMobile from "./assets/image-hero-mobile.jpg";
import heroImageMobileThumbnail from "./assets/micro/image-hero-mobile.jpg";
import heroImageTabletThumbnail from "./assets/micro/image-hero-tablet.jpg";
import heroImageDesktopThumbnail from "./assets/micro/image-hero-desktop.png";
import { myTheme } from "../../styles/styled";
import { wrapperStyles } from "../../styles/wrapperStyles";
import { headerHeight } from "../Header";
import { BlurImageLoad, StyledBlurImageLoad } from "../BlurImageLoad";
import { useImageLoaded } from "../../hooks/useImageLoaded";

export const MainHeroSection: FC = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const { isImageLoaded } = useImageLoaded(imgRef);

  return (
    <Wrapper>
      <div className="bg"></div>
      <div className="mask"></div>
      <div className="img-wrapper">
        <BlurImageLoad
          isImageLoaded={isImageLoaded}
          withoutAnimation={true}
          image={{
            mobile: heroImageMobileThumbnail,
            tablet: heroImageTabletThumbnail,
            desktop: heroImageDesktopThumbnail,
          }}
        >
          <picture>
            <source media={myTheme.media.desktop} srcSet={heroImageDesktop} />
            <source media={myTheme.media.tablet} srcSet={heroImageTablet} />
            <img
              loading="lazy"
              ref={imgRef}
              src={heroImageMobile}
              alt="hero-image"
            />
          </picture>
        </BlurImageLoad>
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
      width: calc(100% + calc(var(--position-offset) * 2));
      max-width: 1440px;
      height: 100%;
      min-width: 375px;
      display: flex;
      align-items: center;
      overflow: hidden;

      & > ${StyledBlurImageLoad} {
        width: 100%;
        min-height: calc(var(--wrapper-height) + var(--position-offset));

        & > picture {
          width: 100%;
          & > img {
            width: 100%;
            height: 100%;
            min-height: calc(var(--wrapper-height) + var(--position-offset));
          }
        }
      }
    }

    & > .mask,
    .bg {
      position: absolute;
      left: 0;
      top: var(--top-with-offset);
      width: 100%;
      height: 100%;
    }

    & > .mask {
      z-index: -1;
      background-color: rgba(0, 0, 0, 0.4);
    }

    & > .bg {
      z-index: -2;
      background-color: #191919;
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
