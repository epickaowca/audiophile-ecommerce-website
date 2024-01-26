import { FC } from "react";
import { Navigation } from "./components/Navigation";
import { styled, css } from "styled-components";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import hamburgerIcon from "../../assets/shared/tablet/icon-hamburger.svg";
import { wrapperStyles } from "../../styles/wrapperStyles";
import { Overlay } from "../Overlay";

export const Header: FC = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <div className="left-side">
          <img src={hamburgerIcon} alt="hamburgerIcon" />
          <h2>audiophile</h2>
        </div>
        <Navigation />
        <div className="cart">
          <img src={cartIcon} alt="cartIcon" />
        </div>
      </Wrapper>
      <Overlay />
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

const Wrapper = styled.div(() => {
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
