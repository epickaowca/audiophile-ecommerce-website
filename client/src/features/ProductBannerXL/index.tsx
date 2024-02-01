import imgDesktop from "./assets/image-speaker-zx9-desktop.png";
import imgTablet from "./assets/image-speaker-zx9-tablet.png";
import imgMobile from "./assets/image-speaker-zx9-mobile.png";
import patternCircles from "./assets/pattern-circles.svg";
import { FC } from "react";
import { ProductDescription } from "../ProductDescription";
import {
  StyledProductBannerXL,
  StyledPatternCircles,
  StyledPicture,
} from "./ProductBannerXL.styled";
import { myTheme } from "../../styles/styled";

export const ProductBannerXL: FC = () => {
  return (
    <StyledProductBannerXL>
      <StyledPatternCircles src={patternCircles} alt="patternCircles" />
      <StyledPicture>
        <source media={myTheme.media.desktop} srcSet={imgDesktop} />
        <source media={myTheme.media.tablet} srcSet={imgTablet} />
        <img src={imgMobile} alt="product-image" />
      </StyledPicture>
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
