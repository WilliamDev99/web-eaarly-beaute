"use client";

import React from "react";
import { Sparkles, MapPin, Clock, MessageCircle, Phone, Instagram, Navigation } from "lucide-react";

export default function LocationContact() {
  return (
    <section id="lokasi" className="relative py-20 sm:py-28 bg-[#FFF9FA] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-[700px] mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FFE4EC] text-[#FF7E9C] text-xs font-bold mb-3.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LOKASI & KONTAK KAMI</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2E121E] tracking-tight leading-tight mb-4">
            Kunjungi Butik Kami atau <span className="text-[#FF7E9C]">Hubungi Kami Langsung</span>
          </h2>

          <p className="text-sm sm:text-base text-[#2E121E]/75 leading-relaxed">
            Kami siap menyambut kedatangan Anda setiap hari, atau melayani pemesanan dan konsultasi secara daring via WhatsApp.
          </p>
        </div>

        {/* 2-Column Info & Action Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Jam Buka & Info Toko */}
          <div className="lg:col-span-6 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-white border border-pink-100 shadow-sm">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#FFE4EC] text-[#FF7E9C] flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#FF7E9C] uppercase tracking-wider">
                    Jadwal Operasional
                  </span>
                  <h3 className="text-xl font-extrabold text-[#2E121E]">Jam Buka Toko</h3>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-[#FFF5F8] border border-pink-100/60">
                  <span className="text-sm font-bold text-[#2E121E]">Senin – Jumat</span>
                  <span className="text-sm font-semibold text-[#FF7E9C] px-3 py-1 rounded-full bg-white shadow-xs">
                    09.00 – 21.00 WIB
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-2xl bg-[#FFF5F8] border border-pink-100/60">
                  <span className="text-sm font-bold text-[#2E121E]">Sabtu – Minggu</span>
                  <span className="text-sm font-semibold text-[#FF7E9C] px-3 py-1 rounded-full bg-white shadow-xs">
                    09.00 – 21.30 WIB
                  </span>
                </div>

                <div className="flex items-center space-x-2 text-xs text-[#2E121E]/70 font-medium px-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Toko buka setiap hari (hari libur nasional tetap melayani).</span>
                </div>
              </div>

              {/* Alamat Toko */}
              <div className="flex items-start space-x-3.5 pt-6 border-t border-pink-100">
                <div className="w-10 h-10 rounded-xl bg-[#FFF0A8] text-[#2E121E] flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2E121E]">Alamat Butik Offline</h4>
                  <p className="text-xs sm:text-sm text-[#2E121E]/75 mt-1 leading-relaxed">
                    Butik Skincare eaärly BEAUTE — Jalan Utama Pusat Kota (Area Parkir Luas & Strategis).
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Route CTA */}
            <div className="mt-8 pt-6 border-t border-pink-100">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#FF7E9C] hover:underline"
              >
                <Navigation className="w-4 h-4" />
                <span>Buka Petunjuk Arah di Google Maps →</span>
              </a>
            </div>
          </div>

          {/* Right Column: WhatsApp Direct Order & Social Media Card */}
          <div className="lg:col-span-6 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#FF7E9C] via-[#F45B82] to-[#E6446E] text-white shadow-[0_16px_40px_rgba(255,126,156,0.32)]">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>

              <span className="text-xs font-extrabold uppercase tracking-widest text-white/80">
                Layanan Cepat Pelanggan
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1.5 mb-3 leading-snug">
                Mau Konsultasi atau Tanya Stok dari Rumah?
              </h3>

              <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-8">
                Staf admin kami siap membantu Anda mengecek ketersediaan produk, merekomendasikan skincare sesuai jenis kulit, atau melayani pengiriman langsung ke alamat Anda.
              </p>
            </div>

            <div className="space-y-4">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/?text=Halo%20Admin%20ea%C3%A4rly%20BEAUTE%2C%20saya%20ingin%20konsultasi%20dan%20tanya%20stok%20produk%20skincare..."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-full bg-white text-[#F45B82] text-sm sm:text-base font-extrabold flex items-center justify-center space-x-2.5 shadow-lg hover:bg-[#FFF0F5] hover:scale-[1.02] active:scale-95 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Hubungi Admin via WhatsApp</span>
              </a>

              {/* Social Channels */}
              <div className="flex items-center justify-center pt-4 text-xs font-semibold text-white/90">
                <span className="flex items-center space-x-1.5">
                  <Instagram className="w-4 h-4" />
                  <span>@eaarly.beaute</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
