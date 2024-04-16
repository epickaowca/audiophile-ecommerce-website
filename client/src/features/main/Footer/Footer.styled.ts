import { styled, css } from "styled-components";

export const StyledFooter = styled.footer<{ $className: string }>(
  ({ theme: { orangeMedium, grayDark, media }, $className }) => {
    return css`
      background-color: ${grayDark};

      .${$className} {
        &_wrapper {
          position: relative;
          padding: 50px 0;
          margin: auto;
          width: 90%;
          text-align: center;
          color: rgba(255, 255, 255, 0.5);
          display: flex;
          flex-direction: column;
          gap: 45px;
        }

        &_orangeDecoration {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 4px;
          background-color: ${orangeMedium};
        }

        &_logo {
          margin-bottom: 40px;
        }

        &_copyrightText {
          margin-bottom: 40px;
        }

        &_socialMedia {
          display: flex;
          gap: 20px;
          justify-content: center;
        }
      }

      @media ${media.tablet} {
        .${$className} {
          &_wrapper {
            text-align: left;
            max-width: 750px;
            padding: 70px 0 30px 0;
          }

          &_orangeDecoration {
            left: 50px;
          }

          &_copyrightWrapper {
            margin-top: 50px;
            display: flex;
            justify-content: space-between;
          }

          &_socialMedia {
            align-items: flex-start;
          }
        }
      }

      @media ${media.desktop} {
        .${$className} {
          &_wrapper {
            gap: 20px;
            max-width: 1300px;
            padding-left: 0;
          }

          &_navWrapper {
            display: flex;
            justify-content: space-between;
          }

          &_description {
            max-width: 60%;
          }
        }
      }
    `;
  }
);
