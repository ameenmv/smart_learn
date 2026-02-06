import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  
  function setUser(u) {
    user.value = u
  }

  return { user, setUser }
})
