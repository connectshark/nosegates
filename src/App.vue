<script setup>
import TopHeader from './components/topHeader.vue'
import BottomFooter from './components/bottomFooter.vue'
</script>

<template>
<header class="shadow-md">
  <TopHeader/>
</header>
<router-view />
<footer>
  <BottomFooter/>
</footer>
</template>
