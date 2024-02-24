import { FC } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "../features/main/Header";
import { Footer } from "../features/main/Footer";
import { CategoryHeroSection } from "../features/main/CategoryHeroSection";
import { ProductCategories } from "../data/constants";

export const ProductCategory: FC = () => {
  const { id } = useParams();
  return (
    <>
      <Header />
      <CategoryHeroSection title={"earphones"} />
      <p>ProductCategory</p>
      <p>{id}</p>
      {/* <Link to="/detail/appylpaffyl">SEE PRODUCT</Link> */}
      <Footer />
    </>
  );
};
