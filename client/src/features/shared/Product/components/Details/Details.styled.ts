import { styled, css } from "styled-components";

export const DetailsWrapper = styled.div(({ theme }) => {
  return css`
    display: flex;
    flex-direction: column;
    gap: 25px;
    & > .price {
      margin-top: 25px;
      font-weight: bold;
      font-size: 1.2rem;
    }
    & > .CTA-container {
      display: flex;
      gap: 25px;
    }
    @media ${theme.media.desktop} {
      gap: 35px;
      & > .price {
        margin-top: 35px;
      }
    }
  `;
});
