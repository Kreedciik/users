import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import { EsLinter, linterPlugin } from "vite-plugin-linter";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  server: { open: true, base: "/", port: 3000 },
  css: {
    preprocessorOptions: { scss: {} },
  },
  plugins: [
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ["./src/**/*.{ts,tsx}"],
      linters: [new EsLinter({ configEnv })],
    }),
    svgrPlugin(),
  ],
}));
