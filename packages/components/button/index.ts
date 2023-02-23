import { withInstall } from '@yyds-ui/utils/with-install';
import _Button from './src/button.vue';

const YButton = withInstall(_Button);

export { YButton };
export default YButton;
export type { ButtonProps } from './src/button';

declare module 'vue' {
  export interface GolbalComponent {
    YButton: typeof YButton;
  }
}
