export type Variant = "primary" | "secondary" | "noBackground" | "black";
export type ButtonProps = {
  text: string;
  variant: Variant;
  autoFocus?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
  as: "link" | "button";
  href?: string;
  type?: "button" | "submit";
};
