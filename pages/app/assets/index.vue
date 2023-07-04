<template>
  <section
    class="max-w-5xl my-5 mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
  >
    <div v-for="(nft, i) in nfts" :nft="nft" :key="nft.tokenId" class="w-full">
      <div
        class="d-card w-full bg-base-300 rounded-2xl h-[320px] shadow-xl d-card-compact"
      >
        <figure
          class="relative h-48 max-h-48 min-h-48 flex items-center justify-center cursor-pointer"
        >
          <img
            :src="nft.image"
            alt="mock"
            class="w-full h-full rounded-2xl object-cover"
          />
          <div
            class="absolute top-0 left-0 bg-white/40 backdrop-blur-xl w-full h-full z-[20] rounded-2xl opacity-0 hover:opacity-100"
          >
            <div class="flex items-center justify-center h-full">
              <button class="d-btn-secondary d-btn" @click="handleClick(nft)">
                Ver Detalles
              </button>
            </div>
          </div>
        </figure>
        <div class="d-card-body">
          <h2 class="d-card-title truncate text-ellipsis">{{ nft.name }}</h2>
          <p class="truncate">{{ nft.name }}</p>
          <div v-if="!nft.isSell" class="d-card-actions">
            <button class="d-btn d-btn-primary d-btn-sm">Vender</button>
            <button class="d-btn d-btn-danger hidden">Eliminar</button>
          </div>

          <div class="card-actions" v-else>
            <div class="my-1 flex">
              <div class="text-[#8F9CA9]">Precio</div>
              :
              <div class="ml-1">{{ nft.price }} ETH</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="loading" v-for="i of 6" :key="i" class="w-full">
      <div class="w-full bg-base-300 rounded-2xl cursor-not-allowed h-[320px]">
        <div class="animate-pulse p-4">
          <h1 class="text-xl font-semibold text-gray-400"></h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ethers } from "ethers";
import { useEthers } from "vue-dapp";
import contractData from "~/eth/build/contracts/aiverseNFT.json";

useHead({
  title: "Mi contenido",
});

const { contractAddress } = useRuntimeConfig().public;
const nfts = ref<any[]>([]);
const loading = ref(true);
const router = useRouter();
const handleClick = (nft: { tokenId: any }) => {
  router.push(`/app/assets/${nft.tokenId}`);
};
const { signer, address } = useEthers();
let contract = new ethers.Contract(
  contractAddress,
  contractData.abi,
  signer.value!
);

contract.getTokensByOwner(address.value!).then((res: any) => {
  loading.value = true; // Set loading to true initially
  res.forEach((element: any) => {
    const tokenURI = element.tokenURI;
    const tokenId = element.tokenId;
    $fetch(tokenURI).then((res: any) => {
      const nft = {
        name: res.name,
        image: res.image,
        description: res.description,
        attributes: res.attributes,
        tokenId: tokenId,
      };
      nfts.value.push(nft);
      loading.value = false; // Set loading to false after data is fetched
    });
  });
});
</script>
