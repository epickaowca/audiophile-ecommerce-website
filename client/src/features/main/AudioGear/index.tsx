import { FC, useRef } from "react";
import desktop from "./assets/micro/image-best-gear-desktop.jpg";
import tablet from "./assets/micro/image-best-gear-tablet.jpg";
import mobile from "./assets/micro/image-best-gear-mobile.jpg";
import { StyledAudioGear, Description } from "./AudioGear.styled";
import { myTheme } from "../../../styles/styled";
import { useIsImageLoaded } from "../../../hooks/useIsImageLoaded";
import { useImagePreload } from "../../../hooks/useImagePreload";

const initialImg = {
  mobile,
  tablet,
  desktop,
};

const imgRequire = () => {
  const mobile = require("./assets/image-best-gear-desktop.jpg");
  const tablet = require("./assets/image-best-gear-tablet.jpg");
  const desktop = require("./assets/image-best-gear-mobile.jpg");
  return { mobile, tablet, desktop };
};

export const AudioGear: FC = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const { isImageLoaded } = useIsImageLoaded(imgRef);
  const { img } = useImagePreload({ imgRequire, initialImg, isImageLoaded });

  return (
    <StyledAudioGear>
      <picture>
        <source media={myTheme.media.desktop} srcSet={img.desktop} />
        <source media={myTheme.media.tablet} srcSet={img.tablet} />
        <img ref={imgRef} src={img.mobile} alt="audio-gear-image" />
      </picture>
      <Description>
        <h1>
          Bringing you the <span>best</span> audio gear
        </h1>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </Description>
    </StyledAudioGear>
  );
};
