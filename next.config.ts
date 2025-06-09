import type { NextConfig } from "next";



const nextConfig: NextConfig = {
  // reactStrictMode: false, // Tắt Strict Mode để giảm log cảnh báo
  // compiler: {
  //   removeConsole: { exclude: ["error", "warn"] }, // Chặn console.log nhưng giữ lại error, warn
  // },
  // devIndicators: {
  //   buildActivity: false, // Tắt loading indicator trên trình duyệt
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hiepkiem.interits.vn',
        pathname: '/wp-content/uploads/**',
      },
    ],
    domains: ['hiepkiem.interits.vn'],
  },
};


export default nextConfig;