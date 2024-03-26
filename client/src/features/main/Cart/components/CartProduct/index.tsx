import { FC } from "react";
import { StyledCartProduct as SCP } from "./CartProduct.styled";
import { priceWithComma } from "../../../../../utils";
import { QuantitySelector } from "../../../../shared/QuantitySelector";
import { CartType } from "../../types";

type CartProductProps = {
  name: string;
  price: number;
  imgSrc: string;
  quantity: number;
  setQuantity: (quantity: number) => void;
  cartType: CartType;
};

export const StyledCartProduct = SCP;

export const CartProduct: FC<CartProductProps> = ({
  imgSrc,
  price,
  name,
  quantity,
  setQuantity,
  cartType,
}) => {
  return (
    <StyledCartProduct>
      <div className="product">
        <img src={imgSrc} alt={name} />
        <div className="description">
          <h3>{name}</h3>
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
          ariaLabel={`${name} product quantity`}
        />
      )}
    </StyledCartProduct>
  );
};
