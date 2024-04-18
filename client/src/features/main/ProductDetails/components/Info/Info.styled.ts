import { styled, css } from "styled-components";

export const StyledInfo = styled.div<{ $className: string }>(
  ({ theme: { grayDarkText, media, orangeMedium }, $className }) => {
    return css`
      width: 90%;
      margin: 65px auto;
      display: flex;
      flex-direction: column;
      gap: 65px;
      color: ${grayDarkText};

      .${$className} {
        &_featuresWrapper {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        &_featuresTitle {
          color: #000;
        }

        &_includesWrapper {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        &_includesTitle {
          color: #000;
          margin-bottom: 15px;
        }

        &_include {
          display: flex;
          & span:nth-child(1) {
            font-weight: bold;
            color: ${orangeMedium};
            width: 50px;
            display: block;
          }
        }
      }

      @media ${media.tablet} {
        margin-top: 100px;

        .${$className} {
          &_includesTitle,
          &_featuresTitle {
            font-size: 2rem;
          }

          &_includesWrapper {
            min-width: 215px;
          }
        }
      }

      @media ${media.desktop} {
        flex-direction: row;
        justify-content: space-between;
        max-width: 1300px;

        .${$className} {
          &_featuresWrapper {
            max-width: 645px;
          }
        }
      }
    `;
  }
);
