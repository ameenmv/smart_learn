import apiClient from './client'

/**
 * Student-specific API endpoints.
 */
export const studentApi = {
  /**
   * List all available courses for the student.
   * GET /api/student/courses
   */
  getAvailableCourses() {
    return apiClient.get('/student/courses')
  },

  /**
   * Get the student's enrolled courses.
   * GET /api/student/my-courses
   */
  getMyEnrolledCourses() {
    return apiClient.get('/student/my-courses')
  },

  /**
   * Get course details (student view).
   * GET /api/student/courses/{courseId}
   * @param {number} courseId
   */
  getCourseDetails(courseId) {
    return apiClient.get(`/student/courses/${courseId}`)
  },

  /**
   * Enroll in a course.
   * POST /api/student/courses/{courseId}/enroll
   * @param {number} courseId
   */
  enrollInCourse(courseId) {
    return apiClient.post(`/student/courses/${courseId}/enroll`)
  },

  /**
   * View a specific lecture within a course.
   * GET /api/student/courses/{courseId}/lectures/{lectureId}
   * @param {number} courseId
   * @param {number} lectureId
   */
  getLecture(courseId, lectureId) {
    return apiClient.get(`/student/courses/${courseId}/lectures/${lectureId}`)
  },

  /**
   * Add a note to a lecture.
   * POST /api/student/lectures/{lectureId}/notes
   * @param {number} lectureId
   * @param {{ content: string }} payload
   */
  addLectureNote(lectureId, payload) {
    return apiClient.post(`/student/lectures/${lectureId}/notes`, payload)
  },
}
