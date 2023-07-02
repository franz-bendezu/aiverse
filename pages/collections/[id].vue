<template>
  <section class="max-w-[1240px] mx-auto my-2 p-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 font-body">
      <div class="p-3">
        <div
          class="w-full h-[164px] border border-solid border-sky-500 rounded-xl"
        >
          <img
            :src="image"
            alt="NFT Image"
            class="w-full h-auto rounded-xl object object-fit"
          />
        </div>
      </div>
      <div class="flex flex-col justify-center items-center sm:items-start">
        <h1 class="text-2xl sm:text-3xl font-bold">#{{ tokenId }} {{name}}</h1>
        <p class="text-[#ADB9C7] mt-2">Descripción: {{ description }}</p>
        <div class="mt-4">
          <p class="text-gray-600">Precio</p>
          <h2 class="text-xl sm:text-2xl font-bold">{{ price }} ETH</h2>
        </div>
        <div class="mt-4">
          <p class="text-gray-600">Dueño</p>
          <h2
            class="my-0 ssm:text-sm text-transparent font-bold bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600"
          >
            {{ owner }}
          </h2>
        </div>
        <div class="mt-4">
          <p class="text-gray-600">Red</p>
          <h2 class="text-xl">Ethereum ⟠</h2>
        </div>
        <button
          class="d-btn bg-[#1E50FF] outline-none border-none py-3 px-5 rounded-xl font-body cursor-pointer duration-250 ease-in-out hover:transform-x-1 hover:drop-shadow-xl hover:shadow-sky-600 w-auto mt-8 transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none"
        >
          Comprar 
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import Image1 from "~/assets/content/image-2.jpg";
export default {
  data() {
    return {
      tokenId: "123",
          name: "Bosque con nieve y una laguna",
      description: "This is a sample of description.",
      price: "0.1",
      owner: "0x1234...5678",
      image: Image1,
    };
  },
};
</script>
