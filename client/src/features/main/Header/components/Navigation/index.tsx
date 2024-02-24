import { FC } from "react";
import { ProductCategories } from "../../../ProductCategories";
import { Nav } from "./Navigation.styled";
import { Link } from "react-router-dom";

type NavigationProps = {
  isNavOpen: boolean;
  closeNav: () => void;
  headerHeight: string;
};

const menuItems = [
  { label: "home", href: "/" },
  { label: "headphones", href: "/category/headphones" },
  { label: "speakers", href: "/category/speakers" },
  { label: "earphones", href: "/category/earphones" },
];

export const navId = "main-menu";
export const Navigation: FC<NavigationProps> = ({
  isNavOpen,
  closeNav,
  headerHeight,
}) => {
  return (
    <Nav
      id={navId}
      role="navigation"
      $isNavOpen={isNavOpen}
      $headerHeight={headerHeight}
    >
      <ul role="menubar" className="desktop_nav">
        {menuItems.map((item) => (
          <li key={item.label}>
            <Link role="menuitem" to={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {isNavOpen && (
        <ProductCategories
          onEscapeKeyDown={closeNav}
          autoFocusFirstCategory={true}
          navigationCase={true}
        />
      )}
    </Nav>
  );
};
