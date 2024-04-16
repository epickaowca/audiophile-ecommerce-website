import { FC, useRef } from "react";
import { ProductCategories } from "../../../ProductCategories";
import { NavList } from "../NavList";
import { NavigationProps } from "./types";
import { StyledNav } from "./Navigation.styled";
import { useEscapeHandler } from "../../../../../hooks/useEscape";

export const navId = "main-menu";

export const Navigation: FC<NavigationProps> = ({ closeNav, ...rest }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEscapeHandler({ ref, onEscape: closeNav });

  return (
    <StyledNav ref={ref} {...rest} id={navId} role="navigation">
      <NavList />
      <ProductCategories autoFocus={rest.$isNavOpen} navigationCase={true} />
    </StyledNav>
  );
};
