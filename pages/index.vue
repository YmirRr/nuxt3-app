<template>
  <h2>Index Page</h2>
  <!-- 嵌套组件名称 -->
  <FooBarButton></FooBarButton>
  <!-- 数据获取 -->
  <div v-for="todo in todos" :key="todo.id">
    <input type="checkbox" v-model="todo.completed">
    <strong>{{ todo.title }}</strong>
  </div>
  <!-- 插件引入 -->
  <d-button>devui按钮</d-button>
</template>
<script setup>
  // useAsyncData 方式
  // const { data: todos } = await useAsyncData(
  //   'todos', () => $fetch('/api/todo')
  // )

  // useFetch 方式
  const { data: todos } = await useFetch('/api/todo')

  const { $hello } = useNuxtApp()
  console.log($hello())
</script>

