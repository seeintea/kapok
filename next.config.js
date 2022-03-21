const path = require("path")

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img0.baidu.com"],
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
    }
    return config
  },
}

module.exports = nextConfig
