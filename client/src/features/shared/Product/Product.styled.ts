import { styled, css } from "styled-components";
import { StyledProductDescription } from "../ProductDescription";

export const StyledProduct = styled.div<{
  $detailCase?: boolean;
  $className: string;
}>(({ theme: { media, grayLight }, $detailCase, $className }) => {
  return css`
    width: 90%;
    position: relative;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 25px;

    .${$className} {
      &_picture {
        width: 100%;
        border-radius: 7px;
        height: 352px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background-color: ${grayLight};
      }

      &_picture--blur {
        filter: blur(4px);
      }

      &_img {
        width: 100%;
        max-width: 327px;
      }
    }

    ${$detailCase &&
    css`
      ${StyledProductDescription} {
        margin-top: 25px;
        text-align: left;
        align-items: flex-start;
        &_description {
          max-width: unset;
        }
      }
    `}

    @media ${media.tablet} {
      gap: 50px;
      .${$className} {
        &_picture {
          height: ${$detailCase ? "500px" : "352px"};
        }

        &_img {
          max-width: 654px;
        }
      }

      ${$detailCase &&
      css`
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        max-width: 1300px;
        ${StyledProductDescription} {
          margin-top: 0;
          &_description {
            max-width: 800px;
          }
        }
      `}
    }

    @media ${media.desktop} {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      max-width: 1300px;

      .${$className} {
        &_picture {
          max-width: 540px;
          height: 520px;
        }
      }

      ${StyledProductDescription} {
        width: 100%;
        max-width: 505px;
      }
    }
  `;
});
