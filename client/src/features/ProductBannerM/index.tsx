import { FC, useRef, useEffect, useState } from "react";
import { styled, css } from "styled-components";
import { myTheme } from "../../styles/styled";
import { Button } from "../Button";
import imgMobileMicro from "./assets/micro/image-speaker-zx7-mobile.jpg";
import imgTabletMicro from "./assets/micro/image-speaker-zx7-tablet.jpg";
import imgDesktopMicro from "./assets/micro/image-speaker-zx7-desktop.jpg";
import { useImageLoaded } from "../../hooks/useImageLoaded";

export const ProductBannerM: FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const { isImageLoaded } = useImageLoaded(imageRef);
  const [images, setImages] = useState({
    mobile: imgMobileMicro,
    tablet: imgTabletMicro,
    desktop: imgDesktopMicro,
  });

  useEffect(() => {
    if (isImageLoaded) {
      const desktop = require("./assets/image-speaker-zx7-desktop.jpg");
      const tablet = require("./assets/image-speaker-zx7-tablet.jpg");
      const mobile = require("./assets/image-speaker-zx7-mobile.jpg");

      setImages({ mobile, tablet, desktop });
    }
  }, [isImageLoaded]);

  return (
    <StyledProductBannerM>
      <Picture>
        <source media={myTheme.media.desktop} srcSet={images.desktop} />
        <source media={myTheme.media.tablet} srcSet={images.tablet} />
        <img
          ref={imageRef}
          src={images.mobile}
          alt="background-product-image"
        />
      </Picture>
      <h1>ZX7 SPEAKER</h1>
      <Button text="SEE PRODUCT" variant="secondary" />
    </StyledProductBannerM>
  );
};

const StyledProductBannerM = styled.div(({ theme: { media } }) => {
  return css`
    margin: auto;
    margin-top: 70px;
    width: 90%;
    max-width: 327px;
    height: 320px;
    border-radius: 7px;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;
    padding-left: 30px;

    & > h1 {
      letter-spacing: 2px;
      margin-left: -2px;
      margin-top: -55px;
      font-size: 1.7rem;
    }

    @media ${media.tablet} {
      max-width: 1300px;
      gap: 35px;
      padding-left: 70px;
    }

    @media ${media.desktop} {
      height: 350px;
      padding-left: 130px;
    }
  `;
});

const Picture = styled.picture(({ theme: { media } }) => {
  return css`
    & > img {
      z-index: -1;
      left: 0;
      top: 0;
      position: absolute;
      width: 100%;
      min-height: 320px;
    }

    @media ${media.desktop} {
      & > img {
        min-height: 350px;
      }
    }
  `;
});
