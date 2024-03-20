export type Variant = "primary" | "secondary" | "noBackground" | "black";
export type ButtonProps = {
  text: string;
  variant: Variant;
  autoFocus?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
  as: "link" | "button";
  href?: string | undefined;
  type?: "button" | "submit" | undefined;
};
