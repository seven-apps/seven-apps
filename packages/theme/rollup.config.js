export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: false,
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: false,
    },
  ],
};
