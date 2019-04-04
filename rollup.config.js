// rollup.config.js
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import { uglify } from 'rollup-plugin-uglify';

import pkg from './package.json';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/index.min.js',
    name: 'JStorage',
    format: 'umd',
    globals: {
      lodash: '_',
    },
    banner: `/* JStorage version ${pkg.version} */`,
    sourcemap: true,
  },
  plugins: [
    resolve({
      browser: true,
    }),
    commonjs(),
    json(),
    babel({
      exclude: 'node_module/**',
    }),
    uglify(),
  ],
  external: ['lodash'],
};
