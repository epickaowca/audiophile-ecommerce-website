import { ProductBannerXL } from "../../features/main/ProductBannerXL";
import { ProductBannerM } from "../../features/main/ProductBannerM";
import { ProductBannerDivided } from "../../features/main/ProductBannerDivided";
import { AudioGear } from "../../features/main/AudioGear";
import { Footer } from "../../features/main/Footer";
import { styled, css } from "styled-components";
import { FC } from "react";

export const Chunk: FC = () => {
  return (
    <>
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
