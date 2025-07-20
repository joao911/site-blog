import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"], // ou 'github.com' dependendo da URL que você usa
  },
};

export default nextConfig;
