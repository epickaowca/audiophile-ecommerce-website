import { FC } from "react";
import { SpinLoader } from "../../shared/SpinLoader";
import { styled, css } from "styled-components";
import { getProductGallery } from "./services/gallery";
import { useAsync } from "../../../hooks/useAsync";
import { useParams } from "react-router-dom";
import { ErrorPage } from "../ErrorPage";
import { ImgLarge } from "./components/ImgLarge";
import { ImgSmall } from "./components/ImgSmall";

export const ProductGallery: FC = () => {
  const { id } = useParams();
  const { error, loading, resData } = useAsync(() =>
    getProductGallery({ tagName: id! })
  );

  if (loading) {
    <SpinLoader heightInPx={500} />;
  }
  if (error) {
    return <ErrorPage message="error loading product" />;
  }

  return (
    <Wrapper>
      {resData && (
        <>
          <ImgSmall {...resData} />
          <ImgLarge
            initialImg={resData.img3.micro}
            largeImg={resData.img3.large}
          />
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme: { media } }) => {
  return css`
    width: 90%;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 250px;
    display: flex;
    flex-direction: column;
    gap: 25px;

    @media ${media.tablet} {
      flex-direction: row;
      gap: 20px;
      height: 420px;
    }

    @media ${media.desktop} {
      margin-top: 120px;
      gap: 30px;
      max-width: 1300px;
      height: 550px;
    }
  `;
});
