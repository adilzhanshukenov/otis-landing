import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
  experimental: {
    // Limit the build to 1 worker thread to save memory
    cpus: 1,
  },
};

export default nextConfig;
