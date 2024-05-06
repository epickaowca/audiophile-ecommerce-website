import { FC, useRef } from "react";
import desktopMicro from "./assets/micro/desktop.jpg";
import tabletMicro from "./assets/micro/tablet.jpg";
import mobileMicro from "./assets/micro/mobile.jpg";
import desktop from "./assets/desktop.jpg";
import tablet from "./assets/tablet.jpg";
import mobile from "./assets/mobile.jpg";
import { StyledAudioGear } from "./AudioGear.styled";
import { media } from "@root/styled";
import { useImgPreload } from "@root/hooks/useImgPreload";

const initialImg = {
  mobile: mobileMicro,
  tablet: tabletMicro,
  desktop: desktopMicro,
};
const largeImg = {
  mobile,
  tablet,
  desktop,
};

export const AudioGear: FC = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const { desktop, mobile, tablet, isLargeImgLoaded } = useImgPreload({
    largeImg,
    initialImg,
    imgRef,
  });
  const { styledComponentId: AudioGear } = StyledAudioGear;
  return (
    <StyledAudioGear
      $className={AudioGear}
      $isLargeImgLoaded={isLargeImgLoaded}
    >
      <picture className={`${AudioGear}_picture`}>
        <source media={media.desktop} srcSet={desktop} />
        <source media={media.tablet} srcSet={tablet} />
        <img
          className={`${AudioGear}_img`}
          ref={imgRef}
          src={mobile}
          alt="audio-gear-image"
        />
      </picture>
      <div className={`${AudioGear}_textWrapper`}>
        <h1 className={`${AudioGear}_title`}>
          Bringing you the <span>best</span> audio gear
        </h1>
        <p className={`${AudioGear}_description`}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </StyledAudioGear>
  );
};
