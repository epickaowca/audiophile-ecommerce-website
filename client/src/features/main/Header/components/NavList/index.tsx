import { FC } from "react";
import { useLocation, Link } from "react-router-dom";
import { StyledNavList as SNL } from "./NavList.styled";

export const StyledNavList = SNL;

const menuItems = [
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
          role: "menuitem",
          className: isActive ? "active" : undefined,
          "aria-current": isActive ? ("page" as const) : undefined,
          to: href,
        };
        return (
          <li key={label}>
            <Link {...attrs}>{label}</Link>
          </li>
        );
      })}
    </StyledNavList>
  );
};
