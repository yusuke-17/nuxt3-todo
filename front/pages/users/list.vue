<template>
  <div>
    <h1>ユーザリスト</h1>
    <h2>Counter</h2>
    <p>Count: {{ counter }}</p>
    <div><button @click="inc">+</button></div>
  </div>
</template>
<script setup>
const counter = ref(0);
const inc = () => {
  throw createError("エラー発生");
  counter.value++;
};
</script>
