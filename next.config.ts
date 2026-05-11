// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   compiler: {
//     removeConsole: process.env.NODE_ENV === "production",
//   },
//   experimental: {
//     optimizeCss: true,
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", 
  images: {
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;