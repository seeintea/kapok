import type { Config } from "tailwindcss";

const config: Partial<Config> = {
	theme: {
		extend: {
			backgroundImage: {
				mask: "conic-gradient(from 180deg at 50% 50%, #4e4a48 0deg, 180deg, #3d3a3a 0deg)",
			},
		},
	},
};

export default config;
