import { useEffect, useState } from "react";

type image = { mobile: string; tablet: string; desktop: string };

type useImagePreloadProps = {
  imgRequire: () => image;
  initialImg: image;
  isImageLoaded: boolean;
};

export const useImagePreload = ({
  imgRequire,
  initialImg,
  isImageLoaded,
}: useImagePreloadProps) => {
  const [img, setImg] = useState({
    mobile: initialImg.mobile,
    tablet: initialImg.tablet,
    desktop: initialImg.desktop,
  });

  useEffect(() => {
    if (isImageLoaded) {
      const { desktop, mobile, tablet } = imgRequire();

      setImg({ mobile, tablet, desktop });
    }
  }, [isImageLoaded]);

  return { img };
};
