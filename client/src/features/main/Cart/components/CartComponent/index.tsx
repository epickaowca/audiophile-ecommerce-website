import { FC } from "react";
import { Button } from "../../../../shared/Button";
import { StyledCart } from "./CartComponent.styled";
import { PriceDisplay } from "../PriceDisplay";
import { returnVat } from "../../utils";
import { CartList } from "../CartList";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context";
import { CartType } from "../../types";

type CartComponentProps = {
  cartType: CartType;
};

const SHIPPING_PRICE = 50;

export const CartComponent: FC<CartComponentProps> = ({ cartType }) => {
  const { removeAll, toggleCart, productList } = useCart();
  const navigate = useNavigate();
  const isStatic = cartType === "static";
  const totalProductsPrice = productList.reduce(
    (accumulator, { price, quantity }) => accumulator + price * quantity,
    0
  );
  const vatValue = returnVat(SHIPPING_PRICE + totalProductsPrice);

  const btnProps = {
    text: isStatic ? "CONTINUE & PAY" : "CHECKOUT",
    variant: "primary",
    as: "button",
    type: isStatic ? "submit" : undefined,
    onClick: isStatic
      ? undefined
      : () => {
          navigate("/checkout");
          toggleCart("close");
        },
    ariaLabel: isStatic ? undefined : "go to checkout",
  } as const;

  const idAttr = {
    id: isStatic ? undefined : "main-cart",
  };
  return (
    <StyledCart {...idAttr}>
      <div className="heading">
        <h2>{isStatic ? "summary" : `cart (${productList.length})`}</h2>
        {!isStatic && <button onClick={removeAll}>Remove all</button>}
      </div>
      <CartList cartType={cartType} />
      <div className="list price-list">
        <PriceDisplay name="total" price={totalProductsPrice} />
        {isStatic && (
          <>
            <PriceDisplay name="shipping" price={SHIPPING_PRICE} />
            <PriceDisplay name="vat" price={vatValue} />
          </>
        )}
      </div>
      {isStatic && (
        <PriceDisplay
          name="grand total"
          price={vatValue + totalProductsPrice + SHIPPING_PRICE}
          priceColor="orange"
        />
      )}

      <Button {...btnProps} />
    </StyledCart>
  );
};
