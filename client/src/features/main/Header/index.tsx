import React, { FC, useState, useRef, useEffect } from "react";
import { Navigation, navId } from "./components/Navigation";
import { StyledHeader } from "./Header.styled";
import { Overlay } from "../../shared/Overlay";
import logo from "../../../assets/shared/logo.svg";
import { NavList } from "./components/NavList";
import { Headline } from "./components/Headline";
import { useCart, cartId } from "../Cart";
import { ButtonIcon } from "./components/ButtonIcon";
import { modifiers } from "../../../utils";

type HeaderProps = {
  transparentBg?: boolean;
  displayHeadline?: boolean;
};

export { NavList };
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
    const { styledComponentId: Header } = StyledHeader;
    return (
      <>
        <StyledHeader
          $className={Header}
          $transparentBg={transparentBg}
          $isNavOpen={isOverlay}
        >
          <div className={`${Header}_wrapper`}>
            <ButtonIcon
              className={modifiers({
                baseClass: `${Header}_icon`,
                modifier: "menu",
              })}
              btnIcon="menu"
              aria-controls={navId}
              aria-expanded={isNavOpen}
              onClick={() => btnHandler("nav")}
            />
            <img className={`${Header}_logo`} alt="logo" src={logo} />
            <Navigation
              $headerHeight={headerHeight}
              $isNavOpen={isNavOpen}
              closeNav={closeNav}
            />
            <ButtonIcon
              className={modifiers({
                baseClass: `${Header}_icon`,
                modifier: "cart",
              })}
              btnIcon="cart"
              aria-controls={cartId}
              aria-expanded={isCartOpen}
              onClick={() => btnHandler("cart")}
            />
          </div>

          {isNavOpen && <Overlay displayOnDesktop={false} onClick={closeNav} />}
        </StyledHeader>
        {displayHeadline && <Headline />}
      </>
    );
  }
);
