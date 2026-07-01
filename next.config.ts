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
  trailingSlash: true, // 👈 Forces Next.js and Plesk to resolve routes cleanly as /folder/ paths
  assetPrefix: process.env.NODE_ENV === "production" ? "/static" : undefined,
};

export default nextConfig;
