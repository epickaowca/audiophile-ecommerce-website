import { FC } from "react";
import {
  ProductsPresentation,
  StyledProductsPresentation,
} from "../../ProductsPresentation/index";
import { styled, css } from "styled-components";

type NavigationProps = {
  isNavOpen: boolean;
};

export const Navigation: FC<NavigationProps> = ({ isNavOpen }) => {
  return (
    <Nav $isNavOpen={isNavOpen}>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#headphones">Headphones</a>
        </li>
        <li>
          <a href="#speakers">Speakers</a>
        </li>
        <li>
          <a href="#earphones">Earphones</a>
        </li>
      </ul>
      <ProductsPresentation />
    </Nav>
  );
};

const Nav = styled.nav<{ $isNavOpen: boolean }>(
  ({
    $isNavOpen,
    theme: {
      media: { desktop },
    },
  }) => {
    return css`
      display: ${$isNavOpen ? "block" : "none"};
      position: absolute;
      width: 100%;
      left: 0;
      top: 91px;
      background-color: white;
      padding-top: 25px;
      padding-bottom: 45px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      & > ul {
        display: none;
      }

      @media ${desktop} {
        display: block;
        position: relative;
        top: 0;
        padding: 0;
        background-color: transparent;
        & > ${StyledProductsPresentation} {
          display: none;
        }
        & > ul {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          & > li {
            list-style-type: none;
            & > a {
              text-transform: uppercase;
              color: white;
              text-decoration: none;
            }
          }
        }
      }
    `;
  }
);
