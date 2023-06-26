<template>
  <section>
    <div class="container">
      <div class="hero my-5">
        <div class="hero-content text-center">
          <div class="max-w-lg">
            <h1 class="mb-5 sm:mb-7 text-4xl sm:text-5xl font-bold">
              Crea tu contenido con Inteligencia Artificial y protegelos!
            </h1>
            <p class="mb-5 sm:mb-7 sm:text-lg">
              Autenticidad, propiedad exclusiva y seguridad total. ¡Asegura tu
              obra ahora!
            </p>
            <button @click="open" class="btn btn-warning sm:btn-wide">
              Empezar ahora
            </button>
          </div>
        </div>
      </div>
      <div
        class="max-w-[1240px] bg-[#272D37] my-2 mx-auto gap-2 font-body top-7 text-center p-6 rounded-xl border border-solid border-sky-600"
      >
        <div>
          <h1 class="text-4xl sm:text-2xl">¡Protege tu contenido ahora!</h1>
          <p class="text-[#ADB9C7] py-4 sm:p-2 ms:p-1">
            Estamos creando un grupo a gran escala para apoyarnos mutuamente ,
            ¡Únete para obtener las noticias lo más rápido posible y seguir
            nuestros últimos anuncios!
          </p>
          <button
            class="bg-[#1E50FF] outline-none border-none py-3 px-5 rounded-xl font-body cursor-pointer transition duration-250 ease-in-out hover:scale-125 hover:drop-shadow-xl hover:shadow-sky-600 w-auto"
          >
            Únete a la comunidad ahora
          </button>
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
