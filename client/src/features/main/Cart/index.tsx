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

type CartProps = {
  cartType: CartType;
};

export const StyledCartProduct = SCP;

export const Cart: FC<CartProps> = ({ cartType }) => {
  const { isCartOpen, productList, updateQuantity, toggleCart } = useCart();

  const closeCart = () => {
    toggleCart("close");
  };

  if (cartType === "modal") {
    const component = isCartOpen ? (
      <>
        <Wrapper $isCartOpen={isCartOpen}>
          <CartComponent
            cartType="modal"
            productList={productList}
            updateQuantity={updateQuantity}
          />
        </Wrapper>
        <Overlay onClick={closeCart} />
      </>
    ) : (
      <></>
    );
    return createPortal(component, document.getElementById("root")!);
  }

  return (
    <CartComponent
      cartType="static"
      productList={productList}
      updateQuantity={updateQuantity}
    />
  );
};
