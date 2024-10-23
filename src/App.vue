<template>
<header class="lg:border-0 lg:sticky lg:bottom-auto lg:top-0 fixed bottom-0 left-0 w-full border-t-2 border-white/20 [@supports(backdrop-filter:blur(0))]:bg-white/50 bg-white/90 [@supports(backdrop-filter:blur(0))]:dark:bg-slate-900/50 dark:bg-slate-900/90 [@supports(backdrop-filter:blur(0))]:backdrop-blur-2xl z-10">
  <nav class=" container mx-auto lg:py-6 p-4 flex justify-between items-center">
    <router-link to="/">
      <figure class=" w-8 inline-block align-middle">
        <img loading="lazy" src="./assets/logo-s.png" alt="logo">
      </figure>
      <h2 class=" font-bold inline-block align-middle">Chambers</h2>
    </router-link>
    <ul :class="{ 'hidden': !isOpen }"
      class="bg-white dark:bg-slate-900 lg:dark:bg-transparent lg:bg-transparent lg:border-none lg:flex lg:static lg:p-0 lg:rounded-t-none lg:w-auto lg:ml-auto lg:mr-4 grid grid-cols-3 grid-rows-2 gap-8 absolute left-0 w-full p-4 rounded-t-3xl border-t-2 transition bottom-full dark:border-slate-900/50">
      <li v-once v-for="item in navGroup" :key="item.class">
        <a @click="isOpen = false" :href="item.url" class="p-2 text-center lg:p-0">
          <p class=" lg:hidden text-xl"><i class='bx' :class="item.class"></i></p>
          <p>{{ item.content }}</p>
        </a>
      </li>
    </ul>
    <div class="space-x-4 text-xl">
      <transition
        mode="out-in"
        enter-active-class="transition"
        enter-from-class="translate-y-4 opacity-50"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="-translate-y-4 opacity-50"
      >
      <button type="button" v-if="isDark" @click="toggleDark()" aria-label="sun button">
        <i class='bx bx-sun'></i>
      </button>
      <button type="button" v-else @click="toggleDark()" aria-label="moon button">
        <i class='bx bx-moon'></i>
      </button>
      </transition>
      <button @click="isOpen = !isOpen" class=" lg:hidden" aria-label="mobile menu button">
        <i class='bx bx-category' :class="{ 'bx-x': isOpen, 'bx-category': !isOpen }"></i>
      </button>
    </div>
  </nav>
</header>
<main>
  <router-view />
</main>
<footer class=" bg-primary py-10 dark:bg-black transition">
  <div class=" container mx-auto px-10 text-white lg:grid lg:grid-cols-12">
    <div class="lg:m-0 mb-5 lg:col-span-4">
      <h2 class=" text-3xl font-bold leading-loose">Chambers</h2>
      <p>Frontend developer</p>
    </div>
    <ul class="lg:m-0 mb-5 lg:col-span-5 space-x-5">
      <li class=" inline-block" v-for="item in list" :key="item.url">
        <a class=" hover:opacity-80" :href="item.url">{{ item.name }}</a>
      </li>
    </ul>
    <ul class="lg:m-0 mb-5 lg:col-span-3 space-x-5">
      <li class="inline-block" v-for="item in socialList" :key="item.url">
        <a :href="item.url" target="_blank" rel="noopener noreferrer">
          <i class='bx align-middle text-2xl hover:opacity-80' :class="item.icon"></i>
        </a>
      </li>
    </ul>
    <p class=" pt-20 pb-10 text-sm lg:col-start-5 lg:col-span-4"><i class='bx bx-copyright'></i>{{ year }} All Rights Reserved</p>
  </div>
</footer>
</template>
<script setup>
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const isOpen = ref(false)

const navGroup = [
  {
    url: '#home',
    class: 'bx-home',
    content: 'Home'
  },
  {
    url: '#about',
    class: 'bx-user',
    content: 'About'
  },
  {
    url: '#skills',
    class: 'bx-file',
    content: 'Skills'
  },
  {
    url: '#services',
    class: 'bx-briefcase-alt',
    content: 'Services'
  },
  {
    url: '#portfolio',
    class: 'bx-photo-album',
    content: 'Portfolio'
  },
  {
    url: '#contact',
    class: 'bxs-contact',
    content: 'Contactme'
  }
]

let list = [
  {
    name: 'Services',
    url: '#services'
  },
  {
    name: 'Portfolio',
    url: '#portfolio'
  },
  {
    name: 'Contactme',
    url: '#contact'
  }
]

const year = new Date().getFullYear()

const socialList = [
  {
    icon: 'bxl-facebook',
    url: 'https://www.facebook.com/nosegates/'
  },
  {
    icon: 'bxl-instagram',
    url: 'https://www.instagram.com/nose_gates/'
  },
  {
    icon: 'bxl-github',
    url: 'https://github.com/connectshark'
  },
  {
    icon: 'bxl-telegram',
    url: 'https://t.me/nosegates'
  }
]
</script>