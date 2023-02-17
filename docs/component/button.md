# Button 按钮
按钮用于开始一个即时操作。

## 基础用法
使用 `type`、`theme` 和 `round` 来定义按钮的样式。

<div class="demo demo-button">
    <y-button>实心按钮</y-button>
    <y-button theme="hollow">空心按钮</y-button>
    <y-button theme="text">文字</y-button>
    <y-button :round="false">普通圆角</y-button>
    <y-button>文字很多很多很多很多很多</y-button>

  ```vue
  <template>
    <y-button>实心按钮</y-button>
    <y-button theme="hollow">空心按钮</y-button>
    <y-button theme="text">文字</y-button>
    <y-button :round="false">普通圆角</y-button>
    <y-button>文字很多很多很多很多很多</y-button>
  </template>
  ```
</div>


## 禁用状态
你可以使用 `disabled` 属性来定义按钮是否被禁用。该属性接受一个 Boolean 类型的值。

<div class="demo demo-button">
  <y-button disabled>实心禁用</y-button>
  <y-button theme="hollow" disabled>空心禁用</y-button>
  <y-button theme="text" disabled>文字</y-button>

  ```vue
  <template>
    <y-button disabled>实心禁用</y-button>
    <y-button theme="hollow" disabled>空心禁用</y-button>
    <y-button theme="text" disabled>文字</y-button>
  </template>
  ```
</div>

## 加载状态
通过设置 loading 属性为 true 来显示加载中状态。

<div class="demo demo-button">
  <y-button loading>加载</y-button>
  <y-button loading theme="hollow">加载</y-button>
  <y-button loading iconPlacement="right" theme="hollow">加载</y-button>
  <y-button loading theme="text">加载</y-button>

  ```vue
  <template>
    <y-button loading>加载</y-button>
    <y-button loading theme="hollow">加载</y-button>
    <y-button loading iconPlacement="right" theme="hollow">加载</y-button>
    <y-button loading theme="text">加载</y-button>
  </template>
  ```
</div>

## Input Props
<div class="props-table">

| 参数          | 说明        |  类型  |     默认值     |  版本  |
| ------------- |:----------:| -------|:--------------:| ------ |
| color         | 图标颜色    | String | 空，继承父元素  | 1.0.0 |
| size          | 图标大小    | String | 空，继承父元素  | 1.0.0 |

</div>

<script setup lang="ts">
import icons from '../../packages/theme-chalk/src/icon.scss';
import {ref} from 'vue';

</script>



<style>
.demo {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: .2s;
  padding: 20px;
}
.demo-button .y-button {
  margin: 6px 8px;
}


.language-vue {
  background-color: rgb(0, 62, 119) !important;
}
</style>