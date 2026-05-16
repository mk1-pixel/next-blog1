import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'picsum.photos',
    },
  ],
};

export default nextConfig;
