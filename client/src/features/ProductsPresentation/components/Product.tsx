import { FC } from "react";
import arrowRightIcon from "../../../assets/shared/desktop/icon-arrow-right.svg";
import { styled, css } from "styled-components";

type ProductProps = {
  imgSrc: string;
  productName: string;
  url: string;
};

export const Product: FC<ProductProps> = ({ imgSrc, productName, url }) => {
  return (
    <Anchor href={url}>
      <img src={imgSrc} alt={productName} />
      <h4 title="hoidw">{productName}</h4>
      <span>
        SHOP <img src={arrowRightIcon} alt="arrowRightIcon" />
      </span>
    </Anchor>
  );
};

const Anchor = styled.a(({ theme }) => {
  return css`
    width: 100%;
    height: 165px;
    max-width: 327px;
    background-color: ${theme.grayLight};
    text-align: center;
    text-decoration: none;
    border-radius: 8px;
    position: relative;
    padding-top: 100px;

    &:hover > span {
      color: ${theme.orangeMedium};
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
    & > span {
      color: ${theme.grayText};
      font-size: 0.9rem;
      & > img {
        margin-left: 5px;
      }
    }
  `;
});
