const path = require("path")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
      "@/components": path.resolve(__dirname, "components"),
      "@/api": path.resolve(__dirname, "api"),
      "@/styles": path.resolve(__dirname, "styles"),
    }
    return config
  },
}

module.exports = nextConfig
