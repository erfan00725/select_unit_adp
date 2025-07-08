import type { NextConfig } from "next";

// const withTM = require("next-transpile-modules")(["num2persian"]);

const nextConfig: NextConfig = {
  /* config options here */
  outputFileTracingExcludes: {
    "./generated/client/**/*": ["*"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // webpack: (config, { isServer }) => {
  //   config.module.rules.push({
  //     test: /num2persian\\.ts$/,
  //     use: [
  //       {
  //         loader: "ts-loader",
  //         options: { transpileOnly: true },
  //       },
  //     ],
  //   });
  //   return config;
  // },
};

export default nextConfig;
