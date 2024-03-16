import { FC } from "react";
import { CartProduct } from "../CartProduct";
import { Button } from "../../../../shared/Button";
import { priceWithComma } from "../../.././../../utils";
import { StyledCart } from "./CartComponent.styled";
import { Product, UpdateQuantityProps } from "../../context/types";
import { CartType } from "../../types";
import { PriceDisplay } from "../PriceDisplay";
import { returnVat } from "../../helpers";

type CartComponentProps = {
  productList: Product[];
  updateQuantity: (payload: UpdateQuantityProps) => void;
  cartType: CartType;
};

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

  return (
    <StyledCart>
      <div className="heading">
        <h2>{isStatic ? "summary" : `cart (${productList.length})`}</h2>
        {!isStatic && <button>Remove all</button>}
      </div>
      <div className="list product-list">
        {productList.map((product) => (
          <CartProduct
            cartType={cartType}
            key={product.productTag}
            imgSrc={product.imgSrc}
            price={product.price}
            productName={product.productName}
            quantity={product.quantity}
            setQuantity={(quantity) =>
              updateQuantity({
                productTag: product.productTag,
                quantity,
              })
            }
          />
        ))}
      </div>
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

      <Button text="CHECKOUT" variant="primary" as="link" href="#CHECKOUT" />
    </StyledCart>
  );
};
