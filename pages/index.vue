<template>
  <div>
    <h1>Nuxt3 Vue-Dapp Starter</h1>

    <p>Address: {{ address }}</p>
    <p>Chain: {{ chainId }}</p>
  </div>
</template>

<script setup lang="ts">
import { useEthers } from "vue-dapp";

const { address, chainId } = useEthers();
</script>
