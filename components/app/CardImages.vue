<script setup lang="ts">
defineProps({
  url: { required: true, type: String },
  loading: { type: Boolean, default: false },
});
const emits = defineEmits(["regenerate", "protect"]);

const { image, state, title, generate } = useImageAi();

const gradients = [
  {
    start: "#00af99",
    finish: "#90c73f",
  },
  {
    start: "#b2a8cb",
    finish: "#fe9173",
  },
  {
    start: "#9afcf7",
    finish: "#6e7cfa",
  },
  {
    start: "#d54c7f",
    finish: "#ed4758",
  },
];
const onProtectImage = async () => {
  emits("protect");
};
</script>
<template>
  <AppCardGeneric :state="state">
    <template #title>
      <div class="my-1 flex w-full">
        <div class="flex-grow">Images</div>
        <div class="divider divider-horizontal"></div>
        <div class="flex-grow grid place-items-right">
          <button
            @click="onProtectImage"
            class="d-btn d-btn-primary px-2 py-2 rounded-full font-semibold text-white shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <span v-if="loading" class="d-loading d-loading-spinner"></span>
            Proteger Imagen
          </button>
        </div>
      </div>
    </template>
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
    <div v-if="url">
      <button class="d-btn d-btn-primary">Regenerar</button>
    </div>
  </AppCardGeneric>
</template>
