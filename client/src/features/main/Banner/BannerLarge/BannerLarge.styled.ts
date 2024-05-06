import { styled, css } from "styled-components";
import { StyledProductDescription } from "@root/features/shared/ProductDescription";

export const StyledBanner = styled.div<{ $className: string }>(
  ({ theme: { orangeMedium, media }, $className }) => {
    return css`
      position: relative;
      background-color: ${orangeMedium};
      height: 600px;
      width: 90%;
      margin: auto;
      border-radius: 7px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 50px 25px;

      .${$className} {
        &_picture {
          z-index: 2;
          width: 160px;
        }

        &_picture--blur {
          filter: blur(5px);
        }

        &_img {
          width: 100%;
        }

        &_patternCircles {
          position: absolute;
          width: 550px;
          left: 50%;
          top: -120px;
          transform: translate(-50%);
          pointer-events: none;
          z-index: 1;
        }
      }

      ${StyledProductDescription} {
        z-index: 2;
        &_title {
          color: white;
          font-size: 2.5rem;
          line-height: 2.5rem;
        }

        &_description {
          max-width: 400px;
          color: rgba(255, 255, 255, 0.75);
        }
      }

      @media ${media.tablet} {
        height: 720px;

        .${$className} {
          &_picture {
            width: 220px;
          }

          &_patternCircles {
            top: -280px;
            width: 950px;
          }
        }

        ${StyledProductDescription} {
          &_title {
            font-size: 3.6rem;
            line-height: 3.6rem;
          }
        }
      }

      @media ${media.desktop} {
        flex-direction: row;
        height: 560px;
        justify-content: space-evenly;
        align-items: center;
        max-width: 1300px;
        padding: 0;

        .${$className} {
          &_picture {
            align-self: flex-end;
            margin-bottom: -17px;
            width: 100%;
            max-width: 400px;
          }

          &_patternCircles {
            left: 28%;
            top: -70px;
            width: 1000px;
          }
        }
      }
    `;
  }
);
