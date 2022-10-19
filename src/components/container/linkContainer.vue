<template>
  <a class="hover:opacity-80 cursor-pointer transition bg-primary p-4 rounded-xl text-white" :href="props.href">
    <slot/>
  </a>
</template>

<script setup>
const props = defineProps({
  href: String
})
</script>