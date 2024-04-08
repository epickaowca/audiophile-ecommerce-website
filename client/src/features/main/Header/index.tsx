import React, { FC, useState, useRef, useEffect } from "react";
import { Navigation, navId } from "./components/Navigation";
import { StyledHeader, Wrapper } from "./Header.styled";
import cartIcon from "./assets/icon-cart.svg";
import hamburgerIcon from "./assets/icon-hamburger.svg";
import { Overlay } from "../../shared/Overlay";
import logo from "../../../assets/shared/logo.svg";
import { NavList as NL } from "./components/NavList";
import { Headline } from "./components/Headline";
import { useCart } from "../Cart";

type HeaderProps = {
  transparentBg?: boolean;
  displayHeadline?: boolean;
};

export const NavList = NL;
export const headerHeight = "91px";

export const Header: FC<HeaderProps> = React.memo(
  ({ transparentBg, displayHeadline }) => {
    const hamburgerBtn = useRef<HTMLButtonElement>(null);
    const cartBtn = useRef<HTMLButtonElement>(null);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const { toggleCart, isCartOpen } = useCart();
    const isOverlay = isNavOpen;
    const initialRender = useRef(true);

    const closeNav = () => {
      setIsNavOpen(false);
      hamburgerBtn.current?.focus();
    };

    const btnHandler = (open: "cart" | "nav") => {
      console.log("hi");
      if (isNavOpen || isCartOpen) {
        isNavOpen && closeNav();
        isCartOpen && toggleCart("close");
      } else {
        open === "cart" ? toggleCart("open") : setIsNavOpen(true);
      }
    };

    useEffect(
      function onCartClose() {
        if (initialRender.current) {
          initialRender.current = false;
          return;
        }

        if (!isCartOpen) {
          cartBtn.current?.focus();
        }
      },
      [isCartOpen]
    );

    return (
      <>
        <StyledHeader $transparentBg={transparentBg} $isNavOpen={isOverlay}>
          <Wrapper>
            <div className="left-side">
              <button
                ref={hamburgerBtn}
                className="menu"
                aria-label="Menu"
                aria-expanded={isNavOpen}
                aria-controls={navId}
                onClick={() => btnHandler("nav")}
              >
                <img src={hamburgerIcon} alt="hamburgerIcon" />
              </button>
              <img
                width="143px"
                height="25px"
                className="logo"
                alt="logo"
                src={logo}
              />
            </div>
            <Navigation
              headerHeight={headerHeight}
              closeNav={closeNav}
              isNavOpen={isNavOpen}
            />
            <div className="cart">
              <button
                ref={cartBtn}
                aria-label="Cart"
                aria-controls="main-cart"
                aria-expanded={isCartOpen}
                onClick={() => btnHandler("cart")}
              >
                <img src={cartIcon} alt="cartIcon" />
              </button>
            </div>
          </Wrapper>

          {isNavOpen && <Overlay displayOnDesktop={false} onClick={closeNav} />}
        </StyledHeader>
        {displayHeadline && <Headline />}
      </>
    );
  }
);
