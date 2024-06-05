import sharedConfig from "@kapok/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
	presets: [sharedConfig],
	content: [
		"./app/**/*.{js,ts,jsx,tsx,md,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,md,mdx}",
		"../packages/**/src/**/*.{js,ts,jsx,tsx,md,mdx}",
	],
	theme: {},
};

export default config;
