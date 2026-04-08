<template>
  <div class="pt-20 w-fit mx-auto">
    <FuzzyText
      text="404"
      :font-size="140"
      font-weight="900"
      color="#000"
      :enable-hover="true"
      :base-intensity="0.18"
      :hover-intensity="0.5"
    />
  </div>
  
  <div class="w-fit mx-auto">
    <FuzzyText
      text="Not Found"
      :font-size="60"
      font-weight="900"
      color="#000"
      :enable-hover="true"
      :base-intensity="0.18"
      :hover-intensity="0.5"
    />
  </div>
  <div class="text-center py-20">
    <router-link class="hover:underline " to="/">回首頁</router-link>
  </div>
</template>

<script setup lang="ts">
  import FuzzyText from "../components/FuzzyText/FuzzyText.vue"
</script>