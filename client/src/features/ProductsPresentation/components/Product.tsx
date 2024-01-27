import { FC } from "react";
import { styled, css } from "styled-components";
import { Button, StyledButton } from "../../Button";
import { Link } from "react-router-dom";
import { ProductCategories } from "../../../data/constants";

type ProductProps = {
  imgSrc: string;
  productName: ProductCategories;
  url: string;
};

export const Product: FC<ProductProps> = ({ imgSrc, productName, url }) => {
  return (
    <Anchor as={Link} to={url}>
      <img src={imgSrc} alt={productName} />
      <h4>{productName}</h4>
      <Button text="SHOP" variant="noBackground" />
    </Anchor>
  );
};

const Anchor = styled.a(({ theme: { grayLight, orangeMedium } }) => {
  return css`
    width: 100%;
    height: 165px;
    max-width: 327px;
    background-color: ${grayLight};
    text-align: center;
    text-decoration: none;
    border-radius: 8px;
    position: relative;
    padding-top: 100px;

    &:hover > span {
      color: ${orangeMedium};
    }

    & > img {
      width: 155px;
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      top: -25%;
    }
    & > h4 {
      color: #000;
      font-size: 1rem;
      margin-bottom: 10px;
      text-transform: uppercase;
    }

    & > ${StyledButton} {
      margin: auto;
    }
  `;
});
