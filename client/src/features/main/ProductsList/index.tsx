import { FC } from "react";
import { Product, StyledProductsList } from "./components/Product";
import { useParams } from "react-router-dom";
import { useAsync } from "../../../hooks/useAsync";
import { getCategory } from "./services/category";
import { ErrorPage } from "../ErrorPage";
import { styled, css } from "styled-components";

export const ProductList: FC = () => {
  const { id } = useParams();
  const { error, resData } = useAsync(
    () => getCategory({ categoryName: id! }),
    [id]
  );

  if (error) {
    return <ErrorPage />;
  }
  return (
    <Wrapper>
      {resData?.map((data) => {
        const { _id, imgPreviewMicro, imgPreviewLarge, ...attrs } = data;
        return (
          <Product
            key={data._id}
            initialImg={imgPreviewMicro}
            largeImg={imgPreviewLarge}
            {...attrs}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme }) => {
  return css`
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    gap: 60px;

    @media ${theme.media.tablet} {
      padding: 100px 0;
      gap: 100px;
    }

    @media ${theme.media.desktop} {
      & > ${StyledProductsList}:nth-child(even) {
        flex-direction: row-reverse;
      }
    }
  `;
});
