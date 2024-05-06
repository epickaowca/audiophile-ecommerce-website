import { FC } from "react";
import { useLocation, Link } from "react-router-dom";
import { StyledNavList } from "./NavList.styled";
import { modifiers } from "@root/utils";

export { StyledNavList };

export const menuItems = [
  { label: "home", to: "/" },
  { label: "headphones", to: "/category/headphones" },
  { label: "speakers", to: "/category/speakers" },
  { label: "earphones", to: "/category/earphones" },
];

export const NavList: FC = () => {
  const { pathname } = useLocation();
  const { styledComponentId: NavList } = StyledNavList;
  return (
    <StyledNavList $className={NavList} role="menubar">
      {menuItems.map(({ to, label }) => {
        const isActive = to === pathname;
        const attrs = {
          to,
          "aria-current": isActive ? "page" : undefined,
          className: modifiers({
            baseClass: `${NavList}_menuLink`,
            modifier: isActive && "active",
          }),
        } as const;

        return (
          <li key={label} role="menuitem" className={`${NavList}_li`}>
            <Link {...attrs}>{label}</Link>
          </li>
        );
      })}
    </StyledNavList>
  );
};
