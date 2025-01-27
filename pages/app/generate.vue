<script setup lang="ts">
useHead({
  title: "Generar",
});
const isExtension = useIsExtension();
const { generate: generateVideo, video, videoUrl, state: videoState } = useVideoAi();
</script>
<template>
  <NuxtErrorBoundary>
    <AppSocialMediaPostGenerator />
    <div v-if="!isExtension">
      <h2 class="text-2xl font-bold mb-4">Generar Video AI</h2>
      <div class="mb-4">
        <input
          type="text"
          v-model="videoUrl"
          placeholder="Ingrese la URL del video"
          class="d-input d-input-bordered w-full"
        />
        <button
          @click="generateVideo(videoUrl)"
          class="d-btn d-btn-primary mt-2"
        >
          Generar Video
        </button>
      </div>
      <div v-if="videoState === 'loading'" class="d-spinner d-spinner-primary"></div>
      <div v-if="videoUrl">
        <video :src="videoUrl" controls class="w-full"></video>
      </div>
    </div>
    <AppChatWidget v-if="!isExtension" />
    <template #error="{ error }">
      <div>
        <p class="text-4xl pt-10">⚠️ A fatal error has occurred:</p>
        <p>{{ error }}</p>
      </div>
    </template>
  </NuxtErrorBoundary>
</template>
