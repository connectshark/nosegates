<template>
  <header
    class="lg:border-0 lg:sticky lg:bottom-auto lg:top-0 fixed bottom-0 left-0 w-full border-t-2 border-white/20 bg-white/50 dark:bg-slate-900/50 backdrop-blur-2xl z-10">
    <nav class=" container mx-auto lg:p-3 p-5 flex justify-between items-center">
      <router-link to="/">
        <figure class=" w-8 inline-block align-middle">
          <img loading="lazy" src="../assets/logo-s.png" alt="logo">
        </figure>
        <h2 class=" font-bold inline-block align-middle">Chambers</h2>
      </router-link>
      <ul :class="{ 'hidden': !isOpen }"
        class=" bg-white dark:bg-slate-900 lg:bg-inherit lg:border-none lg:flex lg:static lg:p-0 lg:rounded-t-none lg:w-auto lg:ml-auto lg:mr-4 grid grid-cols-3 grid-rows-2 gap-4 absolute left-0 w-full p-4 rounded-t-3xl border-t-2 transition bottom-full border-slate-900/50">
        <li v-for="item in navGroup" :key="item.class">
          <a @click="isOpen = false" :href="item.url" class=" p-2 text-center lg:p-0">
            <p class=" lg:hidden text-xl"><i class='bx' :class="item.class"></i></p>
            <p>{{ item.content }}</p>
          </a>
        </li>
      </ul>
      <div class=" space-x-4 text-xl">
        <button @click="toggleDark">
          <i class='bx bx-sun' v-if="isDark"></i>
          <i class='bx bx-moon' v-else></i>
        </button>
        <button @click="isOpen = !isOpen" class=" lg:hidden">
          <i class='bx bx-category' :class="{ 'bx-x': isOpen, 'bx-category': !isOpen }"></i>
        </button>
      </div>
    </nav>

  </header>
</template>

<script setup>
import { ref } from 'vue'
const isDark = ref(false)

const toggleDark = () => {
  const root = document.querySelector('html')
  root.classList.toggle('dark')
  isDark.value = root.classList.contains('dark')
}



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