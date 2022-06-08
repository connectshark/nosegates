<script setup>
import TopHeader from './components/topHeader.vue'
import BottomFooter from './components/bottomFooter.vue'
</script>

<template>
<TopHeader/>
<router-view />
<footer>
  <BottomFooter/>
</footer>
</template>
