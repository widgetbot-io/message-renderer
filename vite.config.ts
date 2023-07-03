import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import dts from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";
import * as packageJson from "./package.json";

export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      include: ["src"],
    }),
  ],
  build: {
    lib: {
      entry: resolve("src", "index.tsx"),
      name: "@widgetbot/message-renderer",
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        "src/stories/**/*",
        ...Object.keys(packageJson.peerDependencies),
      ],
    },
  },
});
