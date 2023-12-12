<template>
  <NuxtLayout>
    <p>{{ error }}</p>
    <button @click="clearError({ redirect: '/' })">Clear Error</button>
  </NuxtLayout>
</template>

<script setup>
const error = useError();
</script>
