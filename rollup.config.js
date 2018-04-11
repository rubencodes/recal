import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import pkg from './package.json';

export default {
  input: 'src/lib/index.jsx',
  external: ['react'],
  output: [
    {
      file: pkg.browser,
      format: 'umd',
      name: 'recal',
      exports: 'named',
      globals: { react: 'React' }
    },
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      globals: { react: 'React' }
    },
    { 
      file: pkg.module,
      format: 'es',
      exports: 'named',
      globals: { react: 'React' }
    }
  ],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx', '.json']
    }), // so Rollup can find imported packages.
    babel({
      sourceMap: true,
      exclude: 'node_modules/**'
    }),
    commonjs(), // so Rollup can convert imported packages to an ES module
    uglify()
  ]
}