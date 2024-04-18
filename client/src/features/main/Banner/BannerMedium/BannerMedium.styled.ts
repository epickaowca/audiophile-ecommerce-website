import { styled, css } from "styled-components";
import { StyledProductDescription } from "../../../shared/ProductDescription";

export const StyledBanner = styled.div<{ $className: string }>(
  ({ theme: { grayLight, media }, $className }) => {
    return css`
      position: relative;
      background-color: ${grayLight};
      height: 320px;
      width: 90%;
      margin: auto;
      border-radius: 7px;
      overflow: hidden;
      display: flex;
      align-items: center;
      padding-left: 12%;

      .${$className} {
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
        padding-left: 70px;
      }

      @media ${media.desktop} {
        height: 350px;
        max-width: 1300px;
        padding-left: 130px;
      }
    `;
  }
);
