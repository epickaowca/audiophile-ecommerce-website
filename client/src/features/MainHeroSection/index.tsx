import { FC, useRef } from "react";
import { ProductDescription } from "../ProductDescription";
import heroImageDesktop from "./assets/image-hero-desktop.jpg";
import heroImageTablet from "./assets/image-hero-tablet.jpg";
import heroImageMobile from "./assets/image-hero-mobile.jpg";
import heroImageMobileThumbnail from "./assets/micro/image-hero-mobile.jpg";
import heroImageTabletThumbnail from "./assets/micro/image-hero-tablet.jpg";
import heroImageDesktopThumbnail from "./assets/micro/image-hero-desktop.png";
import { myTheme } from "../../styles/styled";
import { BlurImageLoad } from "../BlurImageLoad";
import { useImageLoaded } from "../../hooks/useImageLoaded";
import { StyledMainHeroSection } from "./MainHeroSection.styled";

export const MainHeroSection: FC = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const { isImageLoaded } = useImageLoaded(imgRef);

  return (
    <StyledMainHeroSection>
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
            <img ref={imgRef} src={heroImageMobile} alt="hero-image" />
          </picture>
        </BlurImageLoad>
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
