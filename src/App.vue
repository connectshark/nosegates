<script setup>
import TopHeader from './components/topHeader.vue'
import BottomFooter from './components/bottomFooter.vue'
</script>

<template>
<header class="shadow-md bg-gray-50/80 z-10 sticky top-0 left-0 backdrop-blur backdrop-saturate-100">
  <TopHeader/>
</header>
<router-view />
<footer>
  <BottomFooter/>
</footer>
</template>
