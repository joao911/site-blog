import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"], // ou 'github.com' dependendo da URL que você usa
  },
};

export default withContentlayer(nextConfig);
