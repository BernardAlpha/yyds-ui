<template>
  <i class="y-icon" :style="style">
    <slot></slot>
  </i>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { iconProps } from './icon';
export default defineComponent({
  name: 'YIcon',
  props: iconProps,
  setup(props) {
    const style = computed(() => {
      if (!props.color && !props.size) {
        return {};
      }
      return {
        ...(props.color ? { 'color': props.color } : {}),
        ...(props.size ? { 'font-size': props.size + 'px' } : {})
      }
    });
    return {style}
  }
})
</script>