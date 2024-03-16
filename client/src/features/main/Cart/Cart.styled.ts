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
      display: flex;
      justify-content: center;
      align-items: flex-start;

      @media ${theme.media.tablet} {
        justify-content: flex-end;
      }

      @media ${theme.media.desktop} {
        max-width: 1300px;
      }
    `;
  }
);
