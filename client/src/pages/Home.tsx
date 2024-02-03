import { FC, useState } from "react";
import { Header } from "../features/Header";
// import { Button } from "../features/Button";
import { styled } from "styled-components";
// import { QuantitySelector } from "../features/QuantitySelector";
import { ProductDescription } from "../features/ProductDescription";
import { MainHeroSection } from "../features/MainHeroSection";
import { ProductCategories } from "../features/ProductCategories";
import { ProductBannerXL } from "../features/ProductBannerXL";
import { ProductBannerM } from "../features/ProductBannerM";
import { ProductBannerDivided } from "../features/ProductBannerDivided";
import { AudioGear } from "../features/AudioGear";

export const Home: FC = () => {
  return (
    <Div>
      <Header transparentBg={true} />
      <MainHeroSection />
      <ProductCategories />
      <ProductBannerXL />
      <ProductBannerM />
      <ProductBannerDivided />
      <AudioGear />
      {/* <ProductDescription
        description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        productCategory="headphones"
        productName="XX99 Mark II"
        isNew={true}
      /> */}
    </Div>
  );
};

const Div = styled.div`
  padding-bottom: 250px;
`;
