<template>
<footer class=" bg-primary py-10 dark:bg-black">
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
    <p class=" pt-20 pb-10 text-sm lg:col-start-5 lg:col-span-4"><i class='bx bx-copyright'></i>2022 All Rights Reserved</p>
  </div>
</footer>
</template>

<script setup>

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

const socialList = [
  {
    icon: 'bxl-facebook',
    url: 'https://www.facebook.com/EnTeng.Nose'
  },
  {
    icon: 'bxl-instagram',
    url: 'https://www.instagram.com/nose_gates/'
  },
  {
    icon: 'bxl-github',
    url: 'https://github.com/connectshark'
  }
]
</script>