<template>
  <dialog class="d-modal" :open="openModal">
    <div class="d-modal-box">
      <slot></slot>
      <div class="d-modal-action">
        <slot name="actions"></slot>
      </div>
    </div>
  </dialog>
</template>

<script lang="ts" setup>
defineOptions({
  name: "ADialog",
});
const props = defineProps<{
  open: boolean;
}>();
const emits = defineEmits<{
  (event: "update:open", open: boolean): void;
}>();
const openModal = useVModel(props, "open", emits);
</script>

