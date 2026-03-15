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
   * Create a lecture under a course.
   * POST /api/courses/{courseId}/lectures
   * @param {number} courseId
   * @param {{ title: string, description: string, content: string, status: string, attachment: string, order: number }} payload
   */
  createLecture(courseId, payload) {
    return apiClient.post(`/courses/${courseId}/lectures`, payload)
  },

  /**
   * Upload lecture video.
   * POST /api/lectures/{lectureId}/video
   * @param {number} lectureId
   * @param {{ video_url: string, video_path: string, video_duration: string }} payload
   */
  uploadLectureVideo(lectureId, payload) {
    return apiClient.post(`/lectures/${lectureId}/video`, payload)
  },

  /**
   * Create course certificate template.
   * POST /api/courses/{courseId}/certificate
   * @param {number} courseId
   * @param {{ template: string, enabled: string, auto_send: string, has_qr: string }} payload
   */
  createCertificate(courseId, payload) {
    return apiClient.post(`/courses/${courseId}/certificate`, payload)
  },

  /**
   * Get instructor's own courses.
   * GET /api/my-courses
   */
  getMyCourses() {
    return apiClient.get('/my-courses')
  },

  /**
   * Get course details.
   * GET /api/courses/{id}
   * @param {number} id
   */
  getCourse(id) {
    return apiClient.get(`/courses/${id}`)
  },

  /**
   * Update a course.
   * PUT /api/courses/{id}
   * @param {number} id
   * @param {{ title: string, description: string, level: string, code: string, status: string }} payload
   */
  updateCourse(id, payload) {
    return apiClient.put(`/courses/${id}`, payload)
  },

  /**
   * Delete a course.
   * DELETE /api/courses/{id}
   * @param {number} id
   */
  deleteCourse(id) {
    return apiClient.delete(`/courses/${id}`)
  },

  /**
   * Create a quiz under a course.
   * POST /api/courses/{courseId}/quizzes
   */
  createQuiz(courseId, payload) {
    return apiClient.post(`/courses/${courseId}/quizzes`, payload)
  },

  /**
   * Add a question to a quiz.
   * POST /api/quizzes/{quizId}/questions
   */
  addQuizQuestion(quizId, payload) {
    return apiClient.post(`/quizzes/${quizId}/questions`, payload)
  },

  /**
   * Publish a quiz.
   * POST /api/quizzes/{quizId}/publish
   */
  publishQuiz(quizId) {
    return apiClient.post(`/quizzes/${quizId}/publish`)
  },

  // ── Assignments ─────────────────────────────────────────────────────

  /**
   * Create assignment under a lecture.
   * POST /api/lectures/{lectureId}/assignments
   */
  createAssignment(lectureId, payload) {
    return apiClient.post(`/lectures/${lectureId}/assignments`, payload)
  },

  /**
   * Get assignment submissions.
   * GET /api/assignment/{assignmentId}/submissions
   */
  getAssignmentSubmissions(assignmentId) {
    return apiClient.get(`/assignment/${assignmentId}/submissions`)
  },

  /**
   * Grade a submission.
   * POST /api/submission/{submissionId}/grade
   */
  gradeSubmission(submissionId, payload) {
    return apiClient.post(`/submission/${submissionId}/grade`, payload)
  },

  // ── Students ────────────────────────────────────────────────────────

  /**
   * Get students in a course.
   * GET /api/instructor/courses/{courseId}/students
   */
  getCourseStudents(courseId) {
    return apiClient.get(`/instructor/courses/${courseId}/students`)
  },

  /**
   * Update enrollment status (approve/reject).
   * PATCH /api/courses/{courseId}/students/{studentId}/status
   */
  updateEnrollmentStatus(courseId, studentId, payload) {
    return apiClient.patch(`/courses/${courseId}/students/${studentId}/status`, payload)
  },

  // ── Certificates ────────────────────────────────────────────────────

  /**
   * Issue certificate for a student.
   * POST /api/student/{courseId}/certificate
   */
  issueCertificate(courseId) {
    return apiClient.post(`/student/${courseId}/certificate`)
  },
}
