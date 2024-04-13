import { useEffect, RefObject } from "react";

type useEscapeProps = {
  ref: RefObject<any>;
  onEscape: () => void;
};

export const useEscapeHandler = ({ onEscape, ref }: useEscapeProps) => {
  useEffect(() => {
    if (!ref.current) return;

    const handler = (e: KeyboardEvent) => {
      e.key === "Escape" && onEscape();
    };

    ref.current.addEventListener("keydown", handler);
    return () => {
      ref.current?.removeEventListener("keydown", handler);
    };
  }, []);
};
