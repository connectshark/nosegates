<template>
  <header
    class="lg:border-0 lg:sticky lg:bottom-auto lg:top-0 fixed bottom-0 left-0 w-full border-t-2 border-white/20 [@supports(backdrop-filter:blur(0))]:bg-white/50 bg-white/90 [@supports(backdrop-filter:blur(0))]:dark:bg-slate-900/50 dark:bg-slate-900/90 [@supports(backdrop-filter:blur(0))]:backdrop-blur-2xl z-10">
    <nav class=" container mx-auto lg:p-3 p-5 flex justify-between items-center">
      <router-link to="/">
        <figure class=" w-8 inline-block align-middle">
          <img loading="lazy" src="../assets/logo-s.png" alt="logo">
        </figure>
        <h2 class=" font-bold inline-block align-middle">Chambers</h2>
      </router-link>
      <ul :class="{ 'hidden': !isOpen }"
        class=" bg-white dark:bg-slate-900 lg:dark:bg-transparent lg:bg-transparent lg:border-none lg:flex lg:static lg:p-0 lg:rounded-t-none lg:w-auto lg:ml-auto lg:mr-4 grid grid-cols-3 grid-rows-2 gap-4 absolute left-0 w-full p-4 rounded-t-3xl border-t-2 transition bottom-full dark:border-slate-900/50">
        <li v-for="item in navGroup" :key="item.class">
          <a @click="isOpen = false" :href="item.url" class=" p-2 text-center lg:p-0">
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
        <button type="button" v-if="isDark" @click="toggleDark()">
          <i class='bx bx-sun'></i>
        </button>
        <button type="button" v-else @click="toggleDark()">
          <i class='bx bx-moon'></i>
        </button>
        </transition>
        <button @click="isOpen = !isOpen" class=" lg:hidden">
          <i class='bx bx-category' :class="{ 'bx-x': isOpen, 'bx-category': !isOpen }"></i>
        </button>
      </div>
    </nav>

  </header>
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

</script>