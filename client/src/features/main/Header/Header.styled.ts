import { styled, css } from "styled-components";
import { headerHeight } from "./index";

export const StyledHeader = styled.header<{
  $transparentBg?: boolean;
  $isNavOpen?: boolean;
}>(({ theme: { media, overlayZIndex }, $transparentBg, $isNavOpen }) => {
  return css`
    display: block;
    position: relative;
    z-index: ${$isNavOpen ? overlayZIndex + 1 : "initial"};
    background-color: ${$transparentBg && !$isNavOpen ? "transparent" : "#000"};
    height: ${headerHeight};

    @media ${media.desktop} {
      background-color: ${$transparentBg ? "transparent" : "#000000"};
    }
  `;
});

export const Wrapper = styled.div(({ theme: { media } }) => {
  return css`
    max-width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    & > .left-side {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-grow: 1;
      & > .menu {
        background-color: transparent;
        border: none;
        cursor: pointer;
      }
    }

    & > .cart {
      flex-grow: 1;
      text-align: right;
      & > button {
        cursor: pointer;
        background: transparent;
        border: none;
      }
    }

    @media ${media.tablet} {
      max-width: 1400px;
      padding: 0 50px;
      & > .left-side {
        justify-content: flex-start;
        gap: 40px;
      }
    }
    @media ${media.desktop} {
      & > .left-side {
        & > .menu {
          display: none;
        }
      }
    }
  `;
});
