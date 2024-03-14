import { styled, css } from "styled-components";
import { StyledProductDescription } from "../ProductDescription";

export const StyledProductsList = styled.div<{ $detailCase?: boolean }>(
  ({ theme, $detailCase }) => {
    return css`
      width: 90%;
      position: relative;
      margin: auto;
      display: flex;
      flex-direction: column;
      gap: 25px;

      ${$detailCase &&
      css`
        & > .description-wrapper > ${StyledProductDescription} {
          margin-top: 25px;
          text-align: left;
          align-items: flex-start;
          & .description {
            max-width: unset;
          }
        }
      `}

      & > picture {
        width: 100%;
        border-radius: 7px;
        height: 352px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background-color: ${theme.grayLight};

        & > img {
          width: 100%;
          max-width: 327px;
        }
      }

      @media ${theme.media.tablet} {
        gap: 50px;
        & > picture {
          height: ${$detailCase ? "500px" : "352px"};
          & > img {
            max-width: 654px;
          }
        }
        ${$detailCase &&
        css`
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          max-width: 1300px;
          & > .description-wrapper > ${StyledProductDescription} {
            & > .description {
              max-width: 800px;
            }
          }
        `}
      }

      @media ${theme.media.desktop} {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        max-width: 1300px;

        & > picture {
          max-width: 540px;
          height: 560px;
        }
        & > .description-wrapper > ${StyledProductDescription} {
          width: 100%;
          max-width: 505px;
        }
      }
    `;
  }
);
