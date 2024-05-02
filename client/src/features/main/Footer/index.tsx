import { FC } from "react";
import logo from "../../../assets/logo.svg";
import facebook from "./assets/icon-facebook.svg";
import instagram from "./assets/icon-instagram.svg";
import twitter from "./assets/icon-twitter.svg";
import { StyledFooter } from "./Footer.styled";
import { NavList } from "../Header";

export const Footer: FC = () => {
  const { styledComponentId: Footer } = StyledFooter;
  return (
    <StyledFooter $className={Footer}>
      <div className={`${Footer}_wrapper`}>
        <div className={`${Footer}_orangeDecoration`}></div>
        <div className={`${Footer}_navWrapper`}>
          <img className={`${Footer}_logo`} src={logo} alt="logo" />
          <nav role="navigation">
            <NavList />
          </nav>
        </div>
        <p className={`${Footer}_description`}>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className={`${Footer}_copyrightWrapper`}>
          <p className={`${Footer}_copyrightText`}>
            Copyright 2024. All Rights Reserved
          </p>
          <div className={`${Footer}_socialMedia`}>
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
