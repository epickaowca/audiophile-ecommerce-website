import { AudioGear } from "@root/features/main/AudioGear";
import { Footer } from "@root/features/main/Footer";
import { FC } from "react";
import { styled, css } from "styled-components";
import {
  BannerDivided,
  BannerLarge,
  BannerMedium,
} from "@root/features/main/Banner";

export const Chunk: FC = () => {
  return (
    <>
      <BannersWrapper aria-label="banners section">
        <BannerLarge />
        <BannerMedium />
        <BannerDivided />
      </BannersWrapper>
      <AudioGear />
      <Footer />
    </>
  );
};

const BannersWrapper = styled.section(({ theme: { media } }) => {
  return css`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media ${media.desktop} {
      gap: 50px;
    }
  `;
});
