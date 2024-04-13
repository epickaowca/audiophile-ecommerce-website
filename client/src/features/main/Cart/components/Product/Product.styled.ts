import { styled, css } from "styled-components";

export const StyledProduct = styled.div<{ $className: string }>(
  ({ theme, $className }) => {
    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 15px;
      .${$className} {
        &_container {
          display: flex;
          align-items: center;
          gap: 25px;
          text-transform: uppercase;
        }
        &_img {
          width: 64px;
          border-radius: 7px;
        }

        &_name {
          font-size: 1rem;
          margin-bottom: 5px;
        }

        &_price {
          font-size: 0.9rem;
          font-weight: bold;
          color: ${theme.grayDarkText};
        }
      }
      & > .quantity-span {
        font-weight: bold;
        color: ${theme.grayDarkText};
      }
    `;
  }
);
