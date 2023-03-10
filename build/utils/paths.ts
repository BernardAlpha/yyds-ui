import path from 'path';

// 项目根目录
export const projectRoot = path.resolve(__dirname, '../../');

// 打包输出目录
export const outDir = path.resolve(__dirname, '../../dist');

// yyds-ui 入口 index.ts
export const yydsRoot = path.resolve(__dirname,'../../packages/yyds-ui')

// 组件目录
export const compRoot = path.resolve(projectRoot,'packages/components')

// SVG图标目录
export const svgRoot = path.resolve(projectRoot,'packages/theme-chalk/src/svgs')