// tailwind.config.js
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-home": "url('/assets/home/banner.jpg')",
        "bg-home-mobile": "url('/assets/home/bannermobile.jpg')",
        "bg-logo": "url('/assets/home/logo.png')",
        "bg-button": "url('/assets/home/button.png')",
        "bg-banner-above": "url('/assets/home/bannerabove.png')",
        "list-icon-mobile":
          "url('https://img.zing.vn/products/jx1m/skin-2020/images/mobile-s201340c823.png')"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        base: {
          50: "#FFFFFF",
          100: "#E5E6E8",
          200: "#CFD1D2",
          300: "#ADB1B3",
          400: "#83888D",
          500: "#686D72",
          600: "#5E6266",
          700: "#4C4F52",
          800: "#434547",
          900: "#3B3C3E",
          950: "#252627",
        },
        neutral: {
          50: "#FFFFFF",
          100: "#E5E6E8",
          200: "#CFD1D2",
          300: "#ADB1B3",
          400: "#83888D",
          500: "#686D72",
          600: "#5E6266",
          700: "#4C4F52",
          800: "#434547",
          900: "#3B3C3E",
          950: "#252627",
        },
        primary: {
          50: "#F0FAFF",
          100: "#E0F4FE",
          200: "#B9EAFE",
          300: "#7BDCFE",
          400: "#35CAFB",
          500: "#0BB2EA",
          600: "#0091CA",
          700: "#0174A3",
          800: "#056287",
          900: "#0B506F",
          950: "#07334A",
        },
        error: {
          50: "#F0FAFF",
          100: "#E0F4FE",
          200: "#B9EAFE",
          300: "#7BDCFE",
          400: "#35CAFB",
          500: "#0BB2EA",
          600: "#0091CA",
          700: "#0174A3",
          800: "#056287",
          900: "#0B506F",
          950: "#07334A",
        },
      },

    },
  },
  plugins: [],
} satisfies Config;
