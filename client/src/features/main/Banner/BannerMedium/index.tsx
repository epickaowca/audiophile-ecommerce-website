import { FC, useRef } from "react";
import { ProductDescription } from "../../../shared/ProductDescription";
import { StyledBanner } from "./BannerMedium.styled";
import { media } from "../../../../styled";
import { useImgPreload } from "../../../../hooks/useImgPreload";
import desktop from "./assets/desktop.jpg";
import tablet from "./assets/tablet.jpg";
import mobile from "./assets/mobile.jpg";
import desktopMicro from "./assets/micro/desktop.jpg";
import tabletMicro from "./assets/micro/tablet.jpg";
import mobileMicro from "./assets/micro/mobile.jpg";
import { modifiers } from "../../../../utils";

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

export const BannerMedium: FC = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const { desktop, isLargeImgLoaded, mobile, tablet } = useImgPreload({
    largeImg,
    initialImg,
    imgRef,
  });

  const { styledComponentId: Banner } = StyledBanner;

  return (
    <StyledBanner $className={Banner}>
      <ProductDescription
        name="YX1"
        variant="secondary"
        category="earphones"
        ariaLabel="YX1 speaker"
        href="/details/YX1"
        withoutBr
      />
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
          alt="YX1 product image"
        />
      </picture>
    </StyledBanner>
  );
};
