import { FC } from "react";
import { styled, css } from "styled-components";
import { myTheme } from "../../../../../styles/styled";
import { Image } from "../../../../../types";

type ImgSmallProps = {
  img1: Image;
  img2: Image;
};

export const ImgSmall: FC<ImgSmallProps> = ({ img1, img2 }) => {
  return (
    <Wrapper>
      <picture>
        <source media={myTheme.media.desktop} srcSet={img1.desktop} />
        <source media={myTheme.media.tablet} srcSet={img1.tablet} />
        <img src={img1.mobile} alt="gallery-img-1" />
      </picture>
      <picture>
        <source media={myTheme.media.desktop} srcSet={img2.desktop} />
        <source media={myTheme.media.tablet} srcSet={img2.tablet} />
        <img src={img2.mobile} alt="gallery-img-2" />
      </picture>
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme }) => {
  return css`
    display: flex;
    flex-direction: column;
    gap: 25px;
    height: 420px;
    & > picture {
      height: 50%;
      width: 100%;
      overflow: hidden;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      & > img {
        min-width: 365px;
        width: 100%;
        min-height: 100%;
        background-color: ${theme.grayLight};
      }
    }

    @media ${theme.media.tablet} {
      gap: 20px;
      flex: 4;
      min-width: 280px;
      height: 100%;
      & > picture {
        & > img {
          min-width: unset;
        }
      }
    }

    @media ${theme.media.desktop} {
      gap: 30px;
    }
  `;
});
