import { FC, useEffect, useRef } from "react";
import { Button } from "../../../../shared/Button";
import { StyledCart } from "./CartComponent.styled";
import { Price } from "./components/Price";
import { AdditionalPricingDetails } from "./components/AdditionalPricingDetails";
import { ProductList } from "../ProductList";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context";
import { CartType } from "../../types";
import { CloseBtn } from "./components/CloseBtn";
import { useEscapeHandler } from "../../../../../hooks/useEscape";

type CartComponentProps = {
  cartType: CartType;
};

export const CartComponent: FC<CartComponentProps> = ({ cartType }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { removeAll, toggleCart, productList, total } = useCart();
  const navigate = useNavigate();

  const isStatic = cartType === "static";
  const { styledComponentId: Cart } = StyledCart;

  useEscapeHandler({ ref, onEscape: () => toggleCart("close") });
  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <StyledCart
      $className={Cart}
      id={isStatic ? undefined : "main-cart"}
      ref={ref}
    >
      {!isStatic && <CloseBtn />}
      {productList.length ? (
        <>
          <div className="heading">
            <h2>{isStatic ? "summary" : `cart (${productList.length})`}</h2>
            {!isStatic && <button onClick={removeAll}>Remove all</button>}
          </div>
          <ProductList cartType={cartType} />
          <Price name="total" price={total} />
          {isStatic && <AdditionalPricingDetails />}
          <Button
            {...btnProps[isStatic ? "static" : "cart"]}
            variant="primary"
            as="button"
            onClick={() => {
              navigate("/checkout");
              toggleCart("close");
            }}
          />
        </>
      ) : (
        <h1 className="empty-h1">Your cart is empty</h1>
      )}
    </StyledCart>
  );
};

const btnProps = {
  static: {
    text: "CONTINUE & PAY",
    type: "submit",
  },
  cart: {
    text: "CHECKOUT",
    type: "button",
    ariaLabel: "go to checkout",
  },
} as const;
