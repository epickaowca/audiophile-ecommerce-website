export type Variant = "primary" | "secondary" | "noBackground" | "black";

export type DefaultProps = {
  text: string;
  variant: Variant;
  autoFocus?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
};
