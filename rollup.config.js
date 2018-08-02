import flow from 'rollup-plugin-flow';

export default {
  input: './src/index.js',
  output: [
    {
      file: './dist/index.cjs.js',
      format: 'cjs'
    },
    {
      file: './dist/index.umd.js',
      format: 'umd',
      name: 'COMPOSE_TYPED',
    },
    {
      file: './dist/index.es6.js',
      format: 'es'
    },
  ],
  plugins: [ flow() ],
};
