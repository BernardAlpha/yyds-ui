<template>
  <div v-bind="$attrs" :class="[bem.b(), bem.is('disabled', disabled), bem.is('readonly', readonly), bem.is('round', round)]"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    >
    <div :class="bem.e('group')">
      <div v-if="slots.prepend" :class="bem.be('group', 'prepend')">
        <slot name="prepend"></slot>
      </div>

      <div :class="[bem.e('wrapper'), bem.is('focus', focused)]">

        <span
          :class="[bem.e('prefix-item'), bem.e('prefix-button')]"
          v-if="prefixButton"
          @click="prefixButtonClick"
          >
          <div :class="bem.e('prefix-button') + '-text'">{{ prefixButton }}</div>
        </span>
        <span v-if="prefixButton" :class="bem.e('prefix-button') + '-line'"></span>
        
        <span
          :class="[bem.e('prefix-item'), bem.e('prefix-text')]"
          v-if="prefixText"
          @click="focus"
          >
          {{ prefixText }}
        </span>
        
        <y-icon
          :class="[bem.e('prefix-item'), bem.e('prefix-icon')]"
          v-if="prefixIcon"
          :icon="prefixIcon"
          @click="prefixIconClick"
          >
        </y-icon>
        
        <span v-if="slots.prefix" @click="focus" :class="bem.e('prefix')">
          <slot name="prefix"></slot>
        </span>
        <input
          ref="input"
          v-bind="attrs"
          style="width:100%;"
          :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
          :class="bem.e('inner')"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
          @input="handleInput"
          @change="handleChange"
          @blur="handleBlur"
          @focus="handleFocus"
        />
        <span v-if="slots.suffix" @click="focus" :class="bem.e('suffix')">
          <slot name="suffix"></slot>
        </span>

        <y-icon
          :class="bem.e('suffix-origin')"
          v-if="showPwdVisible && (focused || hovering)"
          :icon="passwordVisible ? 'eye-closed' : 'eye'"
          @click="handlePasswordVisible"
          >
        </y-icon>
        <y-icon
          :class="bem.e('suffix-origin')"
          v-if="showClearable && (focused || hovering)"
          icon="close-circle"
          @click="handleClear"
          >
        </y-icon>
        
        <y-icon
          :class="[bem.e('suffix-item'), bem.e('suffix-icon')]"
          v-if="suffixIcon"
          :icon="suffixIcon"
          @click="suffixIconClick"
          >
        </y-icon>
        <span
          :class="[bem.e('suffix-item'), bem.e('suffix-text')]"
          v-if="suffixText"
          @click="focus"
          >
          {{ suffixText }}
        </span>

        <span v-if="suffixButton" :class="bem.e('suffix-button-line')"></span>
        <span
          :class="[bem.e('suffix-item'), bem.e('suffix-button')]"
          v-if="suffixButton"
          @click="suffixButtonClick"
          >
          <div :class="[bem.e('suffix-button') + '-text']">{{ suffixButton }}</div>
        </span>
      </div>

      <div v-if="slots.append" :class="bem.be('group', 'append')">
        <slot name="append"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { createNamespace } from '@yyds-ui/utils/create';
import {
  useSlots,
  useAttrs,
  watch,
  ref,
  onMounted,
  nextTick,
  computed
} from 'vue';
import { inputProps, inputEmits } from './input';

const bem = createNamespace('input');

const props = defineProps(inputProps);
const emit = defineEmits(inputEmits);

const slots = useSlots();
const attrs = useAttrs();

const input = ref<HTMLInputElement | null>(null);

const passwordVisible = ref(false);
const focused = ref(false);
const hovering = ref(false);

const handlePasswordVisible = () => {
  console.log('handlePasswordVisible',);
  passwordVisible.value = !passwordVisible.value;
  focus();
};

const handleClear = () => {
  console.log('handleClear',);
  emit('input', '');
  emit('update:modelValue', '');
  emit('clear');
  focus();
};

const focus = async () => {
  console.log('focus');
  await nextTick();
  input.value?.focus();
};

const showPwdVisible = computed(() => {
  return (
    props.modelValue && props.showPassword && !props.disabled && !props.readonly
  );
});


const handleMouseLeave = (e: MouseEvent) => {
  hovering.value = false
  emit('mouseleave', e)
}

const handleMouseEnter = (e: MouseEvent) => {
  hovering.value = true
  emit('mouseenter', e)
}

const showClearable = computed(() => {
  return (
    props.modelValue && props.clearable && !props.disabled && !props.readonly
  );
});

onMounted(() => {
  setNativeInputValue();
});

watch(
  () => props.modelValue,
  () => {
    setNativeInputValue();
  }
);

const setNativeInputValue = () => {
  const inputEle = input.value;
  // console.log('inputEle', inputEle);
  // console.log('props', props.modelValue);
  if (!inputEle) {
    return;
  }
  inputEle.value = String(props.modelValue);
};

const handleInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value;
  emit('input', value);
  emit('update:modelValue', value);
};

const handleChange = (e: Event) => {
  emit('change', (e.target as HTMLInputElement).value);
};

const handleBlur = (e: FocusEvent) => {
  console.log('handleBlur');
  focused.value = false;
  emit('blur', e);
};

const handleFocus = (e: FocusEvent) => {
  console.log('handleFocus');
  focused.value = true;
  emit('focus', e);
};

const prefixButtonClick = (e: MouseEvent) => {
  console.log('YYDS-prefixButtonClick');
  focus();
  emit('prefixButtonClick', e);
}
const suffixButtonClick = (e: MouseEvent) => {
  console.log('YYDS-suffixButtonClick');
  focus();
  emit('suffixButtonClick', e);
}
const prefixIconClick = (e: MouseEvent) => {
  console.log('YYDS-prefixIconClick');
  focus();
  emit('prefixIconClick', e);
}
const suffixIconClick = (e: MouseEvent) => {
  console.log('YYDS-suffixIconClick');
  focus();
  emit('suffixIconClick', e);
}
</script>

<script lang="ts">
export default {
  name: 'y-input',
  inheritAttrs: false
};
</script>