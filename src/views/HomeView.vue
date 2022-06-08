<template>
<main>
  <section class=" mx-auto container grid grid-cols-12 pt-5 mb-20 items-center">
    <div class=" col-span-2 grid place-items-center md:col-span-1">
      <div class=" space-y-4">
        <a v-for="btn in socials" :key="btn.icon" class=" block text-primary" :href="btn.link" target="_blank" rel="noopener noreferrer">
          <i class='bx text-3xl' :class="btn.icon"></i>
        </a>
      </div>
    </div>
    <div class=" col-span-10 md:col-span-5 md:order-2">
      <svg class=" fill-primary" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <mask fill="" id="mask0" mask-type="alpha">
          <path d="M62.1,-57.5C77.1,-47,83.7,-23.5,83.6,-0.1C83.5,23.2,76.6,46.4,61.5,58.2C46.4,69.9,23.2,70.2,3.2,66.9C-16.7,63.7,-33.5,56.9,-47.5,45.2C-61.6,33.5,-72.9,16.7,-75.6,-2.7C-78.3,-22.2,-72.4,-44.4,-58.4,-54.9C-44.4,-65.4,-22.2,-64.3,0.7,-65C23.5,-65.6,47,-68.1,62.1,-57.5Z" transform="translate(100 100)" />
        </mask>
        <g mask="url(#mask0)">
          <path d="M62.1,-57.5C77.1,-47,83.7,-23.5,83.6,-0.1C83.5,23.2,76.6,46.4,61.5,58.2C46.4,69.9,23.2,70.2,3.2,66.9C-16.7,63.7,-33.5,56.9,-47.5,45.2C-61.6,33.5,-72.9,16.7,-75.6,-2.7C-78.3,-22.2,-72.4,-44.4,-58.4,-54.9C-44.4,-65.4,-22.2,-64.3,0.7,-65C23.5,-65.6,47,-68.1,62.1,-57.5Z" transform="translate(100 100)" />
          <image class=" w-28" x="50" y="10" xlink:href="../assets/hero-i.png"/>
        </g>
      </svg>
    </div>
    <div class=" col-start-2 col-span-10 md:col-span-5">
      <h1 class=" text-4xl font-bold leading-loose">Hi! I'am&nbsp;Chambers</h1>
      <p class=" text-gray-500 md:leading-loose mb-5">Frontend developer</p>
      <p class="text-gray-500 md:leading-relaxed mb-10">High Level experience in web development knowledge, producing quality work.</p>
      <button class=" bg-primary p-4 rounded-xl text-white">
        Contact Me <i class='bx bx-send'></i>
      </button>
    </div>
  </section>

  <section class=" mb-20">
    <h2 id="about" class=" text-center text-2xl font-bold leading-loose">About me</h2>
    <p class="text-gray-500 text-center mb-10">My introduction</p>
    <div class=" max-w-5xl w-4/5 mx-auto space-y-10 md:space-x-10 flex items-center justify-center flex-col md:flex-row">
      <figure class="md:w-1/2">
        <img class="rounded-2xl object-fill max-w-xs mx-auto" loading="lazy" src="../assets/hero.jpeg" alt="hero">
      </figure>
      <div class="md:w-1/2 space-y-10">
        <p class="text-gray-500">Web developer, with extensive knowledge and years of experience, working in web technologies and delivering quality work.</p>
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
  <section>
    <h2 id="skills" class=" text-center text-2xl font-bold leading-loose">Skills</h2>
    <p class="text-gray-500 text-center mb-10">My technical collection</p>
    <div class=" w-3/4 mx-auto">
      <div v-for="(skill, index) in skills" :key="skill.title" @click="folderHandler(index)" class=" cursor-pointer w-full flex items-center justify-center mb-5 flex-wrap">
        <span class=" w-2/12 text-primary">
          <i class='bx text-2xl' :class="skill.icon" ></i>
        </span>
        <div class=" w-9/12">
          <h3 class=" font-bold text-xl">{{ skill.title }}</h3>
          <p class=" text-gray-500">{{ skill.subtitle }}</p>
        </div>
        <span :class="{ '-rotate-180' : folderIndex === index }" class=" text-center w-1/12 text-primary transition duration-500">
          <i class='bx bx-down-arrow' ></i>
        </span>
        <Transition>
        <ul v-show="folderIndex === index" class=" w-full py-4">
          <li v-for="brand in skill.brands" class=" inline-block mx-4 text-primary">
            <i class='bx text-2xl' :class="brand" ></i>
          </li>
        </ul>
        </Transition>
      </div>
    </div>
    
  </section>
</main>
</template>

<script setup>
import { ref } from 'vue'

const folderIndex = ref(null)

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
    brands: ['bxl-javascript', 'bxl-css3', 'bxl-tailwind-css', 'bxl-vuejs', 'bxl-html5', 'bxl-git']
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