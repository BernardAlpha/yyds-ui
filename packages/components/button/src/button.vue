<template>
  <button
    :class="[
      bem.b(),
      bem.m(type),
      bem.m(theme),
      bem.m(size),
      bem.is('round', theme !== 'text' && round),
      bem.is('loading', loading),
      bem.is('disabled', disabled)
    ]"
    @click="emitClick"
    :disabled="disabled || loading"
    :type="nativeType">
    <span v-if="(icon !== '' || loading) && iconPlacement === 'left'" :class="[bem.e('icon'), bem.em('icon', 'left')]">
      <y-icon v-if="loading" icon="loading"></y-icon>
      <y-icon v-else :icon="icon"></y-icon>
    </span>

    <slot></slot>

    <span v-if="(icon !== '' || loading) && iconPlacement === 'right'" :class="[bem.e('icon'), bem.em('icon', 'right')]">
      <y-icon v-if="loading" icon="loading"></y-icon>
      <y-icon v-else :icon="icon"></y-icon>
    </span>
    
  </button>
</template>

<script lang="ts" setup>
import { createNamespace } from '@yyds-ui/utils/create';
import { buttonEmits, buttonProps } from './button';

defineOptions({
  name: 'y-button',
  inheritAttrs: false
});

const bem = createNamespace('button');

const props = defineProps(buttonProps);
const emit = defineEmits(buttonEmits);

const emitClick = (e: MouseEvent) => {
  emit('click', e);
}

console.log('',props);
</script>
