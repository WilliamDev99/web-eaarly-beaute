"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Instagram, MessageCircle, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2E121E] text-white/85 pt-16 pb-12 overflow-hidden border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5">
            <div className="relative h-12 w-40 mb-5">
              <Image
                src="/images/eaarly_logo.png"
                alt="eaärly BEAUTE Logo"
                width={280}
                height={130}
                className="h-full w-auto object-contain brightness-110"
              />
            </div>
            <p className="text-sm text-white/70 max-w-[380px] leading-relaxed mb-6">
              eaarly beaute Menghadirkan produk perawatan kulit 100% original berizin BPOM 
            </p>
            <div className="flex items-center space-x-3 text-xs font-semibold text-[#FF7E9C]">
              <span>#eaärlyGlow</span>
              <span>•</span>
              <span>#CantikBersamaEaärly</span>
              <span>•</span>
              <span>#SkincareOriginal</span>
            </div>
          </div>

          {/* Col 2: Navigasi Cepat */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FF7E9C] mb-4">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#FF7E9C] transition-colors">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/tentang-kami" className="hover:text-[#FF7E9C] transition-colors">
                  TENTANG KAMI
                </Link>
              </li>
              <li>
                <Link href="/alamat" className="hover:text-[#FF7E9C] transition-colors">
                  ALAMAT
                </Link>
              </li>
              <li>
                <Link href="/media-sosial" className="hover:text-[#FF7E9C] transition-colors">
                  MEDIA SOSIAL
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Informasi Toko */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FF7E9C] mb-4">
              Layanan 
            </h4>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-[#FF7E9C] flex-shrink-0 mt-0.5" />
                <span>Buka Setiap Hari: 09.00 – 21.00 WIB</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <MessageCircle className="w-4 h-4 text-[#FF7E9C] flex-shrink-0 mt-0.5" />
                <span>Layanan Konsultasi & Order via WhatsApp</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 space-y-3 sm:space-y-0">
          <p>© 2026 eaärly BEAUTE. Hak Cipta Dilindungi Undang-Undang.</p>
          <p className="flex items-center space-x-1">
            <span>Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 text-[#FF7E9C] fill-current inline" />
            <span>untuk kecantikan kulit sehatmu</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
