import { useEffect, useState, RefObject } from "react";

export const useIsImageLoaded = (imgRef: RefObject<HTMLImageElement>) => {
  const [isImageLoaded, setIsImageLoaded] = useState(true);

  useEffect(() => {
    const setLoaded = () => {
      setIsImageLoaded(true);
    };

    if (!imgRef.current?.complete) {
      setIsImageLoaded(false);
      imgRef.current?.addEventListener("load", setLoaded);
    }

    return () => {
      imgRef.current?.removeEventListener("load", setLoaded);
    };
  }, []);

  return { isImageLoaded };
};
