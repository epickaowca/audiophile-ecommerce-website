import { FC, useRef } from "react";
import { myTheme } from "@root/styled";
import { useImgPreload } from "@root/hooks/useImgPreload";
import { Image } from "@root/types";
import { styled, css } from "styled-components";

type ImgLargeProps = {
  initialImg: Image;
  largeImg: Image;
};

export const ImgLarge: FC<ImgLargeProps> = ({ initialImg, largeImg }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const { desktop, isLargeImgLoaded, mobile, tablet } = useImgPreload({
    imgRef,
    initialImg,
    largeImg,
  });

  const { styledComponentId: Picture } = StyledPicture;
  return (
    <StyledPicture $className={Picture} $blur={!isLargeImgLoaded}>
      <source media={myTheme.media.desktop} srcSet={desktop} />
      <source media={myTheme.media.tablet} srcSet={tablet} />
      <img
        className={`${Picture}_img`}
        ref={imgRef}
        src={mobile}
        alt="gallery-img-3"
      />
    </StyledPicture>
  );
};

const StyledPicture = styled.picture<{ $className: string; $blur: boolean }>(
  ({ $blur, theme: { media, grayLight }, $className }) => {
    return css`
      filter: ${$blur ? "blur(4px)" : "none"};
      width: 100%;
      height: 420px;
      overflow: hidden;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;

      .${$className} {
        &_img {
          min-width: 400px;
          width: 100%;
          min-height: 100%;
          background-color: ${grayLight};
        }
      }

      @media ${media.tablet} {
        flex: 6;
        height: 100%;

        .${$className} {
          &_img {
            min-width: unset;
          }
        }
      }
    `;
  }
);
