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
  grayDarkText: "rgba(0,0,0,.5)",
  overlayZIndex: 99,
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
    body {
      margin: 0;
      padding: 0;
      font-family: "Manrope", sans-serif;
      overflow-x: hidden;
      background-color: ${theme.grayLighter};
    }

    #root {
      position: relative;
      min-height: 100vh;
    }

    button {
      font-family: "Manrope", sans-serif;
    }

    .overflow-y-hidden {
      overflow-y: hidden;
    }

    @media ${theme.media.desktop} {
      body.overflow-y-hidden {
        overflow-y: auto;
      }
    }
  `
);
