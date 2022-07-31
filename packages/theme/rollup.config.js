import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: false,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: false,
    },
  ],
  plugins: [
    nodeResolve(),
    json(),
    commonjs({ include: /node_modules/, esmExternals: true }),
    typescript(),
  ],
}
