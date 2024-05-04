import { render as reactRender, screen } from "@testing-library/react";
import { ReactNode } from "react";
import { MockRouter } from "./mocks/routerProvider";
import { MockTheme } from "./mocks/themeProvider";

export const render = (children: ReactNode) => {
  return reactRender(<>{children}</>, {
    wrapper: () => (
      <MockRouter>
        <MockTheme>{children}</MockTheme>
      </MockRouter>
    ),
  });
};
