import { FC } from "react";
import { styled, css } from "styled-components";
import { myTheme } from "../../../../../styles/styled";
import { Image } from "../../../../../types";

type ImgSmallProps = {
  img1: Image;
  img2: Image;
};

export const ImgSmall: FC<ImgSmallProps> = ({ img1, img2 }) => {
  const { styledComponentId: Wrapper } = ImgWrapper;
  return (
    <ImgWrapper $className={Wrapper}>
      <picture className={`${Wrapper}_picture`}>
        <source media={myTheme.media.desktop} srcSet={img1.desktop} />
        <source media={myTheme.media.tablet} srcSet={img1.tablet} />
        <img
          className={`${Wrapper}_img`}
          src={img1.mobile}
          alt="gallery-img-1"
        />
      </picture>
      <picture className={`${Wrapper}_picture`}>
        <source media={myTheme.media.desktop} srcSet={img2.desktop} />
        <source media={myTheme.media.tablet} srcSet={img2.tablet} />
        <img
          className={`${Wrapper}_img`}
          src={img2.mobile}
          alt="gallery-img-2"
        />
      </picture>
    </ImgWrapper>
  );
};

const ImgWrapper = styled.div<{ $className: string }>(
  ({ theme: { grayLight, media }, $className }) => {
    return css`
      display: flex;
      flex-direction: column;
      gap: 25px;
      height: 420px;

      .${$className} {
        &_picture {
          height: 50%;
          width: 100%;
          overflow: hidden;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        &_img {
          min-width: 365px;
          width: 100%;
          min-height: 100%;
          background-color: ${grayLight};
        }
      }

      @media ${media.tablet} {
        gap: 20px;
        flex: 4;
        min-width: 280px;
        height: 100%;

        .${$className} {
          &_img {
            min-width: unset;
          }
        }
      }

      @media ${media.desktop} {
        gap: 30px;
      }
    `;
  }
);
