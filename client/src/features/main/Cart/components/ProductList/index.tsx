import { FC } from "react";
import { styled, css } from "styled-components";
import { Product } from "../Product";
import { CartType } from "../../types";
import { useCart } from "../../context";
import { Product as ProductType } from "../../context/types";

type CartListProps = {
  cartType: CartType;
  customProductList?: ProductType[];
};

export const ProductList: FC<CartListProps> = ({
  cartType,
  customProductList,
}) => {
  const { updateQuantity, productList } = useCart();
  const myProductList = customProductList || productList;
  return (
    <StyledProductList>
      {myProductList.map((product) => (
        <Product
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
    </StyledProductList>
  );
};

export const StyledProductList = styled.div(() => {
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
