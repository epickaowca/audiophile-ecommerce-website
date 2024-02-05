import { FC } from "react";
import { StyledProductBannerDivided } from "./ProductBannerDivided.styled";
import { myTheme } from "../../styles/styled";
import { Button } from "../Button";
import imgDesktop from "./assets/earphones-yx1-desktop.jpg";
import imgTablet from "./assets/earphones-yx1-tablet.jpg";
import imgMobile from "./assets/earphones-yx1-mobile.jpg";

export const ProductBannerDivided: FC = () => {
  return (
    <StyledProductBannerDivided>
      <div className="card picture">
        <picture>
          <source media={myTheme.media.desktop} srcSet={imgDesktop} />
          <source media={myTheme.media.tablet} srcSet={imgTablet} />
          <img
            // ref={imageRef}
            src={imgMobile}
            alt="background-product-image"
          />
        </picture>
      </div>
      <div className="card gray">
        <h1>YX1 EARPHONES</h1>
        <Button text="SEE PRODUCT" variant="secondary" />
      </div>
    </StyledProductBannerDivided>
  );
};
