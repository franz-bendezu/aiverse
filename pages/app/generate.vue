<script setup lang="ts">
useHead({
  title: "Generar",
});
const isExtension = useIsExtension();
</script>
<template>
  <NuxtErrorBoundary>
    <AppSocialMediaPostGenerator />
    <AppChatWidget v-if="!isExtension" />
    <template #error="{ error }">
      <div>
        <p class="text-4xl pt-10">⚠️ A fatal error has occurred:</p>
        <p>{{ error }}</p>
      </div>
    </template>
  </NuxtErrorBoundary>
</template>
