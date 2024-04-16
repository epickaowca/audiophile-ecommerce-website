import { styled, css } from "styled-components";

export const StyledCheckout = styled.div<{ $className: string }>(
  ({ theme: { media, grayDark }, $className }) => {
    return css`
      width: 90%;
      margin: 50px auto;

      .${$className} {
        &_form {
          display: flex;
          flex-direction: column;
          gap: 35px;
          align-items: center;
        }

        &_cartWrapper {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        &_phraseWrapper {
          display: none;
        }
      }

      @media ${media.tablet} {
        .${$className} {
          &_cartWrapper {
            border-radius: 10px;
            overflow: hidden;
            background-color: white;
          }

          &_phraseWrapper {
            width: 100%;
            background-color: ${grayDark};
            display: grid;
            place-items: center;
          }

          &_phrase {
            text-align: center;
            font-size: 2rem;
            color: white;
            max-width: 300px;
          }
        }
      }

      @media ${media.desktop} {
        max-width: 1300px;
        margin: 100px auto;

        .${$className} {
          &_phraseWrapper {
            display: none;
          }

          &_cartWrapper {
            max-width: 360px;
          }

          &_form {
            flex-direction: row;
            align-items: flex-start;
          }
        }
      }
    `;
  }
);
