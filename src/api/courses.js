import apiClient from './client'

/**
 * Courses API endpoints.
 */
export const coursesApi = {
  /**
   * Create a new course.
   * POST /api/courses
   * @param {{ title: string, description: string, level: string, code: string, status: string }} payload
   */
  createCourse(payload) {
    return apiClient.post('/courses', payload)
  },

  /**
   * Get instructor's own courses.
   * GET /api/my-courses
   */
  getMyCourses() {
    return apiClient.get('/my-courses')
  },

  /**
   * Delete a course.
   * DELETE /api/courses/{id}
   * @param {number} id
   */
  deleteCourse(id) {
    return apiClient.delete(`/courses/${id}`)
  },
}
