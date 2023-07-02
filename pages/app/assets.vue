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
              <div>
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
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ethers } from "ethers";
import { useEthers } from "vue-dapp";
import Image1 from "~/assets/content/image-1.jpg";
import Image2 from "~/assets/content/image-2.jpg";
import contractData from "~/eth/build/contracts/aiverseNFT.json";
const { contractAddress } = useRuntimeConfig().public;
const nfts = [
  {
    price: "0.2",
    tokenId: 2,
    seller: "Seller 2",
    owner: "Owner 2",
    image: Image2,
    name: "Bosque con nieve y una laguna",
    description: "Description 2",
    tokenURI: "token-uri-2",
    isSell: true,
  },
  {
    price: "0.1",
    tokenId: 1,
    seller: "Seller 1",
    owner: "Owner 1",
    image: Image1,
    name: "Creación #2",
    description: "Description 1",
    tokenURI: "token-uri-1",
    isSell: false,
  },
  {
    price: "0.3",
    tokenId: 3,
    seller: "Seller 3",
    owner: "Owner 3",
    image: "nft-image-3.jpg",
    name: "NFT 3",
    description: "Description 3",
    tokenURI: "token-uri-3",
    isSell: true,
  },
];
const handleClick = () => {
  console.log("click");
};
const { signer, address } = useEthers();
let contract = new ethers.Contract(
  contractAddress,
  contractData.abi,
  signer.value!
);
console.log(contract);
contract.getTokensByOwner(address.value!).then((res: any) => {
  console.log(res);
});
</script>
