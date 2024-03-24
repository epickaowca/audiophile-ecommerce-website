import { FC, useRef, useEffect } from "react";
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
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const onEscapeHandler = (e: KeyboardEvent) => {
      e.key === "Escape" && closeNav();
    };

    ref.current.addEventListener("keydown", onEscapeHandler);
    return () => {
      ref.current?.removeEventListener("keydown", onEscapeHandler);
    };
  }, []);

  return (
    <Nav
      id={navId}
      role="navigation"
      $isNavOpen={isNavOpen}
      $headerHeight={headerHeight}
    >
      <NavList />

      <div ref={ref} className="productCategoriesWrapper">
        {isNavOpen && (
          <ProductCategories
            autoFocusFirstCategory={true}
            navigationCase={true}
          />
        )}
      </div>
    </Nav>
  );
};
