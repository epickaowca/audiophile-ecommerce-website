import { FC, useState } from "react";
import { Header } from "../features/Header";
// import { Button } from "../features/Button";
import { styled } from "styled-components";
// import { QuantitySelector } from "../features/QuantitySelector";
import { ProductDescription } from "../features/ProductDescription";
import { MainHeroSection } from "../features/MainHeroSection";
import { ProductsPresentation } from "../features/ProductsPresentation";

export const Home: FC = () => {
  // const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Header transparentBg={true} />
      <MainHeroSection />
      <ProductsPresentation />
    </>
  );
};

const Div = styled.div`
  padding: 50px 0px;
  background-color: black;
`;

const Div2 = styled.div`
  padding: 50px 0px;
`;

const Wrapper = styled.div`
  /* margin: 15px;
  display: flex;
  gap: 25px;
  flex-wrap: wrap; */
`;
