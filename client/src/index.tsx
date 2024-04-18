import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle, myTheme } from "./styled";
import { ThemeProvider } from "styled-components";
import { CartProvider } from "./features/main/Cart";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>
);
