import { FC, useState, useEffect } from "react";
import { Navigation, navId } from "./components/Navigation";
import { StyledHeader, Wrapper } from "./Header.styled";
import cartIcon from "./assets/icon-cart.svg";
import hamburgerIcon from "./assets/icon-hamburger.svg";
import { Overlay } from "../Overlay";
import logo from "./assets/logo.svg";

type HeaderProps = {
  transparentBg?: boolean;
};

export const headerHeight = "91px";

export const Header: FC<HeaderProps> = ({ transparentBg }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <StyledHeader transparentBg={transparentBg} isNavOpen={isNavOpen}>
      <Wrapper>
        <div className="left-side">
          <button
            onClick={() => setIsNavOpen((prev) => !prev)}
            className="menu"
            type="button"
            aria-label="Menu"
            aria-expanded={isNavOpen}
            aria-controls={navId}
          >
            <img src={hamburgerIcon} alt="hamburgerIcon" />
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
