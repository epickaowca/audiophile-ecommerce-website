import { FC, useEffect } from "react";
import { Product, StyledProduct } from "../../shared/Product";
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

  return (
    <Section
      aria-label="list of products"
      aria-live="polite"
      aria-busy={loading}
    >
      {loading ? (
        <SpinLoader height="450px" />
      ) : error ? (
        <ErrorPage message="error loading products" />
      ) : (
        resData?.map((data) => {
          const { _id, imgPreviewMicro, imgPreviewLarge, ...attrs } = data;
          return (
            <Product
              key={data._id}
              initialImg={imgPreviewMicro}
              largeImg={imgPreviewLarge}
              {...attrs}
            />
          );
        })
      )}
    </Section>
  );
};

const Section = styled.section(({ theme: { media } }) => {
  return css`
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    gap: 150px;

    @media ${media.tablet} {
      padding: 100px 0;
    }

    @media ${media.desktop} {
      ${StyledProduct}:nth-child(even) {
        flex-direction: row-reverse;
      }
    }
  `;
});
