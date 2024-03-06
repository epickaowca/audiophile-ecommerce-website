import { styled, css } from "styled-components";
import { StyledProductDescription } from "../../../shared/ProductDescription";

export const StyledProductsList = styled.div(({ theme }) => {
  return css`
    width: 90%;
    position: relative;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 25px;

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
        & > img {
          max-width: 654px;
        }
      }
    }

    @media ${theme.media.desktop} {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      max-width: 1200px;

      & > picture {
        max-width: 540px;
        height: 560px;
      }
      & > ${StyledProductDescription} {
        width: 100%;
        max-width: 445px;
      }
    }
  `;
});
