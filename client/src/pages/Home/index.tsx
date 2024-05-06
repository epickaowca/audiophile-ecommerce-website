import { FC, lazy, useState, useEffect, Suspense } from "react";
import { Header } from "@root/features/main/Header";
import { MainHeroSection } from "@root/features/main/MainHeroSection";
import { ProductCategories } from "@root/features/main/ProductCategories";

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
      <Header heroBgColor />
      <MainHeroSection />
      <ProductCategories />
      <Suspense>{isCriticalResLoaded && <Chunk />}</Suspense>
    </>
  );
};
