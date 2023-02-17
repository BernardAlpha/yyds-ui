<template>
  <i :class="[bem.b(), iconClass()]" :style="style">
    <slot></slot>
  </i>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { createNamespace } from '@yyds-ui/utils/create';
import { iconProps } from './icon';

defineOptions({
  name: 'y-icon'
});

const bem = createNamespace('icon');

const props = defineProps(iconProps);

const iconClass = () => {
  return props.icon ? `${bem.b()}-${props.icon}` : ''
}

const style = computed(() => {
  if (!props.color && !props.size) {
    return {};
  }
  return {
    ...(props.color ? { color: props.color } : {}),
    ...(props.size ? { 'font-size': props.size + 'px' } : {})
  };
});
</script>
