import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
  experimental: {
    cpus: 1,
  },
  output: "standalone",
  // Change the internal asset prefix path so it doesn't map to a protected folder name
  assetPrefix: process.env.NODE_ENV === "production" ? "/static" : undefined,
};

export default nextConfig;
