"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion, Variants } from "framer-motion";

interface AnimatedOnScrollProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  duration?: number;
  delay?: number;
  className?: string;
  once?: boolean;
}

const getVariants = (
  direction: string,
  duration: number,
  delay: number
): Variants => {
  const distance = 100;

  let x = 0, y = 0;
  if (direction === "left") x = -distance;
  else if (direction === "right") x = distance;
  else if (direction === "up") y = -distance;
  else if (direction === "down") y = distance;

  return {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: "easeOut" },
    },
  };
};

const AnimatedOnScroll: React.FC<AnimatedOnScrollProps> = ({
  children,
  direction = "left",
  duration = 0.6,
  delay = 0,
  className = "",
  once = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={getVariants(direction, duration, delay)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedOnScroll;
