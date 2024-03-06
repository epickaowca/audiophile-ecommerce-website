import { FC } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const ErrorPage: FC = () => {
  return (
    <Wrapper>
      <p>something wrong</p>
      <Link to="/">Go back to home</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 100px;
  text-align: center;
  & > p {
    margin-bottom: 20px;
  }
  & > a {
    font-size: 1.5rem;
  }
`;
