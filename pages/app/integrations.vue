<template>
  <div class="min-h-screen">
    <section class="shadow">
      <div class="container mx-auto py-4 px-8">
        <h1 class="text-2xl font-semibold">Integraciones</h1>
      </div>
    </section>
    <section class="container mx-auto py-8 px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-6 shadow">
          <h2 class="text-xl font-semibold mb-4">Integración con OpenSea</h2>
          <p class=" mb-4">
            Integra tu aplicación con OpenSea para vender tus NFTs en su
            marketplace.
          </p>
          <a
            href="https://opensea.io/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Visitar OpenSea
          </a>
        </div>
        <div class="p-6 shadow">
          <h2 class="text-xl font-semibold mb-4">Otros Marketplaces</h2>
          <p class=" mb-4">
            Explora otros marketplaces de NFTs donde puedes vender tus activos
            digitales.
          </p>
          <a
            href="https://rarible.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
          >
            Rarible
          </a>
          <a
            href="https://foundation.app/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-200"
          >
            Foundation
          </a>
          <a
            href="https://www.superrare.co/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-200"
          >
            SuperRare
          </a>
          <a
            href="https://niftygateway.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
          >
            Nifty Gateway
          </a>
          <a
            href="https://www.mintable.app/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition duration-200"
          >
            Mintable
          </a>
          <a
            href="https://market.decentraland.org/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition duration-200"
          >
            Decentraland Marketplace
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "IntegracionMarketplacesNFT",
};
</script>

<style>
/* Agrega clases de utilidades de Tailwind CSS o estilos personalizados aquí */
</style>
