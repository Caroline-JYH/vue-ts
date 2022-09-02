<template>
  <div>
    <HelloWorld msg=" hjy!!!!!!!!!!!" />
    <Bar msg="Hello Bar" />
    <h1 class="title">
      Hello World
    </h1>
    <p class="content">
      The content color is red
    </p>
  </div>
  <router-view />
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Bar from './components/Bar'
const theme = {
  color: 'red',
  fontSize: '30px'
}
</script>

<style lang="scss" scoped>
div {
  color: $red;
}
.title{
  color:v-bind('theme.color')
}
.content{
  font-size:v-bind('theme.fontSize')
}
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
