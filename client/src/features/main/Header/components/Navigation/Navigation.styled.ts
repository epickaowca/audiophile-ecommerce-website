import { styled, css } from "styled-components";
import { StyledNavList } from "../NavList";

export const Nav = styled.nav<{ $isNavOpen: boolean; $headerHeight: string }>(
  ({ $headerHeight, $isNavOpen, theme: { media } }) => {
    return css`
      display: ${$isNavOpen ? "block" : "none"};
      position: absolute;
      width: 100%;
      left: 0;
      top: 91px;
      background-color: white;
      padding-top: 25px;
      padding-bottom: 45px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      max-height: calc(100vh - ${$headerHeight});
      overflow-y: auto;
      & > .productCategoriesWrapper {
        display: ${$isNavOpen ? "block" : "nonde"};
      }
      & > ${StyledNavList} {
        display: none;
      }

      @media ${media.desktop} {
        overflow-y: unset;
        max-height: unset;
        display: block;
        position: relative;
        top: 0;
        padding: 0;
        background-color: transparent;
        & > .productCategoriesWrapper {
          display: none;
        }
        & > ${StyledNavList} {
          display: flex;
          justify-content: center;
        }
      }
    `;
  }
);
