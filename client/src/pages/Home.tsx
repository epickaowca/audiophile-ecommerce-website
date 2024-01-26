import { FC } from "react";
import { Header } from "../features/Header";
import { Button } from "../features/Button";
import { styled } from "styled-components";

export const Home: FC = () => {
  return (
    <Wrapper>
      <Header />
      {/* <Button text="SEE PRODUCT" variant="primary" />
      <Button text="SEE PRODUCT" variant="secondary" />
      <Button text="SHOP" variant="noBackground" /> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* margin: 15px;
  display: flex;
  gap: 25px;
  flex-wrap: wrap; */
`;
