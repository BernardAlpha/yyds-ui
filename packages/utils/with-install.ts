import type { App, Plugin } from 'vue';

// 类型声明必须export, 否则生成不了.d.ts文件
export type SFCWithInstall<T> = T & Plugin;

export const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = function (app: App) {
    app.component((comp as any).name, comp as any);
  }
  return comp as SFCWithInstall<T>;
}
