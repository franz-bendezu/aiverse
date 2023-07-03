<script setup lang="ts">
defineProps<{
  modelValue: number;
}>();
defineEmits<{
  (e: "update:modelValue", payload: number): void;
}>();
</script>
<template>
  <input
    :value="modelValue"
    @input="
      $emit(
        'update:modelValue',
        Number(($event.target as HTMLInputElement).value)
      )
    "
    max="1"
    min="0"
    step=".1"
    type="range"
    class="w-full d-range d-range-secondary"
  />
  Temperatura: {{ modelValue }}
  <span class="font-bold" v-if="modelValue >= 0.5">
  - Más aleatorio, creativo y arriesgado</span>
<span class="font-bold" v-else> - Más enfocado, determinista y seguro</span>

</template>
