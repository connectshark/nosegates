<template>
  <div class=" container mx-auto px-10 grid md:grid-cols-2">
    <div class="flex items-center mb-10" v-for="item in contactList" :key="item.icon">
      <span class=" shrink-0 mr-4">
        <i :class="item.icon" class='bx text-3xl text-primary align-middle'></i>
      </span>
      <div class="w-full">
        <h3 class=" text-xl">{{ item.title }}</h3>
        <p class="text-gray-500 dark:text-gray-300">
          <a v-if="item.href" :href="item.href + item.detail">
            {{ item.detail }}
          </a>
          <template v-else>
            {{ item.detail }}
          </template>
        </p>
      </div>
    </div>
  </div>
</template>


<script setup>
const contactList = [
  {
    icon: 'bx-phone',
    title: 'Call Me',
    detail: '0968-841-641',
    href: 'tel:'
  },
  {
    icon: 'bx-mail-send',
    title: 'Email',
    detail: 'bobhus394@gmail.com',
    href: 'mailto:'
  },
  {
    icon: 'bx-map-pin',
    title: 'Location',
    detail: 'New Taipei City',
    href: ''
  }
]
</script>