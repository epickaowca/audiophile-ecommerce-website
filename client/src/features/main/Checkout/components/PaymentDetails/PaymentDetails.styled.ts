import { styled, css } from "styled-components";

export const StyledFieldset = styled.fieldset<{ $className: string }>(
  ({ theme: { media }, $className }) => {
    return css`
      border: none;

      .${$className} {
        &_title {
          font-size: 1rem;
          margin-bottom: 10px;
        }

        &_radioBtnsContainer {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
      }

      @media ${media.tablet} {
        display: flex;
        width: 100%;
        gap: 25px;

        .${$className} {
          &_title {
            width: 50%;
          }

          &_radioBtnsContainer {
            width: 50%;
          }
        }
      }
    `;
  }
);
