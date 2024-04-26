import { moduleTools, defineConfig } from "@modern-js/module-tools";

const config: unknown = defineConfig({
  plugins: [moduleTools()],
  buildPreset: "npm-library",
  buildConfig: {
    dts: {
      abortOnError: true,
      distPath: "./",
      only: false,
    },
  },
});

export default config;
