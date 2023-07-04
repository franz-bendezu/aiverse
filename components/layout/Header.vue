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
          <component :is="state.icon" class="text-base-500 w-5 h-5 swap-on" />

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

        <div v-if="isActivated" class="flex items-stretch">
          <div class="d-dropdown d-dropdown-end">
            <label
              tabindex="0"
              class="py-2 px-3 rounded-2xl inline-block bg-white text-purple-500 cursor-pointer"
            >
              {{ shortenAddress(address) }}
            </label>
            <ul
              tabindex="0"
              class="d-menu d-dropdown-content z-[30] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
            >
              <li class="justify-between pointer-events-none">
                <div>
                  Balance:
                  <span className="badge">{{ displayEther(balance) }} ETH</span>
                </div>
              </li>
              <li class="justify-between">
                <nuxt-link active-class="bg-primary" to="/app/generate">
                  Generador
                </nuxt-link>
              </li>
              <li class="justify-between">
                <nuxt-link active-class="bg-primary" to="/app/assets">
                  Mi contenido
                </nuxt-link>
              </li>
              <div class="d-divider mt-0 mb-0"></div>
              <li>
                <a @click="handleDisconnect">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Desconectar
                </a>
              </li>
            </ul>
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
      <div class="d-dropdown d-dropdown-bottom d-dropdown-end lg:hidden block">
        <label tabindex="0" class="d-btn d-btn-ghost d-btn-circle ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="d-menu d-menu-sm d-dropdown-content mt-3 z-[30] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li v-for="link in navigation" :key="link.name" :to="link.href">
            <nuxt-link active-class="bg-primary" :to="link.href">
              {{ link.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
