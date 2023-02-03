import path from 'path'
import { outDir } from './paths'

export const buildConfig = {
  esm: {
    module: 'ESNext',
    format: 'esm',
    output: {
      name: 'es',
      path: path.resolve(outDir, 'es'),
    },
    bundle: {
      path: 'yyds-ui/es',
    },
  },
  cjs: {
    module: 'CommonJS',
    format: 'cjs',
    output: {
      name: 'lib',
      path: path.resolve(outDir, 'lib'),
    },
    bundle: {
      path: 'yyds-ui/lib',
    },
  },
}

export type BuildConfig = typeof buildConfig;
