<script setup>
import TopHeader from '../components/topHeader.vue'
import BottomFooter from '../components/bottomFooter.vue'
</script>

<template>
<TopHeader/>
<slot></slot>
<BottomFooter/>
</template>
