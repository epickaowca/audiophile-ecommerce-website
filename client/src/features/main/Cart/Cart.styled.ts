import { styled, css } from "styled-components";
import { headerHeight } from "../Header";

export const Wrapper = styled.div<{ $isCartOpen: boolean }>(
  ({ theme, $isCartOpen }) => {
    return css`
      z-index: ${$isCartOpen ? theme.overlayZIndex + 1 : "initial"};
      position: absolute;
      left: 50%;
      top: ${`calc(${headerHeight} + 30px)`};
      transform: translateX(-50%);
      width: 90%;
      height: 0;

      @media ${theme.media.tablet} {
        justify-content: flex-end;
      }

      @media ${theme.media.desktop} {
        max-width: 1300px;
      }
    `;
  }
);

export const StyledCart = styled.div(({ theme }) => {
  return css`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    border-radius: 7px;
    width: 100%;
    max-width: 360px;
    border-radius: 10px;

    padding: 25px;
    display: flex;
    flex-direction: column;
    gap: 35px;

    & > .total {
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > .text {
        color: ${theme.grayDarkText};
        font-weight: 500;
      }
      & > .price {
        font-weight: bold;
      }
    }

    & > .product-list {
      display: flex;
      flex-direction: column;
      gap: 25px;
    }

    & > .heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > span {
        font-weight: bold;
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
      left: initial;
      transform: initial;
      right: 0;
    }
  `;
});
