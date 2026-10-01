"use client";

import React from "react";
import { ShieldCheck, Sparkles, HeartHandshake, BadgePercent } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: string;
}

const features: Feature[] = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#FF7E9C]" />,
    title: "100% Original & BPOM Resmi",
    description: "Kami menjamin seluruh produk di toko kami asli, legal, dan tersegel rapi langsung dari distributor resmi terpercaya.",
    badge: "Garansi Asli",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-[#FF7E9C]" />,
    title: "Toko Cantik & Nyaman Ber-AC",
    description: "Nikmati pengalaman berbelanja santai dengan ruangan ber-AC, interior pastel pink estetik, dan spot cermin cantik untuk foto.",
    badge: "Spot Estetik",
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-[#FF7E9C]" />,
    title: "Konsultasi Ramah & Solutif",
    description: "Staf kami dengan senang hati membantu Anda mencocokkan produk dengan tipe kulit, keluhan jerawat, flek, atau skin barrier.",
    badge: "Konsultasi Gratis",
  },
  {
    icon: <BadgePercent className="w-6 h-6 text-[#FF7E9C]" />,
    title: "Harga Bersahabat & Promo Mingguan",
    description: "Dapatkan harga terbaik setiap hari serta penawaran bundling hemat dan diskon spesial untuk produk-produk terfavorit.",
    badge: "Best Deals",
  },
];

export default function StoreFeatures() {
  return (
    <section className="relative py-20 bg-[#FFF2F5] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FFE4EC] text-[#FF7E9C] text-xs font-bold mb-3.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KEUNGGULAN TOKO KAMI</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2E121E] tracking-tight leading-tight mb-4">
            Alasan Mengapa Kamu Akan Suka Belanja di <span className="text-[#FF7E9C]">eaärly BEAUTE</span>
          </h2>

          <p className="text-sm sm:text-base text-[#2E121E]/75 leading-relaxed">
            Kenyamanan dan kepuasan Anda dalam merawat kulit adalah prioritas tertinggi kami.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="p-7 rounded-3xl bg-white border border-pink-100/90 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF0F5] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {feat.icon}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#FFE4EC] text-[#FF7E9C]">
                    {feat.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#2E121E] mb-2.5 leading-snug">
                  {feat.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#2E121E]/70 leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-pink-50 flex items-center text-xs font-bold text-[#FF7E9C]">
                <span>eaärly Quality Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
