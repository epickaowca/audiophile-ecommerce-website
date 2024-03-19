import { styled, css } from "styled-components";

export const Wrapper = styled.div(({ theme }) => {
  return css`
    display: flex;
    flex-direction: column;
    width: 100%;
    & > input {
      padding: 20px;
      border: 1px solid rgba(0, 0, 0, 0.4);
      border-radius: 7px;
      font-weight: bold;
      &::placeholder {
        color: rgba(0, 0, 0, 0.4);
        font-size: 0.9rem;
      }
    }

    & > label {
      margin-bottom: 5px;
      font-weight: bold;
    }
  `;
});
