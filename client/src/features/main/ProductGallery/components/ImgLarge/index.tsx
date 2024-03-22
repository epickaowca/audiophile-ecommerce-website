import { FC, useRef } from "react";
import { myTheme } from "../../../../../styles/styled";
import { useImgPreload } from "../../../../../hooks/useImgPreload";
import { Image } from "../../../../../types";
import { styled, css } from "styled-components";

type ImgLargeProps = {
  initialImg: Image;
  largeImg: Image;
};

export const ImgLarge: FC<ImgLargeProps> = ({ initialImg, largeImg }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const { img } = useImgPreload({ imgRef, initialImg, largeImg });

  return (
    <Picture $isLargeImgLoaded={img.isLargeImgLoaded}>
      <source media={myTheme.media.desktop} srcSet={img.desktop} />
      <source media={myTheme.media.tablet} srcSet={img.tablet} />
      <img ref={imgRef} src={img.mobile} alt="gallery-img-3" />
    </Picture>
  );
};

const Picture = styled.picture<{ $isLargeImgLoaded: boolean }>(
  ({ $isLargeImgLoaded, theme }) => {
    return css`
      filter: ${$isLargeImgLoaded ? "none" : "blur(4px)"};
      width: 100%;
      height: 420px;
      overflow: hidden;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      & > img {
        min-width: 400px;
        width: 100%;
        min-height: 100%;
      }
      @media ${theme.media.tablet} {
        flex: 6;
        height: 100%;
        & > img {
          min-width: unset;
        }
      }
    `;
  }
);
