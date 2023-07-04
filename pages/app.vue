<template>
  <NuxtPage></NuxtPage>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: "%s | Aiverse App",
});
definePageMeta({
  layout: "app",
  middleware: "app",
});
</script>
