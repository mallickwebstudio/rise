"use client";

import { motion } from "motion/react";

const variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

export default function ZoomIn({
  children,
  className,
  delay = 0.3,
  duration = 0.5,
  initial = "hidden",
  whileInView = "visible",
  ...props
}) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial={initial}
      whileInView={whileInView}
      transition={{
        delay,
        duration,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
