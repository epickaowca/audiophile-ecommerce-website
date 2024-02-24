import { styled, css } from "styled-components";

export const StyledAudioGear = styled.div<{ $isLargeImgLoaded: boolean }>(
  ({ theme, $isLargeImgLoaded }) => {
    return css`
      width: 90%;
      margin: 90px auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;

      & > picture {
        filter: ${$isLargeImgLoaded ? "none" : "blur(3px)"};
        width: 100%;
        height: 300px;
        border-radius: 7px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        overflow: hidden;

        & > img {
          min-width: 327px;
          width: 100%;
          min-height: 300px;
        }
      }

      @media ${theme.media.tablet} {
        gap: 70px;
        max-width: 1200px;
        margin: 100px auto;
      }

      @media ${theme.media.desktop} {
        gap: 25px;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;

        & > picture {
          flex-grow: 1;
          max-width: 540px;
          height: 540px;

          & > img {
            min-width: 540px;
            min-height: 540px;
          }
        }
      }
    `;
  }
);

export const Description = styled.div(
  ({ theme: { media, orangeMedium, grayDarkText } }) => {
    return css`
      text-align: center;
      max-width: 420px;

      & > h1 {
        text-transform: uppercase;
        margin-bottom: 25px;
        font-size: 1.75rem;

        & > span {
          color: ${orangeMedium};
        }
      }

      & > p {
        color: ${grayDarkText};
        font-weight: 500;
        font-size: 0.95rem;
        line-height: 1.6rem;
      }

      @media ${media.tablet} {
        max-width: 573px;

        & > h1 {
          font-size: 2.5rem;
        }
      }

      @media ${media.desktop} {
        text-align: left;
        max-width: 450px;
        flex-grow: 1;
        & > h1 {
          margin-bottom: 50px;
        }
      }
    `;
  }
);
