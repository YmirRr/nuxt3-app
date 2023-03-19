<template>
  <h2>Counter Page</h2>
  <button @click="counter++">+</button>
  {{ counter }}
  <button @click="counter--">-</button>
</template>
<script setup>
// const counter = useState("counter", () => Math.round(Math.random() * 1000));
const counter = useCounter()
</script>
