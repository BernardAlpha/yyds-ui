import type { ExtractPropTypes, PropType } from 'vue';
export const iconProps = {
  icon: {
    type: String,
    default: ''
  },
  color: {
    type: String
  },
  size: {
    type: [Number, String] as PropType<number | string>
  }
} as const;

export type IconProps = ExtractPropTypes<typeof iconProps>;
