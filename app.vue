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
const isDev = import.meta.env.DEV;
const infuraId = isDev
  ? import.meta.env.VITE_INFURA_KEY
  : "ff6a249a74e048f1b413cba715f98d07";

let connectors: Connector[] = [
  new MetaMaskConnector({
    appUrl: "https://aiverse.octatec.io",
  }),
  new WalletConnectConnector({
    qrcode: true,
    rpc: {
      1: `https://mainnet.infura.io/v3/${infuraId}`,
      4: `https://rinkeby.infura.io/v3/${infuraId}`,
    },
  }),
  new CoinbaseWalletConnector({
    appName: "Vue Dapp",
    jsonRpcUrl: `https://mainnet.infura.io/v3/${infuraId}`,
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
    router.push("/generate");
  }
});
</script>

<template>
  <LayoutHeader></LayoutHeader>
  <div class="max-w-full w-[900px] m-auto">
    <NuxtPage />
  </div>
  <vd-board
    v-if="connectorsCreated"
    :connectors="connectors"
    dark
    :autoConnectErrorHandler="autoConnectErrorHandler"
    :connectErrorHandler="connectErrorHandler"
  />
</template>
