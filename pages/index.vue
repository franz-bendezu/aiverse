<template>
  <div class="w-full mx-auto p-2">
    <div
      class="flex max-w-5xl mx-auto px-3 flex-col sm:p-0 text-center lg:text-left lg:flex-row gap-6 my-6"
    >
      <div class="gap-5 grid">
        <h1
          class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter"
        >
          Crea contenido con Inteligencia Artificial y
          <span
            class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-yellow-400"
          >
            protegelo !</span
          >
        </h1>
        <p class="sm:text-lg">
          Autenticidad, propiedad exclusiva y seguridad total. ¡Asegura tu
          contenido ahora!
        </p>
        <div>
          <button @click="open" class="d-btn d-btn-warning sm:d-btn-wide">
            Empezar ahora
          </button>
        </div>
      </div>
      <div class="lg:ml-5 w-full max-w-xl mx-auto self-center">
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
  <div class="w-full bg-base-200 mx-auto p-2">
    <div class="max-w-5xl mx-auto px-3">
      <h1 class="sm:text-4xl text-2xl my-4 text-center">
        Características principales
      </h1>
      <div class="md:grid md:grid-cols-12 md:gap-6">
        <div
          class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
        >
          <a
            v-for="feature in features"
            :key="feature.id"
            @click="setActive(feature.id)"
            :class="feature.active ? 'bg-base-400' : 'bg-base-100'"
            class=" pointer-events-auto cursor-pointer flex items-center justify-between text-lg p-5 rounded border transition duration-300 ease-in-out mb-3"
          >
            <div class="text-left">
              <div class="font-bold leading-snug tracking-tight mb-1">
                {{ feature.title }}
              </div>
            </div>
            <div
              class="flex justify-center items-center bg-base-300 w-20 h-20 rounded-full shadow flex-shrink-0 ml-3"
              :class="feature.iconClasses"
            >
              <svg
                class="h-16 w-16 inline-block p-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path :d="feature.iconPath"></path>
              </svg>
            </div>
          </a>
        </div>
        <div
          class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
        >
          <div class="transition-all h-full ">
            <div class="relative flex flex-col text-center lg:text-right  h-full">
              <div
                v-for="feature in activeFeatures"
                :key="feature.id"
                class="w-full transition ease-in-out delay-150  h-full "
                :class="
                  feature.active
                    ? 'opacity-100 translate-y-0 '
                    : 'opacity-0 translate-y-10 hidden display-none'
                "
              >
                <div class="relative inline-flex flex-row  items-center  h-full">
                  <div>
                    {{ feature.description }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full mx-auto p-2">
    <div
      class="bg-gray-900 my-4 mx-auto gap-2 text-center rounded-xl border border-solid border-sky-600"
    >
      <h1 class="sm:text-4xl text-2xl my-4">¡Protege tu contenido ahora!</h1>
      <div>
        <p class="text-[#ADB9C7] py-4 sm:p-2 ms:p-1">
          Estamos creando un grupo a gran escala para apoyarnos mutuamente,
          ¡Únete para obtener las noticias lo más rápido posible y seguir
          nuestros últimos anuncios!
        </p>
      </div>
      <button class="d-btn d-btn-primary sm:d-btn-wide">
        Únete a la comunidad ahora
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBoard, useEthers } from "vue-dapp";
import videoUrl from "~/assets/content/video.webm";
import videoPreview from "~/assets/content/preview.jpg";
const { open } = useBoard();
const features = ref([
  {
    id: 1,
    title: "Integración con generadores de IA para texto, imágenes, video.",
    active: true,
    iconClasses: "text-[#1E50FF]",
    iconPath: "M12 2L2 7.5L12 13L22 7.5L12 2ZM2 17L12 22L22 17M12 2V13",
    description:
      "Con esta función, puedes integrar fácilmente generadores de Inteligencia Artificial (IA) para trabajar con texto e imágenes, mejorando tus capacidades creativas y optimizando los procesos de generación de contenido.",
  },
  {
    id: 2,
    title: "Protege tus creaciones",
    active: false,
    iconClasses: "text-[#1FCAFF]",
    iconPath:
      "M8 2L2 7.5L8 13V22H16V13L22 7.5L16 2V11H8V2ZM12 22H16V17H12M12 11H12.01",
    description:
      " Esta característica te permite proteger tus creaciones, garantizando la seguridad y la exclusividad de tu contenido.",
  },
  {
    id: 3,
    active: false,
    title: "Asegura la autenticidad y exclusividad de tu contenido.",
    iconClasses: "text-[#1E50FF]",
    iconPath: "M5 13l4 4L19 7",
    description:
      "Esta característica garantiza la autenticidad y exclusividad de tu contenido, lo que te permite establecer la propiedad intelectual sobre tus obras y protegerlas de posibles usos no autorizados.",
  },
  {
    id: 4,
    active: false,
    title: "Seguridad total para tus obras y propiedad intelectual.",
    iconClasses: "text-[#1FCAFF]",
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
    description:
      "Esta función proporciona una seguridad completa para tus obras y propiedad intelectual, asegurando que tus creaciones estén protegidas contra copias no autorizadas y salvaguardando tus derechos como creador.",
  },
]);
const activeFeatures = computed(() => {
  return features.value.filter((feature) => feature.active)
});
const setActive = (id: number) => {
  features.value.forEach((feature) => {
    feature.active = feature.id === id;
  });
};
</script>
