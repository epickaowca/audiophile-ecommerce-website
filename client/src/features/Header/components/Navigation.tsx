import { FC } from "react";
import { ProductsPresentation } from "../../ProductsPresentation/index";
import { styled, css } from "styled-components";

export const Navigation: FC = () => {
  return (
    <Nav>
      <ProductsPresentation />
    </Nav>
  );
};

const Nav = styled.nav(() => {
  return css`
    position: absolute;
    width: 100%;
    left: 0;
    top: 91px;
    background-color: white;
    padding-top: 25px;
    padding-bottom: 45px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  `;
});
