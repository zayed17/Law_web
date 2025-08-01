// hooks/useScrollDirection.ts
import { useEffect, useState } from "react";

export type ScrollDirection = "up" | "down";

export const useScrollDirection = (): ScrollDirection => {
  const [scrollDir, setScrollDir] = useState<ScrollDirection>("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDir = () => {
      const currentY = window.scrollY;
      const direction = currentY > lastScrollY ? "down" : "up";
      if (direction !== scrollDir) setScrollDir(direction);
      lastScrollY = currentY;
    };

    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, [scrollDir]);

  return scrollDir;
};
