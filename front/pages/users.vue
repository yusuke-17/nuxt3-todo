<template>
  <div>
    <h1>Usersページ</h1>
    <NuxtPage />
  </div>
</template>
<script setup>
onErrorCaptured((err, instance, info) => {
  console.log("err", err);
  console.log("instance", instance.$refs);
  console.log("info", info);
});
</script>
