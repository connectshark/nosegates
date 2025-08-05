<template>
<section id="home" class="mx-auto container grid grid-cols-12 gap-2 pt-5 mb-20 items-center">
  <div class="col-span-2 grid place-items-center md:col-span-1">
    <div class=" space-y-4" v-once>
      <a v-for="btn in socials" :key="btn.icon" class=" block text-primary/80 hover:text-primary" :href="btn.link" target="_blank" rel="noopener noreferrer">
        <i class='bx text-3xl' :class="btn.icon"></i>
      </a>
    </div>
  </div>
  <div class="col-span-10 md:col-span-5 md:order-2 p-4">
    <div class="rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] bg-primary overflow-hidden aspect-square">
      <img class=" object-scale-down h-full object-bottom w-full" src="../assets/main.png" alt="nosegates">
    </div>
  </div>
  <div class=" col-start-2 col-span-10 md:col-span-5">
    <h1 class=" text-4xl font-bold leading-loose font-ubuntu">Hi! I'am&nbsp;<span class=" bg-clip-text text-transparent bg-gradient-to-br from-primary to-sky-900 dark:to-sky-50">Chambers</span></h1>
    <p class="dark:text-white text-gray-500 md:leading-loose mb-5 font-bold">Frontend developer</p>
    <p class="dark:text-white text-gray-500 md:leading-relaxed mb-10">High Level experience in web development knowledge, producing quality work.</p>
    <a class="hover:opacity-80 cursor-pointer transition bg-primary p-4 rounded-xl text-white active:scale-95" href="#contact">Contact Me</a>
  </div>
</section>

<section class="mb-20 py-10">
  <h2 id="certificate" class="lg:scroll-m-20 text-center text-2xl font-bold leading-loose font-ubuntu">Vue.js developer</h2>
  <p class="dark:text-white text-gray-500 text-center mb-10">I'm a certified Vue.js developer.</p>
  <div class=" max-w-3xl w-4/5 mx-auto">
    <figure class="dark:hidden">
      <img src="../assets/certificate/light.jpg" alt="light certificate">
    </figure>
    <figure class=" hidden dark:block">
      <img src="../assets/certificate/dark.jpg" alt="dark certificate">
    </figure>
    <div class="text-center">
      <p class=" pt-20">
        <a class=" underline" href="https://certificates.dev/vuejs/certificates/9aae9c9c-1198-4f71-97ff-1973dad68d02" target="_blank" rel="noopener noreferrer">View on certificates.dev.<i class='bx bx-link-external'></i></a>
      </p>
    </div>
  </div>
</section>
<section class="mb-20 py-10">
  <h2 id="about" class="lg:scroll-m-20 text-center text-2xl font-bold leading-loose font-ubuntu">About me</h2>
  <p class="dark:text-white text-gray-500 text-center mb-10">My introduction</p>
  <div class="max-w-5xl w-4/5 mx-auto space-y-10 md:space-x-10 flex items-center justify-center flex-col md:flex-row">
    <figure class="md:w-1/2 scroller-watcher blur-2xl scale-50">
      <img class="rounded-2xl object-cover max-w-xs mx-auto" loading="lazy" src="../assets/hero.webp" alt="hero">
    </figure>
    <div class="md:w-1/2 space-y-10">
      <p class="text-gray-500 dark:text-gray-300">Web developer, with extensive knowledge and years of experience, working in web technologies and delivering quality work.</p>
      <ul class="w-full flex items-center justify-center">
        <li class=" text-center w-1/3" v-for="(item, i) in experience" :key="i">
          <p class=" text-4xl font-bold leading-relaxed">{{ item.number }}+</p>
          <p class=" text-gray-500 dark:text-gray-300">{{ item.content }}</p>
          <p class=" text-gray-500 dark:text-gray-300">{{ item.last }}</p>
        </li>
      </ul>
    </div>
  </div>
</section>

<section class="mb-20 py-10">
  <h2 id="skills" class="lg:scroll-m-20 text-center text-2xl font-bold leading-loose font-ubuntu">Skills</h2>
  <p class="dark:text-white text-gray-500 text-center mb-10">My technical collection</p>
  <SkillsSection/>
</section>
<section class="mb-20 py-10">
  <h2 id="services" class="lg:scroll-m-20 text-center text-2xl font-bold leading-loose font-ubuntu">Services</h2>
  <p class="dark:text-white text-gray-500 text-center mb-10">What I offer</p>
  <ul class=" w-5/6 mx-auto max-w-3xl grid grid-cols-2 grid-rows-1 gap-6">
    <ServiceSection v-once v-for="item in services" :key="item.icon"
      :title="item.title"
      :icon="item.icon"
      :description="item.description"
    />
  </ul>
