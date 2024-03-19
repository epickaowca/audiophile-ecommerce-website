import { styled, css } from "styled-components";

export const StyledForm = styled.div(({ theme }) => {
  return css`
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 25px;
    border-radius: 7px;
    width: 100%;
    & > h1 {
      text-transform: uppercase;
    }

    & > .form-section {
      display: flex;
      flex-direction: column;
      gap: 25px;
      & > h2 {
        font-size: 1rem;
        text-transform: uppercase;
        color: ${theme.orangeMedium};
      }
    }

    @media ${theme.media.tablet} {
      padding: 35px;
    }
  `;
});

export const Row = styled.div<{ $half?: boolean }>(({ theme, $half }) => {
  return css`
    display: flex;
    justify-content: flex-start;
    gap: 25px;
    flex-direction: column;
    @media ${theme.media.tablet} {
      flex-direction: row;
      width: ${$half ? "calc(50% - calc(25px / 2))" : "100%"};
    }
  `;
});
