<script setup lang="ts">
const isExtension = useIsExtension();

const form = ref({
  url: (useRoute().query.url as string) || "",
  temperature: 1,
});

const twitterCard = ref();
const facebookCard = ref();

const { generate: generateImage, file } = useImageAi();

onMounted(() => {
  if (form.value.url) {
    handleImport({ ...form.value });
  }
});

async function handleImport(e: typeof form.value) {
  form.value = { ...e };
  if (!form.value.url) return;
  twitterCard.value.generate();
  facebookCard.value.generate();
  generateImage(form.value.url);
}
const uploadImage = async () => {
  const formData = new FormData();
  formData.append("file", file.value);
  const res = await $fetch<string>(`/api/mint/image`, {
    method: "POST",
    body: formData,
  });
};
const openModal = ref(false);
const protectImage = async () => {
  openModal.value = true;
  uploadImage();
};
</script>
<template>
  <div class="mx-5">
    <dialog class="modal" :open="openModal">
      <form method="dialog" class="modal-box">
        <h3 class="font-bold text-lg">Hola!</h3>
        <p class="py-4">Tu contenido ha sido protegido</p>
        <div class="modal-action">
          <button @click="openModal=false" class="btn">Ver mis contenidos</button>
          <!-- if there is a button in form, it will close the modal -->
          <button @click="openModal=false" class="btn">Cerrar</button>
        </div>
      </form>
    </dialog>
    <h1 v-if="!isExtension" class="text-4xl my-10">Generador de contenido</h1>
    <UrlForm v-if="!isExtension" v-bind="form" @submit="handleImport"></UrlForm>
    <div>
      <CardImages @protect="protectImage" :url="form.url" />
      <CardTwitter ref="twitterCard" v-bind="form" />
      <CardFacebook ref="facebookCard" v-bind="form" />
    </div>
  </div>
</template>
