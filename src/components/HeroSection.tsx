"use client";

import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#FFF0F4] via-[#FCE4EC] to-[#F9BDCF]"
    >
      {/* 1. Sticky Transparent Top Navbar */}
      <Navbar theme="pink" />

      {/* Subtle Ambient Background Depth — reduced blur for iOS perf */}
      <div
        className="ambient-glow absolute -top-16 -left-16 w-[550px] h-[550px] bg-white/40 rounded-full blur-[60px] pointer-events-none z-0"
        aria-hidden="true"
      />
      <div
        className="ambient-glow absolute -bottom-16 -right-16 w-[600px] h-[600px] bg-[#FF7E9C]/18 rounded-full blur-[70px] pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* 2. Main Hero Centerpiece (Crisp, High-Definition Centered Brand Logo) */}
      <div className="relative flex-1 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 flex items-center justify-center z-10 py-6">
        <div className="w-[92vw] sm:w-[86vw] md:w-[80vw] lg:w-[75vw] max-w-[1080px] flex items-center justify-center select-none transition-transform duration-500 hover:scale-[1.015]">
          <Image
            src="/images/early_logo_hd.png"
            alt="eaärly BEAUTE Official Logo"
            width={2402}
            height={1090}
            priority
            quality={100}
            className="w-full h-auto object-contain drop-shadow-[0_8px_20px_rgba(235,60,105,0.20)] select-none"
          />
        </div>
      </div>

      {/* 3. Scroll Indicator — simpler opacity pulse instead of heavy bounce */}
      <div className="absolute bottom-8 left-0 right-0 w-full z-20 flex justify-center animate-bounce" style={{ willChange: 'transform' }}>
        <a 
          href="#tentang-kami"
          className="text-[#E83D68]/80 hover:text-[#E83D68] transition-colors p-2 rounded-full hover:bg-white/40"
          aria-label="Scroll ke bawah"
        >
          <ChevronDown className="w-8 h-8 stroke-[2.5]" />
        </a>
      </div>

      {/* Bottom Subtle Spacer for Vertical Balance */}
      <div className="h-20 w-full pointer-events-none" aria-hidden="true" />
    </section>
  );
}
