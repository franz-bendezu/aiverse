<script setup lang="ts">
import { BigNumber, ethers } from "ethers";
import { useEthers } from "vue-dapp";
import contractData from "~/eth/build/contracts/aiverseNFT.json";
const { contractAddress } = useRuntimeConfig().public;
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
const { signer, address } = useEthers();
const uploadImage = async () => {
  const formData = new FormData();
  formData.append("file", file.value);
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
  let contract = new ethers.Contract(
    contractAddress,
    contractData.abi,
    signer.value!
  );
  const price = ref("0.01");
  const amount = ref(1);

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
    <h1 v-if="!isExtension" class="text-4xl my-10">Generador de contenido</h1>
    <UrlForm v-if="!isExtension" v-bind="form" @submit="handleImport"></UrlForm>
    <div>
      <CardImages @protect="protectImage" :url="form.url" />
      <CardTwitter ref="twitterCard" v-bind="form" />
      <CardFacebook ref="facebookCard" v-bind="form" />
    </div>
  </div>
</template>
