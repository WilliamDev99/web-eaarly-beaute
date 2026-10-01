import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tentang Kami — eaärly BEAUTE | Your Beauty, Your Confidence",
  description:
    "Selamat datang di EAARLY BEAUTE. Beauty store yang menyediakan berbagai pilihan produk kecantikan terpercaya untuk menemani perjalanan kamu dalam merawat diri dan meningkatkan rasa percaya diri.",
};

export default function TentangKamiPage() {
  return (
    <main className="relative min-h-screen bg-[#FFF0F4] text-[#2E121E] overflow-x-hidden flex flex-col justify-between selection:bg-[#FF7E9C]/30 selection:text-[#2E121E]">
      {/* Sticky Brand Navigation Bar */}
      <Navbar theme="pink" />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-center">
        <AboutSection isStandalonePage={true} />
      </div>

      {/* Official Footer */}
      <Footer />
    </main>
  );
}
