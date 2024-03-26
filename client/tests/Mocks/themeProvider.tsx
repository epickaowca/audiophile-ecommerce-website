import { FC, ReactNode } from "react";
import { myTheme } from "../../src/styles/styled";
import { ThemeProvider } from "styled-components";

export const MockTheme: FC<{ children?: ReactNode }> = ({ children }) => {
  return <ThemeProvider theme={myTheme}>{children}</ThemeProvider>;
};
