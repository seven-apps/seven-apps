// import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const external = ["react-native"];

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: false,
      //external,
    },
    {
      file: "dist/index.esm.js",
      format: "es",
      sourcemap: false,
      // external,
    },
  ],
  plugins: [
    //  nodeResolve(),
    json(),
    commonjs({
      include: /node_modules/,
      esmExternals: true,
    }),
    typescript(),
    /*  babel({
      extensions,
      exclude: /node_modules/,
      babelHelpers: "bundled",
      babelrc: true,
      plugins: ["@babel/plugin-proposal-object-rest-spread"],
    }), */
  ],
};
