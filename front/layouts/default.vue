<template>
  <div>
    <html lang="ja" />
    <Navbar />
    <slot />
  </div>
</template>
<script setup>
useHead({
  titleTemplate: "%s - Nuxt 3 basic",
});
</script>
