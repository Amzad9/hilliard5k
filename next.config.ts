import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
       protocol: 'https',
       hostname: "https://scontent.fdel65-3.fna.fbcdn.net",
      },
      {
        protocol: 'https',
        hostname: "https://scontent.fdel65-1.fna.fbcdn.net",
       },
       {
        protocol: 'https',
        hostname: "https://scontent.fdel65-2.fna.fbcdn.net",
       },
       {
        protocol: 'https',
        hostname: "https://scontent.fdel65-3.fna.fbcdn.net",
       },
       {
        protocol: 'https',
        hostname: "https://scontent.fdel65-1.fna.fbcdn.net",
       },
       {
        protocol: 'https',
        hostname: "https://scontent.fdel65-2.fna.fbcdn.net",
       },
    ],
    unoptimized: true,
  },

  trailingSlash: true,
};

export default nextConfig;
