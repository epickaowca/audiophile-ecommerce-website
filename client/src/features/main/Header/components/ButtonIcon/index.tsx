import { useEffect, FC, useRef, memo } from "react";
import cartIcon from "../../assets/icon-cart.svg";
import hamburgerIcon from "../../assets/icon-hamburger.svg";

type ButtonIconProps = {
  "aria-expanded": boolean;
  "aria-controls": string;
  onClick: () => void;
  btnIcon: "cart" | "menu";
  className?: string;
};

export const ButtonIcon: FC<ButtonIconProps> = memo(({ btnIcon, ...props }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const firstRender = useRef<boolean>(true);
  const isMenu = btnIcon === "menu";

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

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
});
