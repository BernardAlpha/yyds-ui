// 打包样式
// pnpm install gulp-sass @types/gulp-sass sass @types/sass gulp-autoprefixer @types/gulp-autoprefixer gulp-clean-css @types/gulp-clean-css -D -w

import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import autoPrefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';
import path from 'path';
import { series, src, dest } from "gulp";

function compile() {
  const sass = gulpSass(dartSass);
  return src(path.resolve(__dirname, './src/*.scss'))
    .pipe(sass.sync())
    .pipe(autoPrefixer())
    .pipe(cleanCss())
    .pipe(dest('./dist/css'));
}

function copyFullStyle() {
  return src(path.resolve(__dirname, './dist/**'))
    .pipe(dest(path.resolve(__dirname, '../../dist/theme-chalk')))
}

export default series(
  compile,
  copyFullStyle
);