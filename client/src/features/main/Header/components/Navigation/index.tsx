import { FC } from "react";
import { ProductCategories } from "../../../ProductCategories";
import { Nav } from "./Navigation.styled";

type NavigationProps = {
  isNavOpen: boolean;
  closeNav: () => void;
  headerHeight: string;
};

const menuItems = ["home", "headphones", "speakers", "earphones"];

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
          <li key={item}>
            <a role="menuitem" href={`#${item}`}>
              {item}
            </a>
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
