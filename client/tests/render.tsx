import { render as reactRender, screen } from "@testing-library/react";
import { ReactNode } from "react";
import { MockTheme } from "./Mocks/themeProvider";
import { MockRouter } from "./Mocks/routerProvider";
import { MockCart, emptyStateTest } from "./Mocks/cartProvider";
import { ContextType } from "../src/features/main/Cart/context/types";

export const render = (
  children: ReactNode,
  cartState: ContextType = emptyStateTest
) => {
  return reactRender(children, {
    wrapper: () => (
      <MockTheme>
        <MockRouter>
          <MockCart staticState={cartState}>{children}</MockCart>
        </MockRouter>
      </MockTheme>
    ),
  });
};
