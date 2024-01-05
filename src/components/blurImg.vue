<template>
<img class="object-cover scroller-watcher shadow-lg rounded-lg" loading="lazy" :src="props.src" alt="image1">
</template>
<script setup>
const props = defineProps({
  src: String
})
</script>
<style scoped src="../assets/css/scroller.css"></style>