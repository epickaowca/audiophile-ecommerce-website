import { useEffect, useState, RefObject } from "react";

type image = { mobile: string; tablet?: string; desktop?: string };

type useImagePreloadProps = {
  imgRequire: () => Promise<image>;
  initialImg: image;
  imgRef: RefObject<HTMLImageElement>;
};

export const useImgPreload = ({
  imgRequire,
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
    imgRequire().then(({ desktop, mobile, tablet }) => {
      setImg((prev) => ({
        ...prev,
        mobile,
        tablet,
        desktop,
        isLargeImgLoading: true,
      }));
    });
  }, []);

  return { img };
};
