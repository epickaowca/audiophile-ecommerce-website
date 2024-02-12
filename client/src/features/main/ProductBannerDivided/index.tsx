import { FC, useRef } from "react";
import { StyledProductBannerDivided } from "./ProductBannerDivided.styled";
import { myTheme } from "../../../styles/styled";
import { Button } from "../../shared/Button";
import mobile from "./assets/micro/earphones-yx1-mobile.jpg";
import tablet from "./assets/micro/earphones-yx1-tablet.jpg";
import desktop from "./assets/micro/earphones-yx1-desktop.jpg";
import { useIsImageLoaded } from "../../../hooks/useIsImageLoaded";
import { useImagePreload } from "../../../hooks/useImagePreload";

const initialImg = {
  mobile,
  tablet,
  desktop,
};

const imgRequire = () => {
  const mobile = require("./assets/earphones-yx1-mobile.jpg");
  const tablet = require("./assets/earphones-yx1-tablet.jpg");
  const desktop = require("./assets/earphones-yx1-desktop.jpg");
  return { mobile, tablet, desktop };
};

export const ProductBannerDivided: FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const { isImageLoaded } = useIsImageLoaded(imageRef);
  const { img } = useImagePreload({ imgRequire, initialImg, isImageLoaded });

  return (
    <StyledProductBannerDivided>
      <picture className="card">
        <source media={myTheme.media.desktop} srcSet={img.desktop} />
        <source media={myTheme.media.tablet} srcSet={img.tablet} />
        <img ref={imageRef} src={img.mobile} alt="background-product-image" />
      </picture>
      <div className="card gray">
        <h1>YX1 EARPHONES</h1>
        <Button
          ariaLabel="SEE YX1 EARPHONES"
          as="link"
          href="#YX1_EARPHONES"
          text="SEE PRODUCT"
          variant="secondary"
        />
      </div>
    </StyledProductBannerDivided>
  );
};
