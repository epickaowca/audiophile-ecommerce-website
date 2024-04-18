import { FC, useEffect, useRef } from "react";
import { Product } from "../../shared/Product";
import { styled, css } from "styled-components";
import { getProductDetails } from "./services/details";
import { useAsync } from "../../../hooks/useAsync";
import { useParams } from "react-router-dom";
import { ErrorPage } from "../ErrorPage";
import { Info } from "./components/Info";
import { SpinLoader } from "../../shared/SpinLoader";

type ProductDetailsProps = {
  dataLoaded: () => void;
};

export const ProductDetails: FC<ProductDetailsProps> = ({ dataLoaded }) => {
  const { id } = useParams();
  const { error, loading, resData } = useAsync(() =>
    getProductDetails({ tagName: id! })
  );
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(
    function onDataLoaded() {
      if (resData) {
        dataLoaded();
      }
    },
    [resData]
  );

  useEffect(
    function onLoading() {
      if (sectionRef.current) {
        sectionRef.current.ariaBusy = loading.toString();
      }
    },
    [loading]
  );

  return (
    <Section
      ref={sectionRef}
      aria-label="product details"
      aria-live="polite"
      aria-busy="false"
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
        <></>
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
