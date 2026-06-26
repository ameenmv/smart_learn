import apiClient from './client'

/**
 * Certificates API endpoints.
 */
export const certificatesApi = {
  /**
   * Get the current student's certificates.
   * GET /api/certificates
   */
  getMyCertificates() {
    return apiClient.get('/certificates')
  },
}
