import { styled, css } from "styled-components";

export const StyledProduct = styled.div<{ $className: string }>(
  ({ theme: { grayDarkText }, $className }) => {
    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: bold;
      gap: 15px;
      .${$className} {
        &_container {
          color: ${grayDarkText};
          display: flex;
          align-items: center;
          gap: 15px;
          text-transform: uppercase;
        }

        &_img {
          width: 64px;
          border-radius: 7px;
        }

        &_name {
          font-size: 1rem;
          margin-bottom: 5px;
          color: #000;
        }

        &_price {
          font-size: 0.9rem;
        }
      }
    `;
  }
);
