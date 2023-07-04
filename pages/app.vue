<template>
  <div class="flex flex-col items-center p-2">
    <div class="d-tabs d-tabs-boxed">
      <RouterLink
        to="/app/generate"
        active-class="d-tab-active"
        class="d-tab d-tab-lg d-tab-lifted"
        >Generador de imagenes
      </RouterLink>
      <RouterLink
        to="/app/assets"
        active-class="d-tab-active"
        class="d-tab d-tab-lg d-tab-lifted"
      >
        Mi contenido
      </RouterLink>
    </div>
  </div>
  <div class="p-2">
    <NuxtPage></NuxtPage>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "app",
  middleware: "app",
});
</script>
