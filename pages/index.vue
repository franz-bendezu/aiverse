<template>
  <div class="w-full mx-auto sm:p-2 p-0 sm:py-8">
    <div
      class="flex max-w-5xl sm:rounded-lg mx-auto p-6 flex-col sm:px-10 text-center lg:text-left lg:flex-row gap-6 bg-gradient-to-r from-purple-600 from-30% via-purple-800 via-60% to-indigo-500 to-90%"
    >
      <div class="gap-5 grid text-white">
        <h1
          class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter"
        >
          Crea contenido con Inteligencia Artificial y
          <span
            class="bg-clip-text text-transparent bg-gradient-to-t from-yellow-300 to-yellow-600"
          >
            protegelo !</span
          >
        </h1>
        <p class="sm:text-lg">
          Autenticidad, propiedad exclusiva y seguridad total. ¡Asegura tu
          contenido ahora!
        </p>
        <div>
          <button @click="startNow" class="d-btn d-btn-warning sm:d-btn-wide">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>

            Empezar ahora
          </button>
        </div>
      </div>
      <div class="lg:ml-5 w-full max-w-xl mx-auto self-center">
        <video
          class="w-full aspect-video rounded-lg shadow-lg"
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
            class="pointer-events-auto cursor-pointer flex items-center justify-between text-lg p-5 rounded border transition duration-300 ease-in-out mb-3"
          >
            <div class="text-left">
              <div class="font-bold leading-snug tracking-tight mb-1">
                {{ feature.title }}
              </div>
            </div>
            <div
              class="flex justify-center items-center w-20 h-20 rounded-full shadow flex-shrink-0 ml-3"
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
          <div class="transition-all h-full">
            <div
              class="relative flex flex-col text-center lg:text-right h-full"
            >
              <div
                v-for="feature in activeFeatures"
                :key="feature.id"
                class="w-full transition ease-in-out delay-150 h-full"
                :class="
                  feature.active
                    ? 'opacity-100 translate-y-0 '
                    : 'opacity-0 translate-y-10 hidden display-none'
                "
              >
                <div class="relative inline-flex flex-row items-center h-full">
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
      data-theme="dark"
      class="max-w-5xl grid bg-primary my-4 mx-auto gap-2 text-center rounded-xl border border-solid p-4 text-white"
    >
      <h1 class="sm:text-4xl text-2xl my-4 font-bold">
        ¡Protege tu contenido ahora!
      </h1>
      <div>
        <p class="py-4 sm:p-2 ms:p-1">
          Estamos creando un grupo a gran escala para apoyarnos mutuamente,
          ¡Únete para obtener las noticias lo más rápido posible y seguir
          nuestros últimos anuncios!
        </p>
      </div>
      <button class="d-btn d-btn-secondary sm:d-btn-wide mx-auto">
        Únete a la comunidad ahora
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBoard, useEthers } from "vue-dapp";
import videoPreview from "~/assets/content/preview.jpg";

useHead({
  title: "Inicio",
});

const { open } = useBoard();
const features = ref([
  {
    id: 1,
    title: "Integración con generadores de IA para texto, imágenes, video.",
    active: true,
    iconClasses: "bg-blue-400 text-white",
    iconPath: "M12 2L2 7.5L12 13L22 7.5L12 2ZM2 17L12 22L22 17M12 2V13",
    description:
      "Con esta función, puedes integrar fácilmente generadores de Inteligencia Artificial (IA) para trabajar con texto e imágenes, mejorando tus capacidades creativas y optimizando los procesos de generación de contenido.",
  },
  {
    id: 2,
    title: "Protege tus creaciones",
    active: false,
    iconClasses: "bg-yellow-400 text-white",
    iconPath:
      "M8 2L2 7.5L8 13V22H16V13L22 7.5L16 2V11H8V2ZM12 22H16V17H12M12 11H12.01",
    description:
      " Esta característica te permite proteger tus creaciones, garantizando la seguridad y la exclusividad de tu contenido.",
  },
  {
    id: 3,
    active: false,
    title: "Asegura la autenticidad y exclusividad de tu contenido.",
    iconClasses: "bg-green-400 text-white",
    iconPath: "M5 13l4 4L19 7",
    description:
      "Esta característica garantiza la autenticidad y exclusividad de tu contenido, lo que te permite establecer la propiedad intelectual sobre tus obras y protegerlas de posibles usos no autorizados.",
  },
  {
    id: 4,
    active: false,
    title: "Seguridad total para tus obras y propiedad intelectual.",
    iconClasses: "bg-sky-400 text-white",
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
    description:
      "Esta función proporciona una seguridad completa para tus obras y propiedad intelectual, asegurando que tus creaciones estén protegidas contra copias no autorizadas y salvaguardando tus derechos como creador.",
  },
]);
const activeFeatures = computed(() => {
  return features.value.filter((feature) => feature.active);
});
const { isActivated } = useEthers();
const router = useRouter();
const startNow = () => {
  if (!isActivated.value) {
    open();
  } else {
    router.push("/app/generate");
  }
};
const setActive = (id: number) => {
  features.value.forEach((feature) => {
    feature.active = feature.id === id;
  });
};
</script>
