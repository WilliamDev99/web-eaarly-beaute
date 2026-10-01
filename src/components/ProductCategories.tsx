"use client";

import React from "react";
import { Sparkles, Sparkle, Heart, Flame, Smile, ShoppingBag } from "lucide-react";

interface Category {
  title: string;
  icon: React.ReactNode;
  subtitle: string;
  items: string[];
  gradient: string;
}

const categories: Category[] = [
  {
    title: "Facial Skincare",
    icon: <Sparkles className="w-5 h-5" />,
    subtitle: "Perawatan Wajah Lengkap",
    items: ["Facial Wash / Cleanser", "Toner & Essence", "Serum Pencerah & Anti-Aging", "Moisturizer Gel & Cream", "Sunscreen SPF 50+"],
    gradient: "from-[#FFE4EC] to-[#FFF0F5]",
  },
  {
    title: "Body Care & Bath",
    icon: <Heart className="w-5 h-5" />,
    subtitle: "Kulit Tubuh Halus & Harum",
    items: ["Body Lotion & Serum", "Body Wash Wangi Mewah", "Lulur & Scrub Badan", "Deodorant & Body Mist", "Hand Cream"],
    gradient: "from-[#F0F5FF] to-[#E8F0FE]",
  },
  {
    title: "Makeup & Kosmetik",
    icon: <Smile className="w-5 h-5" />,
    subtitle: "Tampil Segar Setiap Hari",
    items: ["Lip Tint & Matte Lip Cream", "Cushion & Foundation", "Loose & Compact Powder", "Eyebrow & Mascara", "Blush On"],
    gradient: "from-[#FFF5EB] to-[#FFF0E0]",
  },
  {
    title: "Skincare Viral & Trending",
    icon: <Flame className="w-5 h-5" />,
    subtitle: "Favorit Selebgram & TikTok",
    items: ["Glad2Glow Skincare Series", "The Originote Hyalu-Cera", "Skintific Ceramide Series", "Somethinc Glow Serum", "Hanasui Ceramide"],
    gradient: "from-[#F5EBFF] to-[#F0E0FF]",
  },
  {
    title: "Parfum & Fragrance",
    icon: <Sparkle className="w-5 h-5" />,
    subtitle: "Aroma Elegan Tahan Lama",
    items: ["Eau de Parfum (EDP)", "Body Mist Harian", "Hair Mist / Hair Fragrance", "Travel Size Perfume", "Aroma Manis & Bunga"],
    gradient: "from-[#EBFBFF] to-[#E0F7FA]",
  },
  {
    title: "Beauty Tools & Accs",
    icon: <ShoppingBag className="w-5 h-5" />,
    subtitle: "Pelengkap Ritual Cantik",
    items: ["Bando Handuk Cuci Muka", "Kapas Selection & Wajah", "Beauty Blender & Sponge", "Jepit & Aksesoris Rambut", "Pouch Kosmetik Lucu"],
    gradient: "from-[#FFFBEB] to-[#FFF8DC]",
  },
];

const popularBrands = [
  "SKINTIFIC",
  "SOMETHINC",
  "GLAD2GLOW",
  "THE ORIGINOTE",
  "WARDAH",
  "EMINA",
  "NIVEA",
  "GARNIER",
  "HANASUI",
  "SCARLETT",
  "PIGEON TEENS",
  "SELECTION",
];

export default function ProductCategories() {
  return (
    <section id="kategori" className="relative py-20 sm:py-28 bg-[#FFF9FA] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-[720px] mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FFE4EC] text-[#FF7E9C] text-xs font-bold mb-3.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KOLEKSI & KATEGORI TOKO</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2E121E] tracking-tight leading-tight mb-4">
            Pilihan Produk Terlengkap untuk <span className="text-[#FF7E9C]">Semua Kebutuhan Kulitmu</span>
          </h2>

          <p className="text-sm sm:text-base text-[#2E121E]/75 leading-relaxed">
            Semua produk di rak kami telah terkurasi dengan teliti, memiliki nomor izin edar resmi BPOM, dan disimpan di suhu ruangan yang ideal.
          </p>
        </div>

        {/* Categories Grid (6 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className={`p-6 sm:p-7 rounded-3xl bg-gradient-to-br ${cat.gradient} border border-white/80 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-white text-[#FF7E9C] flex items-center justify-center shadow-xs">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#2E121E]">{cat.title}</h3>
                  <p className="text-xs text-[#2E121E]/65 font-medium">{cat.subtitle}</p>
                </div>
              </div>

              <ul className="space-y-2 pt-2 border-t border-[#2E121E]/10">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center space-x-2 text-xs text-[#2E121E]/85">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF7E9C] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Brand Showcase Strip */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-pink-100/90 shadow-sm text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#2E121E]/60 mb-5">
            Tersedia Brand Resmi Terkemuka Lokal & Internasional
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {popularBrands.map((brand) => (
              <span
                key={brand}
                className="px-4 py-2 rounded-full bg-[#FFF2F5] text-[#2E121E] text-xs font-bold tracking-wider hover:bg-[#FFE4EC] hover:text-[#FF7E9C] transition-colors cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
