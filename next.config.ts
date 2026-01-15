import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-334efe26d4c348c8afc22f3c48478c04.r2.dev',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