</section>
<section class="mb-20 py-10">
  <h2 id="portfolio" class="lg:scroll-m-20 text-center text-2xl font-bold leading-loose font-ubuntu">Portfolio</h2>
  <p class="dark:text-white text-gray-500 text-center mb-10">Most recent work</p>
  <div v-if="loading">loading</div>
  <div v-else class="mx-auto relative max-w-4xl px-10">
    <div v-once v-for="item in portfolio" :key="item.link" class="p-5 md:pb-20 md:flex md:justify-between items-center group">
      <a class=" group-even:order-1 md:w-5/12" :href="item.link" target="_blank">
        <img class=" aspect-video object-top object-cover scroller-watcher blur-2xl scale-50 shadow-lg rounded-lg" loading="lazy" :src="item.img" alt="project preview">
      </a>
      <div class=" md:w-6/12 py-4">
        <h3 class=" text-primary font-bold text-xl/relaxed font-ubuntu">{{ item.title }}</h3>
        <p class="dark:text-white text-gray-500 mb-5 whitespace-pre-line text-sm">{{ item.description }}</p>
        <p>
          <a :href="item.link" target="_blank" rel="noopener noreferrer" aria-label="Read more about my portfolio" class="hover:opacity-80 transition bg-primary py-2 px-3 rounded-xl text-white inline-block leading-8 mx-2">Demo</a>
          <a :href="item.github" target="_blank" aria-label="Read more about my portfolio on github" rel="noopener noreferrer" class="hover:opacity-80 transition bg-primary py-2 px-3 rounded-xl text-white inline-block leading-8 mx-2">
            <i class='bx bxl-github bx-sm align-middle'></i>
          </a>
        </p>
      </div>
    </div>
  </div>
</section>

<section class="mb-20 py-10 lg:scroll-m-20">
  <div class=" max-w-4xl w-5/6 rounded-3xl mx-auto bg-gradient-to-tr from-primary to-primary/70 p-10 lg:flex dark:bg-black dark:bg-none transition">
    <div class=" lg:w-4/6 mb-5 lg:mb-0">
      <h2 class="text-2xl font-bold leading-loose tracking-tighter text-white font-ubuntu">Your company is hiring, and I’m looking!</h2>
      <p class="text-white mb-10">Let’s chat about how we can grow together.</p>
      <a class="hover:opacity-80 dark:bg-primary dark:text-white p-4 rounded-xl text-primary bg-white" href="#contact">Contact Me <i class='bx bx-send'></i></a>
    </div>
  </div>
</section>
<section class="mb-20 py-10">
  <h2 id="contact" class="lg:scroll-m-20 text-center text-2xl font-bold leading-loose font-ubuntu">Contact Me</h2>
  <p class="dark:text-white text-gray-500 text-center mb-10">Get in touch</p>
  <div class=" text-center space-x-4">
    <a v-for="btn in contacts" class="hover:opacity-80 transition bg-primary py-2 px-3 rounded-xl text-white inline-block leading-8 active:scale-95" :href="btn.url">
      <i class='bx bx-sm align-middle' :class="btn.icon"/>
    </a>
  </div>
</section>
</template>

<script setup>
import useFetch from '@/composables/useFetch'
import ServiceSection from '../components/serviceSection.vue'
import SkillsSection from '../components/skillsSection.vue'

const contacts = [
  {
    url: 'mailto:me@nosegates.com',
    icon: 'bx-mail-send'
  },
  {
    url: 'https://t.me/nosegates',
    icon: 'bxl-telegram'
  }
]

const API_URL = import.meta.env.VITE_API_URL
const {
  result: portfolio,
  loading
} = useFetch(API_URL)

const services = [
  {
    icon: 'bx-code-alt',
    title: 'Frontend Developer',
    description: ['Web page development', 'Build responsive sites', 'I develop the user interface']
  },
  {
    icon: 'bx-data',
    title: 'Full-Stack Developer',
    description: ['Web API development', 'OAuth 2.0 login', 'JWT access token']
  }
]

const experience = [
  {
    number: '05',
    content: 'Years',
    last: 'experience'
  },
  {
    number: '60',
    content: 'Completed',
    last: 'projects'
  },
  {
    number: '03',
    content: 'Companies',
    last: 'worked'
  }
]
const socials = [
  {
    link: 'https://github.com/connectshark',
    icon: 'bxl-github'
  },
  {
    link: 'https://www.linkedin.com/in/%E6%81%A9%E9%A8%B0-%E8%91%89-935867189/',
    icon: 'bxl-linkedin'
  }
]
</script>