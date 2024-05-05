import { FC, useState } from "react";
import { Navigation, navId } from "./components/Navigation";
import { StyledHeader } from "./Header.styled";
import { Overlay } from "../../shared/Overlay";
import logo from "../../../assets/logo.svg";
import { NavList } from "./components/NavList";
import { Headline } from "./components/Headline";
import { useCart, cartId } from "../Cart";
import { ButtonIcon } from "./components/ButtonIcon";
import { modifiers } from "../../../utils";

type HeaderProps = {
  heroBgColor?: boolean;
  displayHeadline?: boolean;
};

export { NavList };
export const headerHeight = "91px";

export const Header: FC<HeaderProps> = ({ heroBgColor, displayHeadline }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { isCartOpen, toggleCart } = useCart();
  const isOverlay = isNavOpen;

  const btnHandler = (open: "cart" | "nav") => {
    if (isNavOpen || isCartOpen) {
      isNavOpen && setIsNavOpen(false);
      isCartOpen && toggleCart("close");
    } else {
      console.log("hi");
      open === "cart" ? toggleCart("open") : setIsNavOpen(true);
    }
  };

  const { styledComponentId: Header } = StyledHeader;
  return (
    <>
      <StyledHeader
        $className={Header}
        $heroBgColor={heroBgColor}
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
            closeNav={() => setIsNavOpen(false)}
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

        {isNavOpen && (
          <Overlay
            displayOnDesktop={false}
            onClick={() => setIsNavOpen(false)}
          />
        )}
      </StyledHeader>
      {displayHeadline && <Headline />}
    </>
  );
};
