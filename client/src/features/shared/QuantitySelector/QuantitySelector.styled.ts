import { styled, css } from "styled-components";

export const StyledQuantitySelector = styled.div<{ $checkoutCase: boolean }>(
  ({ theme, $checkoutCase }) => {
    return css`
      background-color: ${theme.grayLight};
      width: ${$checkoutCase ? "100px" : "120px"};
      height: ${$checkoutCase ? "35px" : "52px"};
      display: flex;
      align-items: center;
      font-weight: bold;

      > input {
        min-width: 0;
        flex: 1;
        background-color: transparent;
        border: none;
        text-align: center;
        font-weight: bold;
      }

      > button {
        flex: 2;
        background-color: transparent;
        border: none;
        color: ${theme.grayDarkText};
        height: 100%;
        cursor: pointer;
        font-size: 1.2rem;

        &:hover {
          color: ${theme.orangeMedium};
        }
      }
    `;
  }
);
