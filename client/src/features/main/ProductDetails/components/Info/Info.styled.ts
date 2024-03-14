import { styled, css } from "styled-components";

export const StyledInfo = styled.div(({ theme }) => {
  return css`
    width: 90%;
    margin: 65px auto;
    display: flex;
    flex-direction: column;
    gap: 65px;
    color: ${theme.grayDarkText};
    & > .box {
      display: flex;
      flex-direction: column;
      gap: 20px;
      & > h2 {
        margin-bottom: 10px;
        color: black;
      }

      & > .includes_wrapper {
        display: flex;
        flex-direction: column;
        gap: 7px;
        & > div {
          display: flex;
          & > .quantity {
            display: block;
            width: 50px;
            color: ${theme.orangeMedium};
            font-weight: bold;
          }
        }
      }
    }

    @media ${theme.media.tablet} {
      margin-top: 100px;
      & > .box {
        & > h2 {
          font-size: 2rem;
        }
      }
    }

    @media ${theme.media.desktop} {
      margin-top: 150px;
      flex-direction: row;
      justify-content: space-between;
      max-width: 1300px;
      /* gap: 20%; */
      & > .box {
        min-width: 215px;
        &.features {
          max-width: 645px;
        }
        &.includes {
          /* margin-left: -50px; */
          /* min-width: 405px; */
        }
      }
    }
  `;
});
