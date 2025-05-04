import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  outputFileTracingExcludes: {
    "./generated/client/**/*": ["*"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
