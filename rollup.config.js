import commonjs from 'rollup-plugin-commonjs';

export default [
  {
    input: './node_modules/jspdf/dist/jspdf.debug.js',
    output: {
      file: './jspdf.js',
      format: 'es',
    },
    plugins: [
      commonjs(),
    ],
  },
];