<script setup lang="ts">
import {
  useBoard,
  useEthers,
  useWallet,
  displayEther,
  shortenAddress,
} from "vue-dapp";

const { open } = useBoard();
const { address, balance, isActivated } = useEthers();
const { disconnect, wallet } = useWallet();

const navigation: { name: string; href: string }[] = [
  {
    name: "Contáctanos",
    href: "/about",
  },
];
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
        <!-- router -->
        <div class="d-flex hidden lg:block">
          <router-link
            v-for="link in navigation"
            :key="link.name"
            :to="link.href"
            active-class="text-gray-900"
            exact
            class="text-white hover:text-gray-200"
          >
            {{ link.name }}
          </router-link>
        </div>

        <div v-if="isActivated" class="flex items-center flex-col">
          <!-- Account -->
          <div
            class="sm:hidden py-2 px-3 rounded-2xl inline-block bg-white text-purple-500"
          >
            {{ shortenAddress(address) }}
          </div>

          <div
            class="hidden sm:flex py-1 px-2 items-center rounded-3xl border border-solid border-white"
          >
            <div class="px-1 mr-1 text-white">
              {{ displayEther(balance) }} ETH
            </div>
            <div
              class="py-2 px-3 rounded-2xl inline-block bg-white text-purple-500"
            >
              {{ shortenAddress(address) }}
            </div>
          </div>
          <div>
            <button
              @click="disconnect"
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
