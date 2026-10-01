"use client";

import React from "react";

interface FloatingBadgeProps {
  text: string;
  variant: "orange-pink" | "pink-purple";
  tilt: "left" | "right"; // left: -10deg, right: +10deg
  className?: string;
  theme?: "pink" | "blue";
}

export default function FloatingBadge({
  text,
  variant,
  tilt,
  className = "",
  theme = "pink",
}: FloatingBadgeProps) {
  const isPink = theme === "pink";

  const gradientStyles = isPink
    ? variant === "orange-pink"
      ? "bg-gradient-to-r from-[#FF8866] via-[#FF6E7B] to-[#FF5E7E] shadow-[0_8px_22px_-4px_rgba(255,94,126,0.4)]"
      : "bg-gradient-to-r from-[#FF7E9C] via-[#E167BB] to-[#B868FD] shadow-[0_8px_22px_-4px_rgba(225,103,187,0.4)]"
    : variant === "orange-pink"
    ? "bg-gradient-to-r from-[#FF8866] via-[#FF6E7B] to-[#FF5E7E] shadow-[0_8px_20px_-4px_rgba(255,110,123,0.45)]"
    : "bg-gradient-to-r from-[#FF6B9E] via-[#D27BEB] to-[#B388FF] shadow-[0_8px_20px_-4px_rgba(210,123,235,0.45)]";

  const animationClass =
    tilt === "left" ? "animate-float-badge-1" : "animate-float-badge-2";

  return (
    <div
      className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-white text-xs sm:text-sm font-bold tracking-wide select-none cursor-default backdrop-blur-sm border border-white/35 transition-transform duration-300 hover:scale-110 active:scale-95 ${gradientStyles} ${animationClass} ${className}`}
      style={{
        transformOrigin: "center center",
      }}
    >
      <span className="drop-shadow-sm font-medium tracking-wider">{text}</span>
    </div>
  );
}
