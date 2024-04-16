import { styled, css } from "styled-components";

export const StyledForm = styled.div<{ $className: string }>(
  ({ theme: { media, orangeMedium }, $className }) => {
    return css`
      background-color: white;
      display: flex;
      flex-direction: column;
      gap: 40px;
      padding: 25px;
      border-radius: 7px;
      width: 100%;

      .${$className} {
        &_title {
          text-transform: uppercase;
        }

        &_section {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        &_sectionTitle {
          font-size: 1rem;
          text-transform: uppercase;
          color: ${orangeMedium};
        }
      }

      @media ${media.tablet} {
        padding: 35px;
      }
    `;
  }
);

export const StyledRow = styled.div<{ $half?: boolean }>(
  ({ theme: { media }, $half }) => {
    return css`
      display: flex;
      justify-content: flex-start;
      gap: 25px;
      flex-direction: column;

      @media ${media.tablet} {
        flex-direction: row;
        width: ${$half ? "calc(50% - calc(25px / 2))" : "100%"};
      }
    `;
  }
);
