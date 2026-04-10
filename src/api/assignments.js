import apiClient from './client'

/**
 * Assignment API endpoints (student-facing).
 */
export const assignmentsApi = {
  /**
   * Get assignment details.
   * GET /api/assignment/{id}
   * @param {number} id
   */
  getAssignment(id) {
    return apiClient.get(`/assignment/${id}`)
  },

  /**
   * Submit an assignment (file upload).
   * POST /api/assignment/{id}/submit
   * @param {number} id
   * @param {FormData} formData — must contain a 'file' field
   */
  submitAssignment(id, formData) {
    return apiClient.post(`/assignment/${id}/submit`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  },
}
