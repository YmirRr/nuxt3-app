<template>
  <h2>Counter Page</h2>
  <!-- <button @click="counter++">+</button>
  {{ counter }}
  <button @click="counter--">-</button> -->

  <button @click="store.$patch({ count: store.count + 1 })">+</button>
  {{ store.count }}
  <button @click="store.$patch({ count: store.count - 1 })">-</button>
</template>
<script setup>
// const counter = useState("counter", () => Math.round(Math.random() * 1000));
// const counter = useCounter()

import { useStore } from '../stores/counter'
const store = useStore()
</script>
