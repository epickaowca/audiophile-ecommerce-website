import { FC } from "react";
import imgDesktop from "./assets/image-best-gear-desktop.jpg";
import imgTablet from "./assets/image-best-gear-tablet.jpg";
import imgMobile from "./assets/image-best-gear-mobile.jpg";
import { styled, css } from "styled-components";
import { myTheme } from "../../styles/styled";

export const AudioGear: FC = () => {
  return (
    <Wrapper>
      <picture>
        <source media={myTheme.media.desktop} srcSet={imgDesktop} />
        <source media={myTheme.media.tablet} srcSet={imgTablet} />
        <img
          // ref={imageRef}
          src={imgMobile}
          alt="background-product-image"
        />
      </picture>
      <div className="description">
        <h1>
          Bringing you the <span>best</span> audio gear
        </h1>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme }) => {
  return css`
    width: 90%;
    max-width: 327px;
    margin: auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    & > picture {
      border-radius: 7px;
      display: block;
      height: 300px;
      overflow: hidden;
      & > img {
        width: 100%;
        min-height: 300px;
      }
    }

    & > .description {
      text-align: center;
      & > h1 {
        text-transform: uppercase;
        margin-bottom: 25px;
        font-size: 1.75rem;
        & > span {
          color: ${theme.orangeMedium};
        }
      }
      & > p {
        color: ${theme.grayDarkText};
        font-weight: 500;
        font-size: 0.95rem;
        line-height: 1.6rem;
      }
    }

    @media ${theme.media.tablet} {
      gap: 70px;
      max-width: 1300px;
      & > .description {
        max-width: 573px;
        margin: auto;
        & > h1 {
          font-size: 2.5rem;
        }
      }
    }

    @media ${theme.media.desktop} {
      margin-top: 200px;
      flex-direction: row-reverse;
      gap: 25px;
      justify-content: space-between;
      align-items: center;
      & > .description {
        margin: 0;

        width: 50%;
        text-align: left;
        & > h1 {
          max-width: 450px;
          margin-bottom: 50px;
        }
        & > p {
          max-width: 450px;
        }
      }

      & > picture {
        width: 50%;
        height: 650px;

        & > img {
          min-height: 650px;
          min-width: 600px;
        }
      }
    }
  `;
});
