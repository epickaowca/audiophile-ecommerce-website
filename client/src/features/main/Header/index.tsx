import { FC, useState, useRef } from "react";
import { Navigation, navId } from "./components/Navigation";
import { StyledHeader, Wrapper } from "./Header.styled";
import cartIcon from "./assets/icon-cart.svg";
import hamburgerIcon from "./assets/icon-hamburger.svg";
import { Overlay } from "../../shared/Overlay";
import logo from "../../../assets/shared/logo.svg";
import { NavList as NL } from "./components/NavList";
import { Headline } from "./components/Headline";
import { ProductCategories } from "../../../types";

type HeaderProps = {
  transparentBg?: boolean;
  displayHeadline?: boolean;
};

export const NavList = NL;

export const headerHeight = "91px";

export const Header: FC<HeaderProps> = ({ transparentBg, displayHeadline }) => {
  const hamburgerBtn = useRef<HTMLButtonElement>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeNav = () => {
    setIsNavOpen(false);

    document.body.classList.remove("overflow-y-hidden");
    hamburgerBtn.current?.focus();
  };

  const openNav = () => {
    setIsNavOpen(true);

    document.body.classList.add("overflow-y-hidden");
    hamburgerBtn.current?.focus();
  };

  return (
    <>
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
            <img
              width="143px"
              height="25px"
              className="logo"
              src={logo}
              alt="logo"
            />
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
      {displayHeadline && <Headline />}
    </>
  );
};
