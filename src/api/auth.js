import apiClient from './client'

/**
 * Authentication API endpoints.
 * Each method returns the Axios promise directly — 
 * error handling is done by the caller (store or component).
 */
export const authApi = {
  /**
   * Register a new user.
   * @param {{ name: string, email: string, password: string, role: string, university_id: string }} payload
   */
  register(payload) {
    return apiClient.post('/auth/register', payload)
  },

  /**
   * Login an existing user.
   * @param {{ email: string, password: string }} payload
   */
  login(payload) {
    return apiClient.post('/auth/login', payload)
  },

  /**
   * Logout the current user (invalidate token on server).
   */
  logout() {
    return apiClient.post('/auth/logout')
  },

  /**
   * Get the current authenticated user's profile.
   */
  getUser() {
    return apiClient.get('/auth/user')
  },
}
