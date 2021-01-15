import path from "path";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import ts from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import { eslint } from "rollup-plugin-eslint";
import babel from "@rollup/plugin-babel";
import json from "rollup-plugin-json";
import pkg from "./package.json";

const extensions = [".js", ".ts"];

const tsPlugin = ts({
  check: true,
  tsconfig: path.resolve(__dirname, "tsconfig.json"),
  cacheRoot: "node_modules/.cache/rollup-plugin-typescript2",
  useTsconfigDeclarationDir: true,
  tsconfigOverride: {
    exclude: ["test"],
  },
  extensions,
});

const esPlugin = eslint({
  throwOnError: true,
  include: ["src/*.ts"],
  exclude: ["node_modules/**", "lib/**", "test/**"],
});

export default {
  input: "src/index.ts",
  output: {
    file: "lib/index.min.js",
    name: "JStorage",
    format: "umd",
    banner: `/* JStorage version ${pkg.version} */`,
  },
  plugins: [
    esPlugin,
    tsPlugin,
    resolve({ browser: true }),
    commonjs(),
    json(),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
      extensions,
    }),
    terser(),
  ],
};
