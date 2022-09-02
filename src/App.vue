<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Bar from './components/Bar'
</script>

<template>
  <div>
    <HelloWorld msg=" hjy!!!!!!!!!!!" />
    <Bar msg="Hello Bar" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
