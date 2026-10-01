"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize2, X, Heart, ChevronLeft, ChevronRight } from "lucide-react";

interface AboutSectionProps {
  isStandalonePage?: boolean;
}

const STORE_IMAGES = [
  "/images/store/store_interior_1.jpg",
  "/images/store/store_interior_2.jpg",
  "/images/store/store_interior_3.jpg",
];

export default function AboutSection({ isStandalonePage = false }: AboutSectionProps) {
  const [lightboxPhoto, setLightboxPhoto] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % STORE_IMAGES.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + STORE_IMAGES.length) % STORE_IMAGES.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3500); // Ganti gambar setiap 3.5 detik
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="tentang-kami"
      className={`relative w-full flex items-center justify-center bg-gradient-to-b from-[#FFF0F4] via-[#FCE4EC] to-[#F9BDCF] text-[#2E121E] overflow-hidden scroll-mt-16 ${
        isStandalonePage
          ? "min-h-[calc(100dvh-80px)] py-12 sm:py-16 lg:py-20"
          : "min-h-[100dvh] py-12 sm:py-16 lg:py-20 border-t border-white/60"
      }`}
    >
      {/* Soft Radiant Ambient Glows */}
      <div
        className="ambient-glow absolute -top-24 -left-24 w-[550px] h-[550px] bg-white/45 rounded-full blur-[60px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="ambient-glow absolute -bottom-24 -right-24 w-[600px] h-[600px] bg-[#FF7E9C]/20 rounded-full blur-[70px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Showcase Container */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-8 md:px-12 w-full">
        <div className="relative">
          {/* Aesthetic Pink Ribbon on the Border Corner */}
          <div className="absolute -top-6 -left-4 sm:-top-8 sm:-left-6 md:-top-10 md:-left-8 z-30 pointer-events-none drop-shadow-[0_8px_16px_rgba(232,61,104,0.25)] select-none -rotate-12">
            <Image
              src="/images/pink_ribbon.png"
              alt="Pita Hiasan eaärly BEAUTE"
              width={130}
              height={116}
              priority
              className="w-16 sm:w-20 md:w-24 lg:w-28 h-auto object-contain"
            />
          </div>

          <div
            className="relative bg-white shadow-[0_24px_70px_rgba(232,61,104,0.10)] border border-white/90 p-8 sm:p-12 md:p-14 lg:p-16 xl:p-20 overflow-hidden rounded-[40px]"
          >
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center"
          >
          
          {/* Left Column: Official 'Tentang Kami' Content */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center">
            {/* Section Tag & Headline */}
            <div className="mb-6">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#E83D68] block mb-2.5">
                TENTANG KAMI
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[54px] font-bold lowercase tracking-normal leading-[1.25] font-dantene select-none">
                <span className="text-black mr-2.5">selamat datang di</span>
                <span className="text-[#E83D68]">eaarly beaute</span>
              </h2>
            </div>

            {/* Official Story Copy */}
            <div className="space-y-4 text-[15px] sm:text-base text-[#E83D68] leading-[1.75] font-bold max-w-[580px]">
              <p>
                <span className="font-dantene text-[#E83D68] text-[24px] font-bold lowercase tracking-normal align-baseline inline-block mr-1">eaarly beaute</span> hadir sebagai <span className="italic font-extrabold">beauty store</span> yang menyediakan berbagai pilihan produk kecantikan untuk menemani perjalanan kamu dalam merawat dan meningkatkan rasa percaya diri.
              </p>
              <p>
                Kami percaya bahwa merawat diri bukan hanya tentang penampilan, tetapi juga tentang memberikan waktu untuk diri sendiri. Karena itu, kami berusaha menghadirkan pilihan produk <span className="italic font-extrabold">beauty</span> yang menarik, berkualitas, dan sesuai dengan kebutuhan kamu.
              </p>
              <p>
                Mulai dari <strong className="font-extrabold">skincare, makeup, accessories, hingga berbagai kebutuhan kecantikan lainnya</strong>, <span className="font-dantene text-[#E83D68] text-[24px] font-bold lowercase tracking-normal align-baseline inline-block mx-1">eaarly beaute</span> hadir untuk membuat pengalaman berbelanja produk <span className="italic font-extrabold">beauty</span> menjadi lebih mudah, nyaman, dan menyenangkan.
              </p>
            </div>

            {/* Tagline Card */}
            <div className="my-6 p-4 sm:p-5 rounded-2xl bg-[#FFF5F8] border border-pink-200/80 shadow-xs max-w-[580px] flex items-center space-x-4">
              <div className="w-10 h-10 rounded-xl bg-[#FFE4EC] text-[#E83D68] flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5 fill-[#E83D68]/30 stroke-[2.2]" />
              </div>
              <div>
                <p className="text-base sm:text-lg font-bold text-[#E83D68] tracking-tight leading-tight">
                  Your Beauty, Your Confidence.
                </p>
                <p className="text-xs sm:text-[13px] text-[#E83D68] font-semibold mt-0.5">
                  Dedikasi kami untuk kecantikan dan rasa percaya dirimu.
                </p>
              </div>
            </div>

            {/* Closing Thank You Note */}
            <p className="text-[14px] sm:text-[15px] text-[#E83D68] leading-[1.7] font-bold max-w-[580px]">
              Terima kasih telah menjadikan <span className="font-dantene text-[#E83D68] text-[24px] font-bold lowercase tracking-normal align-baseline inline-block mx-1">eaarly beaute</span> sebagai bagian dari perjalanan kecantikan kamu. Kami akan terus berusaha memberikan produk dan pelayanan terbaik untuk setiap pelanggan.
            </p>
          </div>

          {/* Right Column: Store Interior Photo */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-center lg:items-end justify-center">
            {/* Arch Pill Container */}
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[460px] aspect-[1/1.3] sm:aspect-[1/1.35] rounded-[140px] sm:rounded-[180px] overflow-hidden bg-[#FCE4EC] shadow-[0_25px_60px_rgba(235,60,105,0.22)] border-[6px] border-white group">
              {STORE_IMAGES.map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  alt={`Suasana Butik eaärly BEAUTE - Beauty Store ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 460px"
                  className={`object-cover object-center transition-opacity duration-700 ease-in-out ${
                    currentImageIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                />
              ))}

              {/* Subtle bottom shadow vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E121E]/25 via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* Expand Fullscreen Button */}
              <button
                type="button"
                onClick={() => setLightboxPhoto(STORE_IMAGES[currentImageIndex])}
                className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/90 text-[#E83D68] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md z-20"
                aria-label="Perbesar foto"
              >
                <Maximize2 className="w-4 h-4 stroke-[2.2]" />
              </button>

              {/* Slider Navigation Buttons */}
              <button
                type="button"
                onClick={prevImage}
                className="absolute top-1/2 -translate-y-1/2 left-4 w-10 h-10 rounded-full bg-white/80 text-[#E83D68] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md z-20"
                aria-label="Gambar Sebelumnya"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>
              <button
                type="button"
                onClick={nextImage}
                className="absolute top-1/2 -translate-y-1/2 right-4 w-10 h-10 rounded-full bg-white/80 text-[#E83D68] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md z-20"
                aria-label="Gambar Selanjutnya"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>
          </div>

          </motion.div>
        </div>
      </div>
    </div>

      {/* Lightbox Modal */}
      {lightboxPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxPhoto(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxPhoto(null)}
              className="absolute top-5 right-5 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative w-full h-[65vh] rounded-2xl overflow-hidden bg-[#DCDDD9]">
              <Image
                src={lightboxPhoto}
                alt="Enlarged Skincare Formula"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
