import { FC, useRef } from "react";
import { ProductDescription } from "@root/features/shared/ProductDescription";
import mobileMicro from "./assets/micro/mobile.jpg";
import tabletMicro from "./assets/micro/tablet.jpg";
import desktopMicro from "./assets/micro/desktop.jpg";
import mobile from "./assets/mobile.jpg";
import tablet from "./assets/tablet.jpg";
import desktop from "./assets/desktop.jpg";
import { media } from "@root/styled";
import { useImgPreload } from "@root/hooks/useImgPreload";
import { StyledMainHeroSection } from "./MainHeroSection.styled";
import { modifiers } from "@root/utils";

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
  const { styledComponentId: Hero } = StyledMainHeroSection;

  return (
    <StyledMainHeroSection $className={Hero} aria-label="hero section">
      <div className={`${Hero}_bg`}></div>
      <picture
        className={modifiers({
          baseClass: `${Hero}_picture`,
          modifier: !isLargeImgLoaded && "blur",
        })}
      >
        <source media={media.desktop} srcSet={desktop} />
        <source media={media.tablet} srcSet={tablet} />
        <img
          className={`${Hero}_img`}
          ref={imgRef}
          src={mobile}
          alt="hero-image"
        />
      </picture>
      <ProductDescription
        href="/details/XX99-Mark-2"
        ariaLabel="SEE XX99 Mark II"
        name="XX99 Mark II"
        category="headphones"
        description="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
        isNew
      />
    </StyledMainHeroSection>
  );
};
