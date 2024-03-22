import { styled, css } from "styled-components";
import { CardType } from "../../types";
import { StyledProductDescription } from "../../../../shared/ProductDescription";
import { cardsHeight } from "./constants";

export const StyledCard = styled.div<{ $cardType: CardType }>(
  ({ theme, $cardType }) => {
    return css`
      position: relative;
      background-color: ${$cardType === "large"
        ? theme.orangeMedium
        : theme.grayLight};
      height: ${cardsHeight[$cardType].mobile};
      width: 90%;
      margin: auto;
      border-radius: 7px;
      overflow: hidden;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding: 50px 0;

      & > ${StyledProductDescription} {
        z-index: 2;
        & > .title_wrapper {
          & > h1 {
            color: white;
            font-size: 2.5rem;
            line-height: 2.5rem;
          }
        }
        & > .description {
          color: rgba(255, 255, 255, 0.75);
        }
      }

      @media ${theme.media.tablet} {
        height: ${cardsHeight[$cardType].tablet};
        & > ${StyledProductDescription} {
          & > .title_wrapper {
            & > h1 {
              font-size: 3.6rem;
              line-height: 3.6rem;
            }
          }
          & > .description {
            max-width: 350px;
          }
        }
      }

      @media ${theme.media.desktop} {
        height: ${cardsHeight[$cardType].desktop};
        justify-content: space-evenly;
        align-items: center;
        max-width: 1300px;
        padding: 0;
      }
    `;
  }
);
