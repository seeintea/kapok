"use client";

import Link from "next/link";
import { motion, useAnimation, type Variants } from "motion/react";
import styles from "./index.module.scss";

export default function HolaItem() {
  const controls = useAnimation();

  return (
    <div
      className={styles.hola}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <motion.span variants={variants} animate={controls}>
        👋
      </motion.span>
      Hi, it's <Link href="/">yukkuri</Link> here.
    </div>
  );
}

const variants: Variants = {
  normal: { scale: 1, rotate: 0 },
  animate: {
    scale: [1, 1.1, 1.1, 1.1, 1.1, 1],
    rotate: [0, -3, 3, -2, 2, 0],
    transition: {
      duration: 0.7,
      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
      ease: "easeInOut",
    },
  },
};
