import { FC } from "react";
import { Header } from "../../features/main/Header";
import { Footer } from "../../features/main/Footer";
import { Cart } from "../../features/main/Cart";

export const Checkout: FC = () => {
  return (
    <>
      <Header />
      <Cart cartType="static" />
      <Footer />
    </>
  );
};
