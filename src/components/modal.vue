<template>
  <div class=" fixed left-0 top-0 w-full h-screen bg-black/50 grid place-items-center z-20" @click="closeModal">
    <div
      aria-labelledby="modal-headline"
      role="dialog"
      aria-modal="true"
      class=" max-w-lg w-2/3 h-1/2 bg-white rounded p-6" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  closeModal: Function
})
</script>