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
        @focus.once="wakeUp()"
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
import { reactive, watchEffect } from 'vue'
import useMailer from '../composable/useMailer'

const formContent = reactive({
  user_email: '',
  user_name: '',
  user_content: ''
})

const resetFormContent = () => {
  formContent.user_content = ''
  formContent.user_name = ''
  formContent.user_email = ''
}

const {
  loading,
  success,
  error,
  send,
  wakeUp
} = useMailer()
const sendMail = async () => {
  await send([{
    title: 'Hi 感謝你的聯繫',
    email: formContent.user_email,
    content: `
      HI! 已經收到你填寫的內容
      通常會在3天內回覆
    `
  }, {
    title: '有人填寫nosegates.com上的表單囉！',
    email: 'bobhus394@gmail.com',
    content: `
      填寫人: ${formContent.user_name}
      填寫人EMAIL: ${formContent.user_email}
      填寫內容: ${formContent.user_content}
    `
  }])
}

watchEffect(() => {
  if (success.value) {
    resetFormContent()
  }
})

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