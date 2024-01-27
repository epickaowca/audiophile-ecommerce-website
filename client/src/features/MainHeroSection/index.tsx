import { FC } from "react";
import { ProductDescription } from "../ProductDescription";
import { styled, css } from "styled-components";
import heroImageDesktop from "./assets/image-hero-desktop.jpg";
import heroImageTablet from "./assets/image-hero-tablet.jpg";
import heroImageMobile from "./assets/image-hero-mobile.jpg";

export const MainHeroSection: FC = () => {
  return (
    <Wrapper>
      <div className="mask"></div>
      <div className="img-wrapper">
        <img src={heroImageMobile} alt="hero-image" />
      </div>
      <ProductDescription
        darkTheme={true}
        isNew={true}
        productName="XX99 Mark II"
        productCategory="headphones"
        description="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
      />
    </Wrapper>
  );
};

const Wrapper = styled.div(() => {
  return css`
    position: relative;
    height: 600px;
    padding-top: 100px;

    & > .img-wrapper {
      position: absolute;
      z-index: -2;
      left: 50%;
      top: calc(-91px + 50%);
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      min-width: 375px;
      display: flex;
      align-items: center;
      overflow: hidden;
      & > img {
        width: 100%;
        /* height: 100%; */
        /* position: absolute;
      z-index: -2;
      left: 50%;
      top: calc(-91px + 50%);
      transform: translate(-50%, -50%);
      width: 100%;
      min-width: 375px; */
      }
    }

    & > .mask {
      position: absolute;
      left: 0;
      top: -91px;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: -1;
      width: 100%;
      height: 100%;
    }
  `;
});
