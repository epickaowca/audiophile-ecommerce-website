import { FC, useState } from "react";
import { Navigation } from "./components/Navigation";
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
    <StyledHeader $transparentBg={transparentBg}>
      <Wrapper>
        <div className="left-side">
          <img
            onClick={() => setIsNavOpen((prev) => !prev)}
            src={hamburgerIcon}
            alt="hamburgerIcon"
          />
          <img src={logo} alt="logo" />
        </div>
        <Navigation isNavOpen={isNavOpen} />
        <div className="cart">
          <img src={cartIcon} alt="cartIcon" />
        </div>
      </Wrapper>
      {isNavOpen && (
        <Overlay displayOnDesktop={false} onClick={() => setIsNavOpen(false)} />
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled.header<{ $transparentBg?: boolean }>(
  ({ theme, $transparentBg }) => {
    return css`
      display: block;
      position: relative;
      z-index: ${theme.overlayZIndex + 1};
      background-color: ${$transparentBg ? "transparent" : "#000000"};
      height: 91px;
    `;
  }
);

const Wrapper = styled.div(({ theme }) => {
  return css`
    ${wrapperStyles}
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: space-between;

    & > .left-side {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-grow: 1;
      & > img {
        cursor: pointer;
        @media ${theme.media.desktop} {
          display: none;
        }
      }
    }

    & > .cart {
      flex-grow: 1;
      text-align: right;
    }
  `;
});
