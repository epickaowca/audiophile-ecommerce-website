import { styled, css } from "styled-components";
import { StyledProductCategories } from "../../../ProductCategories";

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
      & > .desktop_nav {
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
        & > .desktop_nav {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          & > li {
            list-style-type: none;
            & > a {
              text-transform: uppercase;
              color: white;
              text-decoration: none;
              &::first-letter {
                text-transform: uppercase;
              }
            }
          }
        }
      }
    `;
  }
);
