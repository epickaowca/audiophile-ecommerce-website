import { FC, useRef } from "react";
import { ProductDescription } from "../../shared/ProductDescription";
import mobileMicro from "./assets/micro/image-hero-mobile.jpg";
import tabletMicro from "./assets/micro/image-hero-tablet.jpg";
import desktopMicro from "./assets/micro/image-hero-desktop.jpg";
import mobile from "./assets/image-hero-mobile.jpg";
import tablet from "./assets/image-hero-tablet.jpg";
import desktop from "./assets/image-hero-desktop.jpg";
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
  const { desktop, isLargeImgLoaded, mobile, tablet } = useImgPreload({
    initialImg,
    largeImg,
    imgRef,
  });

  return (
    <StyledMainHeroSection aria-label="hero section">
      <div className="bg"></div>
      <div className="mask"></div>
      <Picture $isLargeImgLoaded={isLargeImgLoaded}>
        <source media={myTheme.media.desktop} srcSet={desktop} />
        <source media={myTheme.media.tablet} srcSet={tablet} />
        <img ref={imgRef} src={mobile} alt="hero-image" />
      </Picture>
      <ProductDescription
        href="/details/XX99-Mark-2"
        ariaLabel="SEE XX99 Mark II"
        isNew={true}
        name="XX99 Mark II"
        category="headphones"
        description="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
      />
    </StyledMainHeroSection>
  );
};
