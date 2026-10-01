import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "eaärly BEAUTE — Sweet Radiance & Pure Skincare",
  description: "Awaken your natural glow with eaärly BEAUTE premium skincare. Gentle cleansing, deep hydration, and blooming youthful radiance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${cormorant.variable}`}>
      <body className="min-h-screen bg-[#FFF2F5] text-[#2E121E] antialiased selection:bg-[#FF7E9C]/30 selection:text-[#2E121E]">
        {children}
      </body>
    </html>
  );
}
