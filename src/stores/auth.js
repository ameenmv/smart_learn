import { authApi } from '@/api/auth'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

/**
 * Extract token from any response format the backend might use.
 * Handles: { token }, { access_token }, { data: { token } }, etc.
 */
function extractToken(data) {
  return data?.token || data?.access_token || data?.data?.token || data?.data?.access_token || null
}

/**
 * Extract user from any response format.
 * Handles: { user }, { data: { user } }, etc.
 */
function extractUser(data) {
  return data?.user || data?.data?.user || null
}

export const useAuthStore = defineStore('auth', () => {
  // ── State ────────────────────────────────────────────────────────
  const token = ref(localStorage.getItem('auth_token') || null)
  const user = ref(JSON.parse(localStorage.getItem('auth_user') || 'null'))
  const loading = ref(false)

  // ── Getters ──────────────────────────────────────────────────────
  const isAuthenticated = computed(() => !!token.value)
  const userRole = computed(() => user.value?.role || null)

  // ── Helpers ──────────────────────────────────────────────────────
  function _persist(newToken, newUser) {
    token.value = newToken
    user.value = newUser
    localStorage.setItem('auth_token', newToken)
    if (newUser) {
      localStorage.setItem('auth_user', JSON.stringify(newUser))
    }
    console.log('[Auth] Token stored:', newToken ? '✅' : '❌')
    console.log('[Auth] User stored:', newUser ? '✅' : '❌')
  }

  // ── Actions ──────────────────────────────────────────────────────

  async function register(payload) {
    loading.value = true
    try {
      const { data } = await authApi.register(payload)
      console.log('[Auth] Register raw response:', JSON.stringify(data))

      const responseToken = extractToken(data)
      const responseUser = extractUser(data)

      console.log('[Auth] Extracted token:', responseToken)
      console.log('[Auth] Extracted user:', responseUser)

      if (responseToken) {
        _persist(responseToken, responseUser)
      } else {
        console.warn('[Auth] ⚠️ No token found in register response!')
      }

      return data
    } finally {
      loading.value = false
    }
  }

  async function login(payload) {
    loading.value = true
    try {
      const { data } = await authApi.login(payload)
      console.log('[Auth] Login raw response:', JSON.stringify(data))

      const responseToken = extractToken(data)
      const responseUser = extractUser(data)

      console.log('[Auth] Extracted token:', responseToken)
      console.log('[Auth] Extracted user:', responseUser)

      if (responseToken) {
        _persist(responseToken, responseUser)
      } else {
        console.warn('[Auth] ⚠️ No token found in login response!')
      }

      return data
    } finally {
      loading.value = false
    }
  }

  async function logout() {
    try {
      await authApi.logout()
    } catch {
      // Even if the server call fails, we still clear local state
    } finally {
      clearSession()
    }
  }

  async function fetchUser() {
    if (!token.value) return null
    loading.value = true
    try {
      const { data } = await authApi.getUser()
      user.value = data.user || data.data?.user || data
      localStorage.setItem('auth_user', JSON.stringify(user.value))
      return user.value
    } catch (err) {
      console.warn('[Auth] fetchUser failed:', err.message)
      // Don't clear session here — token might still be valid
      return null
    } finally {
      loading.value = false
    }
  }

  function clearSession() {
    token.value = null
    user.value = null
    localStorage.removeItem('auth_token')
    localStorage.removeItem('auth_user')
  }

  return {
    token,
    user,
    loading,
    isAuthenticated,
    userRole,
    register,
    login,
    logout,
    fetchUser,
    clearSession,
  }
})
