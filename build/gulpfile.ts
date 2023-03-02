// 打包方式：串行(series)  并行(parallel)
import { series, parallel } from 'gulp';
import { genTypes } from './gen-types';
import { run, withTaskName } from './utils';
import { outDir, yydsRoot, projectRoot } from './utils/paths';

const copySourceCode = () => async () => {
  await run(`cp ${yydsRoot}/package.json ${outDir}/package.json`);
  await run(`cp ${projectRoot}/README.md ${outDir}/README.md`);
  await run(`cp ${projectRoot}/LICENSE ${outDir}/LICENSE`);
};

// 1.打包样式 2.打包工具 3.打包所有组件 4.生成组件库 5.发布组件
export default series(
  withTaskName('clean', async () => {
    run('rm -rf ./dist');
    // run('rd /s/q dist')
  }),
  parallel(
    withTaskName('generateSvgs', done => {
      run('pnpm run build generateSvgs');
      done()
    }),
    withTaskName('buildPackages', () =>
      run('pnpm run --parallel build --filter ./packages')
    ), // 并行执行packages目录下的build脚本
    withTaskName('buildFullComponent', () =>
      run('pnpm run build buildFullComponent')
    ), // 执行build命令时会调用rollup，给rollup传参数buildFullComponent，那么就会执行导出任务叫buildFullComponent
    withTaskName('buildComponent', () => run('pnpm run build buildComponent'))
  ),
  parallel(genTypes, copySourceCode())
);

// 任务执行器 gulp 任务名 就会执行对应的任务
export * from './full-component';
export * from './component';
export * from './gen-svgs';
