import { FC, useRef } from "react";
import { myTheme } from "../../../styles/styled";
import { Button } from "../../shared/Button";
import mobile from "./assets/micro/image-speaker-zx7-mobile.jpg";
import tablet from "./assets/micro/image-speaker-zx7-tablet.jpg";
import desktop from "./assets/micro/image-speaker-zx7-desktop.jpg";
import { useIsImageLoaded } from "../../../hooks/useIsImageLoaded";
import { useImagePreload } from "../../../hooks/useImagePreload";
import { Picture, StyledProductBannerM } from "./ProductBannerM.styled";

const initialImg = {
  mobile,
  tablet,
  desktop,
};

const imgRequire = () => {
  const mobile = require("./assets/image-speaker-zx7-mobile.jpg");
  const tablet = require("./assets/image-speaker-zx7-tablet.jpg");
  const desktop = require("./assets/image-speaker-zx7-desktop.jpg");
  return { mobile, tablet, desktop };
};

export const ProductBannerM: FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const { isImageLoaded } = useIsImageLoaded(imageRef);
  const { img } = useImagePreload({ imgRequire, initialImg, isImageLoaded });

  return (
    <StyledProductBannerM>
      <Picture>
        <source media={myTheme.media.desktop} srcSet={img.desktop} />
        <source media={myTheme.media.tablet} srcSet={img.tablet} />
        <img ref={imageRef} src={img.mobile} alt="background-product-image" />
      </Picture>

      <h1>ZX7 SPEAKER</h1>
      <Button
        as="link"
        href="#ZX7 SPEAKER"
        ariaLabel="SEE ZX7 SPEAKER"
        text="SEE PRODUCT"
        variant="secondary"
      />
    </StyledProductBannerM>
  );
};
