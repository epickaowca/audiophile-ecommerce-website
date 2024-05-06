import { styled, css } from "styled-components";
import { StyledProductDescription } from "@root/features/shared/ProductDescription";

export const StyledBanner = styled.div<{ $className: string }>(
  ({ theme: { grayLight, media }, $className }) => {
    return css`
      display: flex;
      flex-direction: column;
      gap: 25px;
      width: 90%;
      margin: auto;
      .${$className} {
        &_card {
          background-color: ${grayLight};
          position: relative;
          height: 200px;
          width: 100%;
          border-radius: 7px;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding-left: 12%;
        }

        &_picture {
          left: 0;
          top: 0;
          position: absolute;
          width: 100%;
          height: 100%;
        }

        &_picture--blur {
          filter: blur(2px);
        }

        &_img {
          width: 100%;
          min-height: 100%;
        }
      }

      ${StyledProductDescription} {
        z-index: 2;
        align-items: flex-start;
      }

      @media ${media.tablet} {
        flex-direction: row;
        .${$className} {
          &_card {
            height: 320px;
            padding-left: 7%;
          }
        }

        ${StyledProductDescription} {
          &_title {
            font-size: 2rem;
            line-height: 2rem;
          }
        }
      }

      @media ${media.desktop} {
        max-width: 1300px;
        gap: 50px;
        .${$className} {
          &_card {
            height: 350px;
            padding-left: 10%;
          }
        }
      }
    `;
  }
);
