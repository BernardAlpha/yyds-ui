# Icon 图标
提供了一套常用的图标集合。

## 使用方法
通过设置 `icon` 来使用即可。例如：

<div class="demo demo-icon">
  <y-icon icon="shutdown"></y-icon>
  <y-icon icon="palette" color="#ff44b7"></y-icon>
  <y-icon icon="search" color="#54ff44" size="28"></y-icon>

  ```vue
  <template>
    <y-icon icon="shutdown"></y-icon>
    <y-icon icon="palette" color="#ff44b7"></y-icon>
    <y-icon icon="search" color="#54ff44" size="28"></y-icon>
  </template>
  ```
</div>


## 图标集合
<div class="icon-list">
  <div class="icon-item" v-for="(item, index) in icons">
    <y-icon :icon="item.name"></y-icon>
    <div class="icon-item-text">{{ item.name }}</div>
  </div>
</div>

## Input Props
<div class="props-table">

| 参数          | 说明        |  类型  |     默认值     |     可选值     |  版本  |
| ------------- |:----------:| -------|:--------------:|:--------------:| ------ |
| color         | 图标颜色    | String | 空，继承父元素  | ---            | 1.0.0 |
| icon          | 图标种类    | String | 空，不显示图标  | 参考[图标集合](#图标集合)    | 1.0.0 |
| size          | 图标大小    | String | 空，继承父元素  | ---            | 1.0.0 |

</div>

<script setup lang="ts">
import icons from '../../packages/theme-chalk/src/svgs/svg-list.ts';
</script>

<style>
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
  margin: 0 auto;
  font-size: 26px;
  margin-bottom: 15px;
}
.icon-item-text {
  font-family: Lucida Console,Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
  font-size: 12px;
  max-height: 20px;
  padding: 0 8px; 
}
</style>