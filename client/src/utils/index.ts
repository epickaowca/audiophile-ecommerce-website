export const priceWithComma = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const getVat = (price: number) => {
  return Math.ceil(price * 0.23);
};

type AddClassModifierProps = {
  baseClass: string;
  modifier?: string | string[] | false;
};

export const modifiers = ({ baseClass, modifier }: AddClassModifierProps) => {
  let modifierClass = "";
  if (modifier) {
    if (Array.isArray(modifier)) {
      modifierClass = modifier.map((item) => ` ${baseClass}--${item}`).join("");
    } else {
      modifierClass = ` ${baseClass}--${modifier}`;
    }
  }

  const className = `${baseClass}${modifierClass}`;
  return className;
};
