<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>首页</div>
  <button @click="store.increment">
    {{ store.count }}=>{{ store.doubleCount }}
  </button>
  <div>count 永远是0: {{ count }}</div>
  <div>doubleCount 永远是0: {{ doubleCount }}</div>
</template>

<script setup lang="ts">
import useStore from '@/store'
import { storeToRefs } from 'pinia'
const store = useStore()
const { count, doubleCount } = storeToRefs(store)
// 在 script-setup 中使用解构赋值要通过 defineExpose 暴露出去
defineExpose({
  count
})
</script>

<style scoped></style>
