import { StyledProductDescription } from "../../shared/ProductDescription";
import { styled, css } from "styled-components";

export const StyledMainHeroSection = styled.section<{ $className: string }>(
  ({ theme: { media, heroBgColor }, $className }) => {
    return css`
      position: relative;
      height: 500px;
      overflow: hidden;
      display: flex;
      align-items: center;

      .${$className} {
        &_bg {
          background-color: ${heroBgColor};
          z-index: -2;
          position: absolute;
          width: 100%;
          height: 100%;
        }

        &_picture {
          position: absolute;
          z-index: -2;
          width: 100%;
          max-width: 1440px;
          height: 100%;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        &_picture--blur {
          filter: blur(2px);
        }

        &_img {
          min-width: 375px;
          width: 100%;
          min-height: 100%;
        }
      }

      ${StyledProductDescription} {
        margin: auto;
        &_title {
          color: white;
          font-size: 2.25rem;
          line-height: 2.5rem;
          letter-spacing: 2px;
          margin-right: -2px;
        }

        &_newProduct {
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: -5px;
        }

        &_description {
          color: rgba(255, 255, 255, 0.75);
          font-weight: 400;
          max-width: 370px;
        }
      }

      @media ${media.tablet} {
        height: 630px;
        ${StyledProductDescription} {
          &_title {
            font-size: 3.5rem;
            line-height: 3.8rem;
            letter-spacing: 3px;
            margin-right: -3px;
          }
          &_description {
            font-weight: 500;
          }
        }
      }

      @media ${media.desktop} {
        justify-content: flex-start;
        .${$className} {
          &_picture {
            left: 50%;
            transform: translateX(-50%);
            display: block;
          }
        }

        ${StyledProductDescription} {
          padding-left: 50px;
          width: 100%;
          max-width: 1400px;
          &_title {
            letter-spacing: 5px;
            margin-right: -5px;
          }
        }
      }
    `;
  }
);
