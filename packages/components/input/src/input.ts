// 定义input元素属性
import { ExtractPropTypes, PropType } from "vue";
import { isString } from '@vue/shared';

export const inputProps = {
  // type 可取text, textarea
  type: {
    type: String,
    default: 'text'
  },
  // modelValue/v-model = modeValue + @update:modeValue
  modelValue: {
    type: [Number, String] as PropType<string | number>,
    default: ''
  },
  placeholder: {
    type: String
  },
  clearable: {
    type: Boolean,
    default: false
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  label: {
    type: String
  },

} as const;

export type InputProps = ExtractPropTypes<typeof inputProps>;

export const inputEmits = {
  'update:modelValue': (value: string) => isString(value),
  input: (value: string) => isString(value),
  change: (value: string) => isString(value),
  focus: (e: FocusEvent) => e instanceof FocusEvent,
  blur: (e: FocusEvent) => e instanceof FocusEvent,
  clear: () => true // 清空事件
};

export type InputEmits = typeof inputEmits;