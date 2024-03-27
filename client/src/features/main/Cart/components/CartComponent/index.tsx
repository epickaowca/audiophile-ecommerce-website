import { FC, useEffect, useRef } from "react";
import { Button } from "../../../../shared/Button";
import { StyledCart } from "./CartComponent.styled";
import { PriceDisplay } from "../PriceDisplay";
import { returnVat } from "../../utils";
import { CartList } from "../CartList";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context";
import { CartType } from "../../types";
import { CloseBtn } from "../CloseBtn";
import { SHIPPING_PRICE } from "../../constants";

type CartComponentProps = {
  cartType: CartType;
};

export const CartComponent: FC<CartComponentProps> = ({ cartType }) => {
  const cartRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    if (!cartRef.current || cartType !== "modal") return;

    const onEscapeHandler = (e: KeyboardEvent) => {
      e.key === "Escape" && toggleCart("close");
    };

    cartRef.current.focus();
    cartRef.current.addEventListener("keydown", onEscapeHandler);
    return () => {
      cartRef.current?.removeEventListener("keydown", onEscapeHandler);
    };
  }, []);

  const idAttr = {
    id: isStatic ? undefined : "main-cart",
  };

  return (
    <StyledCart {...idAttr} ref={cartRef}>
      <CloseBtn />
      {productList.length ? (
        <>
          <div className="heading">
            <h2>{isStatic ? "summary" : `cart (${productList.length})`}</h2>
            {!isStatic && <button onClick={removeAll}>Remove all</button>}
          </div>
          <CartList cartType={cartType} />
          <div className="price-list">
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
        </>
      ) : (
        <h1 className="empty-h1">Your cart is empty</h1>
      )}
    </StyledCart>
  );
};
