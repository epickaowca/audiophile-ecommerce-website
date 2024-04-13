import { FC } from "react";
import { StyledProduct } from "./Product.styled";
import { priceWithComma } from "../../../../../utils";
import { QuantitySelector } from "../../../../shared/QuantitySelector";
import { CartType } from "../../types";

export { StyledProduct };

type CartProductProps = {
  name: string;
  price: number;
  imgSrc: string;
  quantity: number;
  setQuantity: (quantity: number) => void;
  cartType: CartType;
};

export const Product: FC<CartProductProps> = ({
  imgSrc,
  price,
  name,
  quantity,
  setQuantity,
  cartType,
}) => {
  const { styledComponentId: CartProduct } = StyledProduct;

  return (
    <StyledProduct $className={CartProduct}>
      <div className={`${CartProduct}_container`}>
        <img src={imgSrc} alt={name} className={`${CartProduct}_img`} />
        <div>
          <h3 className={`${CartProduct}_name`}>{name}</h3>
          <span className={`${CartProduct}_price`}>
            $ {priceWithComma(price * quantity)}
          </span>
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
    </StyledProduct>
  );
};
