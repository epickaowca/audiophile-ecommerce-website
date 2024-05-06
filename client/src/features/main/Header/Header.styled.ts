import { styled, css } from "styled-components";
import { headerHeight } from "./index";
import { overlayZIndex } from "@root/features/shared/Overlay";

export const StyledHeader = styled.header<{
  $heroBgColor?: boolean;
  $isNavOpen?: boolean;
  $className: string;
}>(
  ({ theme: { media, heroBgColor }, $heroBgColor, $isNavOpen, $className }) => {
    return css`
      display: block;
      position: relative;
      z-index: ${overlayZIndex + 1};
      background-color: ${$heroBgColor && !$isNavOpen
        ? heroBgColor
        : "#000000"};
      height: ${headerHeight};
      border-bottom: 1px solid rgba(255, 255, 255, 0.15);

      .${$className} {
        &_wrapper {
          max-width: 90%;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }

        &_icon {
          background-color: transparent;
          border: none;
          cursor: pointer;
        }
      }

      @media ${media.tablet} {
        .${$className} {
          &_wrapper {
            max-width: 1400px;
            padding: 0 50px;
            justify-content: flex-start;
          }

          &_logo {
            margin-left: 40px;
          }

          &_icon--cart {
            margin-left: auto;
          }
        }
      }

      @media ${media.desktop} {
        background-color: ${$heroBgColor ? heroBgColor : "#000000"};
        .${$className} {
          &_wrapper {
            justify-content: space-between;
          }

          &_logo {
            margin-left: 0;
          }

          &_icon--menu {
            display: none;
          }

          &_icon--cart {
            margin-left: 0;
          }
        }
      }
    `;
  }
);
