import { FC } from "react";
// import { Header } from "../features/main/Header";
import { QuantitySelector } from "../features/shared/QuantitySelector";

export const Checkout: FC = () => {
  return (
    <>
      {/* <Header /> */}
      <QuantitySelector
        onMinus={() => {}}
        onPlus={() => {}}
        onValueChange={() => {}}
        value={1}
      />
      Checkout
    </>
  );
};
