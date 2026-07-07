"use client";

import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Card with a soft accent glow that follows the cursor (Aceternity
 * CardSpotlight style). Pure transform/opacity — no layout work on hover.
 */
export function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  const background = useMotionTemplate`radial-gradient(340px circle at ${mouseX}px ${mouseY}px, rgba(52,211,153,0.09), transparent 70%)`;

  return (
    <div
      onMouseMove={onMouseMove}
      className={cn(
        "group relative overflow-hidden rounded-card border border-line bg-surface transition-colors duration-300 hover:border-line-strong",
        className
      )}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
