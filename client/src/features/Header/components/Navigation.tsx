import { FC } from "react";
import {
  ProductCategories,
  StyledProductCategories,
} from "../../ProductCategories";
import { styled, css } from "styled-components";

type NavigationProps = {
  isNavOpen: boolean;
};

export const navId = "main-menu";

export const Navigation: FC<NavigationProps> = ({ isNavOpen }) => {
  return (
    <Nav id={navId} role="navigation" $isNavOpen={isNavOpen}>
      <ul role="menubar" className="desktop_nav">
        <li>
          <a role="menuitem" href="#home">
            Home
          </a>
        </li>
        <li>
          <a role="menuitem" href="#headphones">
            Headphones
          </a>
        </li>
        <li>
          <a role="menuitem" href="#speakers">
            Speakers
          </a>
        </li>
        <li>
          <a role="menuitem" href="#earphones">
            Earphones
          </a>
        </li>
      </ul>

      {isNavOpen && (
        <ProductCategories
          autoFocusFirstCategory={true}
          navigationCase={true}
        />
      )}
    </Nav>
  );
};

const Nav = styled.nav<{ $isNavOpen: boolean }>(
  ({
    $isNavOpen,
    theme: {
      media: { desktop, tablet },
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
      & > .desktop_nav {
        display: none;
      }
      & > ${StyledProductCategories} {
        margin: auto;
        margin-top: 50px;
      }

      @media ${tablet} {
        & > ${StyledProductCategories} {
          margin: auto;
          margin-top: 50px;
        }
      }

      @media ${desktop} {
        display: block;
        position: relative;
        top: 0;
        padding: 0;
        background-color: transparent;
        & > ${StyledProductCategories} {
          display: none;
        }
        & > .desktop_nav {
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
