
const nextConfig = {
  /* config options here */
  outputFileTracingExcludes: {
    "./generated/client/**/*": ["*"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
