<template>
  <div class="relative">
    <header
      class="max-w-[1400px] relative h-[60px] mx-auto my-4 rounded-2xl sm:h-[50px] md:mx-2"
    >
      <div class="flex items-center justify-center w-full h-full">
        <h1 class="font-body font-semibold text-5xl md:text-2xl">
          Mi contenido
        </h1>
      </div>
    </header>
    <section
      class="max-w-[1200px] my-5 mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
    >
      <div
        v-for="(nft, i) in nfts"
        :nft="nft"
        :key="nft.tokenId"
        class="w-full"
      >
        <div
          class="w-full bg-[#272D37]/60 rounded-2xl cursor-pointer h-[300px]"
        >
          <div class="relative h-48 flex items-center justify-center">
            <img
              :src="nft.image"
              alt="mock"
              class="w-full h-full rounded-2xl object-cover"
            />
            <div
              class="absolute top-0 left-0 bg-white/40 backdrop-blur-xl w-full h-full z-[20] rounded-2xl opacity-0 hover:opacity-100"
            >
              <div class="flex items-center justify-center h-full">
                <button
                  class="bg-[#1E50FF] outline-none border-none py-3 px-5 rounded-xl font-body cursor-pointer transition duration-250 ease-in-out hover:scale-125 hover:drop-shadow-xl hover:shadow-sky-600 w-auto"
                  @click="handleClick"
                >
                  Ver Detalles
                </button>
              </div>
            </div>
          </div>
          <div class="p-4">
            <h1 class="text-xl font-semibold">{{ nft.name }}</h1>
            <div
              v-if="!nft.isSell"
              class="flex justify-between items-center mt-2"
            >
              <div class="flex flex-row gap-2">
                <button class="d-btn d-btn-primary s">Vender</button>
              </div>
              <div class="hidden">
                <button class="d-btn d-btn-danger">Eliminar</button>
              </div>
            </div>
            <div v-else>
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
        <div
          class="w-full bg-[#272D37]/60 rounded-2xl cursor-not-allowed h-[300px]"
        >
          <div class="animate-pulse p-4">
            <h1 class="text-xl font-semibold text-gray-400"></h1>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ethers } from "ethers";
import { useEthers } from "vue-dapp";
import contractData from "~/eth/build/contracts/aiverseNFT.json";

const { contractAddress } = useRuntimeConfig().public;
const nfts = ref<any[]>([]);
const loading = ref(true);
const handleClick = () => {
  console.log("click");
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
