const path = require("path")

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "imgix",
    path: "https://your.image.server",
  },
  reactStrictMode: true,
  cssModules: false,
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
      "@/components": path.resolve(__dirname, "components"),
      "@/api": path.resolve(__dirname, "api"),
      "@/styles": path.resolve(__dirname, "styles"),
      "@/types": path.resolve(__dirname, "types"),
    }
    return config
  },
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
    }
  },
}

module.exports = nextConfig
