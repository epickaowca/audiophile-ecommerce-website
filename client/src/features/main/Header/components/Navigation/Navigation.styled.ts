import { StyledNavProps } from "./types";
import { styled, css } from "styled-components";
import { StyledNavList } from "../NavList";
import { StyledProductCategories } from "@root/features/main/ProductCategories";

export const StyledNav = styled.nav<StyledNavProps>(
  ({ theme: { media }, $isNavOpen, $headerHeight }) => {
    return css`
      display: ${$isNavOpen ? "block" : "none"};
      position: absolute;
      width: 100%;
      left: 0;
      top: 91px;
      background-color: white;
      padding: 25px 0 45px 0;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      max-height: calc(100vh - ${$headerHeight});
      overflow-y: auto;

      & > ${StyledNavList} {
        display: none;
      }

      @media ${media.desktop} {
        width: unset;
        display: block;
        overflow-y: unset;
        max-height: unset;
        position: relative;
        top: 0;
        padding: 0;
        background-color: transparent;

        & > ${StyledNavList} {
          display: flex;
          justify-content: center;
        }

        & > ${StyledProductCategories} {
          display: none;
        }
      }
    `;
  }
);
