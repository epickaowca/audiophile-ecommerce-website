import { styled, css } from "styled-components";

export const StyledCart = styled.div(({ theme }) => {
  return css`
    background-color: white;
    border-radius: 7px;
    width: 100%;
    max-width: 360px;
    border-radius: 10px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    gap: 35px;

    & > .list {
      display: flex;
      flex-direction: column;
    }

    & > .product-list {
      gap: 25px;
    }

    & > .price-list {
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
      max-width: 370px;
    }
  `;
});
