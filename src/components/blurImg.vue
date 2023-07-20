<template>
<img ref="target" :class="[
  {
    'blur-sm scale-110 -translate-y-3': !isSectionShow
  },
  {
    'blur-none scale-100 translate-y-0': isSectionShow
  }]" class="object-cover shadow-lg rounded-lg transition-all duration-500 delay-100" loading="lazy" :src="props.src" alt="image1">
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
  }
)
</script>