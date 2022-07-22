<template>
<section class="mb-20 py-20">
  <h2 id="contact" class="lg:scroll-m-16 text-center text-2xl font-bold leading-loose">Contact Me</h2>
  <p class="text-gray-500 text-center mb-10">Get in touch</p>
  <div class=" container mx-auto px-10 ">
    <div class="flex items-center mb-10" v-for="item in contactList" :key="item.icon">
      <span class=" shrink-0 mr-4">
        <i :class="item.icon" class='bx text-3xl text-primary align-middle'></i>
      </span>
      <div class="w-full">
        <h3 class=" text-xl">{{ item.title }}</h3>
        <p class="text-gray-500 dark:text-gray-300">{{  item.detail }}</p>
      </div>
    </div>
  </div>
</section>
</template>

<script setup>
const contactList = [
  {
    icon: 'bx-phone',
    title: 'Call Me',
    detail: '0968-841-641'
  },
  {
    icon: 'bx-mail-send',
    title: 'Email',
    detail: 'bobhus394@gmail.com'
  },
  {
    icon: 'bx-map-pin',
    title: 'Location',
    detail: 'New Taipei City'
  }
]
</script>