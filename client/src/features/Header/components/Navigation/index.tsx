import { FC } from "react";
import { ProductCategories } from "../../../ProductCategories";
import { Nav } from "./Navigation.styled";

type NavigationProps = {
  isNavOpen: boolean;
};

const menuItems = ["home", "headphones", "speakers", "earphones"];

export const navId = "main-menu";
export const Navigation: FC<NavigationProps> = ({ isNavOpen }) => {
  return (
    <Nav id={navId} role="navigation" isNavOpen={isNavOpen}>
      <ul role="menubar" className="desktop_nav">
        {menuItems.map((item) => (
          <li>
            <a role="menuitem" href={`#${item}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>

      {isNavOpen && (
        <ProductCategories
          autoFocusFirstCategory={true}
          navigationCase={true}
        />
      )}
    </Nav>
  );
};
