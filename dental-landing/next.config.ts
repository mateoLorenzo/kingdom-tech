import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "downloads-minutes-graham-stickers.trycloudflare.com",
    "*.trycloudflare.com",
  ],
};

export default nextConfig;
