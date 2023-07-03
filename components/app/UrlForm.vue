<script setup lang="ts">
const props = defineProps<{
  url: string;
  temperature: number;
  loading: boolean;
}>();
defineEmits(["submit"]);
const form = reactive({
  url: props.url,
  temperature: props.temperature,
  loading: props.loading,
});
</script>
<template>
  <form @submit.prevent="$emit('submit', form)" class="mb-10">
    <div class="flex items-center mb-2">
      <textarea
        placeholder="Ingresa una descripción de tu contenido"
        v-model="form.url"
        class="d-input d-input-bordered rounded-r-none w-full max-w-full mr-2  h-48"
        type="text"
        rows="6"

      ></textarea>
    </div>
    <button class="d-btn d-btn-primary px-2 py-2 w-full my-2">
      <span v-if="loading" class="loading loading-spinner"></span>
      Generar
    </button>
    <TemperatureSelector v-model="form.temperature" />
  </form>
</template>
