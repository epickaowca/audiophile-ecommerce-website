import { FC, useState, useEffect } from "react";
import { Navigation, navId } from "./components/Navigation";
import { styled, css } from "styled-components";
import cartIcon from "./assets/icon-cart.svg";
import hamburgerIcon from "./assets/icon-hamburger.svg";
import { wrapperStyles } from "../../styles/wrapperStyles";
import { Overlay } from "../Overlay";
import logo from "./assets/logo.svg";

type HeaderProps = {
  transparentBg?: boolean;
};

export const Header: FC<HeaderProps> = ({ transparentBg }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <StyledHeader $transparentBg={transparentBg} $isNavOpen={isNavOpen}>
      <Wrapper>
        <div className="left-side">
          <button
            className="menu"
            type="button"
            aria-label="Menu"
            aria-expanded={isNavOpen}
            aria-controls={navId}
          >
            <img
              onClick={() => setIsNavOpen((prev) => !prev)}
              src={hamburgerIcon}
              alt="hamburgerIcon"
            />
          </button>
          <img className="logo" src={logo} alt="logo" />
        </div>
        <Navigation isNavOpen={isNavOpen} />
        <div className="cart">
          <button aria-label="Cart">
            <img src={cartIcon} alt="cartIcon" />
          </button>
        </div>
      </Wrapper>
      {isNavOpen && (
        <Overlay displayOnDesktop={false} onClick={() => setIsNavOpen(false)} />
      )}
    </StyledHeader>
  );
};

export const headerHeight = "91px";

const StyledHeader = styled.header<{
  $transparentBg?: boolean;
  $isNavOpen?: boolean;
}>(({ theme, $transparentBg, $isNavOpen }) => {
  return css`
    display: block;
    position: relative;
    z-index: ${theme.overlayZIndex + 1};
    background-color: ${$transparentBg && !$isNavOpen
      ? "transparent"
      : "#000000"};
    height: ${headerHeight};

    @media ${theme.media.desktop} {
      background-color: ${$transparentBg ? "transparent" : "#000000"};
    }
  `;
});

const Wrapper = styled.div(({ theme }) => {
  return css`
    ${wrapperStyles}
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
        background: transparent;
        border: none;
      }
    }

    @media ${theme.media.tablet} {
      & > .left-side {
        justify-content: flex-start;
        gap: 40px;
      }
    }
    @media ${theme.media.desktop} {
      & > .left-side {
        & > .menu {
          display: none;
        }
      }
    }
  `;
});
