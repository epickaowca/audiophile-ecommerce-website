import { FC, useRef } from "react";
import { ProductDescription } from "../../shared/ProductDescription";
import mobile from "./assets/micro/image-hero-mobile.jpg";
import tablet from "./assets/micro/image-hero-tablet.jpg";
import desktop from "./assets/micro/image-hero-desktop.png";
import { myTheme } from "../../../styles/styled";
import { useIsImageLoaded } from "../../../hooks/useIsImageLoaded";
import { useImagePreload } from "../../../hooks/useImagePreload";
import { StyledMainHeroSection, Picture } from "./MainHeroSection.styled";

const initialImg = {
  mobile,
  tablet,
  desktop,
};

const imgRequire = () => {
  const mobile = require("./assets/image-hero-mobile.jpg");
  const tablet = require("./assets/image-hero-tablet.jpg");
  const desktop = require("./assets/image-hero-desktop.jpg");
  return { mobile, tablet, desktop };
};

export const MainHeroSection: FC = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const { isImageLoaded } = useIsImageLoaded(imgRef);
  const { img } = useImagePreload({
    initialImg,
    imgRequire,
    isImageLoaded,
  });

  return (
    <StyledMainHeroSection>
      <div className="bg"></div>
      <div className="mask"></div>
      <Picture>
        <source media={myTheme.media.desktop} srcSet={img.desktop} />
        <source media={myTheme.media.tablet} srcSet={img.tablet} />
        <img ref={imgRef} src={img.mobile} alt="hero-image" />
      </Picture>
      <ProductDescription
        buttonHref="#XX99 Mark II"
        buttonAriaLabel="SEE XX99 Mark II"
        isNew={true}
        productName="XX99 Mark II"
        productCategory="headphones"
        description="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
      />
    </StyledMainHeroSection>
  );
};
