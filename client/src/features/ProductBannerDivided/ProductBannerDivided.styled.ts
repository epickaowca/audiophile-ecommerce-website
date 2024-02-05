import { css, styled } from "styled-components";

export const StyledProductBannerDivided = styled.div(({ theme }) => {
  return css`
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: auto;

    & > .card {
      width: 100%;
      height: 200px;
      border-radius: 7px;
    }
    & > .card.picture {
      overflow: hidden;
      & > picture > img {
        width: 100%;
        min-height: 200px;
      }
    }
    & > .card.gray {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding-left: 20px;
      gap: 25px;
      & > h1 {
        font-size: 1.7rem;
      }
    }
    & > .card.gray {
      background-color: ${theme.grayLight};
    }

    @media ${theme.media.tablet} {
      flex-direction: row;
      margin: auto;
      max-width: 1300px;

      & > .card {
        flex-grow: 1;
        max-width: unset;
        height: 320px;
      }
      & > .card.picture {
        & > picture > img {
          width: 100%;
          min-height: 320px;
        }
      }
    }

    @media ${theme.media.desktop} {
      & > .card {
        height: 350px;
      }
      & > .card.picture {
        & > picture > img {
          min-height: 350px;
        }
      }
    }
  `;
});
