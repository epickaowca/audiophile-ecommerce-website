import { FC } from "react";
import { StyledCartProduct } from "./CartProduct.styled";
import { priceWithComma } from "../../../../../utils";
import { QuantitySelector } from "../../../../shared/QuantitySelector";
import { CartType } from "../../types";

type CartProductProps = {
  productName: string;
  price: number;
  imgSrc: string;
  quantity: number;
  setQuantity: (quantity: number) => void;
  cartType: CartType;
};

export const CartProduct: FC<CartProductProps> = ({
  imgSrc,
  price,
  productName,
  quantity,
  setQuantity,
  cartType,
}) => {
  return (
    <StyledCartProduct>
      <div className="product">
        <img src={imgSrc} alt={productName} />
        <div className="description">
          <h3>{productName}</h3>
          <span>$ {priceWithComma(price * quantity)}</span>
        </div>
      </div>
      {cartType === "static" ? (
        <span className="quantity-span">x{quantity}</span>
      ) : (
        <QuantitySelector
          onMinus={() => setQuantity(quantity - 1)}
          onPlus={() => setQuantity(quantity + 1)}
          onValueChange={(value) => setQuantity(+value)}
          value={quantity}
          checkoutCase={true}
        />
      )}
    </StyledCartProduct>
  );
};
