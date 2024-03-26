import { CartProvider } from "../../src/features/main/Cart";
import { FC, ReactNode } from "react";

export const MockCart: FC<{ children?: ReactNode }> = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};
