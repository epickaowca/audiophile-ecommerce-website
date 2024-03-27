import { FC, useEffect, useRef } from "react";
import { StyledThankYou, ProductsWrapper } from "./ThankYou.styled";
import confirmIcon from "../../assets/icon-order-confirmation.svg";
import { Button } from "../../../../shared/Button";
import { CartList, useCart, returnVat, SHIPPING_PRICE } from "../../../Cart";
import { createPortal } from "react-dom";
import { Overlay } from "../../../../shared/Overlay";
import { useNavigate } from "react-router-dom";
import { Product } from "../../../Cart/context/types";
import { priceWithComma } from "../../../../../utils";

export const ThankYou: FC = () => {
  const navigate = useNavigate();
  return createPortal(
    <>
      <Overlay
        onClick={() => {
          navigate("/");
        }}
      />
      <ThankYouComponent />
    </>,
    document.body
  );
};

const ThankYouComponent: FC = () => {
  const { productList, removeAll } = useCart();
  const productListSnapshot = useRef<Product[]>([]);

  const totalProductsPrice = productList.reduce(
    (accumulator, { price, quantity }) => accumulator + price * quantity,
    0
  );
  const vatValue = returnVat(SHIPPING_PRICE + totalProductsPrice);

  useEffect(() => {
    window.scroll(0, 0);
    productListSnapshot.current = productList;
    removeAll();
  }, []);

  return (
    <StyledThankYou>
      <img src={confirmIcon} alt="confirm-icon" />
      <h2>
        Thank You
        <br />
        For Your Order
      </h2>
      <p>You will receive an email confirmation shortly.</p>
      <ProductsWrapper>
        <div>
          <CartList
            cartType="static"
            customProductList={productListSnapshot.current}
          />
        </div>
        <div>
          <span>Grand Total</span>
          <span>$ {priceWithComma(totalProductsPrice + vatValue)}</span>
        </div>
      </ProductsWrapper>
      <Button as="link" href="/" text="BACK TO HOME" variant="primary" />
    </StyledThankYou>
  );
};
