<template>
  <div class=" container mx-auto px-10 grid md:grid-cols-2">
    <div class="flex items-center mb-10" v-for="item in contactList" :key="item.icon">
      <span class=" shrink-0 mr-4">
        <i :class="item.icon" class='bx text-3xl text-primary align-middle'></i>
      </span>
      <div class="w-full">
        <h3 class=" text-xl">{{ item.title }}</h3>
        <p class="text-gray-500 dark:text-gray-300">
          <a v-if="item.href" :href="item.href + item.detail">
            {{ item.detail }}
          </a>
          <template v-else>
            {{ item.detail }}
          </template>
        </p>
      </div>
    </div>
    <form class="grid grid-cols-1 gap-6 md:grid-cols-2 md:col-start-2 md:row-start-1 md:row-span-3"
      @submit.prevent="sendMail">
      <input minlength="1" maxlength="30"
        :disabled="loading"
        v-model="formContent.user_name"
        class=" dark:placeholder:text-white dark:bg-slate-700 bg-gray-200 p-3 focus:bg-white focus:ring-primary focus:ring transition border-none rounded" type="text"
        placeholder="Name" required>
      <input minlength="3" maxlength="40"
        :disabled="loading"
        v-model="formContent.user_email"
        class="dark:placeholder:text-white dark:bg-slate-700 bg-gray-200 p-3 focus:bg-white focus:ring-primary focus:ring transition border-none rounded" type="email"
        placeholder="Email" required>
      <textarea minlength="1" id="form-content"
        :disabled="loading"
        v-model="formContent.user_content"
        class="dark:placeholder:text-white dark:bg-slate-700 resize-none md:col-span-2 bg-gray-200 focus:bg-white focus:ring-primary focus:ring transition border-none rounded"
        required placeholder="Content" cols="30" rows="8"></textarea>
      <div v-if="loading">Loading...</div>
      <div v-if="success">Submit Success!!</div>
      <div v-if="error">Somethings Wrong~ Try Next Time~</div>
      <button
        :disabled="loading"
        class="hover:opacity-80 transition bg-primary p-4 rounded-xl text-white" type="submit">
        <span class=" inline-block align-middle mr-2">Contact Me </span>
        <i class='bx bx-sm bx-mail-send align-middle'></i>
      </button>
    </form>
  </div>
</template>


<script setup>
import { reactive, ref } from 'vue'
import emailjs from '@emailjs/browser'

const serviceID = 'default_service'
const templateID = 'template_pvmit3b'

const publicID = 'hzAph-Kjy8KDvJdFw'

const formContent = reactive({
  user_email: '',
  user_name: '',
  user_content: ''
})

const loading = ref(false)
const success = ref(false)
const error = ref(false)

const resetFormContent = () => {
  formContent.user_content = ''
  formContent.user_name = ''
  formContent.user_email = ''
}

const sendMail = async () => {
  loading.value = true
  success.value = false
  error.value = false
  try {
    await emailjs.send(
      serviceID,
      templateID,
      {
        user_name: formContent.user_name,
        user_email: formContent.user_email,
        user_content: formContent.user_content
      },
      publicID
    )
    success.value = true
    resetFormContent()
  } catch (error) {
    error.value = true
  }
  loading.value = false
}

const contactList = [
  {
    icon: 'bx-phone',
    title: 'Call Me',
    detail: '0968-841-641',
    href: 'tel:'
  },
  {
    icon: 'bx-mail-send',
    title: 'Email',
    detail: 'bobhus394@gmail.com',
    href: 'mailto:'
  },
  {
    icon: 'bx-map-pin',
    title: 'Location',
    detail: 'New Taipei City',
    href: ''
  }
]
</script>