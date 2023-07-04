<script setup lang="ts">
defineProps({
  url: { required: true, type: String },
  loading: { type: Boolean, default: false },
});
const emits = defineEmits(["regenerate", "protect"]);

const { image, state, title, generate } = useImageAi();
const onProtectImage = async () => {
  emits("protect");
};
</script>
<template>
  <AppCardGeneric compact :state="state">
    <template #body>
      <div class="md:flex gap-2 flex-wrap">
        <div class="mb-5 md:mb-0 flex-grow w-full">
          <div v-if="image">
            <AppImageCanvas :bgImage="image" :title="title" />
            <span class="text-sm">(right click image to save)</span>
          </div>

          <AppImagePlaceholder :loading="state === 'loading'" v-else />
        </div>
      </div>
    </template>
    <div class="grid grid-cols-2 gap-5" v-if="url">
      <button class="d-btn d-btn-primary">Regenerar</button>
      <button
        v-if="url"
        @click="onProtectImage"
        class="d-btn d-btn-primary px-2 py-2 font-semibold text-white shadow-md hover:shadow-lg"
      >
        <span v-if="loading" class="d-loading d-loading-spinner"></span>
        Proteger Imagen
      </button>
    </div>
  </AppCardGeneric>
</template>
