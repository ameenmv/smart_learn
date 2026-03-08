import { reactive } from 'vue'

/**
 * Composable for handling API validation errors (422 responses from Laravel).
 *
 * Usage:
 *   const { errors, setErrors, clearErrors, getError } = useApiErrors()
 *
 *   try { ... } catch (e) { setErrors(e) }
 *
 *   // In template: <span v-if="getError('email')">{{ getError('email') }}</span>
 */
export function useApiErrors() {
  const errors = reactive({})

  /**
   * Parse and set errors from an Axios error response.
   * Supports Laravel's standard validation format: { errors: { field: ['msg'] } }
   */
  function setErrors(axiosError) {
    clearErrors()

    const response = axiosError?.response

    if (response?.status === 422 && response.data?.errors) {
      // Laravel returns: { errors: { email: ["The email field is required."], ... } }
      const serverErrors = response.data.errors
      for (const field in serverErrors) {
        // Take the first error message per field
        errors[field] = Array.isArray(serverErrors[field])
          ? serverErrors[field][0]
          : serverErrors[field]
      }
    }
  }

  /**
   * Get the error message for a specific field, or null if none.
   */
  function getError(field) {
    return errors[field] || null
  }

  /**
   * Check if a specific field has an error.
   */
  function hasError(field) {
    return !!errors[field]
  }

  /**
   * Clear all errors.
   */
  function clearErrors() {
    for (const key in errors) {
      delete errors[key]
    }
  }

  /**
   * Get a general error message from the response (non-field error).
   */
  function getGeneralError(axiosError) {
    const response = axiosError?.response
    if (!response) return 'حدث خطأ في الاتصال بالسيرفر. تأكد من اتصالك بالإنترنت.'

    const msg = response.data?.message
    if (msg) return msg

    // Fallback by status code
    const statusMessages = {
      400: 'طلب غير صالح.',
      401: 'بيانات الدخول غير صحيحة.',
      403: 'ليس لديك صلاحية لهذا الإجراء.',
      404: 'المورد المطلوب غير موجود.',
      429: 'تم تجاوز عدد المحاولات المسموح بها. حاول لاحقاً.',
      500: 'حدث خطأ في السيرفر. حاول مرة أخرى.',
    }

    return statusMessages[response.status] || 'حدث خطأ غير متوقع.'
  }

  return { errors, setErrors, clearErrors, getError, hasError, getGeneralError }
}
