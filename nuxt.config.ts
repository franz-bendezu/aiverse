// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "@pinia/nuxt"],
  runtimeConfig: {
    OPENAI_API_KEY: "",
    public: {
      infuraKey: "",
      infuraIPFSKey: "",
      infuraIPFSURL: "",
    },
    infuraIPFSKeySecret: "",
  },
  ssr: false,
});
