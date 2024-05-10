import sharedConfig from "@kapok/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  presets: [sharedConfig],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,md,mdx}",
    "../packages/layout/src/**/*.{js,ts,jsx,tsx}",
    "../packages/components/src/**/*.{js,ts,jsx,tsx}",
    "../packages/content/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
};

export default config;
