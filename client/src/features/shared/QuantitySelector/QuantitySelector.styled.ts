import { styled, css } from "styled-components";

export const StyledQuantitySelector = styled.div(({ theme }) => {
  return css`
    background-color: ${theme.grayLight};
    width: 100px;
    height: 45px;
    display: flex;
    align-items: center;
    font-weight: bold;
    /* overflow */

    > input {
      min-width: 0;
      flex: 1;
      background-color: transparent;
      border: none;
      text-align: center;
    }

    > button {
      /* display: block; */
      flex: 2;
      background-color: transparent;
      border: none;
      color: ${theme.grayText};
      height: 100%;
      cursor: pointer;
      font-size: 1.2rem;

      &:hover {
        color: ${theme.orangeMedium};
      }
    }
  `;
});
