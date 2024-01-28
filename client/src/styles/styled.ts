import { createGlobalStyle, css } from "styled-components";
const breakpoints = {
  tablet: 768,
  desktop: 1024,
};

export const myTheme = {
  orangeMedium: "#D87D4A",
  orangeLight: "#FBAF85",
  grayDark: "#101010",
  grayLight: "#F1F1F1",
  grayLighter: "#FAFAFA",
  grayText: "#7D7D7D",
  grayTextLight: "#C5C5C5",
  overlayZIndex: 5,
  media: {
    tablet: `(min-width: ${breakpoints.tablet}px)`,
    desktop: `(min-width: ${breakpoints.desktop}px)`,
  },
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
      overflow-x: hidden;
    }

    #root {
      /* overflow-y: hidden; */
      /* overflow-x: hidden; */
      /* min-height: 100vh; */
      position: relative;
    }

    button {
      font-family: "Manrope", sans-serif;
    }
  `
);
