import { styled, css } from "styled-components";

export const StyledFooter = styled.footer(({ theme }) => {
  return css`
    background-color: ${theme.grayDark};
    & > .wrapper {
      position: relative;
      padding: 50px 0;
      margin: auto;
      width: 90%;
      max-width: 327px;
      text-align: center;
      color: rgba(255, 255, 255, 0.5);
      display: flex;
      flex-direction: column;
      gap: 45px;

      & > .orange-rectangle {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 4px;
        background-color: ${theme.orangeMedium};
      }

      & > .nav-wrapper {
        & > .logo {
          margin-bottom: 40px;
        }
        & > nav {
          & > ul {
            display: flex;
            flex-direction: column;
            gap: 20px;
            & > li {
              list-style-type: none;
              & > a {
                font-weight: bold;
                text-transform: uppercase;
                text-decoration: none;
                color: white;
                font-size: 0.9rem;
              }
            }
          }
        }
      }
      & > .copyright-wrapper {
        & > p {
          margin-bottom: 40px;
        }
        & > .social-media {
          display: flex;
          gap: 20px;
          justify-content: center;
        }
      }
    }

    @media ${theme.media.tablet} {
      & > .wrapper {
        text-align: left;
        max-width: 750px;
        padding-left: 0;
        padding-top: 70px;
        padding-bottom: 30px;

        & > .orange-rectangle {
          left: 50px;
        }

        & > .nav-wrapper {
          & > nav {
            & > ul {
              flex-direction: row;
            }
          }
        }

        & > .copyright-wrapper {
          margin-top: 50px;
          display: flex;
          justify-content: space-between;
          & > .social-media {
            align-items: flex-start;
          }
        }
      }
    }

    @media ${theme.media.desktop} {
      & > .wrapper {
        gap: 20px;
        max-width: 1300px;
        padding-left: 0;

        & > .nav-wrapper {
          display: flex;
          justify-content: space-between;
        }
        & > p {
          max-width: 60%;
        }
      }
    }
  `;
});
