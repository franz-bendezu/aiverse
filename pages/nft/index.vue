<template>
  <div class="relative overflow-hidden">
    <h1 class="my-10 text-center text-3xl font-bold mb-8">
      Contenido reciente
    </h1>
    <section
      class="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-body overflow-hidden top-7 md:gap-5 md:px-5"
    >
      <div v-for="(nft, index) in nfts" :key="index">
        <div
          class="w-full bg-[#272D37]/60 rounded-2xl flex flex-col p-6 cursor-pointer"
        >
          <div class="relative transition duration-150 ease-in-out delay-150">
            <img
              :src="nft.image"
              alt="mock"
              class="w-full h-[352px] rounded-2xl object-cover"
            />
            <div
              class="absolute top-0 left-0 bg-white/40 backdrop-blur-xl w-full h-full z-[20] rounded-2xl opacity-0 hover:opacity-100"
            >
              <div class="flex items-center justify-center h-full">
                <button
                  class="bg-[#1E50FF] outline-none border-none py-3 px-5 rounded-xl font-body cursor-pointer transition duration-250 ease-in-out hover:scale-125 hover:drop-shadow-xl hover:shadow-sky-600 w-auto"
                >
                  Ver Detalles
                </button>
              </div>
            </div>
          </div>
          <div class="">
            <h1>{{ nft.name }}</h1>
            <div class="h-[56px] flex justify-between">
              <div class="flex flex-row gap-2">
                <div>
                  <p class="my-1 text-base text-[#8F9CA9]">Creador</p>
                  <h4
                    class="my-0 ssm:text-sm text-transparent font-bold bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600"
                  >
                    {{ nft.seller }}
                  </h4>
                </div>
              </div>
              <div>
                <p class="my-1 text-[#8F9CA9]">Precio</p>
                <h4 class="my-0">{{ nft.price }} ETH</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Image1 from "~/assets/content/image-1.jpg";

import Image2 from "~/assets/content/image-2.jpg";
export default {
  data() {
    return {
      nfts: [
        {
          name: "NFT 1",
          seller: "Seller 1",
          price: 0.1,
          image: Image2,
          name: "Bosque con nieve y una laguna",
          description: "Description 2",
        },
        {
          name: "NFT 2",
          seller: "Seller 1",
          price: 0.2,
          image: Image1,
          name: "Creación #2",
        },
        {
          name: "NFT 3",
          seller: "Seller 3",
          price: 0.3,
          image: "nft-image-3.jpg",
        },
        // Add more NFT objects with random data here
      ],
    };
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
