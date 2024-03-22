import { styled, css } from "styled-components";
import { StyledCartProduct } from "../../../Cart";

export const StyledThankYou = styled.div(({ theme }) => {
  return css`
    max-width: 560px;
    position: absolute;
    background-color: white;
    left: 50%;
    transform: translateX(-50%);
    top: 15%;
    z-index: ${theme.overlayZIndex + 1};
    width: 90%;
    border-radius: 10px;
    overflow: hidden;
    padding: 25px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > img {
      width: 50px;
    }

    & > h2 {
      text-transform: uppercase;
    }
    & > p {
      font-weight: 500;
      color: ${theme.grayDarkText};
    }
  `;
});

export const ProductsWrapper = styled.div(({ theme }) => {
  return css`
    border-radius: 10px;
    overflow: hidden;

    & > div {
      padding: 10px;
      &:nth-child(1) {
        padding-right: 20px;
        background-color: ${theme.grayLight};
      }
      &:nth-child(2) {
        background-color: black;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 30px;
        & > span {
          &:nth-child(1) {
            color: rgba(255, 255, 255, 0.5);
            text-transform: uppercase;
          }
          &:nth-child(2) {
            color: white;
            font-weight: bold;
          }
        }
      }

      & ${StyledCartProduct} {
        & > .product {
          gap: 10px;
          & > .description {
            & > h3 {
              font-size: 0.9rem;
              margin-bottom: 0;
              line-height: 0.9rem;
            }
          }
        }
      }
    }

    @media ${theme.media.tablet} {
      display: flex;
      width: 100%;

      & > div {
        &:nth-child(1) {
          flex: 2;
        }
        &:nth-child(2) {
          flex: 1;
          display: flex;
          justify-content: center;
        }
      }
    }
  `;
});
