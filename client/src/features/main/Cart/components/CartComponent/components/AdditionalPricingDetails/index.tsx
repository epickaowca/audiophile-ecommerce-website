import { FC } from "react";
import { SHIPPING_PRICE } from "../../../../constants";
import { useCart, getTotal } from "../../../../index";
import { getVat } from "../../../../../../../utils";
import { Price } from "../Price";
import { styled } from "styled-components";

export const AdditionalPricingDetails: FC = () => {
  const { productList } = useCart();
  const total = getTotal(productList);
  const vat = getVat(SHIPPING_PRICE + total);
  return (
    <StyledPriceList>
      <Price name="shipping" price={SHIPPING_PRICE} />
      <Price name="vat" price={vat} />
      <Price
        name="grand total"
        price={vat + total + SHIPPING_PRICE}
        orangePrice
      />
    </StyledPriceList>
  );
};

const StyledPriceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
