# Icon 图标
提供了一套常用的图标集合。

## 使用方法
直接通过设置类名为 y-icon-iconName 来使用即可。例如：

<div class="demo demo-icon">
  <y-icon class="y-icon-switch-button"></y-icon>
  <y-icon class="y-icon-palette" color="#ff44b7"></y-icon>
  <y-icon class="y-icon-search" color="#54ff44" size="28"></y-icon>

  ```vue
  <y-icon class="y-icon-switch-button" color="#4463ff"></y-icon>
  <y-icon class="y-icon-palette" color="#ff44b7"></y-icon>
  <y-icon class="y-icon-search" color="#54ff44" size="28"></y-icon>
  ```
</div>


## 图标集合
<div class="icon-list">
  <div class="icon-item" v-for="(item, index) in iconList">
    <y-icon :class="`y-icon-${item}`"></y-icon>
    <div class="icon-item-text">{{ `y-icon-${item}` }}</div>
  </div>
</div>

<script setup lang="ts">
import icons from '../../packages/theme-chalk/src/icon.scss';
import {ref} from 'vue';

const reg = /-icon-(\S*)before/g

const iconListTrans = icons.match(reg);
for(let i in iconListTrans) {
  iconListTrans[i] = iconListTrans[i].slice(6, -7);
}
const iconList = ref(iconListTrans);

console.log('',iconList);

</script>



<style>
.demo {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: .2s;
  padding: 20px;
}
.demo-icon .y-icon {
  padding: 10px;
}

.icon-list {
  display: inline-block;
}
.icon-item {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border: 1px solid #ebebeb;
  width: 25%;
  height: 140px;
  min-width: 150px;
}
.icon-item .y-icon {
  font-size: 26px;
  margin-bottom: 15px;
}
.icon-item-text {
  font-family: Lucida Console,Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
  font-size: 12px;
}

.language-vue {
  background-color: rgb(0, 62, 119) !important;
}
</style>