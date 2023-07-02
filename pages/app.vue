<template>
  <div class="flex flex-col items-center ">
      <div class="d-tabs d-tabs-boxed">
        <RouterLink
          to="/app"
          exact-active-class="d-tab-active"
          exact
          class="d-tab d-tab-lg d-tab-lifted"
          >Inicio
        </RouterLink>
        <RouterLink
          to="/app/generate"
          active-class="d-tab-active"
          class="d-tab d-tab-lg d-tab-lifted"
          >Generador de imagenes
        </RouterLink>
        <RouterLink
          to="/app/assets"
          active-class="d-tab-active"
          class="d-tab d-tab-lg d-tab-lifted"
        >
          Mi contenido
        </RouterLink>
      </div>
    <NuxtPage></NuxtPage>
  </div>
</template>

<script></script>
