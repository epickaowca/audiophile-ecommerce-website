import { FC } from "react";
import logo from "../../assets/shared/logo.svg";
import facebook from "./assets/icon-facebook.svg";
import instagram from "./assets/icon-instagram.svg";
import twitter from "./assets/icon-twitter.svg";
import { styled, css } from "styled-components";

const menuItems = ["home", "headphones", "speakers", "earphones"];

export const Footer: FC = () => {
  return (
    <StyledFooter>
      <div className="wrapper">
        <div className="orange-rectangle"></div>
        <div className="nav-wrapper">
          <img className="logo" src={logo} alt="logo" />
          <nav role="navigation">
            <ul role="menubar" className="desktop_nav">
              {menuItems.map((item) => (
                <li key={item}>
                  <a role="menuitem" href={`#${item}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="description">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="copyright-wrapper">
          <p>Copyright 2021. All Rights Reserved</p>
          <div className="social-media">
            <a href="#facebook">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="#twitter">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="#instagram">
              <img src={instagram} alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer(({ theme }) => {
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

        & > .copyright-wrapper {
          & > .social-media {
            margin-top: -100px;
          }
        }
      }
    }
  `;
});
