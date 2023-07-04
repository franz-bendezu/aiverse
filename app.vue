<script setup lang="ts">
import videoPreview from "~/assets/content/preview.jpg";
useSeoMeta({
  description:
    "Aiverse, te ayuda a generar un universo de contenido con Inteligencia Artificial y protegala con NFTs",
  ogDescription:
    "Aiverse, te ayuda a generar un universo de contenido con Inteligencia Artificial y protegala con NFTs",
  titleTemplate: "%s | Aiverse",
  ogImage: videoPreview,
  twitterImage: videoPreview,
  msapplicationTileImage: videoPreview,
  twitterCard: "summary",
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
