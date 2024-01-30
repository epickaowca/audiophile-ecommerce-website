import { FC, useEffect, useState, useRef } from "react";
import { styled, css } from "styled-components";
import { Button, StyledButton } from "../../Button";
import { ProductCategories } from "../../../data/constants";

type ProductProps = {
  imgSrc: string;
  productName: ProductCategories;
  url: string;
  autoFocus?: boolean;
  navigationCase?: boolean;
};

export const Product: FC<ProductProps> = ({
  imgSrc,
  productName,
  url,
  autoFocus,
  navigationCase,
}) => {
  const anchorRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    if (autoFocus) {
      anchorRef.current?.focus();
    }
  }, []);

  const role = navigationCase ? { role: "menuitem" } : {};
  const AnchorComponent = (
    <Anchor href={url} ref={anchorRef} {...role}>
      <img className="product-img" src={imgSrc} alt={productName} />
      <h4 className="product-name">{productName}</h4>
      <Button as="div" text="SHOP" variant="noBackground" />
    </Anchor>
  );

  return navigationCase ? <Li>{AnchorComponent}</Li> : AnchorComponent;
};

const Li = styled.li`
  list-style-type: none;
  width: 100%;
  max-width: 327px;
`;

const Anchor = styled.a(({ theme: { grayLight, orangeMedium } }) => {
  return css`
    width: 100%;
    height: 165px;
    max-width: 327px;
    background-color: ${grayLight};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    text-decoration: none;
    border-radius: 8px;
    position: relative;
    padding-top: 100px;
    padding-bottom: 80px;

    &:hover > span {
      color: ${orangeMedium};
    }

    & > .product-img {
      width: 155px;
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      top: -25%;
    }
    & > .product-name {
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
