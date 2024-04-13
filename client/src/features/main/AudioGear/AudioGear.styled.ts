import { styled, css } from "styled-components";

export const StyledAudioGear = styled.div<{
  $isLargeImgLoaded: boolean;
  $className: string;
}>(({ theme, $isLargeImgLoaded, $className }) => {
  return css`
    width: 90%;
    margin: 90px auto;

    .${$className} {
      &_picture {
        filter: ${$isLargeImgLoaded ? "none" : "blur(3px)"};
        width: 100%;
        height: 300px;
        border-radius: 7px;
        overflow: hidden;
        margin-bottom: 40px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
      }

      &_img {
        min-width: 327px;
        width: 100%;
        min-height: 300px;
      }

      &_textWrapper {
        margin: auto;
        max-width: 420px;
        text-align: center;
      }

      &_title {
        text-transform: uppercase;
        margin-bottom: 25px;
        font-size: 1.75rem;

        & > span {
          color: ${theme.orangeMedium};
        }
      }

      &_description {
        color: ${theme.grayDarkText};
        font-size: 0.95rem;
        font-weight: 500;
        line-height: 1.6rem;
      }
    }

    @media ${theme.media.tablet} {
      max-width: 1200px;
      margin: 100px auto;

      .${$className} {
        &_picture {
          margin-bottom: 70px;
        }

        &_textWrapper {
          max-width: 573px;
        }

        &_title {
          font-size: 2.5rem;
        }
      }
    }

    @media ${theme.media.desktop} {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      gap: 25px;

      .${$className} {
        &_picture {
          flex-grow: 1;
          max-width: 540px;
          height: 540px;
          margin-bottom: 0;
        }

        &_img {
          min-width: 540px;
          min-height: 540px;
        }

        &_textWrapper {
          margin: 0;
          text-align: left;
          max-width: 450px;
          flex-grow: 1;
        }

        &_title {
          margin-bottom: 50px;
        }
      }
    }
  `;
});
