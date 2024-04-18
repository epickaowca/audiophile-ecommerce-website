import { FC } from "react";
import { styled, css } from "styled-components";
import {
  BannerLarge,
  BannerMedium,
  BannerDivided,
} from "../../features/main/Banner";

export const BannersWrapper: FC = () => {
  return (
    <Wrapper aria-label="banners section">
      <BannerLarge />
      <BannerMedium />
      <BannerDivided />
    </Wrapper>
  );
};

const Wrapper = styled.section(({ theme }) => {
  return css`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media ${theme.media.desktop} {
      gap: 50px;
    }
  `;
});
