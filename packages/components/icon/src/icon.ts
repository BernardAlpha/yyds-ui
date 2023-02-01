import type { ExtractPropTypes } from "vue";
export const iconProps = {
  color: {
    type: String
  },
  size: {
    type: Number
  }
}

export type IconProps = ExtractPropTypes<typeof iconProps>;