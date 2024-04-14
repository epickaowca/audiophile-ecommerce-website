import { FC } from "react";
import { StyledProduct } from "./Product.styled";
import { priceWithComma } from "../../../../../utils";
import { QuantitySelector } from "../../../../shared/QuantitySelector";
import { CartType } from "../../types";

export { StyledProduct };

type ProductProps = CartType & {
  name: string;
  price: number;
  imgSrc: string;
  quantity: number;
  setQuantity: (quantity: number) => void;
};

export const Product: FC<ProductProps> = ({
  name,
  price,
  imgSrc,
  quantity,
  setQuantity,
  cartType,
}) => {
  const { styledComponentId: Product } = StyledProduct;
  const total = `$ ${priceWithComma(price * quantity)}`;

  return (
    <StyledProduct $className={Product}>
      <div className={`${Product}_container`}>
        <img src={imgSrc} alt={name} className={`${Product}_img`} />
        <div>
          <h3 className={`${Product}_name`}>{name}</h3>
          <span className={`${Product}_price`}>{total}</span>
        </div>
      </div>
      {cartType === "static" ? (
        <span>x{quantity}</span>
      ) : (
        <QuantitySelector
          checkoutCase
          setValue={setQuantity}
          value={quantity}
          ariaLabel={`${name} product quantity`}
        />
      )}
    </StyledProduct>
  );
};
