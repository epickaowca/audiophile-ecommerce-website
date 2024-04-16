import { styled, css } from "styled-components";

export const StyledNavList = styled.ul<{ $className: string }>(
  ({ theme: { media, orangeMedium }, $className }) => {
    return css`
      display: flex;
      flex-direction: column;
      gap: 20px;

      .${$className} {
        &_li {
          list-style-type: none;
        }

        &_menuLink {
          font-weight: bold;
          text-transform: uppercase;
          text-decoration: none;
          color: white;
          font-size: 0.9rem;
          &:hover {
            color: ${orangeMedium};
          }
        }

        &_menuLink--active {
          border-bottom: 2px solid ${orangeMedium};
        }
      }

      @media ${media.tablet} {
        flex-direction: row;
      }
    `;
  }
);
