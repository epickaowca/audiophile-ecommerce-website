import { FC } from "react";
import { styled, css } from "styled-components";
import { useParams } from "react-router-dom";

export const Headline: FC = () => {
  const { id } = useParams();
  const { styledComponentId: Headline } = StyledHeadline;

  return (
    <StyledHeadline $className={Headline}>
      <h1 className={`${Headline}_title`}>{id}</h1>
    </StyledHeadline>
  );
};

const StyledHeadline = styled.div<{ $className: string }>(
  ({
    $className,
    theme: {
      media: { tablet },
    },
  }) => {
    return css`
      width: 100%;
      height: 140px;
      display: grid;
      place-items: center;
      background-color: #000;
      border-top: 1px solid rgba(255, 255, 255, 0.15);

      .${$className} {
        &_title {
          color: white;
          text-transform: uppercase;
          font-size: 1.8rem;
        }
      }

      @media ${tablet} {
        height: 220px;

        .${$className} {
          &_title {
            font-size: 2.5rem;
          }
        }
      }
    `;
  }
);
