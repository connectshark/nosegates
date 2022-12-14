import { ref } from 'vue'

const MAIL_URI = import.meta.env.VITE_MAIL_API_URI

const emailSender = async ({ title, email, content }) => {
  const body = JSON.stringify({ title, content, to: email })
  return new Promise((resolve, reject) => {
    fetch(MAIL_URI + `/mail/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        reject(res)
      }
    })
    .then(res => {
      resolve(res)
    })
    .catch(err => {
      reject(err)
    })
  })
}

const useMailer = () => {
  const loading = ref(false)
  const success = ref(false)
  const error = ref(false)

  const send = async (mails) => {
    loading.value = true
    success.value = false
    error.value = false

    try {
      await emailSender(mails[0])
      await emailSender(mails[1])
      loading.value = false
      success.value = true
    } catch (err) {
      loading.value = false
      error.value = true
    }
  }

  return {
    send,
    loading,
    success,
    error
  }
}

export default useMailer