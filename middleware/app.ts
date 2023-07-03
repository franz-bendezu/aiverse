import { useEthers } from "vue-dapp";

export default defineNuxtRouteMiddleware((to, from) => {
  const { isActivated } = useEthers();
  if (!isActivated.value && to.path !== "/") {
    console.log("not activated");
    return navigateTo("/");
  }
});
