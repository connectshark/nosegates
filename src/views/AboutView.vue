<template>
  <div class="max-w-5xl mx-auto text-center p-10">
    <h2 class="text-3xl">Side Project</h2>
    <section class=" py-4">
      <ul>
        <li v-for="project in projects" :key="project.link">
          <a
            class="hover:bg-sky-600 hover:text-white border border-sky-600 rounded-xl inline-block mb-4 p-2 text-sky-600"
            :href="project.github"
            target="_blank"
          >
            {{ project.name }}
            <i class="bx bx-link-external"></i>
          </a>
          <a
            class="hover:bg-sky-600 ml-4 hover:text-white border border-sky-600 rounded-xl inline-block mb-4 p-2 text-sky-600"
            :href="project.github"
            target="_blank"
          ><i class='bx bxl-github'></i></a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
const projects = [
  {
    github: 'https://github.com/connectshark/monty-hall-game',
    link: 'https://connectshark.github.io/monty-hall-game/#/',
    name: '決勝21點的經典小遊戲'
  },
  {
    name: '蝦皮縮網址',
    link: 'https://shopee.nosegates.com/',
    github: 'https://github.com/connectshark/shopee-short-link'
  },
  {
    name: '我的訓練家卡牌',
    link: 'https://connectshark.github.io/trainer-card/index.html',
    github: 'https://github.com/connectshark/trainer-card'
  }
]
</script>