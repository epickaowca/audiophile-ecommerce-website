import { FC } from "react";
import { Button } from "../../../../shared/Button";
import { StyledCart } from "./CartComponent.styled";
import { PriceDisplay } from "../PriceDisplay";
import { returnVat } from "../../helpers";
import { CartList, CartListProps } from "../CartList";

type CartComponentProps = CartListProps;

const SHIPPING_PRICE = 50;

export const CartComponent: FC<CartComponentProps> = ({
  productList,
  updateQuantity,
  cartType,
}) => {
  const isStatic = cartType === "static";
  const totalProductsPrice = productList.reduce(
    (accumulator, { price, quantity }) => accumulator + price * quantity,
    0
  );
  const vatValue = returnVat(SHIPPING_PRICE + totalProductsPrice);

  const btnProps = {
    text: "CHECKOUT",
    variant: "primary",
    as: isStatic ? "button" : "link",
    href: isStatic ? undefined : "/checkout",
    type: isStatic ? "submit" : undefined,
  } as const;

  return (
    <StyledCart>
      <div className="heading">
        <h2>{isStatic ? "summary" : `cart (${productList.length})`}</h2>
        {!isStatic && <button>Remove all</button>}
      </div>
      <CartList
        cartType={cartType}
        productList={productList}
        updateQuantity={updateQuantity}
      />
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
