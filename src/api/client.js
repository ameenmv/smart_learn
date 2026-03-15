import axios from 'axios'

/**
 * Axios instance configured for the Smart Learn API.
 *
 * NOTE: We read the token directly from localStorage (instead of importing
 * the auth store) to avoid a circular dependency chain:
 *   Router → store → api → client → Router  ← breaks here
 */
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://smart-learn-back.test/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 15000,
})

// ── Request Interceptor ─────────────────────────────────────────────
apiClient.interceptors.request.use(
  (config) => {
    // Read token directly from localStorage to avoid circular dependency
    const token = localStorage.getItem('auth_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    // Let Axios set the correct Content-Type (with boundary) for FormData
    if (config.data instanceof FormData) {
      delete config.headers['Content-Type']
    }
    return config
  },
  (error) => Promise.reject(error)
)

// ── Response Interceptor ────────────────────────────────────────────
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 Unauthorized — session expired or invalid token
    if (error.response?.status === 401) {
      const requestUrl = error.config?.url || ''
      const isAuthEndpoint = requestUrl.includes('/auth/login') || requestUrl.includes('/auth/register')
      const isOnAuthPage = window.location.pathname === '/login' || window.location.pathname === '/register'

      // Only redirect if this is NOT a login/register attempt
      // (401 on login means wrong credentials, not expired session)
      if (!isAuthEndpoint && !isOnAuthPage) {
        localStorage.removeItem('auth_token')
        localStorage.removeItem('auth_user')
        window.location.href = '/login'
      }
    }

    return Promise.reject(error)
  }
)

export default apiClient
