<script setup lang="ts">
import {
  useBoard,
  useEthers,
  useWallet,
  displayEther,
  shortenAddress,
} from "vue-dapp";
import IconMoon from "~/components/icon/Moon.vue";
import IconSun from "~/components/icon/Sun.vue";
import IconLaptop from "~/components/icon/Laptop.vue";

const { open } = useBoard();
const { address, balance, isActivated } = useEthers();
const { disconnect, wallet, onDisconnect } = useWallet();

const navigation: { name: string; href: string }[] = [
  {
    name: "Inicio",
    href: "/",
  },
  {
    name: "Contáctanos",
    href: "/contact",
  },
  {
    name: "Acerca de",
    href: "/about",
  },
];

const mode = useColorMode({
  attribute: "data-theme",
  emitAuto: true,
});

const modes: {
  code: "light" | "dark" | "auto";
  name: string;
  icon: Component;
}[] = [
  {
    code: "dark",
    name: "Dark",
    icon: IconMoon,
  },
  {
    code: "light",
    name: "Light",
    icon: IconSun,
  },
  {
    code: "auto",
    name: "Auto",
    icon: IconLaptop,
  },
];

const { state, next } = useCycleList(modes, {
  initialValue: modes.find((m) => m.code === mode.value),
});

watchEffect(() => (mode.value = state.value.code));
const router = useRouter();
const handleDisconnect = () => {
  disconnect();
  router.push("/");
};
</script>

<template>
  <header
    class="d-navbar py-2 px-4 sm:px-16 sm:py-4 bg-gradient-to-r from-purple-500 to-indigo-500"
  >
    <div class="flex-1">
      <router-link
        to="/"
        active-class="text-gray-900"
        class="text-xl text-white font-bold"
      >
        <div class="flex space-x-4 items-center">
          <!-- logo -->
          <img
            class="h-6 min-w-10 sm:h-8 sm:min-w-12"
            src="~/assets/logo.svg"
            alt="logo"
          />
        </div>
      </router-link>
    </div>
    <div class="flex-none">
      <div class="flex items-center space-x-4">
        <button class="flex-1 d-btn d-btn-sm" @click="next()">
          <component :is="state.icon" class="text-base-500 w-5 h-5" />

          <span class="ml-1 capitalize hidden sm:block">{{ state.name }}</span>
        </button>
        <!-- router -->
        <div class="d-flex hidden lg:block space-x-4">
          <router-link
            v-for="link in navigation"
            :key="link.name"
            :to="link.href"
            active-class="text-gray-900 d-btn-outline no-animation"
            exact
            class="text-white d-btn d-btn-ghost d-drawer-button normal-case"
          >
            {{ link.name }}
          </router-link>
        </div>

        <div v-if="isActivated" class="flex items-center flex-col">
          <!-- Account -->
          <button
            @click="$router.push('/app/generate')"
            class="sm:hidden py-2 px-3 rounded-2xl inline-block bg-white text-purple-500"
          >
            {{ shortenAddress(address) }}
          </button>

          <div
            class="hidden sm:flex py-1 px-2 items-center rounded-3xl border border-solid border-white"
          >
            <div class="px-1 mr-1 text-white">
              {{ displayEther(balance) }} ETH
            </div>
            <button
              @click="$router.push('/app/generate')"
              class="py-2 px-3 rounded-2xl inline-block bg-white text-purple-500"
            >
              {{ shortenAddress(address) }}
            </button>
          </div>
          <div>
            <button
              @click="handleDisconnect"
              class="text-sm border rounded-3xl px-2 text-white"
            >
              Desconectar
            </button>
          </div>
        </div>

        <button
          v-else
          @click="open()"
          class="d-btn bg-white text-purple-500"
          :disabled="wallet.status === 'connecting'"
        >
          {{
            wallet.status === "connecting"
              ? "Conectando..."
              : wallet.status === "loading"
              ? "Cargando..."
              : "Conectarse"
          }}
        </button>
      </div>
    </div>
  </header>
</template>
