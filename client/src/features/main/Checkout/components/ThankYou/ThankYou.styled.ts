import { styled, css } from "styled-components";
import { StyledProductList, StyledProduct } from "@root/features/main/Cart";
import { overlayZIndex } from "@root/features/shared/Overlay";

export const StyledThankYou = styled.div<{ $className: string }>(
  ({ theme: { media, grayDarkText, grayLight }, $className }) => {
    return css`
      width: 95%;
      max-width: 560px;
      background-color: white;
      position: absolute;
      left: 50%;
      top: 15%;
      transform: translateX(-50%);
      z-index: ${overlayZIndex + 1};
      border-radius: 10px;
      overflow: hidden;
      padding: 25px;
      display: flex;
      flex-direction: column;
      gap: 20px;

      .${$className} {
        &_icon {
          width: 50px;
        }

        &_title {
          text-transform: uppercase;
        }

        &_description {
          font-weight: 500;
          color: ${grayDarkText};
        }

        &_grandTotal {
          background-color: black;
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 30px;
          & > span {
            &:nth-child(1) {
              color: rgba(255, 255, 255, 0.5);
              text-transform: uppercase;
            }
            &:nth-child(2) {
              color: white;
              font-weight: bold;
            }
          }
        }

        &_summaryWrapper {
          border-radius: 10px;
          overflow: hidden;
        }
      }

      ${StyledProductList} {
        padding: 30px;
        background-color: ${grayLight};
      }

      ${StyledProduct} {
        &_container {
          gap: 10px;
        }

        &_name {
          font-size: 0.9rem;
          margin-bottom: 0;
          line-height: 0.9rem;
        }
      }

      @media ${media.tablet} {
        .${$className} {
          &_summaryWrapper {
            display: flex;
            width: 100%;
          }

          &_grandTotal {
            flex: 1;
            display: flex;
            justify-content: center;
          }
        }

        ${StyledProductList} {
          flex: 2;
        }
      }
    `;
  }
);
