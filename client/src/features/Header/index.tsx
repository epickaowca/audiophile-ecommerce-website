import { FC, useState } from "react";
import { Navigation } from "./components/Navigation";
import { styled, css } from "styled-components";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import hamburgerIcon from "../../assets/shared/tablet/icon-hamburger.svg";
import { wrapperStyles } from "../../styles/wrapperStyles";
import { Overlay } from "../Overlay";

export const Header: FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <StyledHeader>
      <Wrapper>
        <div className="left-side">
          <img
            onClick={() => setIsNavOpen((prev) => !prev)}
            src={hamburgerIcon}
            alt="hamburgerIcon"
          />
          <h2>audiophile</h2>
        </div>
        <Navigation isNavOpen={isNavOpen} />
        <div className="cart">
          <img src={cartIcon} alt="cartIcon" />
        </div>
      </Wrapper>
      {isNavOpen && (
        <Overlay displayOnDesktop={false} onClick={() => setIsNavOpen(false)} />
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled.header(({ theme }) => {
  return css`
    display: block;
    position: relative;
    z-index: ${theme.overlayZIndex + 1};
    background-color: #000;
    height: 91px;
  `;
});

const Wrapper = styled.div(({ theme }) => {
  return css`
    ${wrapperStyles}
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: space-between;

    & > .left-side {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-grow: 1;
      & > img {
        cursor: pointer;
        @media ${theme.media.desktop} {
          display: none;
        }
      }
      & > h2 {
        color: white;
      }
    }

    & > .cart {
      flex-grow: 1;
      text-align: right;
    }
  `;
});
