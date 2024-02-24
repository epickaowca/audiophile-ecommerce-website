import { FC } from "react";
import logo from "../../../assets/shared/logo.svg";
import facebook from "./assets/icon-facebook.svg";
import instagram from "./assets/icon-instagram.svg";
import twitter from "./assets/icon-twitter.svg";
import { StyledFooter } from "./Footer.styled";
import { Link } from "react-router-dom";

const menuItems = [
  { label: "home", href: "/" },
  { label: "headphones", href: "/category/headphones" },
  { label: "speakers", href: "/category/speakers" },
  { label: "earphones", href: "/category/earphones" },
];

export const Footer: FC = () => {
  console.log("footer");
  return (
    <StyledFooter>
      <div className="wrapper">
        <div className="orange-rectangle"></div>
        <div className="nav-wrapper">
          <img className="logo" src={logo} alt="logo" />
          <nav role="navigation">
            <ul role="menubar" className="desktop_nav">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link role="menuitem" to={item.href}>
                    {item.label}
                  </Link>
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
