import { ref } from 'vue'

const MAIL_URI = import.meta.env.VITE_MAIL_API_URI

const emailSender = async ({ title, email, content }) => {
  const body = JSON.stringify({ title, content, to: email })
  const fetch_response = await fetch(MAIL_URI + `/mail/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body
  })
  return await fetch_response.json()
}

const useMailer = () => {
  const loading = ref(false)
  const success = ref(false)
  const error = ref(false)
  const send = async (severalMails) => {
    loading.value = true
    success.value = false
    error.value = false

    for (let i = 0; i < severalMails.length; i++) {
      const mail = severalMails[i];
      await emailSender(mail)
    }

    loading.value = false
    success.value = true
  }

  return {
    send,
    loading,
    success,
    error
  }
}

export default useMailer