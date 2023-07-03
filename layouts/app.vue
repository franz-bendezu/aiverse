<script setup lang="ts">
import {
  MetaMaskConnector,
  WalletConnectConnector,
  CoinbaseWalletConnector,
  SafeConnector,
  Connector,
  useEthers,
} from "vue-dapp";
import { ref, onBeforeMount } from "vue";

const { isActivated } = useEthers();
const router = useRouter();
const url = useRequestURL();
const config = useRuntimeConfig();
const infuraKey = config.public.infuraKey;
let connectors: Connector[] = [
  new MetaMaskConnector({
    appUrl: url.host,
  }),
  new WalletConnectConnector({
    qrcode: true,
    rpc: {
      1: `https://mainnet.infura.io/v3/${infuraKey}`,
      3: `https://sepolia.infura.io/v3/${infuraKey}`,
      4: `https://rinkeby.infura.io/v3/${infuraKey}`,
    },
  }),
  new CoinbaseWalletConnector({
    appName: "AiVerse",
    jsonRpcUrl: `https://mainnet.infura.io/v3/${infuraKey}`,
  }),
];

const connectorsCreated = ref(false);

onBeforeMount(async () => {
  const safe = new SafeConnector();
  try {
    if (await safe.isSafeApp()) {
      connectors = [safe];
    }
  } catch (err: any) {
    console.error(err);
  }

  connectorsCreated.value = true;
});

const autoConnectErrorHandler = (err: any) => {
  console.error(err);
};

const connectErrorHandler = (err: any) => {
  console.error(err);
};

watch(isActivated, (active) => {
  if (active) {
    router.push("/app/generate");
  }
});
</script>

<template>
  <LayoutHeader></LayoutHeader>
  <div class="max-w-[1440px] mx-auto">
    <slot></slot>
  </div>
  <vd-board
    v-if="connectorsCreated"
    :connectors="connectors"
    dark
    :autoConnectErrorHandler="autoConnectErrorHandler"
    :connectErrorHandler="connectErrorHandler"
  />
</template>
