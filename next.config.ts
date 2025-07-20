import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    esmExternals: "loose",
    serverComponentsExternalPackages: ["mongoose"]
  },
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};

export default nextConfig;
