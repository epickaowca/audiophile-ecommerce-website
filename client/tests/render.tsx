import { render as reactRender, screen } from "@testing-library/react";
import { ReactNode } from "react";
import { MockRouter } from "./mocks/routerProvider";
import { MockCart, emptyStateTest } from "./mocks/cartProvider";
import { MockTheme } from "./mocks/themeProvider";
import { ContextType } from "../src/features/main/Cart/context/types";

export const render = (
  children: ReactNode,
  cartState: ContextType = emptyStateTest
) => {
  return reactRender(<>{children}</>, {
    wrapper: () => (
      <MockRouter>
        <MockTheme>
          <MockCart staticState={cartState}>{children}</MockCart>
        </MockTheme>
      </MockRouter>
    ),
  });
};
