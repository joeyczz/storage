// rollup.config.js
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/index.js',
    name: 'joey-storage',
    format: 'umd'
  },
  plugins: [
    babel({
      exclude: 'node_module/**'
    })
  ]
};
