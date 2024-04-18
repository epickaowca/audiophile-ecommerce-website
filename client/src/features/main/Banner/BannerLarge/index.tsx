import { FC, useRef } from "react";
import { ProductDescription } from "../../../shared/ProductDescription";
import { StyledBanner } from "./BannerLarge.styled";
import { media } from "../../../../styled";
import { useImgPreload } from "../../../../hooks/useImgPreload";
import desktop from "./assets/desktop.png";
import tablet from "./assets/tablet.png";
import mobile from "./assets/mobile.png";
import desktopMicro from "./assets/micro/desktop.png";
import tabletMicro from "./assets/micro/tablet.png";
import mobileMicro from "./assets/micro/mobile.png";
import { modifiers } from "../../../../utils";
import patternCircles from "./assets/pattern-circles.svg";

const largeImg = {
  desktop,
  tablet,
  mobile,
};
const initialImg = {
  desktop: desktopMicro,
  tablet: tabletMicro,
  mobile: mobileMicro,
};

export const BannerLarge: FC = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const { desktop, isLargeImgLoaded, mobile, tablet } = useImgPreload({
    largeImg,
    initialImg,
    imgRef,
  });

  const { styledComponentId: Banner } = StyledBanner;

  return (
    <StyledBanner $className={Banner}>
      <picture
        className={modifiers({
          baseClass: `${Banner}_picture`,
          modifier: !isLargeImgLoaded && "blur",
        })}
      >
        <source media={media.desktop} srcSet={desktop} />
        <source media={media.tablet} srcSet={tablet} />
        <img
          className={`${Banner}_img`}
          ref={imgRef}
          src={mobile}
          alt="ZX9 product image"
        />
      </picture>
      <ProductDescription
        name="ZX9"
        variant="black"
        category="speaker"
        ariaLabel="ZX9 speaker"
        href="/details/ZX9"
        description="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
      />
      <img
        className={`${Banner}_patternCircles`}
        src={patternCircles}
        alt="patternCircles"
      />
    </StyledBanner>
  );
};
