"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll-reveal wrapper: fades and rises once when it enters the viewport.
 * Use `delay` for a gentle stagger between siblings. Renders a plain div
 * under prefers-reduced-motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98], delay }}
    >
      {children}
    </motion.div>
  );
}
