<template>
  <section class="mb-20 py-10">
    <h2 :id="props.name" class="lg:scroll-m-16 text-center text-2xl font-bold leading-loose">{{ props.title }}</h2>
    <p class="dark:text-white text-gray-500 text-center mb-10">{{ props.subTitle }}</p>
    <slot/>
  </section>
</template>

<script setup>
const props = defineProps({
  name: String,
  title: String,
  subTitle: String
})
</script>