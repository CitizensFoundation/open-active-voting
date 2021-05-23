import { fromRollup } from '@web/dev-server-rollup';
import rollupCommonjs from '@rollup/plugin-commonjs';
import proxy from 'koa-proxies';

const commonjs = fromRollup(rollupCommonjs);

export default {
  mimeTypes: {
    '**/*.cjs': 'js'
  },
  port: 9000,
  middleware: [
    proxy('/votes/', {
      target: 'http://localhost:3012/',
    }),
  ],
  plugins: [
    commonjs(),
  ],
};
