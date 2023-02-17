import { withInstall } from '@yyds-ui/utils/with-install';
import _Button from './src/button.vue';

const Button = withInstall(_Button);

export default Button;
export type { ButtonProps } from './src/button';

declare module 'vue' {
  export interface GolbalComponent {
    YButton: typeof Button;
  }
}
