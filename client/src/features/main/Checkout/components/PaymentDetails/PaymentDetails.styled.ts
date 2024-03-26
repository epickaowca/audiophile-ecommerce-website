import { styled, css } from "styled-components";

export const Fieldset = styled.fieldset(({ theme }) => {
  return css`
    border: none;
    & > h2 {
      font-size: 1rem;
      margin-bottom: 10px;
    }
    & > .btns-wrapper {
      display: flex;
      flex-direction: column;
      gap: 25px;
      & > label {
        padding: 20px;
        border: 1px solid rgba(0, 0, 0, 0.4);
        border-radius: 7px;
        font-weight: bold;
        display: flex;
        align-items: center;
        cursor: pointer;
        &:focus {
          border: 1px solid ${theme.orangeMedium};
        }

        & > input {
          margin-right: 15px;
          accent-color: ${theme.orangeMedium};
          height: 20px;
          width: 20px;
        }
      }
    }

    @media ${theme.media.tablet} {
      display: flex;
      width: 100%;
      gap: 25px;
      & > h2 {
        width: 50%;
      }

      & > .btns-wrapper {
        width: 50%;
      }
    }
  `;
});
