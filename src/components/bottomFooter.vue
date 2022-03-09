<template>
  <div class=" py-2 text-center">
    <h6><i class='bx bx-copyright'></i> 2022 Chambers</h6>
    <p>
      <router-link class=" text-sky-400 hover:underline hover:opacity-80 transition-opacity inline-block mx-2" v-for="link in list" :key="link.url" :to="link.url">{{ link.name }}</router-link>
    </p>
  </div>
</template>

<script setup>

let list = [{
  name: 'Side Projects',
  url: '/about'
}]
</script>