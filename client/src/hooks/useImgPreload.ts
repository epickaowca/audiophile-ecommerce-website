import { useEffect, useState, RefObject } from "react";
import { Image } from "../types";

type useImagePreloadProps = {
  largeImg: Image;
  initialImg: Image;
  imgRef: RefObject<HTMLImageElement>;
};

export const useImgPreload = ({
  largeImg,
  initialImg,
  imgRef,
}: useImagePreloadProps) => {
  const [img, setImg] = useState({
    mobile: initialImg.mobile,
    tablet: initialImg.tablet,
    desktop: initialImg.desktop,
    isLargeImgLoading: false,
    isLargeImgLoaded: false,
  });

  useEffect(() => {
    if (img.isLargeImgLoading) {
      const setLoaded = () => {
        setImg((prev) => ({
          ...prev,
          isLargeImgLoading: false,
          isLargeImgLoaded: true,
        }));
      };
      if (imgRef.current?.complete) {
        setLoaded();
      } else {
        imgRef.current?.addEventListener("load", setLoaded);
      }
      return () => {
        imgRef.current?.removeEventListener("load", setLoaded);
      };
    }
  }, [imgRef, img]);

  useEffect(() => {
    const { mobile, desktop, tablet } = largeImg;

    setImg((prev) => ({
      ...prev,
      mobile,
      tablet,
      desktop,
      isLargeImgLoading: true,
    }));
  }, []);

  return { img };
};
