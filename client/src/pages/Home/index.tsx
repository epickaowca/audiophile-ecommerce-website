import { FC, lazy, useState, useEffect, Suspense } from "react";
import { Header } from "../../features/main/Header";
import { MainHeroSection } from "../../features/main/MainHeroSection";
import { ProductCategories } from "../../features/main/ProductCategories";
import { styled } from "styled-components";

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
    <Wrapper>
      <Header transparentBg={true} />
      <MainHeroSection />
      <ProductCategories />
      <Suspense>{isCriticalResLoaded && <Chunk />}</Suspense>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
