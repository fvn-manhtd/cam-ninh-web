import type { NextConfig } from "next";

// Static export for GitHub Pages: `next build` writes the site to ./out.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
