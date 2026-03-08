import { reactive } from 'vue'

/**
 * Global toast state — shared across all components that use this composable.
 * Defined outside the composable so every call to useToast() returns the SAME state.
 */
const state = reactive({
  show: false,
  title: '',
  message: '',
  type: 'success', // 'success' | 'error'
})

let hideTimer = null

/**
 * Composable for displaying toast notifications.
 * 
 * Usage:
 *   const { toast, showToast } = useToast()
 *   showToast('عنوان', 'رسالة', 'success')
 */
export function useToast() {
  /**
   * Show a toast notification.
   * @param {string} title
   * @param {string} message
   * @param {'success' | 'error'} type
   * @param {number} duration — auto-hide delay in ms (default 3500)
   */
  function showToast(title, message, type = 'success', duration = 3500) {
    // Clear any pending hide timer
    if (hideTimer) clearTimeout(hideTimer)

    state.title = title
    state.message = message
    state.type = type
    state.show = true

    hideTimer = setTimeout(() => {
      state.show = false
    }, duration)
  }

  function hideToast() {
    if (hideTimer) clearTimeout(hideTimer)
    state.show = false
  }

  return { toast: state, showToast, hideToast }
}
