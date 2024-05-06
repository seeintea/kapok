import { moduleTools, defineConfig } from "@modern-js/module-tools";

export default defineConfig({
  plugins: [moduleTools()],
  buildPreset: "npm-library",
  buildConfig: {
    alias: { "@": "src" },
    dts: {
      abortOnError: true,
      distPath: "./",
      only: false,
    },
  },
});
