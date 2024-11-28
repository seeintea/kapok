"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const variants: Variants = {
  normal: {
    scale: 1,
    rotate: 0,
  },
  animate: {
    scale: 1.05,
    rotate: [0, -7, 7, 0],
    transition: {
      rotate: {
        duration: 0.5,
        ease: "easeInOut",
      },
      scale: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  },
};

export default function TwitterOutlined() {
  const controls = useAnimation();

  return (
    <div
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="128"
        height="128"
      >
        <motion.path
          variants={variants}
          initial="normal"
          animate={controls}
          d="M692.87484873 229.56339073h95.82612478L579.35026836 468.83811884 825.63499165 794.43660927H632.79596519L481.75755691 596.96249933 308.93486727 794.43660927H213.05171203l223.92131109-255.93101979L200.7114048 229.56339073h197.73482066l136.52551173 180.49871922z m-33.63100345 507.51686096h53.09808254L369.5935606 283.90731745h-56.98022807z"
        />
      </svg>
    </div>
  );
}
