import { styled, css } from "styled-components";

export const StyledDetails = styled.div<{ $className: string }>(
  ({ theme: { media }, $className }) => {
    return css`
      display: flex;
      flex-direction: column;
      gap: 25px;

      .${$className} {
        &_price {
          margin-top: 25px;
          font-weight: bold;
          font-size: 1.2rem;
        }

        &_btnsContainer {
          display: flex;
          gap: 25px;
        }
      }
      @media ${media.desktop} {
        gap: 35px;

        .${$className} {
          &_price {
            margin-top: 35px;
          }
        }
      }
    `;
  }
);
