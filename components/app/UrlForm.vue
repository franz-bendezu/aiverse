<script setup lang="ts">
import prompts from "~/assets/content/prompts.json";

const props = defineProps<{
  url: string;
  temperature: number;
  loading: boolean;
}>();
defineEmits(["submit"]);
const form = reactive({
  url: props.url,
  temperature: props.temperature,
});
const getPrompt = () => {
  const _propmts = prompts as { prompt: string }[];
  const random = Math.floor(Math.random() * _propmts.length);
  form.url = _propmts[random].prompt;
};
</script>
<template>
  <form @submit.prevent="$emit('submit', form)" class="mb-10">
    <label class="text-sm font-bold my-3" for="description">
      Ingresa una descripción
    </label>
    <div class="flex items-center my-3">
      <textarea
        id="description"
        placeholder="Ingresa una descripción de tu contenido"
        v-model="form.url"
        class="d-input d-input-bordered rounded-r-none w-full max-w-full mr-2 h-48"
        type="text"
        rows="6"
      ></textarea>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div>
        <button
          type="submit"
          class="d-btn d-btn-primary px-2 py-2 w-full my-2 d-btn-sm"
        >
          <span v-if="loading" class="d-loading d-loading-spinner"></span>
          Generar
        </button>
      </div>
      <div>
        <button
          type="button"
          @click="getPrompt"
          class="d-btn d-btn-warning w-full my-2 d-btn-sm"
        >
          Dame una idea
        </button>
      </div>
    </div>
    <AppTemperatureSelector v-model="form.temperature" />
  </form>
</template>
