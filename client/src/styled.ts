import { createGlobalStyle, css } from "styled-components";

export const media = {
  tablet: `(min-width: 768px)`,
  desktop: `(min-width: 1024px)`,
};

export const myTheme = {
  orangeMedium: "#D87D4A",
  grayDark: "#101010",
  grayLight: "#F1F1F1",
  grayDarkText: "rgba(0,0,0,.5)",
  heroBgColor: "#101010",
  media,
} as const;

type MyTheme = typeof myTheme;
declare module "styled-components" {
  export interface DefaultTheme extends MyTheme {}
}

export const GlobalStyle = createGlobalStyle(
  ({ theme: { media } }) => css`
    body {
      margin: 0;
      padding: 0;
      font-family: "Manrope", sans-serif;
      overflow-x: hidden;
      background-color: #fafafa;
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

    .overflow-y-hidden-mobile {
      overflow-y: hidden;
    }

    @media ${media.desktop} {
      .overflow-y-hidden-mobile {
        overflow-y: auto;
      }
      .overflow-y-hidden {
        overflow-y: hidden;
      }
    }
  `
);
