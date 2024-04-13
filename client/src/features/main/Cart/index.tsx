import { FC } from "react";
import { createPortal } from "react-dom";
import { CartProvider, useCart } from "./context";
import { Overlay } from "../../shared/Overlay";
import { CartComponent } from "./components/CartComponent";
import { CartType } from "./types";
import { ProductList, StyledProductList } from "./components/ProductList";
import { StyledProduct } from "./components/Product";
import { SHIPPING_PRICE } from "./constants";
import { styled, css } from "styled-components";
import { headerHeight } from "../Header";

export {
  ProductList,
  StyledProductList,
  CartProvider,
  useCart,
  StyledProduct,
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

export const Wrapper = styled.div<{ $isCartOpen: boolean }>(
  ({ theme, $isCartOpen }) => {
    return css`
      z-index: ${$isCartOpen ? theme.overlayZIndex + 1 : "initial"};
      position: absolute;
      left: 50%;
      top: ${`calc(${headerHeight} + 30px)`};
      transform: translateX(-50%);
      width: 90%;
      height: 0;
      display: flex;
      justify-content: center;
      align-items: flex-start;

      @media ${theme.media.tablet} {
        justify-content: flex-end;
      }

      @media ${theme.media.desktop} {
        padding: 0 50px;
        width: 100%;
        max-width: 1400px;
      }
    `;
  }
);
