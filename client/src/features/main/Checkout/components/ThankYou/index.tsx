import { FC } from "react";
import { StyledThankYou, ProductsWrapper } from "./ThankYou.styled";
import confirmIcon from "../../assets/icon-order-confirmation.svg";
import { Button } from "../../../../shared/Button";
import { CartList, useCart } from "../../../Cart";
import { createPortal } from "react-dom";
import { Overlay } from "../../../../shared/Overlay";
import { useNavigate } from "react-router-dom";

export const ThankYou: FC = () => {
  const navigate = useNavigate();
  return createPortal(
    <>
      <Overlay
        onClick={() => {
          console.log("hi");
          navigate("/");
        }}
      />
      <ThankYouComponent />
    </>,
    document.getElementById("root")!
  );
};

const ThankYouComponent: FC = () => {
  const { productList, updateQuantity } = useCart();
  const cartListProps = {
    productList,
    updateQuantity,
    cartType: "static",
  } as const;
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
          <CartList {...cartListProps} />
        </div>
        <div>
          <span>Grand Total</span>
          <span>$ 5,446</span>
        </div>
      </ProductsWrapper>
      <Button as="link" href="/" text="BACK TO HOME" variant="primary" />
    </StyledThankYou>
  );
};
