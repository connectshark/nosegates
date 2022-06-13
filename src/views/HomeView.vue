<template>
  <main>
    <section id="home" class="mx-auto container grid grid-cols-12 pt-5 mb-20 items-center">
      <div class=" col-span-2 grid place-items-center md:col-span-1">
        <div class=" space-y-4">
          <a v-for="btn in socials" :key="btn.icon" class=" block text-primary" :href="btn.link" target="_blank"
            rel="noopener noreferrer">
            <i class='bx text-3xl' :class="btn.icon"></i>
          </a>
        </div>
      </div>
      <div class=" col-span-10 md:col-span-5 md:order-2">
        <svg class=" fill-primary" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <mask fill="" id="mask0" mask-type="alpha">
            <path
              d="M62.1,-57.5C77.1,-47,83.7,-23.5,83.6,-0.1C83.5,23.2,76.6,46.4,61.5,58.2C46.4,69.9,23.2,70.2,3.2,66.9C-16.7,63.7,-33.5,56.9,-47.5,45.2C-61.6,33.5,-72.9,16.7,-75.6,-2.7C-78.3,-22.2,-72.4,-44.4,-58.4,-54.9C-44.4,-65.4,-22.2,-64.3,0.7,-65C23.5,-65.6,47,-68.1,62.1,-57.5Z"
              transform="translate(100 100)" />
          </mask>
          <g mask="url(#mask0)">
            <path
              d="M62.1,-57.5C77.1,-47,83.7,-23.5,83.6,-0.1C83.5,23.2,76.6,46.4,61.5,58.2C46.4,69.9,23.2,70.2,3.2,66.9C-16.7,63.7,-33.5,56.9,-47.5,45.2C-61.6,33.5,-72.9,16.7,-75.6,-2.7C-78.3,-22.2,-72.4,-44.4,-58.4,-54.9C-44.4,-65.4,-22.2,-64.3,0.7,-65C23.5,-65.6,47,-68.1,62.1,-57.5Z"
              transform="translate(100 100)" />
            <image class=" w-36" x="30" y="30" xlink:href="../assets/backup/section2.png" />
          </g>
        </svg>
      </div>
      <div class=" col-start-2 col-span-10 md:col-span-5">
        <h1 class=" text-4xl font-bold leading-loose">Hi! I'am&nbsp;Chambers</h1>
        <p class=" text-gray-500 md:leading-loose mb-5">Frontend developer</p>
        <p class="text-gray-500 md:leading-relaxed mb-10">High Level experience in web development knowledge, producing
          quality work.</p>
        <button class=" bg-primary p-4 rounded-xl text-white">
          Contact Me <i class='bx bx-send'></i>
        </button>
      </div>
    </section>

    <section class="mb-20 py-20">
      <h2 id="about" class="lg:scroll-m-16 text-center text-2xl font-bold leading-loose">About me</h2>
      <p class="text-gray-500 text-center mb-10">My introduction</p>
      <div
        class=" max-w-5xl w-4/5 mx-auto space-y-10 md:space-x-10 flex items-center justify-center flex-col md:flex-row">
        <figure class="md:w-1/2">
          <img class="rounded-2xl object-fill max-w-xs mx-auto" loading="lazy" src="../assets/hero.jpeg" alt="hero">
        </figure>
        <div class="md:w-1/2 space-y-10">
          <p class="text-gray-500">Web developer, with extensive knowledge and years of experience, working in web
            technologies and delivering quality work.</p>
          <ul class="w-full flex items-center justify-center">
            <li class=" text-center w-1/3" v-for="(item, i) in experience" :key="i">
              <p class=" text-2xl font-bold leading-relaxed">{{ item.number }}+</p>
              <p class=" text-gray-500">{{ item.content }}</p>
              <p class=" text-gray-500">{{ item.last }}</p>
            </li>
          </ul>
          <button class=" bg-primary p-4 rounded-xl text-white">
            Download CV <i class='bx bxs-contact'></i>
          </button>
        </div>
      </div>

    </section>
    <section class="mb-20 py-20">
      <h2 id="skills" class="lg:scroll-m-16 text-center text-2xl font-bold leading-loose">Skills</h2>
      <p class="text-gray-500 text-center mb-10">My technical collection</p>
      <div class="mx-auto max-w-5xl w-5/6">
        <div v-for="(skill, index) in skills" :key="skill.title"
          class="w-full mb-10 transition md:inline-block md:w-1/2 md:align-top">
          <div class="flex items-center cursor-pointer" @click="folderHandler(index)">
            <span class="text-primary w-16 shrink-0 text-center">
              <i class='bx text-2xl' :class="skill.icon"></i>
            </span>
            <div>
              <h3 class=" font-bold text-xl">{{ skill.title }}</h3>
              <p class=" text-gray-500">{{ skill.subtitle }}</p>
            </div>
            <span :class="{ '-rotate-180': folderIndex === index }"
              class=" text-center w-1/12 text-primary transition duration-500 ml-auto">
              <i class='bx bxs-chevron-down'></i>
            </span>
          </div>
          <Transition enter-to-class="opacity-100 translate-y-0" leave-from-class="opacity-100 translate-y-0"
            enter-active-class="duration-300" leave-active-class="duration-300"
            enter-from-class="opacity-0 -translate-y-3" leave-to-class="opacity-0 -translate-y-3">
            <ul v-show="folderIndex === index" class=" w-full py-4">
              <li v-for="brand in skill.brands" class=" inline-block mx-4 text-primary hover:scale-110 transition">
                <i class='bx text-2xl' :class="brand"></i>
              </li>
              <template v-if="skill.library">
                <li v-for="library in skill.library" :key="library" :title="library"
                  class="-skew-x-6 text-primary hover:scale-110 transition mx-4 inline-block">{{ library }}</li>
              </template>
            </ul>
          </Transition>
        </div>
      </div>

    </section>
    <section class="mb-20 py-20">
      <h2 id="services" class="lg:scroll-m-16 text-center text-2xl font-bold leading-loose">Services</h2>
      <p class="text-gray-500 text-center mb-10">What I offer</p>
      <ul class=" w-5/6 mx-auto max-w-3xl grid grid-cols-2 grid-rows-1 gap-6">
        <ServiceSection  v-for="item in services" :key="item.icon"
          :title="item.title"
          :icon="item.icon"
          :description="item.description"
        />
      </ul>
    </section>
    <section class="mb-20 py-20">
      <h2 id="portfolio" class="lg:scroll-m-16 text-center text-2xl font-bold leading-loose">Portfolio</h2>
      <p class="text-gray-500 text-center mb-10">Most recent work</p>
      <div class="mx-auto relative max-w-4xl px-10">
        <span id="last" class="text-primary hover:bg-primary/10 rounded-3xl transition z-0 text-4xl absolute inset-y-0 left-2 my-auto grid place-items-center"><i class='bx bxs-chevron-right bx-rotate-180' ></i></span>
        <span id="next" class="text-primary hover:bg-primary/10 rounded-3xl transition z-0 text-4xl absolute inset-y-0 right-2 my-auto grid place-items-center"><i class='bx bxs-chevron-right'></i></span>
        <swiper
          :modules="[Pagination, Navigation]"
          :navigation="{
            nextEl: '#next',
            prevEl: '#last'
          }"
          :slides-per-view="1"
          :space-between="50"
          :pagination="{
            clickable: true,
            dynamicBullets: true
          }"
          :loop="true"
          :auto-height="true"
        >
          <swiper-slide>
          <div class="p-5 lg:pb-20 lg:flex lg:justify-between items-center">
            <a class=" lg:w-5/12" href="https://shopee.nosegates.com/">
              <img class="object-cover w-full h-48 rounded-lg shadow-lg" src="../assets/portfolio/img1.png" alt="image1">
            </a>
            <div class=" lg:w-6/12 p-4">
              <h3 class=" text-primary leading-loose font-bold text-2xl">蝦英雄</h3>
              <p class=" text-gray-500 mb-5">本專案提供使用者貼入蝦皮網址後產生出蝦皮專用短網址,自行撰寫NodeJS後端串接蝦皮官方提供的GraphQL API,前端使用Vue框架撰寫</p>
              <p>
                <a href="https://shopee.nosegates.com/" target="_blank" rel="noopener noreferrer" class=" bg-primary p-4 rounded-xl text-white inline-block">
                  Demo
                </a>
              </p>
            </div>
          </div>
          </swiper-slide>
          <swiper-slide>
          <div class="p-5 lg:pb-20 lg:flex lg:justify-between items-center">
            <a class=" lg:w-5/12" href="https://connectshark.github.io/command-palette-tailwindcss/#/">
              <img class="object-cover w-full h-48 rounded-lg shadow-lg" src="../assets/portfolio/search.png" alt="image1">
            </a>
            <div class=" lg:w-6/12 p-4">
              <h3 class=" text-primary leading-loose font-bold text-2xl">台灣縣市搜尋器</h3>
              <p class=" text-gray-500 mb-5">本專案專注於客製搜尋器,於頁面中使用按鍵<kbd class="border p-1 rounded">ctrl</kbd> or <kbd class="border p-1 rounded">control</kbd> + <kbd class="border p-1 rounded">k</kbd>即可開啟面板搜尋器,輸入英文中文皆可進入搜尋</p>
              <p>
                <a href="https://connectshark.github.io/command-palette-tailwindcss/#/" target="_blank" rel="noopener noreferrer" class=" bg-primary p-4 rounded-xl text-white inline-block">
                  Demo
                </a>
              </p>
            </div>
          </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <section class="mb-20 py-20 lg:scroll-m-16" id="contact">
      <div class=" max-w-4xl w-5/6 rounded-3xl mx-auto bg-gradient-to-r from-primary to-primary/70 p-10 lg:flex">
        <div class=" lg:w-4/6 mb-5 lg:mb-0">
          <h2 class="text-2xl font-bold leading-loose text-white">You have a new project</h2>
          <p class="text-white mb-10">Contact me now and get a 10% discount on your new project</p>
          <button class="p-4 rounded-xl text-primary bg-white">
            Contact Me <i class='bx bx-send'></i>
          </button>
        </div>
        <div class="lg:w-2/6 bg-[url('/s4.png')] py-40 lg:p-30  lg:ml-0 -m-10 bg-no-repeat bg-contain bg-bottom" ></div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import ServiceSection from '../components/serviceSection.vue'
import { ref } from 'vue'

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

const folderIndex = ref(0)

const folderHandler = index => {
  if (folderIndex.value === index) {
    folderIndex.value = null
  } else {
    folderIndex.value = index
  }
}

const skills = [
  {
    title: 'Frontend developer',
    subtitle: 'More than 3 years',
    icon: 'bx-code-curly',
    brands: ['bxl-javascript', 'bxl-css3', 'bxl-tailwind-css', 'bxl-vuejs', 'bxl-html5', 'bxl-git', 'bxl-sass'],
    library: ['Phaser', 'Three', 'Babylon', 'Highchart']
  },
  {
    title: 'Backend developer',
    subtitle: 'More than 1 years',
    icon: 'bx-code-block',
    brands: ['bxl-postgresql', 'bxl-nodejs']
  },
  {
    title: 'Others',
    subtitle: 'More other skills',
    icon: 'bx-edit-alt',
    brands: ['bxl-blender', 'bxl-figma']
  },
]

const experience = [
  {
    number: '04',
    content: 'Years',
    last: 'experience'
  },
  {
    number: '20',
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