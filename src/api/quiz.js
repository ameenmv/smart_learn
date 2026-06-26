import apiClient from './client'

/**
 * Quiz API endpoints (student-facing).
 */
export const quizApi = {
  /**
   * Get quiz details and questions.
   * GET /api/quiz/{quizId}
   * @param {number} quizId
   */
  getQuiz(quizId) {
    return apiClient.get(`/quiz/${quizId}`)
  },

  /**
   * Start a quiz attempt.
   * POST /api/quiz/{quizId}/start
   * @param {number} quizId
   */
  startQuiz(quizId) {
    return apiClient.post(`/quiz/${quizId}/start`)
  },

  /**
   * Submit answers for a quiz attempt.
   * POST /api/quiz/attempt/{attemptId}/submit
   * @param {number} attemptId
   * @param {{ answers: Array<{ question_id: number, option_id: number }> }} payload
   */
  submitQuizAttempt(attemptId, payload) {
    return apiClient.post(`/quiz/attempt/${attemptId}/submit`, payload)
  },
}
