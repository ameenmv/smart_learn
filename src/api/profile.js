import apiClient from './client'

/**
 * Profile API endpoints.
 */
export const profileApi = {
  /**
   * Get the current user's profile.
   * GET /api/profile
   */
  getProfile() {
    return apiClient.get('/profile')
  },

  /**
   * Update profile info (name, email, phone, profile_image, etc.)
   * PUT /api/update
   * @param {Object|FormData} payload
   */
  updateProfile(payload) {
    // If payload is FormData (has image), set proper headers
    if (payload instanceof FormData) {
      return apiClient.put('/update', payload, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
    }
    return apiClient.put('/update', payload)
  },

  /**
   * Change password.
   * PUT /api/change-password
   * @param {{ current_password: string, new_password: string, new_password_confirmation: string }} payload
   */
  changePassword(payload) {
    return apiClient.put('/change-password', payload)
  },

  /**
   * Delete account.
   * DELETE /api/delete-account
   */
  deleteAccount() {
    return apiClient.delete('/delete-account')
  },
}
