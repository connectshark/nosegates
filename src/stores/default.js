import { defineStore } from 'pinia'

export const useDefaultStore = defineStore('default', () => {
  const count = 0

  return {
    count
  }
})
