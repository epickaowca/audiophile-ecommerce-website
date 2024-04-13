import { FC, useRef, useEffect } from "react";
import { ProductCategories } from "../../../ProductCategories";
import { NavList } from "../NavList";
import { NavigationProps } from "./types";
import { styled, css } from "styled-components";
import { StyledNavList } from "../NavList";

export const navId = "main-menu";

const Navigation: FC<NavigationProps> = ({ closeNav, className }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const handler = (e: KeyboardEvent) => e.key === "Escape" && closeNav();
    ref.current.addEventListener("keydown", handler);
    return () => {
      ref.current?.removeEventListener("keydown", handler);
    };
  }, []);

  return (
    <nav className={className} id={navId} role="navigation">
      <NavList />
      <div ref={ref} className="productCategoriesWrapper">
        <ProductCategories
          autoFocusFirstCategory={true}
          navigationCase={true}
        />
      </div>
    </nav>
  );
};

export const StyledNavigation = styled(Navigation)<NavigationProps>(
  ({ theme: { media }, headerHeight, isNavOpen }) => {
    return css`
      display: ${isNavOpen ? "block" : "none"};
      position: absolute;
      width: 100%;
      left: 0;
      top: 91px;
      background-color: white;
      padding-top: 25px;
      padding-bottom: 45px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      max-height: calc(100vh - ${headerHeight});
      overflow-y: auto;
      & > .productCategoriesWrapper {
        display: ${isNavOpen ? "block" : "none"};
      }
      & > ${StyledNavList} {
        display: none;
      }

      @media ${media.desktop} {
        overflow-y: unset;
        max-height: unset;
        display: block;
        position: relative;
        top: 0;
        padding: 0;
        background-color: transparent;
        & > .productCategoriesWrapper {
          display: none;
        }
        & > ${StyledNavList} {
          display: flex;
          justify-content: center;
        }
      }
    `;
  }
);
