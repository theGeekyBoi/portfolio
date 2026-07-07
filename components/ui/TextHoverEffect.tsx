"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Aceternity-style text hover effect: the name renders as outlined SVG text;
 * a gradient fill is revealed through a radial mask that follows the cursor.
 * Falls back to a calm static outline when reduced motion is preferred.
 */
export function TextHoverEffect({ text }: { text: string }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const reduceMotion = useReducedMotion();
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor) {
      const rect = svgRef.current.getBoundingClientRect();
      setMaskPosition({
        cx: `${((cursor.x - rect.left) / rect.width) * 100}%`,
        cy: `${((cursor.y - rect.top) / rect.height) * 100}%`,
      });
    }
  }, [cursor]);

  const gradientId = "text-hover-gradient";
  const maskId = "text-hover-mask";

  return (
    <svg
      ref={svgRef}
      width="100%"
      viewBox="0 0 720 110"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="50%" stopColor="#a7f3d0" />
          <stop offset="100%" stopColor="#2dd4bf" />
        </linearGradient>

        <motion.radialGradient
          id={`${maskId}-gradient`}
          gradientUnits="userSpaceOnUse"
          animate={
            reduceMotion
              ? { cx: "50%", cy: "50%", r: "45%" }
              : {
                  cx: maskPosition.cx,
                  cy: maskPosition.cy,
                  r: hovered ? "26%" : "0%",
                }
          }
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>

        <mask id={maskId}>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill={`url(#${maskId}-gradient)`}
          />
        </mask>
      </defs>

      {/* Faint permanent outline */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.6"
        className="fill-transparent stroke-white/25 font-sans text-[64px] font-bold tracking-tight"
      >
        {text}
      </text>

      {/* Entrance: the outline draws itself once */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.6"
        className="fill-transparent stroke-white/50 font-sans text-[64px] font-bold tracking-tight"
        initial={reduceMotion ? undefined : { strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={reduceMotion ? undefined : { strokeDashoffset: 0 }}
        transition={{ duration: 3.5, ease: "easeInOut" }}
      >
        {text}
      </motion.text>

      {/* Gradient fill revealed through the cursor-following mask */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke={`url(#${gradientId})`}
        strokeWidth="0.6"
        fill={`url(#${gradientId})`}
        mask={`url(#${maskId})`}
        className="font-sans text-[64px] font-bold tracking-tight"
      >
        {text}
      </text>
    </svg>
  );
}
