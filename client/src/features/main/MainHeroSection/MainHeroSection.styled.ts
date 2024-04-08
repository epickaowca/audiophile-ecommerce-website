import { StyledProductDescription } from "../../shared/ProductDescription";
import { styled, css } from "styled-components";
import { headerHeight } from "../Header";

export const StyledMainHeroSection = styled.section(({ theme: { media } }) => {
  return css`
    --wrapper-height: 600px;
    --top-with-offset: calc(calc(${headerHeight} + 3px) * -1);
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--wrapper-height);
    padding-bottom: ${headerHeight};
    margin-bottom: -${headerHeight};
    & > ${StyledProductDescription} {
      & > .title_wrapper > h1 {
        --letter-spacing: 2px;
        color: white;
        font-size: 2.25rem;
        line-height: 2.5rem;
      }
      & > .new-product {
        color: rgba(255, 255, 255, 0.5);
        margin-bottom: -5px;
      }
      & > .description {
        color: rgba(255, 255, 255, 0.75);
        font-weight: 400;
        max-width: 370px;
      }
    }

    & > .mask,
    .bg {
      position: absolute;
      left: 0;
      top: var(--top-with-offset);
      width: 100%;
      height: calc(100% + 3px);
    }

    & > .mask {
      z-index: -1;
      background-color: rgba(0, 0, 0, 0.35);
    }

    & > .bg {
      z-index: -2;
      background-color: #191919;
    }

    @media ${media.tablet} {
      --wrapper-height: 730px;
      ${StyledProductDescription} {
        --gap: 35px;
        & > .title_wrapper > h1 {
          --letter-spacing: 3px;
          font-size: 3.5rem;
          line-height: 3.5rem;
        }
        & > .description {
          font-weight: 500;
        }
      }
    }

    @media ${media.desktop} {
      justify-content: flex-start;

      & > ${StyledProductDescription} {
        margin: auto;
        padding-left: 50px;
        width: 100%;
        max-width: 1400px;
        & > .title_wrapper > h1 {
          --letter-spacing: 5px;
        }
      }
    }
  `;
});

export const Picture = styled.picture<{ $isLargeImgLoaded: boolean }>(
  ({ theme, $isLargeImgLoaded }) => {
    return css`
      filter: ${$isLargeImgLoaded ? "none" : "blur(2px)"};
      position: absolute;
      z-index: -2;
      left: calc(50% - 2px);
      top: calc(var(--top-with-offset) + 50%);
      transform: translate(-50%, -50%);
      width: calc(100% + 2px);
      max-width: 1440px;
      height: 100%;
      min-width: 375px;
      display: flex;
      align-items: center;
      overflow: hidden;
      & > img {
        width: 100%;
        height: 100%;
        min-height: calc(var(--wrapper-height) + var(--position-offset));
      }

      @media ${theme.media.desktop} {
        & > img {
          min-width: 1170px;
        }
      }
    `;
  }
);
