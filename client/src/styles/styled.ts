import { createGlobalStyle, css } from "styled-components";

export const myTheme = {
  orangeMedium: "#D87D4A",
  orangeLight: "#FBAF85",
  grayDark: "#101010",
  grayLight: "#F1F1F1",
  grayLighter: "#FAFAFA",
  grayText: "#B5B5B5",
} as const;

type MyTheme = typeof myTheme;
declare module "styled-components" {
  export interface DefaultTheme extends MyTheme {}
}

export const GlobalStyle = createGlobalStyle(
  ({ theme }) => css`
    @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap");

    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      margin: 0;
      padding: 0;
      min-height: 100vh;
      font-family: "Manrope", sans-serif;
      /* background-color: ${theme.lightGray}; */
    }

    button {
      font-family: "Manrope", sans-serif;
    }
  `
);
