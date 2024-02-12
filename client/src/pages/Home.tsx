import { FC } from "react";
import { Header } from "../features/main/Header";
import { css, styled } from "styled-components";
import { MainHeroSection } from "../features/main/MainHeroSection";
import { ProductCategories } from "../features/main/ProductCategories";
import { ProductBannerXL } from "../features/main/ProductBannerXL";
import { ProductBannerM } from "../features/main/ProductBannerM";
import { ProductBannerDivided } from "../features/main/ProductBannerDivided";
import { AudioGear } from "../features/main/AudioGear";
import { Footer } from "../features/main/Footer";

export const Home: FC = () => {
  return (
    <>
      <Header transparentBg={true} />
      <MainHeroSection />
      <ProductCategories />
      <BannersWrapper>
        <ProductBannerXL />
        <ProductBannerM />
        <ProductBannerDivided />
      </BannersWrapper>
      <AudioGear />
      <Footer />
    </>
  );
};

const BannersWrapper = styled.div(({ theme }) => {
  return css`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media ${theme.media.desktop} {
      gap: 50px;
    }
  `;
});
