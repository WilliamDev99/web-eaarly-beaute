"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Navigation,
  MessageCircle,
  CheckCircle2,
  Car,
  Maximize2,
  X
} from "lucide-react";

export default function AlamatSection() {
  const [lightboxPhoto, setLightboxPhoto] = useState<string | null>(null);

  return (
    <section
      id="alamat"
      className="relative w-full py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F9BDCF] via-[#FFF0F4] to-[#FFF5F8] text-[#2E121E] overflow-hidden scroll-mt-16"
    >
      {/* Soft Radiant Ambient Glows */}
      <div
        className="absolute -top-24 -left-24 w-[550px] h-[550px] bg-white/50 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -right-24 w-[600px] h-[600px] bg-[#FF7E9C]/20 rounded-full blur-[110px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-[10%] w-[450px] h-[450px] bg-white/35 rounded-full blur-[95px] pointer-events-none"
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

          {/* White Showcase Card Container */}
          <div className="relative bg-white shadow-[0_24px_70px_rgba(232,61,104,0.10)] border border-white/90 p-8 sm:p-12 md:p-14 lg:p-16 xl:p-20 overflow-hidden rounded-[40px]">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start"
            >
              
              {/* Left Column: Alamat & Informasi Toko */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                {/* Section Tag & Headline */}
                <div className="mb-6">

                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px] font-bold tracking-normal leading-[1.25] font-dantene select-none">
                    <span className="text-black mr-2.5">Alamat Toko</span>
                    <span className="text-[#E83D68]">eaarly beaute</span>
                  </h2>
                </div>


                {/* Address Details Card */}
                <div className="space-y-4 mb-8">
                  {/* Alamat Fisik */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#FFF5F8] border border-pink-200/80 shadow-xs flex items-start space-x-4">
                    <div className="w-11 h-11 rounded-xl bg-[#FFE4EC] text-[#E83D68] flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#E83D68]">
                        Alamat Lengkap
                      </span>
                      <p className="text-xs sm:text-sm text-[#2E121E]/80 font-bold mt-1 leading-relaxed">
                        Jalan Tritura NO 14 Samping Toko Elvis
                      </p>
                      <p className="text-xs text-[#E83D68] font-bold mt-2 flex items-center gap-1.5">
                      </p>
                    </div>
                  </div>

                  {/* Jadwal Jam Buka */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#FFF5F8] border border-pink-200/80 shadow-xs flex items-start space-x-4">
                    <div className="w-11 h-11 rounded-xl bg-[#FFE4EC] text-[#E83D68] flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#E83D68]">
                        Jam Buka
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                        <div className="p-2.5 rounded-xl bg-white border border-pink-100/70">
                          <p className="text-xs font-bold text-[#2E121E]">Senin – Sabtu</p>
                          <p className="text-sm font-bold text-[#E83D68] mt-0.5">09.00 – 21.00 WITA</p>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white border border-pink-100/70">
                          <p className="text-xs font-bold text-[#2E121E]">Minggu</p>
                          <p className="text-sm font-bold text-[#E83D68] mt-0.5">14.00 – 21.00 WITA</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                {/* Direct Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=eaarly+beaute+Makale"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#FF7E9C] to-[#E83D68] text-white text-sm font-bold flex items-center justify-center space-x-2.5 shadow-[0_8px_20px_rgba(232,61,104,0.30)] hover:brightness-105 active:scale-95 transition-all"
                  >
                    <Navigation className="w-4 h-4 stroke-[2.4]" />
                    <span>Google Maps</span>
                  </a>

                  <a
                    href="https://wa.me/?text=Halo%20Admin%20ea%C3%A4rly%20BEAUTE%2C%20saya%20ingin%20menanyakan%20alamat%20dan%20stok%20toko..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#FFF5F8] border border-pink-200/90 text-[#E83D68] text-sm font-bold flex items-center justify-center space-x-2.5 hover:bg-[#FFE4EC] active:scale-95 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 stroke-[2.4]" />
                    <span>Chat WhatsApp Admin</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Video & Map Banner */}
              <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center space-y-6 w-full">
                {/* Store Video Arch Frame */}
                <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[460px] aspect-[9/16] rounded-[40px] overflow-hidden bg-[#FCE4EC] shadow-[0_25px_60px_rgba(235,60,105,0.22)] border-[6px] border-white group">
                  <video
                    src="/images/VideoAlamatToko.mp4"
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Google Maps Visual Preview Card */}
                <div className="w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[460px] p-5 rounded-3xl bg-[#FFF5F8] border border-pink-200/80 shadow-xs flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-white text-[#E83D68] shadow-xs flex items-center justify-center flex-shrink-0">
                      <Navigation className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#2E121E]">Google Maps Navigation</p>
                      <p className="text-[11px] text-[#2E121E]/70 font-medium">Navigasi GPS langsung ke toko</p>
                    </div>
                  </div>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=eaarly+beaute+Makale"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full bg-[#E83D68] text-white text-xs font-bold shadow-xs hover:bg-[#d42d57] transition-colors"
                  >
                    Buka Rute
                  </a>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
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
            <div className="relative w-full h-[65vh] rounded-2xl overflow-hidden bg-[#FCE4EC]">
              <Image
                src={lightboxPhoto}
                alt="Enlarged Store Interior"
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
