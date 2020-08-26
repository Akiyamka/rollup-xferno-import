import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import html from 'rollup-plugin-generate-html-template';
import { terser } from 'rollup-plugin-terser';
import visualizer from 'rollup-plugin-visualizer';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace'
import alias from '@rollup/plugin-alias'

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const isProduction = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    sourcemap: true
  },
  watch: {
    clearScreen: false
  },
  plugins: [
    replace({
			'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development')
    }),
    resolve({
      extensions: ['.mjs', '.js', '.json', '.node', '.jsx'],
      browser: true
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    !isProduction && alias({
			inferno: 'node_modules/inferno/dist/index.dev.esm.js'
		}),
    html({
      template: 'src/index.template.html',
      target: 'index.html',
    }),
    commonjs({
			include: ['node_modules/core-js/**']
		}),
    isProduction && sizeSnapshot(),
    isProduction && terser(), 
    isProduction && visualizer() 
  ]
};