import _Icon from './src/icon.vue';
import { withInstall } from '@yyds-ui/utils/with-install';

const YIcon = withInstall(_Icon);

export { YIcon };
export default YIcon;

export * from './src/icon';

declare module 'vue' {
  export interface GlobalComponents {
    YIcon: typeof YIcon;
  }
}
