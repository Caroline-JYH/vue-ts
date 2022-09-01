<!--
 * @Author: Caroline-JYH 745059996@qq.com
 * @Date: 2022-09-01 10:50:32
 * @LastEditors: Caroline-JYH 745059996@qq.com
 * @LastEditTime: 2022-09-01 17:17:53
 * @FilePath: \vue-ts\src\components\HelloWorld.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">

defineProps<{ msg: string }>()

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
