import { series, parallel, src, dest } from 'gulp';
import { buildConfig } from './utils/config';
import path from 'path';
import { outDir, projectRoot } from './utils/paths';
import ts from 'gulp-typescript';
import { withTaskName } from './utils';

export const buildPackages = (dirName: string, name: string) => {
  console.log('Debugger -- dirName name', dirName, name);

  const tasks = Object.entries(buildConfig).map(([module, config]) => {
    const output = path.resolve(dirName, config.output.name);
    return series(
      withTaskName(`build:${dirName}`, () => {
        const tsConfig = path.resolve(projectRoot, 'tsconfig.json');
        const inputs = ['**/*.ts', '!gulpfile.ts', '!node_modules'];
        return src(inputs).pipe(ts.createProject(tsConfig, {
          declaration: true,
          strict: false,
          module: config.module
        })()).pipe(dest(output))
      }),
      withTaskName(`copy:${dirName}`, () => {
        return src(`${output}/**`)
          .pipe(dest(path.resolve(outDir, config.output.name, name)));
      })
    )
  })

  return parallel(...tasks);
}