<template>
  <div class="mx-auto max-w-5xl w-5/6">
    <div v-for="(skill, index) in skills" :key="skill.title" class="w-full mb-10 transition md:inline-block md:w-1/2 md:align-top">
      <div class="flex items-center">
        <span class="text-primary w-16 shrink-0 text-center">
          <i class='bx bx-sm' :class="skill.icon" />
        </span>
        <div>
          <h3 class=" font-bold text-xl">{{ skill.title }}</h3>
          <p class=" text-gray-500 dark:text-gray-300">{{ skill.subtitle }}</p>
        </div>
      </div>
      <ul class=" w-full py-4">
        <li v-for="brand in skill.brands" class="inline-block mx-4 text-primary hover:scale-110 transition">
          <i class='bxl text-3xl' :class="brand" />
        </li>
        <template v-if="skill.library">
          <li v-for="library in skill.library" :key="library" :title="library" class="-skew-x-6 text-primary hover:scale-110 transition mx-4 inline-block">{{ library }}</li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script setup>
const skills = [
  {
    title: 'Frontend developer',
    subtitle: 'More than 6 years',
    icon: 'bx-bracket-curly',
    brands: ['bx-nuxt-js', 'bx-vuejs', 'bx-vite-js', 'bx-javascript', 'bx-css3', 'bx-tailwind-css', 'bx-three-js', 'bx-html5', 'bx-git'],
    library: ['PhaserJS', 'BabylonJS', 'HighchartJS', 'DayJS']
  },
  {
    title: 'Backend developer',
    subtitle: 'More than 3 years',
    icon: 'bx-folder-code',
    brands: ['bx-bun', 'bx-nodejs', 'bxl-mongodb']
  },
  {
    title: 'Others',
    subtitle: 'More other skills',
    icon: 'bx-edit-alt',
    brands: ['bx-openai', 'bx-xai', 'bx-cursor-ai', 'bx-google-antigravity', 'bx-blender', 'bx-figma']
  },
]
</script>