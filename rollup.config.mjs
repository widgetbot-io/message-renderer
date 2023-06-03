import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { uglify } from "rollup-plugin-uglify";
import typescript from "@rollup/plugin-typescript";
import url from "@rollup/plugin-url";
import alias from "@rollup/plugin-alias";
import dts from "rollup-plugin-dts";
import json from "@rollup/plugin-json";
import external from "rollup-plugin-peer-deps-external";
import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/index.tsx",
    external: ["react", "lottie-web", "ramda"],
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        name: "react-lib",
        inlineDynamicImports: true
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        inlineDynamicImports: true
      },
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      url(),
      json(),
      uglify(),
      alias({
        entries: [{ find: "@images", replacement: "src/assets/images/" }],
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
