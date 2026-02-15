import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F9F5F0", // Lighter, cleaner cream
        "cream-dark": "#EBE4D8",
        coffee: "#2C1A0F", // Deep rich coffee
        "coffee-light": "#5C4030", // Milk chocolate tone
        "coffee-muted": "#8D7A6B",
        gold: "#C69C48", // More metallic gold
        "gold-light": "#DFC383",
        "gold-muted": "#B59E5F",
        burgundy: "#722F37",
        "burgundy-light": "#8B3A42",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(44, 26, 15, 0.05), 0 2px 4px -1px rgba(44, 26, 15, 0.03)',
        'medium': '0 10px 15px -3px rgba(44, 26, 15, 0.08), 0 4px 6px -2px rgba(44, 26, 15, 0.04)',
        'glass': '0 8px 32px 0 rgba(44, 26, 15, 0.1)',
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "pattern-beans": "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='30' cy='30' rx='12' ry='18' fill='none' stroke='%233D2914' stroke-opacity='0.04' stroke-width='1'/%3E%3C/svg%3E\")",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
