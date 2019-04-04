// rollup.config.js
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/index.js',
    name: 'JStorage',
    format: 'umd',
    globals: {
      lodash: '_',
    },
  },
  plugins: [
    resolve({
      browser: true,
    }),
    commonjs(),
    babel({
      exclude: 'node_module/**',
    }),
  ],
  external: ['lodash'],
};
