# Input 输入框
通过鼠标或键盘输入字符。

## 基础用法
使用 `disabled` 和 `readonly` 设置禁用和只读状态。
<div class="demo demo-input">
  <y-input v-model="inputValue" placeholder="请输入"></y-input>
  <y-input v-model="inputValue" disabled placeholder="请输入"></y-input>
  <y-input v-model="inputValue" readonly placeholder="请输入"></y-input>

  ```vue
  <template>
    <y-input v-model="inputValue" placeholder="请输入"></y-input>
    <y-input v-model="inputValue" disabled placeholder="请输入"></y-input>
    <y-input v-model="inputValue" readonly placeholder="请输入"></y-input>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  const inputValue = ref('')
  </script>
  ```
</div>

## 一键清除
使用 `clearable` 属性可在输入框后部显示清空按钮，点击即可清空内容。

<div class="demo demo-input">
  <y-input v-model="inputValue" clearable placeholder="请输入"></y-input>

  ```vue
  <template>
    <y-input v-model="inputValue" clearable placeholder="请输入"></y-input>
  </template>
  ```
</div>

## 密码框
设置 `type="password"` 来设置密码框。

或者直接设置 `showPassword` 属性得到一个可切换显示隐藏的密码框，注意该属性会覆盖`type`属性为`password`。

<div class="demo demo-input">
  <y-input v-model="inputValue" type="password" placeholder="请输入"></y-input>
  <y-input v-model="inputValue" showPassword placeholder="请输入"></y-input>
  <y-input v-model="inputValue" type="text" showPassword placeholder="请输入"></y-input>

  ```vue
  <template>
    <y-input v-model="inputValue" type="password" placeholder="请输入"></y-input>
    <y-input v-model="inputValue" showPassword placeholder="请输入"></y-input>
    <y-input v-model="inputValue" type="text" showPassword placeholder="请输入"></y-input>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  const inputValue = ref('')
  </script>
  ```
</div>

## 带图标的输入框
使用 `prefixIcon` 或 `suffixIcon` 属性在输入框的前后显示按钮。自定义颜色或大小请使用slot插槽。

<div class="demo demo-input">
  <y-input v-model="inputValue" clearable placeholder="请输入"></y-input>

  ```vue
  <template>
    <y-input v-model="inputValue" clearable placeholder="请输入"></y-input>
  </template>
  ```
</div>

## 集大成者
使用 `type`、`disabled` 和 `readonly` 等来定义输入框属性。

<div class="demo demo-input">
  <y-input style="width:400px" v-model="inputValue" prefixIcon="search-unclosed" prefixButton="价格" prefixText="前缀" suffixIcon="search-unclosed" suffixText="美元" suffixButton="试算" showPassword clearable placeholder="请输入">
    <template #prefix>
      <y-icon @click="docPrefixClick" icon="close" size="20px" color="red"></y-icon>
    </template>
    <template #suffix>
      自定义
    </template>
  </y-input>
  <y-input style="width:400px" round disabled v-model="inputValue" prefixIcon="search-unclosed" prefixText="前美元" prefixButton="前试算" suffixIcon="search-unclosed" suffixText="美元" suffixButton="试算" showPassword clearable placeholder="请输入"></y-input>

  ```vue
  <template>
    <y-input v-model="inputValue" clearable placeholder="请输入"></y-input>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  const inputValue = ref('')
  </script>
  ```
</div>

## Input Props
<div class="props-table">

| 参数          |     说明    |  类型     |      默认值    |                可选值              |  版本  |
| ------------- |:-----------:| ----------|:--------------:|:---------------------------------:| ------ |
| disabled      | 是否禁用    | Boolean   | `false`        | `ture`、`false`                   | 1.0.0 |

</div>

## Input Events
<div class="props-table">

| 事件名称       | 说明        |   回调参数   |  版本  |
| ------------- |:-----------:|:------------:| ------ |
| click         | 点击事件     |     ---      | 1.0.0 |

</div>

<script setup lang="ts">
import { ref } from 'vue';
const inputValue = ref('')

const docPrefixClick = () => {
  console.log('docPrefixClick');
}
const docBlur = () => {
  console.log('docBlur');
}
</script>

<style>
.demo-input .y-input {
  width: 200px;
  margin: 0 0 18px 0;
}
</style>