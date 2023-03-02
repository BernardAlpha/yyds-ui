// pnpm i prettier @types/prettier -D -w
import path from 'node:path';
import { readFile, writeFile } from 'node:fs/promises';
import glob from 'fast-glob';
import { format } from 'prettier';
import type { BuiltInParserName } from 'prettier';
import { src, dest } from 'gulp';

import { svgRoot, outDir } from './utils/paths';

function copySvg() {
  return src(path.resolve(svgRoot, 'svg-list.ts')).pipe(
    dest(path.resolve(outDir, `./theme-chalk/src/svg-list.ts`))
  );
}

const formatCode = (code: string, parser: BuiltInParserName = 'typescript') =>
  format(code, {
    parser,
    semi: false,
    trailingComma: 'none'
  });

const start = async () => {
  // Get svg file list
  const files = glob('*.svg', { cwd: svgRoot, absolute: true });
  // Init svg svgCollection
  let svgCollection = `export default [`;
  (await files).map(async (file, index) => {
    // Get svg file name
    const filename = path.basename(file).replace('.svg', '');
    // Get svg file content
    const content = (await readFile(file, 'utf-8')).replace(/[\r\n]/g, '');
    svgCollection += `{name: 'arrow-left',` + 'code:`' + content + '`},';
    if (index + 1 === (await files).length) {
      svgCollection += ']';
      // 输出合并处理后的svg
      writeFile(
        path.resolve(svgRoot, `svg-list.ts`),
        formatCode(svgCollection),
        'utf-8'
      );
      // 拷贝到dist文件夹
      copySvg();
    }
  });
};

export const generateSvgs = start;
