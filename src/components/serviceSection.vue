<template>
  <li class="shadow-lg p-4 pt-20 hover:shadow-sxl transition-shadow dark:bg-primary/10">
    <p class=" mb-6">
      <i class='bx text-primary text-3xl' :class="props.icon"></i>
    </p>
    <h3 class="mb-4 text-xl font-bold">{{ props.title }}</h3>
    <button class=" group" @click="showModal = true">
      <p class=" text-primary">View More <i class='bx bxs-right-arrow group-hover:translate-x-1 transition'></i></p>
    </button>
    <Teleport to="#modal">
      <transition
        enter-active-class="ease-out duration-300"
        leave-active-class="ease-in duration-200"
        enter-to-class="opacity-100"
        leave-from-class="opacity-100"
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
      >
        <Modal v-show="showModal" :closeModal="closeModal">
          <div class="mb-8 flex items-center justify-between">
            <h4 class="text-xl">{{ props.title }}</h4>
            <button @click="showModal = false"><i class='bx bx-x-circle bx-sm'></i></button>
          </div>
          <p class="tracking-wider mb-4" v-for="description in props.description"><i
              class='bx bx-check-circle'></i>{{ description }}</p>
        </Modal>
      </transition>
    </Teleport>
  </li>
</template>

<script setup>
import { ref } from 'vue'
import Modal from '../components/modal.vue'
const showModal = ref(false)

const props = defineProps({
  title: String,
  icon: String,
  description: Array
})

const closeModal = () => {
  showModal.value = false
}
</script>