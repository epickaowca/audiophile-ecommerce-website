import { FC } from "react";
import { Header } from "@root/features/main/Header";
import { Footer } from "@root/features/main/Footer";
import { Checkout as CheckoutComponent } from "@root/features/main/Checkout";
import { createGlobalStyle, css } from "styled-components";

export const Checkout: FC = () => {
  return (
    <>
      <CheckoutGlobalStyle />
      <Header />
      <CheckoutComponent />
      <Footer />
    </>
  );
};

export const CheckoutGlobalStyle = createGlobalStyle(
  ({ theme: { grayLight } }) => css`
    body {
      background-color: ${grayLight};
    }
  `
);
