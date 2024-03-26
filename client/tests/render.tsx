import { render as reactRender, screen } from "@testing-library/react";
import { ReactNode } from "react";
import { MockTheme } from "./Mocks/themeProvider";
import { MockRouter } from "./Mocks/routerProvider";
import { MockCart } from "./Mocks/cartProvider";

export const render = (children: ReactNode) => {
  return reactRender(children, {
    wrapper: () => (
      <MockTheme>
        <MockRouter>
          <MockCart>{children}</MockCart>
        </MockRouter>
      </MockTheme>
    ),
  });
};
