import { onMounted, ref } from 'vue'

export default (url, options) => {
  const loading = ref(false)
  const result = ref(undefined)
  const doFetch = async () => {
    loading.value = true
    result.value = undefined
    const response = await fetch(url, options)
    result.value = await response.json()
    loading.value = false
  }

  onMounted(doFetch)

  return {
    loading,
    result,
    doFetch
  }
}