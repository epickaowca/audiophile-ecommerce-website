export type Variant = "primary" | "secondary" | "noBackground" | "black";

export type ButtonProps = {
  text: string;
  variant?: Variant;
  ariaLabel?: string;
  onClick?: () => void;
  as: "link" | "button" | "div";
  href?: string;
  type?: "button" | "submit";
};
