import { FC } from "react";
import { styled, css } from "styled-components";
import { Product } from "../Product";
import { CartType } from "../../types";
import { useCart } from "../../context";
import { Product as ProductType } from "../../context/types";

type CartListProps = CartType & {
  customProductList?: ProductType[];
};

export const ProductList: FC<CartListProps> = ({
  cartType,
  customProductList,
}) => {
  const { updateQuantity, productList } = useCart();
  const list = customProductList || productList;
  return (
    <StyledProductList>
      {list.length ? (
        <>
          {list.map((product) => (
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
        </>
      ) : (
        <p>You don't have any items added</p>
      )}
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
