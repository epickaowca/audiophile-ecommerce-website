import { FC, useState } from "react";
import { Header } from "../features/Header";
// import { Button } from "../features/Button";
import { styled } from "styled-components";
// import { QuantitySelector } from "../features/QuantitySelector";
import { ProductDescription } from "../features/ProductDescription";

export const Home: FC = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <Wrapper>
      <Header />
      <ProductDescription
        isNew={true}
        productName="XX99 Mark II"
        productCategory="headphones"
        description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
      />
      <Div>
        <ProductDescription
          darkTheme={true}
          isNew={true}
          productName="XX99 Mark II"
          productCategory="headphones"
          description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        />
      </Div>

      <Div2>
        <ProductDescription
          price={2042}
          isNew={true}
          productName="XX99 Mark II"
          productCategory="headphones"
          description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        />
      </Div2>
    </Wrapper>
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
