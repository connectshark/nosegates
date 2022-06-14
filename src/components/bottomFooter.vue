<template>
<footer class=" bg-primary pb-44 pt-10">
  <div class=" container mx-auto px-10 text-white lg:grid lg:grid-cols-12">
    <div class="lg:m-0 mb-5 lg:col-span-4">
      <h2 class=" text-3xl font-bold leading-loose">Chambers</h2>
      <p>Frontend developer</p>
    </div>
    <div class="lg:m-0 mb-5 lg:col-span-5">
      <ul class=" space-x-5">
        <li class=" inline-block" v-for="item in list" :key="item.url">
          <a class=" hover:opacity-80" :href="item.url">{{ item.name }}</a>
        </li>
      </ul>
    </div>
    <div class="lg:m-0 mb-5 lg:col-span-3">
      <ul class=" space-x-5">
        <li class="inline-block" v-for="item in socialList" :key="item.url">
          <a :href="item.url" target="_blank" rel="noopener noreferrer">
            <i class='bx align-middle text-2xl hover:opacity-80' :class="item.icon"></i>
          </a>
        </li>
      </ul>
    </div>
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
    url: '#contactme'
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