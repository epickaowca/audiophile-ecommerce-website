import { styled, css } from "styled-components";

export const StyledCartProduct = styled.div(({ theme }) => {
  return css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > .quantity-span {
      font-weight: bold;
      color: ${theme.grayDarkText};
    }

    & > .product {
      display: flex;
      align-items: center;
      gap: 25px;
      & > img {
        width: 64px;
        border-radius: 7px;
      }
      & > .description {
        text-transform: uppercase;
        & > h3 {
          font-size: 1rem;
          margin-bottom: 5px;
        }
        & > span {
          font-size: 0.9rem;
          font-weight: bold;
          color: ${theme.grayDarkText};
        }
      }
    }
  `;
});
