import { styled, css } from "styled-components";

export const StyledQuantitySelector = styled.div<{
  $className: string;
  $small: boolean;
}>(({ theme, $small, $className }) => {
  return css`
    background-color: ${theme.grayLight};
    width: ${$small ? "100px" : "120px"};
    height: ${$small ? "35px" : "52px"};
    display: flex;
    align-items: center;
    font-weight: bold;

    .${$className} {
      &_input {
        min-width: 0;
        flex: 1;
        background-color: transparent;
        border: none;
        text-align: center;
        font-weight: bold;
      }

      &_button {
        flex: 2;
        background-color: transparent;
        border: none;
        color: ${theme.grayDarkText};
        height: 100%;
        cursor: pointer;
        font-size: 1.2rem;

        &:hover {
          color: ${theme.orangeMedium};
        }
      }
    }
  `;
});
