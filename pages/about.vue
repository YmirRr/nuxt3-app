<template>
  <h2>About Page</h2>
  <!-- 组件懒加载 -->
  <LazyMountainsList v-if="show" />
  <button v-if="!show" @click="show = true">显示列表</button>
</template>
<script setup>
import { ref } from 'vue'
const show = ref(false)
</script>
