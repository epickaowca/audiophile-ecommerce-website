import { FC } from "react";
import { styled } from "styled-components";
import headphones from "../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";

export const Header: FC = () => {
  return (
    <div>
      <img src={headphones} />
    </div>
  );
};
