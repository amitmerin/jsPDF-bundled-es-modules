import commonjs from 'rollup-plugin-commonjs';

export default [
  {
    input: './node_modules/jspdf.debug.js',
    output: {
      file: './jspdf.js',
      format: 'es',
    },
    plugins: [
      commonjs(),
    ],
  },
];