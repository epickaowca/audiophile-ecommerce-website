import { FC, useRef } from "react";
import mobile from "./assets/micro/image-speaker-zx9-mobile.png";
import tablet from "./assets/micro/image-speaker-zx9-tablet.png";
import desktop from "./assets/micro/image-speaker-zx9-desktop.png";
import patternCircles from "./assets/pattern-circles.svg";
import { ProductDescription } from "../../shared/ProductDescription";
import {
  StyledProductBannerXL,
  PatternCircles,
  Picture,
} from "./ProductBannerXL.styled";
import { myTheme } from "../../../styles/styled";
import { useImgPreload } from "../../../hooks/useImgPreload";

const initialImg = {
  mobile,
  tablet,
  desktop,
};

const imgRequire = async () => {
  const mobile = await require("./assets/image-speaker-zx9-mobile.png");
  const tablet = await require("./assets/image-speaker-zx9-tablet.png");
  const desktop = await require("./assets/image-speaker-zx9-desktop.png");
  return { mobile, tablet, desktop };
};

export const ProductBannerXL: FC = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const { img } = useImgPreload({
    imgRequire,
    initialImg,
    imgRef,
  });

  return (
    <StyledProductBannerXL>
      <PatternCircles src={patternCircles} alt="patternCircles" />
      <Picture $isImgLoaded={img.isLargeImgLoaded}>
        <source media={myTheme.media.desktop} srcSet={img.desktop} />
        <source media={myTheme.media.tablet} srcSet={img.tablet} />
        <img ref={imgRef} src={img.mobile} alt="product-image" />
      </Picture>
      <ProductDescription
        buttonHref="#hi"
        description="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
        productCategory="speaker"
        productName="ZX9"
        buttonVariant="black"
        buttonAriaLabel="SEE ZX9 SPEAKER"
      />
    </StyledProductBannerXL>
  );
};
