import { FC } from "react";
import { createPortal } from "react-dom";
import { CartProvider as CP, useCart as UC } from "./context";
import { Wrapper } from "./Cart.styled";
import { Overlay } from "../../shared/Overlay";
import { CartComponent } from "./components/CartComponent";
import { CartType } from "./types";
import { CartList as CL } from "./components/CartList";
import { StyledCartProduct as SCP } from "./components/CartProduct";

export const CartList = CL;
export const CartProvider = CP;
export const useCart = UC;
export const StyledCartProduct = SCP;

type CartProps = {
  cartType: CartType;
};

export const Cart: FC<CartProps> = ({ cartType }) => {
  const { isCartOpen, toggleCart } = useCart();

  if (cartType === "modal") {
    const component = isCartOpen ? (
      <>
        <Wrapper $isCartOpen={isCartOpen}>
          <CartComponent cartType="modal" />
        </Wrapper>
        <Overlay onClick={() => toggleCart("close")} />
      </>
    ) : (
      <></>
    );
    return createPortal(component, document.getElementById("root")!);
  }

  return <CartComponent cartType="static" />;
};
