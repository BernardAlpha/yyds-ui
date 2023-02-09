<template>
  
  <!-- <y-icon color="red" :size="18" class="y-icon-guanji">dd</y-icon> -->

  <div>{{ inputValue }}</div>
  <y-input
    v-model="inputValue"
    placeholder="请输入"
    :show-password="true"
    @blur="handleBlur"
    @focus="handleFocus">
    <template #prefix>
      <y-icon color="black" class="y-icon-guanji"></y-icon>
    </template>
    <template #suffix>
      元
    </template>
    <template #prepend>Hi</template>
    <template #append>Bye</template>
  </y-input>

</template>

<script setup lang="ts">

import { ref } from 'vue';

const inputValue = ref('yyds');

const handleBlur = (e: FocusEvent) => {
  console.log('handleBlur',(e.target as HTMLInputElement).value);
}

const handleFocus = (e: FocusEvent) => {
  console.log('handleFocus',(e.target as HTMLInputElement).value);
}
</script>

<style scoped>
</style>
