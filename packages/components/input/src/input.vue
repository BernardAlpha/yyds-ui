<template>
  <div :class="[bem.b()]">
    <div :class="bem.e('group')">
      <div v-if="slots.prepend" :class="bem.be('group', 'prepend')">
        <slot name="prepend"></slot>
      </div>

      <div :class="[bem.e('wrapper')]">
        <span v-if="slots.prefix" :class="bem.e('prefix')">
          <slot name="prefix"></slot>
        </span>

        <input
          ref="input"
          :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
          v-bind="attrs"
          :class="bem.e('inner')"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
          @input="handleInput"
          @change="handleChange"
          @blur="handleBlur"
          @focus="handleFocus"
        />

        <y-icon
          v-if="showClearable"
          class="y-icon-heiseguanbi"
          @click="handleClear"
        >
        </y-icon>
        <y-icon
          v-if="showPwdVisible"
          class="y-icon-guanji"
          @click="handlePasswordVisible"
        >
        </y-icon>
        <span v-if="slots.suffix" :class="bem.e('suffix')">
          <slot name="suffix"></slot>
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

defineOptions({
  name: 'y-input',
  inheritAttrs: false
});

const bem = createNamespace('input');

const props = defineProps(inputProps);
const emit = defineEmits(inputEmits);

const slots = useSlots();
const attrs = useAttrs();

const input = ref<HTMLInputElement | null>(null);

const passwordVisible = ref(false);
const handlePasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value;
  focus();
};

const handleClear = () => {
  emit('input', '');
  emit('update:modelValue', '');
  emit('clear');
  focus();
};

const focus = async () => {
  await nextTick();
  input.value?.focus();
};

const showPwdVisible = computed(() => {
  return (
    props.modelValue && props.showPassword && !props.disabled && !props.readonly
  );
});

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
  console.log('inputEle', inputEle);
  console.log('props', props.modelValue);
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
  emit('blur', e);
};

const handleFocus = (e: FocusEvent) => {
  emit('focus', e);
};
</script>
