import { FC, useState, useRef } from "react";
import { Navigation, navId } from "./components/Navigation";
import { StyledHeader, Wrapper } from "./Header.styled";
import cartIcon from "./assets/icon-cart.svg";
import hamburgerIcon from "./assets/icon-hamburger.svg";
import { Overlay } from "../../shared/Overlay";
import logo from "../../../assets/shared/logo.svg";

type HeaderProps = {
  transparentBg?: boolean;
};

export const headerHeight = "91px";

export const Header: FC<HeaderProps> = ({ transparentBg }) => {
  const hamburgerBtn = useRef<HTMLButtonElement>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeNav = () => {
    setIsNavOpen(false);
    document.body.style.overflowY = "auto";
    hamburgerBtn.current?.focus();
  };

  const openNav = () => {
    setIsNavOpen(true);

    document.body.style.overflowY = "hidden";
    hamburgerBtn.current?.focus();
  };

  return (
    <StyledHeader $transparentBg={transparentBg} $isNavOpen={isNavOpen}>
      <Wrapper>
        <div className="left-side">
          <button
            ref={hamburgerBtn}
            onClick={isNavOpen ? closeNav : openNav}
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
        <Navigation
          headerHeight={headerHeight}
          closeNav={closeNav}
          isNavOpen={isNavOpen}
        />
        <div className="cart">
          <button aria-label="Cart">
            <img src={cartIcon} alt="cartIcon" />
          </button>
        </div>
      </Wrapper>
      {isNavOpen && <Overlay displayOnDesktop={false} onClick={closeNav} />}
    </StyledHeader>
  );
};
