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
    name: "About",
    href: "/about",
  },
];
</script>

<template>
  <header class="w-full px-4 bg-gradient-to-r from-purple-500 to-indigo-500">
    <div class="flex justify-between p-4 px-3">
      <nav class="w-full">
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            active-class="text-gray-900"
            class="text-xl text-white font-bold"
          >
            <div class="flex space-x-4 items-center">
              <!-- logo -->
              <img class="h-8 min-w-10" src="~/assets/logo.svg" alt="logo" />
            </div>
          </router-link>

          <div class="flex items-center space-x-10">
            <!-- router -->
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
                  Disconnect
                </button>
              </div>
            </div>

            <button
              v-else
              @click="open()"
              class="btn bg-white text-purple-500"
              :disabled="wallet.status === 'connecting'"
            >
              {{
                wallet.status === "connecting"
                  ? "Connecting..."
                  : wallet.status === "loading"
                  ? "Loading..."
                  : "Connect"
              }}
            </button>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
