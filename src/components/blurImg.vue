<template>
<img ref="target" :class="[
  {
    'blur-sm scale-90': !isSectionShow
  },
  {
    'blur-none scale-100': isSectionShow
  }]" class="object-cover shadow-lg rounded-lg transition-all duration-500" loading="lazy" :src="props.src" alt="image1">
</template>
<script setup>
import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'
const props = defineProps({
  src: String
})

const target = ref(null)
const isSectionShow = ref(false)

useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    isSectionShow.value = isIntersecting
  },
  {
    rootMargin: '-50px 0px -50px 0px'
  }
)
</script>