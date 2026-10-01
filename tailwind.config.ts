import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        eaarly: {
          pink: "#FF7E9C",
          pinkHover: "#F45B82",
          plum: "#2E121E",
          plumLight: "#5A2B3F",
          bgTop: "#FFF2F5",
          bgMid: "#FDE5EC",
          bgBottom: "#FBC8D6",
          cream: "#FFF0A8",
          creamBorder: "#F3DE7C",
        },
        navy: {
          DEFAULT: "#16314D",
          900: "#16314D",
          800: "#1D3F63",
        },
        pastel: {
          blueTop: "#EAF4FC",
          blueBottom: "#B9DEF2",
          yellow: "#F2E6A1",
          yellowAvatar: "#FEEF8B",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-plus-jakarta)", "Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 16s linear infinite",
        "float-1": "floatBadge1 3.2s ease-in-out infinite",
        "float-2": "floatBadge2 3.8s ease-in-out infinite 0.5s",
      },
      keyframes: {
        floatBadge1: {
          "0%, 100%": { transform: "translate3d(0, 0px, 0) rotate(-10deg)" },
          "50%": { transform: "translate3d(0, -10px, 0) rotate(-10deg)" },
        },
        floatBadge2: {
          "0%, 100%": { transform: "translate3d(0, 0px, 0) rotate(10deg)" },
          "50%": { transform: "translate3d(0, -12px, 0) rotate(10deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
