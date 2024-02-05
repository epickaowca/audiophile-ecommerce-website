import { styled, css } from "styled-components";
import { StyledProductDescription } from "../ProductDescription";

export const StyledProductBannerXL = styled.section(({ theme }) => {
  return css`
    background-color: ${theme.orangeMedium};
    position: relative;
    height: 600px;
    width: 90%;
    margin: auto;
    padding: 50px 0;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    border-radius: 7px;
    overflow: hidden;

    & > ${StyledProductDescription} {
      z-index: 2;
      & > .title_wrapper {
        & > h1 {
          color: white;
          font-size: 2.5rem;
          line-height: 2.5rem;
        }
      }
      & > .description {
        color: rgba(255, 255, 255, 0.75);
      }
    }

    @media ${theme.media.tablet} {
      height: 720px;
      max-width: 90%;

      & > ${StyledProductDescription} {
        & > .title_wrapper {
          & > h1 {
            font-size: 3.6rem;
            line-height: 3.6rem;
          }
        }
        & > .description {
          max-width: 350px;
        }
      }
    }

    @media ${theme.media.desktop} {
      padding: 0;
      max-width: 1300px;
      margin: auto;
      height: 560px;
      justify-content: space-evenly;
      align-items: center;

      ${StyledProductDescription} {
        max-width: 350px;
      }
    }
  `;
});

export const StyledPatternCircles = styled.img(({ theme: { media } }) => {
  return css`
    --translateY: -50%;
    position: absolute;
    width: 550px;
    left: 50%;
    top: 150px;
    transform: translate(-50%, var(--translateY));
    pointer-events: none;
    z-index: 1;

    @media ${media.tablet} {
      top: 190px;
      width: 950px;
    }

    @media ${media.desktop} {
      --translateY: 50%;
      top: initial;
      left: calc(28% + 10px);
      bottom: 100px;
      width: 1000px;
    }
  `;
});

export const StyledPicture = styled.picture(({ theme: { media } }) => {
  return css`
    & > img {
      position: absolute;
      left: 50%;
      top: 150px;
      transform: translate(-50%, -50%);
      max-width: 160px;
      margin-top: -7px;
      z-index: 2;
    }

    @media ${media.tablet} {
      & > img {
        max-width: 180px;
        margin-top: 0;
        top: 190px;
      }
    }

    @media ${media.desktop} {
      align-self: flex-end;
      margin-bottom: -17px;
      display: flex;
      justify-content: center;

      & > img {
        width: 100%;
        max-width: 400px;
        position: relative;
        left: initial;
        bottom: initial;
        top: initial;
        transform: initial;
      }
    }
  `;
});
