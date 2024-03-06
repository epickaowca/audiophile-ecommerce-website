import { styled, css } from "styled-components";
import { StyledProductCategories } from "../../../ProductCategories";
import { StyledNavList } from "../NavList";

export const Nav = styled.nav<{ $isNavOpen: boolean; $headerHeight: string }>(
  ({ $headerHeight, $isNavOpen, theme: { media, orangeMedium } }) => {
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
      & > ${StyledNavList} {
        display: none;
      }

      & > ${StyledProductCategories} {
        margin: auto;
        margin-top: 50px;
      }

      @media ${media.tablet} {
        & > ${StyledProductCategories} {
          margin: auto;
          margin-top: 50px;
        }
      }

      @media ${media.desktop} {
        overflow-y: unset;
        max-height: unset;
        display: block;
        position: relative;
        top: 0;
        padding: 0;
        background-color: transparent;
        & > ${StyledProductCategories} {
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
