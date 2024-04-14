import { styled, css } from "styled-components";

export const StyledCart = styled.div<{ $className: string }>(
  ({ theme: { grayDarkText, orangeMedium, media }, $className }) => {
    return css`
      position: relative;
      background-color: white;
      border-radius: 10px;
      width: 100%;
      max-width: 420px;
      padding: 40px 25px 25px 25px;
      display: flex;
      flex-direction: column;
      gap: 35px;

      .${$className} {
        &_headingWrapper {
          display: flex;
          justify-content: space-between;
        }

        &_heading {
          font-size: 1rem;
          font-weight: bold;
          text-transform: uppercase;
        }

        &_removeBtn {
          background-color: transparent;
          border: none;
          text-decoration: underline;
          color: ${grayDarkText};
          font-size: 0.9rem;
          cursor: pointer;
          font-weight: 500;

          &:hover {
            color: ${orangeMedium};
          }
        }

        &_emptyTitle {
          margin-top: 100px;
          text-align: center;
        }
      }

      @media ${media.tablet} {
        padding: 35px;
        padding-top: 50px;
      }
    `;
  }
);
