import { FC } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "../features/main/Header";
import { Footer } from "../features/main/Footer";
import { CategoryHeroSection } from "../features/main/CategoryHeroSection";
import { CategoryProduct } from "../features/main/CategoryProduct";
import { styled, css } from "styled-components";
import { AudioGear } from "../features/main/AudioGear";
import { ProductCategories } from "../features/main/ProductCategories";

export const ProductCategory: FC = () => {
  const { id } = useParams();
  return (
    <>
      <Header />
      <CategoryHeroSection title={"earphones"} />
      <CategoryProductWrapper>
        <CategoryProduct />
      </CategoryProductWrapper>
      {/* <p>ProductCategory</p> */}
      {/* <p>{id}</p> */}
      {/* <Link to="/detail/appylpaffyl">SEE PRODUCT</Link> */}
      <ProductCategories />
      <AudioGear />
      <Footer />
    </>
  );
};

const CategoryProductWrapper = styled.div(({ theme }) => {
  return css`
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    gap: 60px;

    @media ${theme.media.tablet} {
      padding: 100px 0;
      gap: 100px;
    }
  `;
});
