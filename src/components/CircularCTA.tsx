"use client";

import React from "react";
import Link from "next/link";

interface CircularCTAProps {
  className?: string;
  href?: string;
  theme?: "pink" | "blue";
}

export default function CircularCTA({
  className = "",
  href = "/shop",
  theme = "pink",
}: CircularCTAProps) {
  const isPink = theme === "pink";

  const bgStyle = isPink
    ? "bg-[#FFF0A8] border-[1.5px] border-[#3A1827]/30 shadow-[0_8px_30px_rgba(255,126,156,0.18)] hover:shadow-[0_12px_36px_rgba(255,126,156,0.25)]"
    : "bg-[#F2E6A1] border-[1.5px] border-[#16314D]/40 shadow-[0_8px_30px_rgba(22,49,77,0.12)] hover:shadow-[0_12px_36px_rgba(22,49,77,0.18)]";

  const textColor = isPink ? "fill-[#2E121E]" : "fill-[#16314D]";
  const arrowColor = isPink ? "#2E121E" : "#16314D";

  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center justify-center w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${bgStyle} ${className}`}
      aria-label="Explore All Products"
    >
      {/* Rotating SVG Text Container */}
      <div className="absolute inset-0 w-full h-full animate-spin-slow">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          aria-hidden="true"
        >
          <defs>
            {/* Circular Path for Text (Radius = 72) */}
            <path
              id="circularTextPath"
              d="M 100, 100 m -72, 0 a 72,72 0 1,1 140,0 a 72,72 0 1,1 -140,0"
            />
          </defs>
          <text
            className={`text-[12px] sm:text-[13px] font-bold tracking-[0.24em] ${textColor} uppercase select-none`}
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            <textPath
              href="#circularTextPath"
              startOffset="0%"
              textLength="440"
              lengthAdjust="spacingAndGlyphs"
            >
              EXPLORE ALL PRODUCT · EXPLORE ALL PRODUCT ·
            </textPath>
          </text>
        </svg>
      </div>

      {/* Static Center Icon: Squiggly Curved Arrow pointing Right / Top-Right */}
      <div className="relative z-10 flex items-center justify-center pointer-events-none transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
        <svg
          width="54"
          height="32"
          viewBox="0 0 70 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 sm:w-12 md:w-14 h-auto"
        >
          {/* Hand-drawn aesthetic curved / wavy stem */}
          <path
            d="M 6 18 C 18 10, 24 28, 42 27 L 58 24"
            stroke={arrowColor}
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Arrowhead */}
          <path
            d="M 49 16 L 61 24 L 49 32"
            stroke={arrowColor}
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  );
}
