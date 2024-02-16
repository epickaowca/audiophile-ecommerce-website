import { FC, lazy, useState, useEffect } from "react";
import { Header } from "../../features/main/Header";
import { MainHeroSection } from "../../features/main/MainHeroSection";
import { ProductCategories } from "../../features/main/ProductCategories";

const Chunk = lazy(() =>
  import("./Chunk").then((m) => ({
    default: m.Chunk,
  }))
);

export const Home: FC = () => {
  const [isCriticalResLoaded, setIsCriticalResLoaded] = useState(false);

  useEffect(() => {
    setIsCriticalResLoaded(true);
  }, []);
  return (
    <>
      <Header transparentBg={true} />
      <MainHeroSection />
      <ProductCategories />
      {isCriticalResLoaded && <Chunk />}
    </>
  );
};
