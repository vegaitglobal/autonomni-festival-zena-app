import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    domains: [
      "localhost",
      //Ovde posle dodati pravi URL 
    ],
  },
};

export default nextConfig;
