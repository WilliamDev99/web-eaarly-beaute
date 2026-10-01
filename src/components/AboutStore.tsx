"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, CheckCircle2, Heart, Award } from "lucide-react";

export default function AboutStore() {
  return (
    <section id="tentang" className="relative py-20 sm:py-28 bg-[#FFF9FA] overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#FF7E9C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#A8C5E8]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Story / Store Highlight Tile */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_45px_rgba(255,126,156,0.22)] border-4 border-white aspect-[4/5] max-w-[460px] mx-auto">
              <Image
                src="/images/store/store_interior_1.jpg"
                alt="Interior Toko eaärly BEAUTE dengan rak melengkung dan tanaman zaitun"
                fill
                sizes="(max-width: 768px) 100vw, 460px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E121E]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-[#FF7E9C] text-xs font-bold mb-2">
                  Boutique Interior
                </span>
                <p className="text-sm font-medium text-white/95 leading-snug">
                  Suasana rak pastel pink & periwinkle blue berpadu lampu LED estetik.
                </p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-pink-100 flex items-center space-x-3.5 max-w-[240px]">
              <div className="w-11 h-11 rounded-xl bg-[#FFE4EC] text-[#FF7E9C] flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 fill-current" />
              </div>
              <div>
                <p className="text-lg font-extrabold text-[#2E121E] leading-none">100%</p>
                <p className="text-xs font-semibold text-[#2E121E]/70 mt-1">
                  Original BPOM & Terpercaya
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Principles */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FFE4EC] text-[#FF7E9C] text-xs font-bold w-fit mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TENTANG KAMI</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2E121E] tracking-tight leading-tight mb-6">
              Hadirkan Pengalaman Belanja Skincare yang <span className="text-[#FF7E9C]">Menyenangkan & Estetik</span>
            </h2>

            <p className="text-sm sm:text-base text-[#2E121E]/80 leading-relaxed mb-6">
              <strong>eaärly BEAUTE</strong> didirikan dengan satu komitmen sederhana: menjadi destinasi utama perawatan diri bagi siapa saja yang ingin merawat kesehatan kulitnya. Kami percaya bahwa berbelanja skincare bukan hanya soal membeli produk, melainkan tentang momen memanjakan diri dalam suasana toko yang bersih, harum, dan memikat.
            </p>

            <p className="text-sm sm:text-base text-[#2E121E]/80 leading-relaxed mb-8">
              Seluruh rak kami dirancang dengan konsep warna pastel ceria dan pencahayaan hangat, menghadirkan koleksi lengkap mulai dari pembersih wajah, pelembap, serum bernutrisi tinggi, perawatan tubuh, hingga kosmetik kekinian yang telah tersertifikasi aman BPOM.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF7E9C] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-[#2E121E]">Jaminan Keaslian 100%</h3>
                  <p className="text-xs text-[#2E121E]/70 mt-0.5">Semua produk resmi dari distributor berizin BPOM.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF7E9C] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-[#2E121E]">Konsultasi Sesuai Jenis Kulit</h3>
                  <p className="text-xs text-[#2E121E]/70 mt-0.5">Staf ramah siap membantu mencarikan solusi skincare tepat.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF7E9C] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-[#2E121E]">Toko Nyaman Ber-AC</h3>
                  <p className="text-xs text-[#2E121E]/70 mt-0.5">Etalase rapi memudahkan Anda melihat & memilih produk.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF7E9C] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-[#2E121E]">Produk Viral Terlengkap</h3>
                  <p className="text-xs text-[#2E121E]/70 mt-0.5">Selalu update produk-produk kecantikan terfavorit masa kini.</p>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-pink-200/80 text-center">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#FF7E9C]">500+</p>
                <p className="text-xs font-semibold text-[#2E121E]/70 mt-1">Produk Pilihan</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#FF7E9C]">50+</p>
                <p className="text-xs font-semibold text-[#2E121E]/70 mt-1">Brand Resmi</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#FF7E9C]">100%</p>
                <p className="text-xs font-semibold text-[#2E121E]/70 mt-1">Garansi Asli</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
