<template>
  <section>
    <div class="container">
      <div class="hero h-96 md:h-[500px] overflow-hidden">
        <div class="hero-content text-center text-secondary-content">
          <div class="max-w-lg">
            <h1 class="mb-5 sm:mb-7 text-4xl sm:text-5xl font-bold">
              Protege tu contenido generado por IA con NFT's
            </h1>
            <p class="mb-5 sm:mb-7 sm:text-lg">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo.
            </p>
            <button @click="open" class="btn btn-warning sm:btn-wide">Empezar ahora</button>
          </div>
        </div>
      </div>
    </div>
    <h1>Nuxt3 Vue-Dapp Starter</h1>

    <p>Address: {{ address }}</p>
    <p>Chain: {{ chainId }}</p>
  </section>
</template>

<script setup lang="ts">
import { useBoard, useEthers } from "vue-dapp";

const { open } = useBoard();
const { address, chainId } = useEthers();
</script>
