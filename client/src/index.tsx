import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle, myTheme } from "./styles/styled";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
