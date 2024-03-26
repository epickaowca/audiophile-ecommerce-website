import { FC } from "react";
import { styled, css } from "styled-components";
import { CartProduct } from "../CartProduct";
import { CartType } from "../../types";
import { useCart } from "../../context";
import { Product } from "../../context/types";

export type CartListProps = {
  cartType: CartType;
  customProductList?: Product[];
};

export const CartList: FC<CartListProps> = ({
  cartType,
  customProductList,
}) => {
  const { updateQuantity, productList } = useCart();
  const myProductList = customProductList || productList;
  return (
    <StyledCartList>
      {myProductList.map((product) => (
        <CartProduct
          {...product}
          key={product.tag}
          cartType={cartType}
          setQuantity={(quantity) =>
            updateQuantity({
              tag: product.tag,
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
