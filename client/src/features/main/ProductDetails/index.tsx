import { FC, useEffect } from "react";
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
    return <ErrorPage message="error loading product" />;
  }

  return (
    <Wrapper>
      {resData && (
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
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme }) => {
  return css`
    margin-top: 50px;
    @media ${theme.media.desktop} {
      margin-top: 80px;
    }
  `;
});
