import { FC } from "react";
import { createPortal } from "react-dom";
import { CartProvider, useCart } from "./context";
import { Wrapper } from "./Cart.styled";
import { Overlay } from "../../shared/Overlay";
import { CartComponent } from "./components/CartComponent";
import { CartType } from "./types";
import { CartList } from "./components/CartList";
import { StyledCartProduct } from "./components/CartProduct";
import { returnVat } from "./utils";
import { SHIPPING_PRICE } from "./constants";

export {
  CartList,
  CartProvider,
  useCart,
  StyledCartProduct,
  returnVat,
  SHIPPING_PRICE,
};

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
