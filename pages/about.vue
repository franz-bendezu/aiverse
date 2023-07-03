<script setup lang="ts"></script>

<template>
  <form class="max-w-md mx-auto p-4 rounded shadow">
    <h2 class="text-2xl font-bold mb-4">Formulario de contacto</h2>
    <div class="mb-4">
      <label for="name" class="flex items-center mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 mr-2 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
        Nombre
      </label>
      <input
        type="text"
        id="name"
        name="name"
        class="w-full border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500"
      />
    </div>
    <div class="mb-4">
      <label for="email" class="flex items-center mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 mr-2 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
        Correo electrónico
      </label>
      <input
        type="email"
        id="email"
        name="email"
        class="w-full border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500"
      />
    </div>
    <div class="mb-4">
      <label for="message" class="flex items-center mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 mr-2 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
        Mensaje
      </label>
      <textarea
        id="message"
        name="message"
        class="w-full border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500"
      ></textarea>
    </div>
    <button
      type="submit"
      class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
    >
      Enviar
    </button>
  </form>
</template>
