"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type AnimatedInViewProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function AnimatedInView({
  children,
  className,
  delay = 0,
  y = 28,
}: AnimatedInViewProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
