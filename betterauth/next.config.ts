import type { NextConfig } from "next";

const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000",
        "redesigned-yodel-g4qrw9w76gxvc9jr4-3000.app.github.dev",
      ],
    },
  },
};

export default nextConfig;
