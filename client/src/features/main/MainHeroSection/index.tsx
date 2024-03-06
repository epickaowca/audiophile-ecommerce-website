import { FC, useRef } from "react";
import { ProductDescription } from "../../shared/ProductDescription";
import mobileMicro from "./assets/micro/image-hero-mobile.jpg";
import tabletMicro from "./assets/micro/image-hero-tablet.jpg";
import desktopMicro from "./assets/micro/image-hero-desktop.png";
import mobile from "./assets/image-hero-mobile.jpg";
import tablet from "./assets/image-hero-tablet.jpg";
import desktop from "./assets/image-hero-desktop.png";
import { myTheme } from "../../../styles/styled";
import { useImgPreload } from "../../../hooks/useImgPreload";
import { StyledMainHeroSection, Picture } from "./MainHeroSection.styled";

const initialImg = {
  mobile: mobileMicro,
  tablet: tabletMicro,
  desktop: desktopMicro,
};
const largeImg = {
  mobile,
  tablet,
  desktop,
};

export const MainHeroSection: FC = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const { img } = useImgPreload({
    initialImg,
    largeImg,
    imgRef,
  });

  return (
    <StyledMainHeroSection>
      <div className="bg"></div>
      <div className="mask"></div>
      <Picture $isLargeImgLoaded={img.isLargeImgLoaded}>
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
