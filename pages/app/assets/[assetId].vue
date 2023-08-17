<template>
  <section class="max-w-[1240px] mx-auto my-2 p-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 font-body">
      <div class="p-3">
        <div class="w-full border border-solid border-sky-500 rounded-xl">
          <img
            :src="nft?.image"
            alt="NFT Image"
            class="w-full h-auto rounded-xl object-contain mx-auto"
          />
        </div>
      </div>
      <div class="flex flex-col justify-center items-center sm:items-start">
        <h1 class="text-2xl sm:text-3xl font-bold">
          #{{ nft?.tokenId }} {{ nft?.name }}
        </h1>
        <p class="text-[#ADB9C7] mt-2">Descripción: {{ nft?.description }}</p>

        <div class="mt-4">
          <p class="text-gray-600">Dueño</p>
          <h2
            class="my-0 ssm:text-sm text-transparent font-bold bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600"
          >
            {{ nft?.owner }}
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

<script lang="ts" setup>
const nft = ref<any | null>(null);
const loading = ref(true);
const route = useRoute();

const { contract, address } = useContract();

useHead({
  title: "Mi contenido",
});

contract.getTokenById(route.params.assetId!).then((element: any) => {
  loading.value = true; // Set loading to true initially

  const tokenURI = element.tokenURI;
  const tokenId = element.tokenId;
  const owner = element.owner;
  $fetch(tokenURI).then((res: any) => {
    nft.value = {
      name: res.name,
      image: res.image,
      description: res.description,
      attributes: res.attributes,
      tokenId,
      owner,
    };
    loading.value = false; // Set loading to false after data is fetched
  });
});
</script>
