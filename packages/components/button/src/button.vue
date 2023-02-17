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
    :disabled="disabled || loading"
    :type="nativeType">
    <span v-if="(icon !== '' || loading) && iconPlacement === 'left'" :class="[bem.e('icon'), bem.em('icon', 'left')]">
      <y-icon v-if="icon !== ''" :class="icon" size="20"></y-icon>
      <y-icon v-else class="y-icon-loading"></y-icon>
    </span>

    <slot></slot>

    
    <span v-if="(icon !== '' || loading) && iconPlacement === 'right'" :class="[bem.e('icon'), bem.em('icon', 'right')]">
      <y-icon v-if="icon !== ''" :class="icon" size="20"></y-icon>
      <y-icon v-else class="y-icon-loading"></y-icon>
    </span>
    
  </button>
</template>

<script lang="ts" setup>
import { createNamespace } from '@yyds-ui/utils/create';
import { buttonEmits, buttonProps } from './button';

defineOptions({
  name: 'y-button'
});

const bem = createNamespace('button');

const props = defineProps(buttonProps);
const emit = defineEmits(buttonEmits);

console.log('props', props);
</script>
