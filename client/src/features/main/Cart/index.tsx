import { FC } from "react";
import { createPortal } from "react-dom";
import { CartProvider, useCart } from "./context";
import { Overlay } from "../../shared/Overlay";
import { CartModal, CartStatic } from "./components/CartComponent";
import { ProductList, StyledProductList } from "./components/ProductList";
import { StyledProduct } from "./components/Product";
import { SHIPPING_PRICE } from "./constants";
import { styled, css } from "styled-components";
import { headerHeight } from "../Header";
import { CartType } from "./types";

export {
  ProductList,
  StyledProductList,
  CartProvider,
  useCart,
  StyledProduct,
  SHIPPING_PRICE,
};

export const Cart: FC<CartType> = ({ cartType }) => {
  const { isCartOpen, toggleCart } = useCart();

  if (cartType === "modal") {
    const component = (
      <>
        <ModalCartWrapper $isCartOpen={isCartOpen}>
          <CartModal />
        </ModalCartWrapper>
        <Overlay onClick={() => toggleCart("close")} />
      </>
    );

    return createPortal(
      isCartOpen ? component : <></>,
      document.getElementById("root")!
    );
  }

  return <CartStatic />;
};

export const ModalCartWrapper = styled.div<{ $isCartOpen: boolean }>(
  ({ theme: { overlayZIndex, media }, $isCartOpen }) => {
    return css`
      z-index: ${$isCartOpen ? overlayZIndex + 1 : "initial"};
      position: absolute;
      left: 50%;
      top: ${`calc(${headerHeight} + 30px)`};
      transform: translateX(-50%);
      width: 95%;
      height: 0;
      display: flex;
      justify-content: center;
      align-items: flex-start;

      @media ${media.tablet} {
        justify-content: flex-end;
      }

      @media ${media.desktop} {
        padding: 0 50px;
        width: 100%;
        max-width: 1400px;
      }
    `;
  }
);
