import { styled, css } from "styled-components";

export const StyledProductDescription = styled.div<{ $className: string }>(
  ({ theme, $className }) => {
    return css`
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      gap: 25px;

      .${$className} {
        &_newProduct {
          text-align: center;
          color: ${theme.orangeMedium};
          letter-spacing: 10px;
          margin-right: -10px;
          font-size: 0.87rem;
        }

        &_title {
          color: black;
          font-size: 1.8rem;
          line-height: 1.8rem;
          letter-spacing: 1px;
          margin-right: -1px;
          text-transform: uppercase;
        }

        &_description {
          max-width: 572px;
          line-height: 1.5rem;
          color: ${theme.grayDarkText};
          font-weight: 500;
          font-size: 0.95rem;
        }
      }

      @media ${theme.media.tablet} {
        .${$className} {
          &_title {
            font-size: 2.5rem;
            line-height: 2.5rem;
          }

          &_description {
            line-height: 1.6rem;
          }
        }
      }

      @media ${theme.media.desktop} {
        gap: 35px;
        text-align: left;
        align-items: flex-start;

        .${$className} {
          &_new_product {
            margin-bottom: -15px;
          }

          &_description {
            max-width: 800px;
            line-height: 1.6rem;
            font-size: 1rem;
          }
        }
      }
    `;
  }
);
