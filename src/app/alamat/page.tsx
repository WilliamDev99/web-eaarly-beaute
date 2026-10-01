import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AlamatSection from "@/components/AlamatSection";

export const metadata: Metadata = {
  title: "Alamat & Lokasi Butik — eaärly BEAUTE | Kunjungi Toko Kami",
  description:
    "Temukan alamat butik offline resmi eaärly BEAUTE. Cek jam operasional toko, petunjuk arah Google Maps, fasilitas butik, dan layanan konsultasi skincare.",
};

export default function AlamatPage() {
  return (
    <main className="relative min-h-screen bg-[#FFF0F4] text-[#2E121E] overflow-x-hidden flex flex-col justify-between selection:bg-[#FF7E9C]/30 selection:text-[#2E121E]">
      {/* Sticky Brand Navigation Bar */}
      <Navbar theme="pink" />

      {/* Alamat Section - uses the same component as main page */}
      <AlamatSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
