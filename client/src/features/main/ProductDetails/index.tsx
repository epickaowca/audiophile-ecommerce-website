import { FC } from "react";
import { Product } from "../../shared/Product";
import { styled, css } from "styled-components";
import { getProductDetails } from "./services/details";
import { useAsync } from "../../../hooks/useAsync";
import { useParams } from "react-router-dom";
import { ErrorPage } from "../ErrorPage";
import { Info } from "./components/Info";
import { SpinLoader } from "../../shared/SpinLoader";

export const ProductDetails: FC = () => {
  const { id } = useParams();
  const { error, loading, resData } = useAsync(() =>
    getProductDetails({ tagName: id! })
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
            category={resData.category}
            description={resData.description}
            isNew={resData.isNew}
            name={resData.name}
            tagName={resData.tagName}
            detailCase={{
              price: resData.price,
              maxQuantity: 999,
              imgCart: resData.imgCart,
            }}
          />
          <Info features={resData.features} includes={resData.includes} />
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
