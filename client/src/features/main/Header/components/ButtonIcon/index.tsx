import { useEffect, FC, useRef } from "react";
import cartIcon from "../../assets/icon-cart.svg";
import hamburgerIcon from "../../assets/icon-hamburger.svg";

type ButtonIconProps = {
  "aria-expanded": boolean;
  "aria-controls": string;
  onClick: () => void;
  btnIcon: "cart" | "menu";
  className?: string;
};

export const ButtonIcon: FC<ButtonIconProps> = ({ btnIcon, ...props }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const isMenu = btnIcon === "menu";
  useEffect(() => {
    !props["aria-expanded"] && ref.current?.focus();
  }, [props["aria-expanded"]]);

  return (
    <button ref={ref} {...props}>
      <img
        src={isMenu ? hamburgerIcon : cartIcon}
        alt={isMenu ? "menuIcon" : "cartIcon"}
      />
    </button>
  );
};
