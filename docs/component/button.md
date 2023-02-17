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
使用 `disabled` 属性来定义按钮是否被禁用。该属性接受一个 Boolean 类型的值。

<div class="demo demo-button">
  <y-button disabled>禁用</y-button>
  <y-button theme="hollow" disabled>禁用</y-button>
  <y-button theme="text" disabled>禁用</y-button>

  ```vue
  <template>
    <y-button disabled>禁用</y-button>
    <y-button theme="hollow" disabled>禁用</y-button>
    <y-button theme="text" disabled>禁用</y-button>
  </template>
  ```
</div>

## 加载状态
设置 `loading` 属性为 true 来显示加载中状态。该属性接受一个 Boolean 类型的值。

<div class="demo demo-button">
  <y-button loading>加载</y-button>
  <y-button loading iconPlacement="right">加载</y-button>
  <y-button loading theme="hollow">加载</y-button>
  <y-button loading theme="text">加载</y-button>

  ```vue
  <template>
    <y-button loading>加载</y-button>
    <y-button loading iconPlacement="right">加载</y-button>
    <y-button loading theme="hollow">加载</y-button>
    <y-button loading theme="text">加载</y-button>
  </template>
  ```
</div>

## 添加图标
设置 `icon` 添加按钮上的图标。通过 `iconPlacement` 设置图标显示的位置

<div class="demo demo-button">
  <y-button icon="search" @click="loadingClick" :loading="isLoading" >搜索</y-button>
  <y-button icon="arrow-left" theme="hollow" >上一步</y-button>
  <y-button icon="arrow-right" iconPlacement="right">下一步</y-button>
  <y-button icon="success" theme="text">添加</y-button>

  ```vue
  <template>
    <y-button icon="search" @click="loadingClick" :loading="isLoading" >搜索</y-button>
    <y-button icon="arrow-left" theme="hollow" >上一步</y-button>
    <y-button icon="arrow-right" iconPlacement="right">下一步</y-button>
    <y-button icon="success" theme="text">添加</y-button>
  </template>
  ```
</div>

## 点击事件
添加 `click` 事件作为点击按钮时的回调。

<div class="demo demo-button">
  <y-button @click="buttonClick('click')">点击</y-button>
  <y-button @click="loadingClick" :loading="isLoading" theme="hollow">加载1s</y-button>
  <y-button @click="buttonClick" theme="text">点击</y-button>

  ```vue
  <template>
    <y-button @click="buttonClick">点击</y-button>
    <y-button @click="loadingClick" :loading="isLoading" theme="hollow">加载1s</y-button>
    <y-button @click="buttonClick" theme="text">点击</y-button>
  </template>
  <script setup lang="ts">
    import { ref } from 'vue';

    let isLoading = ref(false);

    const buttonClick = () => {
      console.log('buttonClick');
    }

    const loadingClick = () => {
      console.log('loadingClick', isLoading.value);
      isLoading.value = true;
      setTimeout(() => {
        isLoading.value = false;
      }, 1000);
    }
  </script>
  ```
</div>

## Button Props
<div class="props-table">

| 参数          | 说明        |  类型  |     默认值     |  版本  |
| ------------- |:----------:| -------|:--------------:| ------ |
| color         | 图标颜色    | String | 空，继承父元素  | 1.0.0 |
| size          | 图标大小    | String | 空，继承父元素  | 1.0.0 |

</div>

<script setup lang="ts">
import { ref } from 'vue';

let isLoading = ref(false);

const buttonClick = (params) => {
  console.log('buttonClick', params);
}

const loadingClick = () => {
  console.log('loadingClick', isLoading.value);
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
}

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