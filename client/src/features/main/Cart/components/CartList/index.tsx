import { FC } from "react";
import { Product, UpdateQuantityProps } from "../../context/types";
import { styled, css } from "styled-components";
import { CartProduct } from "../CartProduct";
import { CartType } from "../../types";

export type CartListProps = {
  productList: Product[];
  cartType: CartType;
  updateQuantity: (payload: UpdateQuantityProps) => void;
};

export const CartList: FC<CartListProps> = ({
  productList,
  cartType,
  updateQuantity,
}) => {
  return (
    <StyledCartList>
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
    </StyledCartList>
  );
};

const StyledCartList = styled.div(() => {
  return css`
    display: flex;
    flex-direction: column;
    gap: 25px;
    max-height: 220px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `;
});
