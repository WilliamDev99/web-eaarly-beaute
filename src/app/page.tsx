import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AlamatSection from "@/components/AlamatSection";
import SocialMediaSection from "@/components/SocialMediaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#FFF2F5] text-[#2E121E] overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <AlamatSection />
      <SocialMediaSection />
      <Footer />
    </main>
  );
}


