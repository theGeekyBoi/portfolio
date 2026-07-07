"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * A vertical beam that draws itself as the user scrolls past the content
 * (Aceternity TracingBeam style, simplified to a transform-only scaleY).
 * With reduced motion the beam renders fully drawn.
 */
export function TracingBeam({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.6"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  return (
    <div ref={ref} className={cn("relative", className)}>
      <div
        aria-hidden="true"
        className="absolute left-[5px] top-1 bottom-1 w-px bg-line"
      >
        <motion.div
          className="h-full w-full origin-top bg-gradient-to-b from-accent via-accent-dim to-transparent"
          style={reduceMotion ? undefined : { scaleY }}
        />
      </div>
      <div className="space-y-14 pl-10 sm:pl-12">{children}</div>
    </div>
  );
}

/** A dot on the beam, positioned by the parent entry. */
export function BeamDot() {
  return (
    <span
      aria-hidden="true"
      className="absolute -left-10 top-1.5 block h-[10px] w-[10px] rotate-45 border-2 border-accent bg-background sm:-left-12"
    />
  );
}
