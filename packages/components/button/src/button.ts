// 定义input元素属性
import { ExtractPropTypes, PropType } from 'vue';

export type Size = 'small' | 'medium' | 'large';
export type Type = 'primary';
export type Theme = 'solid' | 'hollow' | 'text';
export type IconPlacement = 'left' | 'right';
export type NativeType = 'button' | 'submit' | 'reset';

export const buttonProps = {
  size: {
    type: String
  },
  type: {
    type: String as PropType<Type>,
    validator: (val:string)=> {
      return ['primary'].includes(val);
    },
    default: 'primary'
  },
  theme: {
    type: String as PropType<Type>,
    validator: (val:string)=> {
      return [ 'solid', 'hollow', 'text'].includes(val);
    },
    default: 'solid'
  },
  round: {
    type: Boolean,
    default: true
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  },
  iconPlacement: {
    type: String as PropType<IconPlacement>,
    default: 'left'
  },
  nativeType: {
    type: String as PropType<NativeType>,
    default: 'button'
  }
} as const;

export const buttonEmits = {
  click: (e: MouseEvent) => e instanceof MouseEvent
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export type ButtonEmits = typeof buttonEmits;
