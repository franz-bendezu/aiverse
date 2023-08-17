// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "@pinia/nuxt"],
  runtimeConfig: {
    OPENAI_API_KEY: "",
    public: {
      infuraKey: "",
      infuraIPFS:{
        url: "",
        key: "",
      },
      contractAddress: "",
    },
    infuraIPFSKeySecret: "",
  },
  routeRules: {
    '/': { prerender: true },
    '/about': { prerender: true },
    '/contact': { prerender: true },
    '/app/**': { ssr: false },
    '/api/**': { cors: true }
  },
  nitro: {
    preset: "aws-lambda",
  },
});
