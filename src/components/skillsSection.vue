<template>
<div class="mx-auto max-w-5xl w-5/6">
  <div v-for="(skill, index) in skills" :key="skill.title"
    class="w-full mb-10 transition md:inline-block md:w-1/2 md:align-top">
    <div class="flex items-center cursor-pointer" @click="folderHandler(index)">
      <span class="text-primary w-16 shrink-0 text-center">
        <i class='bx text-2xl' :class="skill.icon"></i>
      </span>
      <div>
        <h3 class=" font-bold text-xl">{{ skill.title }}</h3>
        <p class=" text-gray-500 dark:text-gray-300">{{ skill.subtitle }}</p>
      </div>
      <span :class="{ '-rotate-180': folderIndex === index }"
        class=" text-center w-1/12 text-primary transition duration-500 ml-auto">
        <i class='bx bxs-chevron-down'></i>
      </span>
    </div>
    <Transition enter-to-class="opacity-100 translate-y-0" leave-from-class="opacity-100 translate-y-0"
      enter-active-class="duration-300" leave-active-class="duration-300"
      enter-from-class="opacity-0 -translate-y-3" leave-to-class="opacity-0 -translate-y-3">
      <ul v-show="folderIndex === index" class=" w-full py-4">
        <li v-for="brand in skill.brands" class="inline-block mx-4 text-primary hover:scale-110 transition">
          <i class='bx text-3xl' :class="brand"></i>
        </li>
        <template v-if="skill.library">
          <li v-for="library in skill.library" :key="library" :title="library"
            class="-skew-x-6 text-primary hover:scale-110 transition mx-4 inline-block">{{ library }}</li>
        </template>
      </ul>
    </Transition>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
const skills = [
  {
    title: 'Frontend developer',
    subtitle: 'More than 4 years',
    icon: 'bx-code-curly',
    brands: ['bxl-javascript', 'bxl-css3', 'bxl-tailwind-css', 'bxl-vuejs', 'bxl-html5', 'bxl-git', 'bxl-sass'],
    library: ['PhaserJS', 'ThreeJS', 'BabylonJS', 'HighchartJS', 'DayJS']
  },
  {
    title: 'Backend developer',
    subtitle: 'More than 2 years',
    icon: 'bx-code-block',
    brands: ['bxl-nodejs', 'bxl-mongodb']
  },
  {
    title: 'Others',
    subtitle: 'More other skills',
    icon: 'bx-edit-alt',
    brands: ['bxl-blender', 'bxl-figma']
  },
]

const folderIndex = ref(0)

const folderHandler = index => {
  if (folderIndex.value === index) {
    folderIndex.value = null
  } else {
    folderIndex.value = index
  }
}
</script>