import { FC } from "react";
import { Link } from "react-router-dom";
import { styled, css } from "styled-components";

type ErrorPageProps = {
  message?: string;
};

export const ErrorPage: FC<ErrorPageProps> = ({ message }) => {
  const { styledComponentId: ErrorPage } = StyledErrorPage;
  return (
    <StyledErrorPage $className={ErrorPage}>
      <p className={`${ErrorPage}_message`}>{message || "something wrong"}</p>
      <Link className={`${ErrorPage}_link`} to="/">
        Go back to home
      </Link>
    </StyledErrorPage>
  );
};

const StyledErrorPage = styled.div<{ $className: string }>(({ $className }) => {
  return css`
    margin-top: 100px;
    text-align: center;

    .${$className} {
      &_message {
        margin-bottom: 20px;
      }
      &_link {
        font-size: 1.5rem;
      }
    }
  `;
});
