import { FC, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "../../features/main/Header";
import { Footer } from "../../features/main/Footer";

import { ProductList } from "../../features/main/ProductsList";
import { styled, css } from "styled-components";
import { AudioGear } from "../../features/main/AudioGear";
import { ProductCategories } from "../../features/main/ProductCategories";
import { getCategory } from "../../features/main/ProductsList/services/category";
import { useAsync } from "../../hooks/useAsync";
import { ErrorPage } from "../../features/main/ErrorPage";

export const ProductCategory: FC = () => {
  return (
    <>
      <Header displayHeadline={true} />
      <ProductList />
      {/* <p>ProductCategory</p> */}
      {/* <p>{id}</p> */}
      {/* <Link to="/detail/appylpaffyl">SEE PRODUCT</Link> */}
      <ProductCategories />
      <AudioGear />
      <Footer />
    </>
  );
};
