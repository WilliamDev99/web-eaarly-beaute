"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Maximize2, X, Eye } from "lucide-react";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
  span: string; // Tailwind grid span
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/images/store/store_interior_2.jpg",
    title: "Ruang Belanja Luas & Gondola Melengkung",
    category: "Main Store Area",
    description: "Etalase gondola pastel pink & periwinkle blue dengan pencahayaan terang yang memanjakan mata.",
    span: "md:col-span-8 md:row-span-2",
  },
  {
    id: 2,
    src: "/images/store/store_interior_1.jpg",
    title: "Rak Lengkung Berlampu LED & Mirror Corner",
    category: "Body Care & Mirror Spot",
    description: "Sudut etalase bertingkat dengan aksen tanaman zaitun estetik dan cermin untuk mencoba produk.",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    id: 3,
    src: "/images/store/store_interior_3.jpg",
    title: "Koleksi Kosmetik & Skincare Rapi",
    category: "Cosmetics & Facial Section",
    description: "Penataan produk tersusun rapi memudahkan Anda menemukan varian favorit.",
    span: "md:col-span-4 md:row-span-1",
  },
];

export default function StoreGallery() {
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  return (
    <section id="galeri" className="relative py-20 sm:py-28 bg-[#FFF2F5] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FFE4EC] text-[#FF7E9C] text-xs font-bold mb-3.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SUASANA TOKO FISIK</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2E121E] tracking-tight leading-tight mb-4">
            Jelajahi Sudut Cantik di <span className="text-[#FF7E9C]">eaärly BEAUTE</span>
          </h2>

          <p className="text-sm sm:text-base text-[#2E121E]/75 leading-relaxed">
            Lihat langsung interior butik kami yang dirancang penuh kehangatan, kebersihan, dan kenyamanan untuk setiap pelanggan setia kami.
          </p>
        </div>

        {/* Bento Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 auto-rows-[300px] sm:auto-rows-[340px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className={`group relative rounded-3xl overflow-hidden shadow-lg border-2 border-white/80 cursor-pointer bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 will-change-transform group-hover:scale-[1.03]"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E121E]/80 via-[#2E121E]/20 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-95" />

              {/* Top Category Badge & Expand Icon */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-white/90 text-[#2E121E] text-xs font-bold tracking-wide shadow-xs">
                  {item.category}
                </span>

                <div className="w-8 h-8 rounded-full bg-white/80 text-[#2E121E] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <h3 className="text-base sm:text-lg font-bold tracking-tight mb-1 text-white drop-shadow-xs">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/85 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote about real store */}
        <div className="mt-8 text-center">
          <p className="text-xs sm:text-sm text-[#2E121E]/70 font-medium">
            ✨ Foto asli diambil langsung dari butik resmi eaärly BEAUTE. Datang & rasakan sensasi berbelanja langsung!
          </p>
        </div>
      </div>

      {/* Lightbox Photo Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-[#2E121E]/92 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-3 sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="absolute top-5 right-5 z-10 p-2.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              aria-label="Tutup pratinjau foto"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden">
              <Image
                src={activePhoto.src}
                alt={activePhoto.title}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="p-4 sm:p-5 text-left">
              <span className="text-xs font-bold text-[#FF7E9C] uppercase tracking-wider">
                {activePhoto.category}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#2E121E] mt-1">
                {activePhoto.title}
              </h3>
              <p className="text-sm text-[#2E121E]/75 mt-1.5 leading-relaxed">
                {activePhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
