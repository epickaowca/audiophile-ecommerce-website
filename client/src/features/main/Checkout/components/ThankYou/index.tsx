import { FC, useEffect, useRef } from "react";
import { StyledThankYou } from "./ThankYou.styled";
import confirmIcon from "../../assets/icon-order-confirmation.svg";
import { Button } from "@root/features/shared/Button";
import { ProductList, useCart, SHIPPING_PRICE, getTotal } from "../../../Cart";
import { createPortal } from "react-dom";
import { Overlay } from "@root/features/shared/Overlay";
import { useNavigate } from "react-router-dom";
import { Product } from "../../../Cart/context/types";
import { priceWithComma, getVat } from "@root/utils";

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
  const { current: list } = useRef<Product[]>(productList);
  const total = getTotal(list);
  const vat = getVat(SHIPPING_PRICE + total);
  const { styledComponentId: ThankYou } = StyledThankYou;

  useEffect(() => {
    window.scroll(0, 0);
    removeAll();
  }, []);

  return (
    <StyledThankYou $className={ThankYou}>
      <img
        className={`${ThankYou}_icon`}
        src={confirmIcon}
        alt="confirm-icon"
      />
      <h2 className={`${ThankYou}_title`}>Thank You For Your Order</h2>
      <p className={`${ThankYou}_description`}>
        You will receive an email confirmation shortly.
      </p>
      <div className={`${ThankYou}_summaryWrapper`}>
        <ProductList cartType="static" customList={list} />
        <div className={`${ThankYou}_grandTotal`}>
          <span>Grand Total</span>
          <span>$ {priceWithComma(total + SHIPPING_PRICE + vat)}</span>
        </div>
      </div>
      <Button as="link" href="/" text="BACK TO HOME" variant="primary" />
    </StyledThankYou>
  );
};
