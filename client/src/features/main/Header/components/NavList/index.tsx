import { FC } from "react";
import { useLocation, Link } from "react-router-dom";
import { StyledNavList as SNL } from "./NavList.styled";

export const StyledNavList = SNL;

export const menuItems = [
  { label: "home", href: "/" },
  { label: "headphones", href: "/category/headphones" },
  { label: "speakers", href: "/category/speakers" },
  { label: "earphones", href: "/category/earphones" },
];

export const NavList: FC = () => {
  const { pathname } = useLocation();
  return (
    <StyledNavList role="menubar">
      {menuItems.map(({ href, label }) => {
        const isActive = href === pathname;
        const attrs = {
          className: isActive ? "active" : undefined,
          "aria-current": isActive ? ("page" as const) : undefined,
          to: href,
        };
        return (
          <li key={label} role="menuitem">
            <Link {...attrs}>{label}</Link>
          </li>
        );
      })}
    </StyledNavList>
  );
};
