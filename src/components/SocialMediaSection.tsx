"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Instagram,
  Heart,
  Share2,
  ExternalLink,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const TikTokIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
  >
    <path
      fill="#25F4EE"
      transform="translate(-0.7 0.35)"
      d="M16.6 5.82A4.83 4.83 0 0 1 13.77 3h-3.15v12.67a2.64 2.64 0 1 1-2.28-2.61V9.87a5.84 5.84 0 1 0 5.43 5.82V9.26a7.93 7.93 0 0 0 4.66 1.5V7.61a4.8 4.8 0 0 1-1.83-1.79Z"
    />
    <path
      fill="#FE2C55"
      transform="translate(0.7 -0.35)"
      d="M16.6 5.82A4.83 4.83 0 0 1 13.77 3h-3.15v12.67a2.64 2.64 0 1 1-2.28-2.61V9.87a5.84 5.84 0 1 0 5.43 5.82V9.26a7.93 7.93 0 0 0 4.66 1.5V7.61a4.8 4.8 0 0 1-1.83-1.79Z"
    />
    <path
      fill="white"
      d="M16.6 5.82A4.83 4.83 0 0 1 13.77 3h-3.15v12.67a2.64 2.64 0 1 1-2.28-2.61V9.87a5.84 5.84 0 1 0 5.43 5.82V9.26a7.93 7.93 0 0 0 4.66 1.5V7.61a4.8 4.8 0 0 1-1.83-1.79Z"
    />
  </svg>
);

