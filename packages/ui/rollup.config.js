import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const external = ["react-native"];

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: false,
      external,
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: false,
      external,
    },
  ],
  plugins: [nodeResolve(), json(), commonjs(), typescript()],
};
