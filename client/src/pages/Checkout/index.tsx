import { FC } from "react";
import { Header } from "../../features/main/Header";
import { Footer } from "../../features/main/Footer";
import { Checkout as CheckoutComponent } from "../../features/main/Checkout";
import { createGlobalStyle, css } from "styled-components";

export const Checkout: FC = () => {
  return (
    <>
      <CheckoutStyle />
      <Header />
      <CheckoutComponent />
      <Footer />
    </>
  );
};

export const CheckoutStyle = createGlobalStyle(
  ({ theme }) => css`
    body {
      background-color: ${theme.grayLight};
    }
  `
);
