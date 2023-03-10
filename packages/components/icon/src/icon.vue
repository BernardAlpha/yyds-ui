<template>
  <i :class="[bem.b(), iconClass()]" :id="uniqueID" :style="style" v-bind="$attrs"></i>
</template>

<script setup lang="ts">
import { computed, onMounted, watch} from 'vue';
import { createNamespace } from '@yyds-ui/utils/create';
import { genUniqueID } from '@yyds-ui/utils/genid';
import { iconProps } from './icon';
import iconList from '@yyds-ui/theme-chalk/src/svgs/svg-list'

const uniqueID = genUniqueID();
const bem = createNamespace('icon');
const props = defineProps(iconProps);

watch(
  () => props,  
  () => { setSvgEle(); },
  { deep: true }
);

onMounted(() => {
  setSvgEle();
})

const setSvgEle = () => {
  if(props.icon) {
    const iconIndex = iconList.findIndex(item => {
      return item.name === props.icon
    })
    if(iconIndex >= 0) {
      const iconSize = props.size ? props.size : window.getComputedStyle(document.getElementById(uniqueID) as HTMLInputElement).fontSize;
      const svgCode = iconList[iconIndex].code;
      const index = svgCode.indexOf('<svg') || 0;
      const newCode = svgCode.substr(0, index + 5) + `width="${iconSize}" height="${iconSize}"` + svgCode.substr(index + 5);
      (document.getElementById(uniqueID) as HTMLInputElement).innerHTML = newCode;
    }
  }
}

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

<script lang="ts">
export default {
  name: 'y-icon',
  inheritAttrs: false
};
</script>