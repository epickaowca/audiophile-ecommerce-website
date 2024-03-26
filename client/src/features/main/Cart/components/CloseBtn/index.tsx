import { FC } from "react";
import { styled, css } from "styled-components";
import { useCart } from "../../context";
import closeIcon from "../../assets/closeIcon.png";

export const CloseBtn: FC = () => {
  const { toggleCart } = useCart();
  return (
    <Button onClick={() => toggleCart("close")} autoFocus={true}>
      <img src={closeIcon} alt="close icon" />
    </Button>
  );
};

const Button = styled.button(() => {
  return css`
    position: absolute;
    top: 5px;
    right: 5px;
    border: none;
    background-color: transparent;
    padding: 5px;
    cursor: pointer;
  `;
});
