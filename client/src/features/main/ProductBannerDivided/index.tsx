import { FC } from "react";
import {
  StyledProductBannerDivided,
  Picture,
} from "./ProductBannerDivided.styled";
import { myTheme } from "../../../styles/styled";
import { Button } from "../../shared/Button";
import mobile from "./assets/earphones-yx1-mobile.jpg";
import tablet from "./assets/earphones-yx1-tablet.jpg";
import desktop from "./assets/earphones-yx1-desktop.jpg";

export const ProductBannerDivided: FC = () => {
  return (
    <StyledProductBannerDivided>
      <Picture className="card">
        <source media={myTheme.media.desktop} srcSet={desktop} />
        <source media={myTheme.media.tablet} srcSet={tablet} />
        <img src={mobile} alt="background-product-image" />
      </Picture>
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
