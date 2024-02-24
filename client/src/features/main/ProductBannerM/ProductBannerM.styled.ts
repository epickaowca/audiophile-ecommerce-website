import { styled, css } from "styled-components";

export const StyledProductBannerM = styled.div(({ theme: { media } }) => {
  return css`
    margin: auto;
    width: 90%;
    height: 320px;
    border-radius: 7px;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    padding-left: 10%;

    & > h1 {
      letter-spacing: 2px;
      margin-left: -2px;
      font-size: 1.7rem;
    }

    @media ${media.tablet} {
      max-width: 1300px;
      gap: 25px;
      padding-left: 70px;
    }

    @media ${media.desktop} {
      gap: 30px;
      height: 350px;
      padding-left: 130px;
    }
  `;
});

export const Picture = styled.picture<{ $isLargeImgLoaded: boolean }>(
  ({ theme: { media }, $isLargeImgLoaded }) => {
    return css`
      filter: ${$isLargeImgLoaded ? "none" : "blur(2px)"};
      z-index: -1;
      left: 0;
      top: 0;
      position: absolute;
      width: 100%;
      & > img {
        width: 100%;
        min-height: 320px;
      }

      @media ${media.desktop} {
        & > img {
          min-height: 350px;
        }
      }
    `;
  }
);
