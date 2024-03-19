import { FC } from "react";
import { Cart } from "../Cart";
import { styled, css } from "styled-components";
import { Form } from "./components/Form";

const phrasesArr = [
  "Harmonizing life's journey",
  "Music is the universal language of the soul",
  "Discover the soundtrack of your heart",
  "In every  beat, find your freedom",
  "Feel the rhythm, embrace the passion",
  "Tune into your inner harmony",
];

export const Checkout: FC = () => {
  return (
    <Wrapper>
      <form action="">
        <Form />
        <CartWrapper>
          <div className="black-box">
            <p>{phrasesArr[Math.floor(Math.random() * phrasesArr.length)]}</p>
          </div>
          <Cart cartType="static" />
        </CartWrapper>
      </form>
    </Wrapper>
  );
};

const CartWrapper = styled.div(({ theme }) => {
  return css`
    background-color: white;
    border-radius: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    max-width: 360px;
    height: 100%;
    overflow: hidden;
    & > .black-box {
      display: none;
    }

    @media ${theme.media.tablet} {
      max-width: unset;
      justify-content: space-between;
      align-items: stretch;
      & > .black-box {
        width: 100%;
        min-height: 100%;
        background-color: ${theme.grayDark};
        display: flex;
        justify-content: center;
        align-items: center;
        & > p {
          text-align: center;
          font-size: 2rem;
          color: white;
          max-width: 300px;
        }
      }
    }

    @media ${theme.media.desktop} {
      max-width: 360px;
      & > .black-box {
        display: none;
      }
    }
  `;
});

const Wrapper = styled.div(({ theme }) => {
  return css`
    width: 90%;
    margin: 50px auto;
    & > form {
      display: flex;
      flex-direction: column;
      gap: 35px;
      align-items: center;
    }

    @media ${theme.media.desktop} {
      max-width: 1300px;
      margin: 100px auto;
      & > form {
        flex-direction: row;
        align-items: flex-start;
      }
    }
  `;
});
