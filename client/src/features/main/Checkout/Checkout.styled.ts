import { styled, css } from "styled-components";

export const CartWrapper = styled.div(({ theme }) => {
  return css`
    background-color: white;
    border-radius: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    max-width: 360px;
    height: 100%;
    overflow: hidden;
    & > .black-box {
      display: none;
    }

    @media ${theme.media.tablet} {
      max-width: unset;
      justify-content: space-between;
      align-items: stretch;
      & > .black-box {
        width: 100%;
        min-height: 100%;
        background-color: ${theme.grayDark};
        display: flex;
        justify-content: center;
        align-items: center;
        & > p {
          text-align: center;
          font-size: 2rem;
          color: white;
          max-width: 300px;
        }
      }
    }

    @media ${theme.media.desktop} {
      max-width: 360px;
      & > .black-box {
        display: none;
      }
    }
  `;
});

export const StyledCheckout = styled.div(({ theme }) => {
  return css`
    width: 90%;
    margin: 50px auto;
    & > form {
      display: flex;
      flex-direction: column;
      gap: 35px;
      align-items: center;
    }

    @media ${theme.media.desktop} {
      max-width: 1300px;
      margin: 100px auto;
      & > form {
        flex-direction: row;
        align-items: flex-start;
      }
    }
  `;
});
