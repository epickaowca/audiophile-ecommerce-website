import { FC, useRef } from "react";
import { myTheme } from "../../../styles/styled";
import { Button } from "../../shared/Button";
import mobile from "./assets/micro/image-speaker-zx7-mobile.jpg";
import tablet from "./assets/micro/image-speaker-zx7-tablet.jpg";
import desktop from "./assets/micro/image-speaker-zx7-desktop.jpg";
import { useImgPreload } from "../../../hooks/useImgPreload";
import { Picture, StyledProductBannerM } from "./ProductBannerM.styled";

const initialImg = {
  mobile,
  tablet,
  desktop,
};

const imgRequire = async () => {
  const mobile = await require("./assets/image-speaker-zx7-mobile.jpg");
  const tablet = await require("./assets/image-speaker-zx7-tablet.jpg");
  const desktop = await require("./assets/image-speaker-zx7-desktop.jpg");
  return { mobile, tablet, desktop };
};

export const ProductBannerM: FC = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const { img } = useImgPreload({ imgRequire, initialImg, imgRef });

  return (
    <StyledProductBannerM>
      <Picture $isLargeImgLoaded={img.isLargeImgLoaded}>
        <source media={myTheme.media.desktop} srcSet={img.desktop} />
        <source media={myTheme.media.tablet} srcSet={img.tablet} />
        <img ref={imgRef} src={img.mobile} alt="background-product-image" />
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
