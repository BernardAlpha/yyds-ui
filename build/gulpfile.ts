import { series, parallel } from 'gulp';
import { run, withTaskName } from './utils';

// 1.打包样式 2.打包工具 3.打包所有组件 4.生成组件库 5.发布组件
export default series(
  withTaskName('clean', async () => { 
    // run('rm -rf ./dist')
    run('rd /s/q dist')
  }),
  withTaskName('buildPackages', () => run('pnpm run --parallel build --filter ./packages'))

)