import apiClient from './client'

/**
 * Chat / AI Assistant API endpoints.
 */
export const chatApi = {
  /**
   * Start a new chatbot conversation.
   * POST /api/chat/start
   */
  startConversation() {
    return apiClient.post('/chat/start')
  },

  /**
   * Send a message in an existing conversation.
   * POST /api/chat/{conversationId}/send
   * @param {number} conversationId
   * @param {{ message: string }} payload
   */
  sendMessage(conversationId, payload) {
    return apiClient.post(`/chat/${conversationId}/send`, payload)
  },

  /**
   * Get all messages in a conversation.
   * GET /api/chat/{conversationId}/messages
   * @param {number} conversationId
   */
  getMessages(conversationId) {
    return apiClient.get(`/chat/${conversationId}/messages`)
  },

  /**
   * List all conversations for the current user.
   * GET /api/chat/conversations
   */
  getConversations() {
    return apiClient.get('/chat/conversations')
  },

  /**
   * Delete a conversation.
   * DELETE /api/chat/{conversationId}
   * @param {number} conversationId
   */
  deleteConversation(conversationId) {
    return apiClient.delete(`/chat/${conversationId}`)
  },
}
