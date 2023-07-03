<template>
  <div class="p-2">
    <div class="d-hero my-5 w-full">
      <div class="d-hero-content text-center flex-col lg:flex-row">
        <div class="max-w-xl">
          <h1 class="mb-5 sm:mb-7 text-4xl sm:text-5xl font-bold">
            Crea tu contenido con Inteligencia Artificial y protegelos!
          </h1>
          <p class="mb-5 sm:mb-7 sm:text-lg">
            Autenticidad, propiedad exclusiva y seguridad total. ¡Asegura tu
            obra ahora!
          </p>
          <button @click="open" class="d-btn d-btn-warning sm:d-btn-wide">
            Empezar ahora
          </button>
        </div>
        <div class="sm:ml-5 sm:w-[480px] w-full">
          <video
            class="w-full aspect-video rounded-lg shadow-lg"
            :src="videoUrl"
            controls
            muted
            :poster="videoPreview"
          ></video>
        </div>
      </div>
    </div>
    <div
      class="max-w-[1240px] my-4 mx-auto gap-2 font-body top-7 text-center p-6 rounded-xl border border-solid border-sky-600"
    >
      <div>
        <h1 class="sm:text-4xl text-2xl my-4">Características principales</h1>
        <ul
          class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 pt-4 sm:p-2 ms:p-1 text-left"
        >
          <div class="d-card bg-base-100 shadow-xl">
            <div class="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12 inline-block text-[#1E50FF]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M8 2L2 7.5L8 13V22H16V13L22 7.5L16 2V11H8V2Z"></path>
                <path d="M12 22H16V17H12"></path>
                <path d="M12 11H12.01"></path>
              </svg>
            </div>
            <div class="d-card-body">
              <h2 class="d-card-title">Protege tus creaciones</h2>
            </div>
          </div>
          <div class="d-card bg-base-100 shadow-xl">
            <div class="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12 inline-block text-[#1E50FF]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 2L2 7.5L12 13L22 7.5L12 2Z"></path>
                <path d="M2 17L12 22L22 17"></path>
                <path d="M12 2V13"></path>
              </svg>
            </div>
            <div class="d-card-body">
              <h2 class="d-card-title">
                Integración con generadores de IA para texto e imágenes.
              </h2>
            </div>
          </div>
          <div class="d-card bg-base-100 shadow-xl">
            <div class="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12 inline-block text-[#1E50FF]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <div class="d-card-body">
              <h2 class="d-card-title">
                Asegura la autenticidad y exclusividad de tu contenido.
              </h2>
            </div>
          </div>
          <div class="d-card bg-base-100 shadow-xl">
            <div class="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12 inline-block text-[#1E50FF]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div class="d-card-body">
              <h2 class="d-card-title">
                Seguridad total para tus obras y propiedad intelectual.
              </h2>
            </div>
          </div>
        </ul>
      </div>
    </div>
    <div
      class="max-w-[1240px] my-4 mx-auto gap-2 font-body top-7 text-center p-6 rounded-xl border border-solid border-sky-600"
    >
      <div>
        <h1 class="text-4xl sm:text-2xl">¡Protege tu contenido ahora!</h1>
        <p class="text-[#ADB9C7] py-4 sm:p-2 ms:p-1">
          Estamos creando un grupo a gran escala para apoyarnos mutuamente,
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
</template>

<script setup lang="ts">
import { useBoard, useEthers } from "vue-dapp";
import videoUrl from "~/assets/content/video.webm";
import videoPreview from "~/assets/content/preview.jpg";
const { open } = useBoard();
const { address, chainId } = useEthers();
</script>
