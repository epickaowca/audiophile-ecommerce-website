import { FC, useRef, useEffect, useState } from "react";

import { myTheme } from "../../styles/styled";
import { Button } from "../Button";
import imgMobileMicro from "./assets/micro/image-speaker-zx7-mobile.jpg";
import imgTabletMicro from "./assets/micro/image-speaker-zx7-tablet.jpg";
import imgDesktopMicro from "./assets/micro/image-speaker-zx7-desktop.jpg";
import { useImageLoaded } from "../../hooks/useImageLoaded";
import { Picture, StyledProductBannerM } from "./ProductBannerM.styled";

export const ProductBannerM: FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const { isImageLoaded } = useImageLoaded(imageRef);
  const [images, setImages] = useState({
    mobile: imgMobileMicro,
    tablet: imgTabletMicro,
    desktop: imgDesktopMicro,
  });

  useEffect(() => {
    if (isImageLoaded) {
      const desktop = require("./assets/image-speaker-zx7-desktop.jpg");
      const tablet = require("./assets/image-speaker-zx7-tablet.jpg");
      const mobile = require("./assets/image-speaker-zx7-mobile.jpg");

      setImages({ mobile, tablet, desktop });
    }
  }, [isImageLoaded]);

  return (
    <StyledProductBannerM>
      <Picture>
        <source media={myTheme.media.desktop} srcSet={images.desktop} />
        <source media={myTheme.media.tablet} srcSet={images.tablet} />
        <img
          ref={imageRef}
          src={images.mobile}
          alt="background-product-image"
        />
      </Picture>
      <h1>ZX7 SPEAKER</h1>
      <Button text="SEE PRODUCT" variant="secondary" />
    </StyledProductBannerM>
  );
};