const InstagramCard = ({ post }: { post: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === post.images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? post.images.length - 1 : prev - 1));
  };

  return (
    <a
      href={post.link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(255,126,156,0.12)] border border-pink-100/70 transition-shadow duration-300 hover:shadow-[0_16px_36px_rgba(255,126,156,0.22)] flex flex-col block"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-[#FFF0F4]">
        <Image
          src={post.images[currentIndex]}
          alt={post.caption}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 will-change-transform group-hover:scale-[1.03]"
        />
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 text-[#FF7E9C] text-[10px] font-extrabold tracking-wider shadow-xs z-20">
          {post.tag}
        </div>

        {post.images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-30"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-30"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5 z-20">
              {post.images.map((_: any, idx: number) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === currentIndex ? "w-4 bg-white" : "w-1.5 bg-white/60"
                  }`}
                />
              ))}
            </div>
          </>
        )}

        <div className="absolute inset-0 bg-[#2E121E]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-6 text-white z-10">
          <div className="flex items-center space-x-1.5 text-sm font-bold">
            <Heart className="w-5 h-5 fill-white" />
            <span>{post.likes}</span>
          </div>
          <div className="flex items-center space-x-1.5 text-sm font-bold">
            <Share2 className="w-5 h-5" />
            <span>{post.comments}</span>
          </div>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <p className="text-xs text-[#2E121E]/80 line-clamp-2 leading-relaxed">
          {post.caption}
        </p>
        <div className="mt-3 pt-3 border-t border-pink-50 flex items-center justify-between text-[11px] text-[#2E121E]/60">
          <span>❤️ {post.likes} suka</span>
          <span className="text-[#FF7E9C] font-semibold">Lihat Post</span>
        </div>
      </div>
    </a>
  );
};

export default function SocialMediaSection() {
  const instagramHighlights = [
    {
      id: 1,
      title: "hanasui",
      image: "/images/Sorotan/hanasui.jpg",
      link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3ODcyNzg3MTk5NDMwODg0?stkn=MTJsM2d2OHZ5dGtubg==",
    },
    {
      id: 2,
      title: "Pigeon",
      image: "/images/Sorotan/Pigeon.jpg",
      link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDk5ODYwNTI0NjM1NTA1?stkn=dDR2NDF1cHdudnZy",
    },
    {
      id: 3,
      title: "Wardah",
      image: "/images/Sorotan/Wardah.jpg",
      link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDg5NzMyMDg2ODYzODQ3?stkn=N284aTRieW44Mm1h",
    },
    {
      id: 4,
      title: "Sorotan",
      image: "/images/Sorotan/New Collection.jpg",
      link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTY5NDYyMDg3OTU3NDQ0?stkn=NjJ2enV3bDU3MW51",
    },
    {
      id: 5,
      title: "Sorotan",
      image: "/images/Sorotan/Mens Care.jpg",
      link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MTQzMTU5MDM1NDQwNzky?stkn=MW1mNmZreWljNDk4bQ==",
    },
  ];

  const instagramPosts = [
    {
      id: 1,
      images: [
        "/images/Postigan/Slide%201.png",
        "/images/Postigan/Slide%202.png",
        "/images/Postigan/Slide%203.png"
      ],
      caption: "Kesalahan Saat Menggunakan Peeling! Jangan sampai skin barrier kamu rusak ya Beauties ✨",
      likes: "5.120",
      comments: "342",
      tag: "EDUKASI",
      link: "https://www.instagram.com/p/DPIoIWoiR6U/?utm_source=ig_web_button_share_sheet&stkn=MzRlODBiNWFlZA=="
    },
    {
      id: 2,
      images: [
        "/images/Postigan/Slide%201%20Sunscreen.png",
        "/images/Postigan/Slide%202%20Sunscreen.png",
        "/images/Postigan/Slide%203%20Sunscreen.png",
        "/images/Postigan/Slide%204%20Sunscreen.png"
      ],
      caption: "Jangan asal pilih! Ketahui jenis-jenis sunscreen yang sesuai dengan kebutuhan kulitmu ☀️",
      likes: "4.120",
      comments: "287",
      tag: "JENIS-JENIS SUNSCREEN",
      link: "https://www.instagram.com/p/DPseqgCCVWl/?utm_source=ig_web_button_share_sheet&stkn=MzRlODBiNWFlZA=="
    },
    {
      id: 3,
      images: ["/images/store/store_interior_1.jpg"],
      caption: "Selamat berakhir pekan di butik eaärly BEAUTE! Free skin analyzer check setiap Jumat & Sabtu.",
      likes: "3.590",
      comments: "198",
      tag: "STORE DIARY",
      link: "https://instagram.com"
    },
    {
      id: 4,
      images: ["/images/store/store_interior_3.jpg"],
      caption: "Coba tester lengkap semua shade dan varian serum di tester bar kami. Aesthetic & cozy!",
      likes: "2.190",
      comments: "94",
      tag: "TESTER BAR",
      link: "https://instagram.com"
    },
  ];



  return (
    <section
      id="media-sosial"
      className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-[#FFF0F4] via-white to-[#FFF5F8] scroll-mt-16"
    >
      {/* Ambient background glows */}
      <div className="ambient-glow absolute top-1/4 -left-24 w-96 h-96 bg-[#FF7E9C]/15 rounded-full blur-[60px] pointer-events-none" />
      <div className="ambient-glow absolute bottom-10 -right-24 w-96 h-96 bg-[#A8C5E8]/20 rounded-full blur-[60px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-[1320px] mx-auto px-5 sm:px-8 md:px-12 relative z-10"
      >
        {/* Header Section */}
        <div className="text-center max-w-[760px] mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FF7E9C] font-dantene tracking-tight leading-tight mb-5">
            Media Sosial
          </h2>
        </div>

        {/* 1. Instagram Section Spotlight */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-4 border-b border-pink-100/80 gap-4">
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FD5949] via-[#D6249F] to-[#285AEB] flex items-center justify-center text-white shadow-md">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-xl font-extrabold text-[#2E121E]">
                    @eaarly.beauteshop
                  </h3>
                  <CheckCircle2 className="w-4 h-4 text-blue-500 fill-blue-500" />
                </div>
                <p className="text-xs sm:text-sm text-[#2E121E]/65 font-medium">
                  Your Most Trusted & Up-To Date Beauty Spot!
                </p>
              </div>
            </div>

            <a
              href="https://www.instagram.com/eaarly.beauteshop?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#FF7E9C] to-[#F45B82] shadow-sm hover:shadow-md hover:brightness-105 transition-all"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow di Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* Instagram Highlights */}
          <div
            aria-label="Geser untuk melihat sorotan Instagram lainnya"
            className="flex w-full flex-nowrap space-x-4 sm:space-x-6 overflow-x-scroll sm:overflow-x-auto overscroll-x-contain pb-6 mb-8 snap-x snap-mandatory snap-always scroll-smooth touch-pan-x [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-5 px-5 sm:mx-0 sm:px-0"
          >
            {instagramHighlights.map((highlight) => (
              <a
                key={highlight.id}
                href={highlight.link}
                target="_blank"
                rel="noopener noreferrer"
                draggable={false}
                className="flex flex-col items-center space-y-2.5 snap-center group flex-shrink-0"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[3px] bg-gradient-to-tr from-[#FD5949] via-[#D6249F] to-[#285AEB] transition-transform duration-300 will-change-transform group-hover:scale-105">
                  <div className="w-full h-full rounded-full border-2 border-white overflow-hidden relative bg-white">
                    <Image
                      src={highlight.image}
                      alt={highlight.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-[#2E121E]/80 group-hover:text-[#FF7E9C] transition-colors">
                  {highlight.title}
                </span>
              </a>
            ))}
          </div>

          {/* Instagram Post Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {instagramPosts.map((post) => (
              <InstagramCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* TikTok Profile */}
        <div className="mb-16">
          <div className="relative overflow-hidden max-w-3xl mx-auto rounded-3xl border border-[#2E121E]/10 bg-white p-7 sm:p-9 shadow-[0_12px_32px_rgba(46,18,30,0.1)]">
            <div className="ambient-glow absolute -top-20 -right-16 w-48 h-48 rounded-full bg-[#25F4EE]/25 blur-2xl pointer-events-none" />
            <div className="ambient-glow absolute -bottom-20 -left-12 w-48 h-48 rounded-full bg-[#FE2C55]/20 blur-2xl pointer-events-none" />

            <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center shadow-lg">
                  <TikTokIcon className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-[0.18em] text-[#FE2C55] uppercase mb-1">
                    TikTok
                  </p>
                  <h3 className="text-xl font-extrabold text-[#2E121E]">
                    @eaarly.beauteshop
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2E121E]/65 font-medium mt-1">
                    🎀Skincare | Makeup | Accessories🎀
                  </p>
                </div>
              </div>

              <a
                href="https://www.tiktok.com/@eaarly.beauteshop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#111111] shadow-sm hover:shadow-md hover:bg-[#2E121E] transition-all"
              >
                <TikTokIcon className="w-4 h-4" />
                <span>Follow di TikTok</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>
        </div>

        {/*
                <span>ONLINE 09.00 – 21.00 WIB</span>
              </div>
        */}
      </motion.div>
    </section>
  );
}
