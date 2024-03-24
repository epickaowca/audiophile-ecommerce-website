import { FC, useEffect } from "react";
import { Product, StyledProductsList } from "../../shared/Product";
import { useParams } from "react-router-dom";
import { useAsync } from "../../../hooks/useAsync";
import { getCategoryList } from "./services/category";
import { ErrorPage } from "../ErrorPage";
import { styled, css } from "styled-components";
import { SpinLoader } from "../../shared/SpinLoader";

type ProductListProps = {
  dataLoaded: () => void;
};

export const ProductList: FC<ProductListProps> = ({ dataLoaded }) => {
  const { id } = useParams();
  const { error, resData, loading } = useAsync(
    () => getCategoryList({ categoryName: id! }),
    [id]
  );

  useEffect(
    function onDataLoaded() {
      if (resData) {
        dataLoaded();
      }
    },
    [resData]
  );

  if (loading) {
    return <SpinLoader heightInPx={450} />;
  }
  if (error) {
    return <ErrorPage message="error loading products" />;
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
    gap: 150px;

    @media ${theme.media.tablet} {
      padding: 100px 0;
    }

    @media ${theme.media.desktop} {
      & > ${StyledProductsList}:nth-child(even) {
        flex-direction: row-reverse;
      }
    }
  `;
});
