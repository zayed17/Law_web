"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useScrollDirection } from "@/hooks/useScrollDirection";

interface ScrollFadeProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
  fadeInOffset?: number; // % from bottom to start fading in
  fadeOutOffset?: number; // % from top to start fading out
}

const ScrollFade: React.FC<ScrollFadeProps> = ({
  children,
  duration = 0.6,
  delay = 0,
  className = "",
  fadeInOffset = 0.3,
  fadeOutOffset = 0.1,
}) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const scrollDir = useScrollDirection();

  // Track two different view triggers
  const fadeInView = useInView(ref, { amount: fadeInOffset });
  const fadeOutView = useInView(ref, { amount: fadeOutOffset });

  useEffect(() => {
    if (scrollDir === "down" && fadeInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration, delay },
      });
    } else if (scrollDir === "up" && !fadeOutView) {
      controls.start({
        opacity: 0,
        y: 20,
        transition: { duration: 0.4 },
      });
    }
  }, [fadeInView, fadeOutView, scrollDir, controls, duration, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFade;
