import { FC, useRef, useState, useEffect } from "react";
import { ProductDescription } from "../ProductDescription";
import heroImageMobileThumbnail from "./assets/micro/image-hero-mobile.jpg";
import heroImageTabletThumbnail from "./assets/micro/image-hero-tablet.jpg";
import heroImageDesktopThumbnail from "./assets/micro/image-hero-desktop.png";
import { myTheme } from "../../styles/styled";
import { useImageLoaded } from "../../hooks/useImageLoaded";
import { StyledMainHeroSection } from "./MainHeroSection.styled";

export const MainHeroSection: FC = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const { isImageLoaded } = useImageLoaded(imgRef);
  const [images, setImages] = useState({
    mobile: heroImageMobileThumbnail,
    tablet: heroImageTabletThumbnail,
    desktop: heroImageDesktopThumbnail,
  });

  useEffect(() => {
    if (isImageLoaded) {
      const desktop = require("./assets/image-hero-desktop.jpg");
      const tablet = require("./assets/image-hero-tablet.jpg");
      const mobile = require("./assets/image-hero-mobile.jpg");

      setImages({ mobile, tablet, desktop });
    }
  }, [isImageLoaded]);

  return (
    <StyledMainHeroSection>
      <div className="bg"></div>
      <div className="mask"></div>
      <div className="img-wrapper">
        <picture>
          <source media={myTheme.media.desktop} srcSet={images.desktop} />
          <source media={myTheme.media.tablet} srcSet={images.tablet} />
          <img ref={imgRef} src={images.mobile} alt="hero-image" />
        </picture>
      </div>

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
