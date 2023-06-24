// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  runtimeConfig: {
    OPENAI_API_KEY: "",
    public: {
      infuraKey: "",
    },
    infureKeySecret: "",
  },
  ssr: false,
});
