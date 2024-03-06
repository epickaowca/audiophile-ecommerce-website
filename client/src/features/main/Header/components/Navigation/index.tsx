import { FC } from "react";
import { ProductCategories } from "../../../ProductCategories";
import { Nav } from "./Navigation.styled";
import { NavList } from "../NavList";

type NavigationProps = {
  isNavOpen: boolean;
  closeNav: () => void;
  headerHeight: string;
};

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
      <NavList />

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
