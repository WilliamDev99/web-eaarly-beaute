"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navLinks: NavItem[] = [
  { label: "HOME", href: "/#home" },
  { label: "TENTANG KAMI", href: "/#tentang-kami" },
  { label: "ALAMAT", href: "/#alamat" },
  { label: "MEDIA SOSIAL", href: "/#media-sosial" },
];

interface NavbarProps {
  theme?: "pink" | "blue";
}

export default function Navbar({ theme = "pink" }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>("HOME");

  const isPink = theme === "pink";

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = [
      { id: "home", label: "HOME" },
      { id: "tentang-kami", label: "TENTANG KAMI" },
      { id: "alamat", label: "ALAMAT" },
      { id: "media-sosial", label: "MEDIA SOSIAL" },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveItem(sections[i].label);
          return;
        }
      }
      setActiveItem("HOME");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isLinkActive = (item: NavItem) => {
    return activeItem === item.label;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    setActiveItem(item.label);
    const targetId = item.href.replace(/^\/?#/, "");

    if (pathname === "/") {
      e.preventDefault();
      if (targetId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.pushState(null, "", "/");
      } else {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", `#${targetId}`);
        }
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 h-20 md:h-24 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <div className="flex-shrink-0 z-10">
          <Link
            href="/"
            className="group inline-flex items-center transition-all duration-300 hover:opacity-90"
            aria-label="eaärly BEAUTE Home"
          >
            {isPink ? (
              <div className="relative h-10 sm:h-12 w-32 sm:w-40 flex items-center">
                <Image
                  src="/images/eaarly_logo.png"
                  alt="eaärly BEAUTE Logo"
                  width={280}
                  height={130}
                  priority
                  className="h-full w-auto object-contain drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ) : (
              <span className="font-extrabold uppercase font-serif tracking-[0.22em] text-2xl sm:text-3xl text-[#16314D] drop-shadow-sm">
                ORVÉLIA
              </span>
            )}
          </Link>
        </div>

        {/* Hidden SVG Definitions for Tab clipPath */}
        <svg
          width="0"
          height="0"
          className="absolute w-0 h-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <defs>
            <clipPath id="navbarTabClip" clipPathUnits="objectBoundingBox">
              <path d="M 0 0 L 0.05769 0 C 0.06667 0, 0.10385 1, 0.17308 1 L 0.82692 1 C 0.89615 1, 0.93333 0, 0.94231 0 L 1 0 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* Center: Desktop Navigation Tab (Hanging Notch Shape Attached to Top-0) */}
        <nav
          className={`hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 items-center justify-center w-[580px] sm:w-[660px] md:w-[720px] lg:w-[780px] h-[54px] lg:h-[60px] z-10 transition-all duration-300 ${
            isPink
              ? "filter drop-shadow-[0_10px_22px_rgba(235,60,105,0.14)] drop-shadow-[0_2px_4px_rgba(46,18,30,0.06)]"
              : "filter drop-shadow-[0_10px_22px_rgba(22,49,77,0.14)] drop-shadow-[0_2px_4px_rgba(22,49,77,0.06)]"
          }`}
          aria-label="Primary Navigation"
        >
          {/* Clipped Frosted Glass Background with Backdrop Blur */}
          <div
            className={`absolute inset-0 backdrop-blur-md transition-colors duration-300 ${
              isPink
                ? "bg-gradient-to-b from-white/94 via-white/86 to-[#FFF0F5]/80"
                : "bg-gradient-to-b from-white/92 via-white/82 to-[#B9DEF2]/75"
            }`}
            style={{
              clipPath: "url(#navbarTabClip)",
              WebkitClipPath: "url(#navbarTabClip)",
            }}
          />

          {/* SVG Precise Highlight & Border Stroke */}
          <svg
            viewBox="0 0 780 60"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none"
            aria-hidden="true"
          >
            {/* White Glass Inner Rim Highlight */}
            <path
              d="M 0 0 L 45 0 C 52 0 81 60 135 60 L 645 60 C 699 60 728 0 735 0 L 780 0"
              fill="none"
              stroke="rgba(255, 255, 255, 0.95)"
              strokeWidth="1.8"
            />
            {/* Delicate Accent Stroke along wings and bottom */}
            <path
              d="M 30 0 L 45 0 C 52 0 81 60 135 60 L 645 60 C 699 60 728 0 735 0 L 750 0"
              fill="none"
              stroke={
                isPink
                  ? "rgba(255, 126, 156, 0.28)"
                  : "rgba(22, 49, 77, 0.20)"
              }
              strokeWidth="1"
            />
          </svg>

          {/* Navigation Menu Items */}
          <ul className="relative z-10 w-full h-full flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 pb-0.5 px-6 sm:px-8">
            {navLinks.map((item) => {
              const isActive = isLinkActive(item);
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`group relative inline-flex flex-col items-center py-1 text-xs sm:text-[13px] lg:text-[13.5px] font-medium font-sans uppercase tracking-[0.14em] transition-colors duration-200 ${
                      isActive
                        ? isPink
                          ? "text-[#FF7E9C] font-bold"
                          : "text-[#16314D] font-bold"
                        : isPink
                        ? "text-[#2E121E]/80 hover:text-[#FF7E9C]"
                        : "text-[#16314D]/80 hover:text-[#16314D]"
                    }`}
                  >
                    <span>
                      {item.label}
                    </span>

                    {/* Pink Underline on Active / Pressed & Hover State */}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-[2px] rounded-full transition-all duration-300 ${
                        isPink
                          ? "bg-[#FF7E9C] shadow-[0_1px_6px_rgba(255,126,156,0.5)]"
                          : "bg-[#16314D]"
                      } ${
                        isActive
                          ? "w-full opacity-100"
                          : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right: Mobile Hamburger Menu Toggle (Desktop buttons removed) */}
        <div className="flex items-center space-x-3 sm:space-x-4 z-10">
          {/* Mobile Hamburger Menu Icon (Replaces tab on mobile screens) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full bg-white/80 backdrop-blur-md border border-white/80 text-[#2E121E] shadow-sm hover:bg-white transition-all focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-2 pb-6">
          <div className="bg-white/95 backdrop-blur-xl border border-pink-100/80 rounded-2xl shadow-xl p-5 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-3 duration-200 text-[#2E121E]">
            <ul className="flex flex-col space-y-3 text-sm font-medium tracking-wide uppercase font-sans">
              {navLinks.map((item) => {
                const isActive = isLinkActive(item);
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        handleNavClick(e, item);
                        setMobileMenuOpen(false);
                      }}
                      className={`block px-3.5 py-2.5 rounded-xl transition-all ${
                        isActive
                          ? "bg-[#FFE4EC] text-[#FF7E9C] font-bold shadow-xs"
                          : "hover:bg-[#FFF2F5] hover:text-[#FF7E9C] text-[#2E121E]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
