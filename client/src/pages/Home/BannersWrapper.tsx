import { FC } from "react";
import { styled, css } from "styled-components";
import { ProductBanner } from "../../features/main/ProductBanner";
import desktopZx9 from "./assets/image-speaker-zx9-desktop.png";
import tabletZx9 from "./assets/image-speaker-zx9-tablet.png";
import mobileZx9 from "./assets/image-speaker-zx9-mobile.png";
import desktopMicroZx9 from "./assets/micro/image-speaker-zx9-desktop.png";
import tabletMicroZx9 from "./assets/micro/image-speaker-zx9-tablet.png";
import mobileMicroZx9 from "./assets/micro/image-speaker-zx9-mobile.png";
import desktopZx7 from "./assets/image-speaker-zx7-desktop.jpg";
import tabletZx7 from "./assets/image-speaker-zx7-tablet.jpg";
import mobileZx7 from "./assets/image-speaker-zx7-mobile.jpg";
import desktopMicroZx7 from "./assets/micro/image-speaker-zx7-desktop.jpg";
import tabletMicroZx7 from "./assets/micro/image-speaker-zx7-tablet.jpg";
import mobileMicroZx7 from "./assets/micro/image-speaker-zx7-mobile.jpg";
import desktopYx1 from "./assets/earphones-yx1-desktop.jpg";
import tabletYx1 from "./assets/earphones-yx1-tablet.jpg";
import mobileYx1 from "./assets/earphones-yx1-mobile.jpg";
import desktopMicroYx1 from "./assets/micro/earphones-yx1-desktop.jpg";
import tabletMicroYx1 from "./assets/micro/earphones-yx1-tablet.jpg";
import mobileMicroYx1 from "./assets/micro/earphones-yx1-mobile.jpg";

const initialImgZx9 = {
  mobile: mobileMicroZx9,
  tablet: tabletMicroZx9,
  desktop: desktopMicroZx9,
};

const largeImgZx9 = {
  mobile: mobileZx9,
  tablet: tabletZx9,
  desktop: desktopZx9,
};

const initialImgZx7 = {
  mobile: mobileMicroZx7,
  tablet: tabletMicroZx7,
  desktop: desktopMicroZx7,
};

const largeImgZx7 = {
  mobile: mobileZx7,
  tablet: tabletZx7,
  desktop: desktopZx7,
};

const initialImgYx1 = {
  mobile: mobileMicroYx1,
  tablet: tabletMicroYx1,
  desktop: desktopMicroYx1,
};

const largeImgYx1 = {
  mobile: mobileYx1,
  tablet: tabletYx1,
  desktop: desktopYx1,
};

export const BannersWrapper: FC = () => {
  return (
    <Wrapper>
      <ProductBanner
        initialImg={initialImgZx9}
        largeImg={largeImgZx9}
        cardType="large"
        href="/details/ZX9"
        category="speaker"
        name="ZX9"
        description="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
      />
      <ProductBanner
        initialImg={initialImgZx7}
        largeImg={largeImgZx7}
        cardType="medium"
        href="/details/ZX7"
        category="speaker"
        name="ZX7"
      />
      <ProductBanner
        initialImg={initialImgYx1}
        largeImg={largeImgYx1}
        cardType="divided"
        href="/details/YX1"
        category="earphones"
        name="YX1"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme }) => {
  return css`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media ${theme.media.desktop} {
      gap: 50px;
    }
  `;
});
