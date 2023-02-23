import { withInstall } from '@yyds-ui/utils/with-install';
import _Input from './src/input.vue';

const YInput = withInstall(_Input);

export { YInput };
export default YInput;

export type { InputProps } from './src/input';

declare module 'vue' {
  export interface GolbalComponent {
    YInput: typeof YInput;
  }
}
