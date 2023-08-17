<script setup lang="ts">
const isExtension = useIsExtension();

const form = ref({
  url: (useRoute().query.url as string) || "",
  temperature: 1,
});

const twitterCard = ref();
const facebookCard = ref();

const { generate: generateImage, imageUrl, file, state } = useImageAi();

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
const loadingUpload = ref(false);
const uploadImage = async () => {
  const formData = new FormData();
  formData.append("file", file.value!);
  formData.append("name", form.value.url);
  formData.append("description", form.value.url);
  formData.append("prompt", form.value.url);
  loadingUpload.value = true;
  const res = await $fetch<{
    file: {
      Name: string;
      Hash: string;
      Size: string;
    };
    metaData: {
      Name: string;
      Hash: string;
      Size: string;
    };
    metaDataURL: string;
  }>(`/api/mint/image`, {
    method: "POST",
    body: formData,
  });

  const { contract, address, signer } = useContract();

  try {
    // Generate a transaction to calls the `mintNFT` method
    let gas = await contract.estimateGas.safeMint(
      address.value!,
      res.metaDataURL
    );
    let tx = await contract
      .connect(signer.value!)
      .safeMint(address.value!, res.metaDataURL);
    let result = await tx.wait();
    console.log(result);

    openModal.value = true;
  } catch (e) {
    console.log(e);
  } finally {
    loadingUpload.value = false;
  }
};
const openModal = ref(false);
const protectImage = async () => {
  uploadImage();
};
</script>
<template>
  <div class="mx-5">
    <BaseDialog v-model:open="openModal">
      <template #actions>
        <button @click="openModal = false" class="d-btn">
          Ver mis contenidos
        </button>
        <!-- if there is a button in form, it will close the modal -->
        <button @click="openModal = false" class="d-btn">Cerrar</button>
      </template>
      <h3 class="font-bold text-lg">Hola!</h3>
      <p class="py-4">Tu contenido ha sido protegido</p>
    </BaseDialog>
    <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
      <AppUrlForm
        class="col-span-2"
        :loading="state === 'loading'"
        v-if="!isExtension"
        v-bind="form"
        @submit="handleImport"
      ></AppUrlForm>
      <AppCardImage
        class="col-span-3"
        :loading="loadingUpload"
        @protect="protectImage"
        :image-url="imageUrl"
      />
    </div>
    <div>
      <AppCardTwitter ref="twitterCard" v-bind="form" />
      <AppCardFacebook ref="facebookCard" v-bind="form" />
    </div>
  </div>
</template>
