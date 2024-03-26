import { styled, css } from "styled-components";

export const StyledCart = styled.div(({ theme }) => {
  return css`
    position: relative;
    background-color: white;
    border-radius: 7px;
    width: 100%;
    max-width: 360px;
    min-height: 350px;
    border-radius: 10px;
    padding: 25px;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 35px;
    & > .empty-h1 {
      margin-top: 100px;
      text-align: center;
    }
    & > .price-list {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    & > .heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > h2 {
        font-size: 1rem;
        font-weight: bold;
        text-transform: uppercase;
      }
      & > button {
        background-color: transparent;
        border: none;
        text-decoration: underline;
        color: ${theme.grayDarkText};
        font-size: 0.9rem;
        cursor: pointer;
        font-weight: 500;
        &:hover {
          color: ${theme.orangeMedium};
        }
      }
    }

    @media ${theme.media.tablet} {
      padding: 35px;
      padding-top: 50px;
      max-width: 370px;
    }
  `;
});
