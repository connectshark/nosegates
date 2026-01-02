<template>
  <header
    class="lg:border-0 lg:sticky lg:bottom-auto lg:top-0 fixed bottom-0 left-0 w-full border-t-2 border-white/20 [@supports(backdrop-filter:blur(0))]:bg-white/50 bg-white/90 [@supports(backdrop-filter:blur(0))]:dark:bg-slate-900/50 dark:bg-slate-900/90 [@supports(backdrop-filter:blur(0))]:backdrop-blur-2xl z-10">
    <nav class=" container mx-auto lg:py-6 p-4 flex justify-between items-center">
      <router-link to="/">
        <figure class=" w-8 inline-block align-middle">
          <img loading="lazy" src="./assets/logo-s.png" alt="logo">
        </figure>
        <h2 class=" font-bold inline-block align-middle">Chambers</h2>
      </router-link>
      <ul :class="{ 'hidden': !isOpen }"
        class="bg-white dark:bg-slate-900 lg:dark:bg-transparent lg:bg-transparent lg:border-none lg:flex lg:static lg:p-0 lg:rounded-t-none lg:w-auto lg:ml-auto lg:mr-4 grid grid-cols-3 grid-rows-2 gap-8 absolute left-0 w-full p-4 rounded-t-3xl border-t-2 border-primary/10 transition bottom-full dark:border-slate-900/50">
        <li v-once v-for="item in navGroup" :key="item.class">
          <a @click="isOpen = false" :href="item.url" class="p-2 text-center lg:p-0">
            <p class=" lg:hidden text-xl"><i class='bx' :class="item.class"></i></p>
            <p>{{ item.content }}</p>
          </a>
        </li>
      </ul>
      <div class="space-x-4 text-xl">
        <button type="button" aria-label="sun button" @click="isDark = !isDark">
          <transition mode="out-in" enter-active-class="transition" enter-from-class="translate-y-4 opacity-0"
            leave-active-class="transition" leave-to-class="-translate-y-4 opacity-0">
            <i class='bx bx-sun' v-if="isDark"></i>
            <i class='bx bx-moon' v-else></i>
          </transition>
        </button>
        <button @click="isOpen = !isOpen" class=" lg:hidden" aria-label="mobile menu button">
          <i class='bx bx-menu' :class="{ 'bx-x': isOpen, 'bx-menu': !isOpen }"></i>
        </button>
      </div>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
  <div class="bg-[url('/wave.svg')] py-20 bg-cover bg-center bg-no-repeat dark:hidden" />
  <div class="bg-[url('/darkwave.svg')] py-20 bg-cover bg-center bg-no-repeat dark:block hidden" />
  <footer class=" bg-primary text-white pt-10 pb-30 dark:bg-black transition">
    <div class=" w-5/6 mx-auto grid lg:grid-cols-2 gap-10 mb-20 lg:mb-40">
      <div>
        <h2 class=" text-4xl font-bold">Chambers</h2>
        <p>Frontend developer</p>
      </div>
      <ul class="space-x-5 lg:justify-self-end">
        <li class="inline-block" v-for="item in list" :key="item.url">
          <a class=" hover:opacity-80" :href="item.url">{{ item.name }}</a>
        </li>
      </ul>
      <ul class="space-x-5">
        <li class="inline-block" v-for="item in socialList" :key="item.url">
          <a :href="item.url" target="_blank" rel="noopener noreferrer">
            <i class='bxl align-middle text-2xl hover:opacity-80' :class="item.icon"></i>
          </a>
        </li>
      </ul>
    </div>
    <p class="text-sm text-center">Copyright <i class='bx bx-copyright' /> {{ year }} All Rights Reserved.</p>
  </footer>
</template>
<script setup>
import { ref, watchEffect } from 'vue'

const isDark = ref(false)

watchEffect(() => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})

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
    class: 'bx-message-circle',
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
    icon: 'bx-instagram',
    url: 'https://www.instagram.com/nose_gates/'
  },
  {
    icon: 'bx-github',
    url: 'https://github.com/connectshark'
  },
  {
    icon: 'bx-telegram',
    url: 'https://t.me/nosegates'
  }
]
</script>