<template>
  <div class="max-w-5xl mx-auto">
    <section class="grid md:grid-cols-2 p-10">
      <div class="flex items-center justify-center flex-wrap md:flex-nowrap">
        <figure class="mb-2 md:mb-0 relative w-36 h-36 md:w-24 md:h-24 mx-auto shrink-0">
          <span class="absolute top-0 right-0 text-indigo-400">
            <i class="bx bxs-star bx-spin"></i>
          </span>
          <img class="w-full h-full object-cover rounded-full" src="../assets/hero.jpeg" alt="hero" />
        </figure>
        <div class="w-full px-4 md:text-2xl text-xl text-center md:text-left">
          <h1>Nosegates</h1>
        </div>
      </div>
      <div class="p-6">
        <p class="text-2xl">Hi 👋, I'm NoseGates</p>
        <p>💼I'm a front-end developer and I'm keen on exploring new technologies.</p>
        <p>
          <router-link
            class="bg-sky-400 inline-block hover:underline text-white p-2 rounded-lg"
            to="about"
          >Side Projects</router-link>
        </p>
      </div>
    </section>
    <section class="p-10">
      <h2 class="text-xl text-center">Articles</h2>
      <div>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <li class="text-center" v-for="article in articles" :key="article.link">
            <a
              class="hover:bg-sky-600 hover:text-white border border-sky-600 rounded-xl block mb-4 p-2 text-sky-600"
              :href="article.link"
              target="_blank"
            >
              {{ article.name }}
              <i class="bx bx-link-external"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
    <section class="p-10">
      <h2 class="text-xl text-center">Contact me</h2>
      <div>
        <ol class="grid grid-cols-2 grid-rows-2">
          <li
            class="w-9 mx-auto hover:bg-sky-400 hover:text-white transition-colors rounded-lg text-sky-400 bg-white text-center"
            v-for="social in socials"
            :key="social.icon"
          >
            <a :href="social.link" class="block" target="_blank">
              <i class="bx text-3xl align-middle" :class="social.icon"></i>
            </a>
          </li>
        </ol>
      </div>
    </section>
  </div>
</template>

<script setup>

const articles = [
  {
    link: 'https://blog.justlikeboss.com/product/toss-physiotherapy-clinic/',
    name: '台北推薦的物理治療所'
  },
  {
    link: 'https://www.instagram.com/tossphysio/',
    name: '透視物理治療'
  },
  {
    link: 'https://shp.ee/7m8ppa3',
    name: '領取優惠券'
  },
  {
    link: 'https://shopee.nosegates.com/',
    name: '縮短所有蝦皮網址'
  }
]
const skills = [
  {
    icon: 'bxl-tailwind-css'
  },
  {
    icon: 'bxl-visual-studio'
  },
  {
    icon: 'bxl-css3'
  },
  {
    icon: 'bxl-html5'
  },
  {
    icon: 'bxl-vuejs'
  }
]
const socials = [
  {
    link: 'mailto:bobhus394@gmail.com',
    icon: 'bxl-gmail'
  },
  {
    link: 'https://github.com/connectshark',
    icon: 'bxl-github'
  },
  {
    link: 'https://www.instagram.com/nose_gates/',
    icon: 'bxl-instagram'
  },
  {
    link: 'https://t.me/NoseGates',
    icon: 'bxl-telegram'
  }
]
</script>