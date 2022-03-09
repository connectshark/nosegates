<template>
  <div
    class="p-4 flex items-center justify-between md:bg-transparent mx-auto max-w-7xl"
    :class="{ 'bg-indigo-50': menu }"
  >
    <figure class="text-xl">
      <router-link to="/">
        <img class="max-w-max w-6 inline-block align-middle" src="../assets/logo.jpg" alt="logo" />
        <figcaption class="inline-block align-middle">Nosegates</figcaption>
      </router-link>
    </figure>
    <div class="text-2xl md:hidden" @click="menu = !menu">
      <i v-if="menu" class="align-middle bx bx-x"></i>
      <i v-else class="align-middle bx bx-menu"></i>
    </div>
    <ul
      :class="{ hidden: !menu }"
      class="md:block absolute md:static top-full left-0 py-4 px-6 md:py-2 md:px-2 bg-indigo-50 md:bg-transparent w-full md:w-auto"
    >
      <router-link
        v-for="link in list"
        :key="link.url"
        :to="link.url"
        class="text-sky-400 hover:underline hover:opacity-80 transition-opacity block md:inline-block align-middle md:mx-2 p-2 md:p-0"
      >
        <li>{{ link.name }}</li>
      </router-link>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menu = ref(false)
let list = [{
  name: '關於',
  url: '/about'
}, {
  name: '標籤',
  url: '/tags'
}]
</script>