<script setup lang="ts">
useHead({
  title: "Contacto",
});
</script>

<template>
  <section class="mb-32">
    <div
      class="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/284.jpg')]"
    ></div>
    <div class="mx-auto container px-6 md:px-12">
      <div
        class="block rounded-lg px-6 py-12 text-white dark:bg-black/60 dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]"
      >
        <div class="flex flex-wrap">
          <div
            class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6"
          >
            <form>
              <div class="relative mb-6">
                <label for="name" class="flex items-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 mr-2 text-primary-500"
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
                  class="d-input d-input-bordered block min-h-[auto] w-full rounded bg-transparent leading-[1.6] transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                  placeholder="Ingrese tus nombres "
                />
              </div>
              <div class="relative mb-6">
                <label for="email" class="flex items-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 mr-2 text-primary-500"
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
                  class="d-input d-input-bordered block min-h-[auto] w-full rounded bg-transparent leading-[1.6] transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                  placeholder="Ingrese su correo electrónico"
                />
              </div>
              <div class="relative mb-6">
                <label for="message" class="flex items-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 mr-2 text-primary-500"
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
                  class="d-textarea d-textarea-bordered block min-h-[auto] w-full rounded bg-transparent leading-[1.6] transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                  rows="3"
                  placeholder="Ingrese su mensaje"
                ></textarea>
              </div>
              <div
                class="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex"
              >
                <input
                  class="d-checkbox inline-block mr-2 align-middle d-checkbox-primary"
                  type="checkbox"
                  value=""
                  id="exampleCheck96"
                  checked
                />
                <label
                  class="inline-block pl-[0.15rem] hover:cursor-pointer"
                  for="exampleCheck96"
                >
                  Enviarme una copia del mensaje
                </label>
              </div>
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                class="d-btn d-btn-primary d-btn-block d-btn-sm d-btn-rounded"
              >
                Enviar
              </button>
            </form>
          </div>
          <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div class="flex flex-wrap">
              <div
                class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12"
              >
                <div class="flex items-start">
                  <div class="shrink-0">
                    <div
                      class="inline-block rounded-md bg-primary-100 p-4 text-primary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-6 grow">
                    <p class="mb-2 font-bold dark:text-white">
                      Technical support
                    </p>
                    <p class="text-neutral-500 dark:text-neutral-200">
                      support@example.com
                    </p>
                    <p class="text-neutral-500 dark:text-neutral-200">
                      +1 234-567-89
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12"
              >
                <div class="flex items-start">
                  <div class="shrink-0">
                    <div
                      class="inline-block rounded-md bg-primary-100 p-4 text-primary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-6 grow">
                    <p class="mb-2 font-bold dark:text-white">
                      Sales questions
                    </p>
                    <p class="text-neutral-500 dark:text-neutral-200">
                      sales@example.com
                    </p>
                    <p class="text-neutral-500 dark:text-neutral-200">
                      +1 234-567-89
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12"
              >
                <div class="align-start flex">
                  <div class="shrink-0">
                    <div
                      class="inline-block rounded-md bg-primary-100 p-4 text-primary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-6 grow">
                    <p class="mb-2 font-bold dark:text-white">Press</p>
                    <p class="text-neutral-500 dark:text-neutral-200">
                      press@example.com
                    </p>
                    <p class="text-neutral-500 dark:text-neutral-200">
                      +1 234-567-89
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12"
              >
                <div class="align-start flex">
                  <div class="shrink-0">
                    <div
                      class="inline-block rounded-md bg-primary-100 p-4 text-primary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-6 grow">
                    <p class="mb-2 font-bold dark:text-white">Bug report</p>
                    <p class="text-neutral-500 dark:text-neutral-200">
                      bugs@example.com
                    </p>
                    <p class="text-neutral-500 dark:text-neutral-200">
                      +1 234-567-89
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
