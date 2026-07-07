"use client";

import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

/**
 * Animated count-up for stat values like "0.2mm", "140+", "1,500+", "$1,500".
 * The numeric part animates when scrolled into view; prefix/suffix render
 * as-is. Reduced motion shows the final value immediately.
 */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();

  const parsed = parseStat(value);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 90, damping: 24 });

  useEffect(() => {
    if (!parsed) return;
    if (inView) motionValue.set(parsed.num);
  }, [inView, motionValue, parsed]);

  useEffect(() => {
    if (!parsed) return;
    return spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = format(latest, parsed.decimals, parsed.grouped);
      }
    });
  }, [spring, parsed]);

  // Unparseable or reduced motion: render the value verbatim.
  if (!parsed || reduceMotion) {
    return <span>{value}</span>;
  }

  return (
    <span>
      {parsed.prefix}
      <span ref={ref}>{format(0, parsed.decimals, parsed.grouped)}</span>
      {parsed.suffix}
    </span>
  );
}

function parseStat(value: string) {
  const m = value.match(/^([^0-9]*)([\d,]*\.?\d+)(.*)$/);
  if (!m) return null;
  const raw = m[2];
  return {
    prefix: m[1],
    num: parseFloat(raw.replace(/,/g, "")),
    decimals: raw.includes(".") ? raw.split(".")[1].length : 0,
    grouped: raw.includes(","),
    suffix: m[3],
  };
}

function format(n: number, decimals: number, grouped: boolean) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping: grouped,
  });
}
