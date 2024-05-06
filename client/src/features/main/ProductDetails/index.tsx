import { FC, useEffect } from "react";
import { Product } from "@root/features/shared/Product";
import { styled, css } from "styled-components";
import { getProductDetails } from "./services/details";
import { useAsync } from "@root/hooks/useAsync";
import { useParams } from "react-router-dom";
import { ErrorPage } from "@root/features/main/ErrorPage";
import { Info } from "./components/Info";
import { SpinLoader } from "@root/features/shared/SpinLoader";

type ProductDetailsProps = {
  dataLoaded: () => void;
};

export const ProductDetails: FC<ProductDetailsProps> = ({ dataLoaded }) => {
  const { id } = useParams();
  const { error, loading, resData } = useAsync(() =>
    getProductDetails({ tagName: id! })
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
      aria-label="product details"
      aria-live="polite"
      aria-busy={loading}
    >
      {loading ? (
        <SpinLoader height="450px" />
      ) : error ? (
        <ErrorPage message="error loading product" />
      ) : resData ? (
        <>
          <Product
            initialImg={resData.imgProductMicro}
            largeImg={resData.imgProductLarge}
            detailCase={{
              price: resData.price,
              maxQuantity: 999,
              cartImg: resData.imgCart,
            }}
            {...resData}
          />
          <Info {...resData} />
        </>
      ) : (
        <h1>Error - there is no data on response</h1>
      )}
    </Section>
  );
};

const Section = styled.section(({ theme: { media } }) => {
  return css`
    margin-top: 50px;
    @media ${media.desktop} {
      margin-top: 80px;
    }
  `;
});
