export { StyledProductDescription } from "../ProductDescription.styled";

export const ProductDescription = jest.fn(
  ({ name, variant, category, ariaLabel, href, withoutBr, description }) => (
    <>
      <span>{name}</span>
      <span>{variant}</span>
      <span>{category}</span>
      <span>{ariaLabel}</span>
      <span>{href}</span>
      <span>{`withoutBr:${withoutBr?.toString()}`}</span>
      <span>{description}</span>
    </>
  )
);
