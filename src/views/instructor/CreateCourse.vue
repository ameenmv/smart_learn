<template>
   <div class="flex flex-col min-h-screen bg-bg-base text-text-main transition-colors duration-300">
      <!-- Header -->
      <header
         class="sticky top-0 z-10 bg-bg-surface/80 backdrop-blur-md border-b border-border-base px-8 h-16 flex items-center justify-between transition-colors duration-300">
         <div class="flex items-center gap-4">
            <div class="flex items-center gap-3">
               <div class="flex items-center justify-center w-10 h-10 bg-primary rounded-[10px]">
                  <span class="material-symbols-outlined text-white text-[24px]">school</span>
               </div>
               <span class="text-2xl font-bold text-text-main tracking-tight font-[Inter]">Smart Learn</span>
            </div>
            <div class="w-px h-6 bg-border-base mx-2 hidden md:block"></div>
            <h2 class="text-xl font-black tracking-tight hidden md:block text-text-main">إنشاء دورة جديدة</h2>
         </div>
         <div class="flex items-center gap-3">
            <button @click="router.push('/instructor/courses')"
               class="px-5 py-2 rounded-lg border border-border-base font-bold text-sm hover:bg-bg-base transition-colors cursor-pointer text-text-main">
               إلغاء
            </button>
            <button @click="submitCourse('draft')" :disabled="isSubmitting"
               class="px-5 py-2 rounded-lg border border-border-base font-bold text-sm hover:bg-bg-base transition-colors cursor-pointer text-text-main disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
               <span v-if="isSubmitting && submitType === 'draft'"
                  class="size-4 border-2 border-text-muted/30 border-t-text-main rounded-full animate-spin"></span>
               <span>حفظ كمسودة</span>
            </button>
            <button @click="submitCourse('active')" :disabled="isSubmitting"
               class="bg-primary text-white px-6 py-2 rounded-lg font-bold text-sm shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
               <span v-if="isSubmitting && submitType === 'active'"
                  class="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
               <span>نشر الدورة</span>
               <span v-if="!isSubmitting" class="material-symbols-outlined text-lg">rocket_launch</span>
            </button>
         </div>
      </header>

      <!-- Toast -->
      <Transition name="toast">
         <div v-if="toast.show"
            class="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-4 rounded-xl shadow-xl border backdrop-blur-md transition-all duration-300 min-w-[320px] cursor-pointer hover:scale-[1.02]"
            :class="toast.type === 'success' ? 'bg-emerald-50/90 border-emerald-200 dark:bg-emerald-900/90 dark:border-emerald-800' : 'bg-red-50/90 border-red-200 dark:bg-red-900/90 dark:border-red-800'"
            @click="hideToast">
            <div class="p-2 rounded-full"
               :class="toast.type === 'success' ? 'bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-200' : 'bg-red-100 dark:bg-red-800 text-red-600 dark:text-red-200'">
               <span class="material-symbols-outlined text-xl">{{ toast.type === 'success' ? 'check_circle' : 'error'
                  }}</span>
            </div>
            <div class="flex flex-col flex-1">
               <h4 class="font-bold text-sm"
                  :class="toast.type === 'success' ? 'text-emerald-900 dark:text-emerald-100' : 'text-red-900 dark:text-red-100'">
                  {{ toast.title }}</h4>
               <p class="text-xs opacity-90"
                  :class="toast.type === 'success' ? 'text-emerald-800 dark:text-emerald-200' : 'text-red-800 dark:text-red-200'">
                  {{ toast.message }}</p>
            </div>
            <button class="hover:bg-black/5 dark:hover:bg-white/5 rounded-full p-1 transition-colors">
               <span class="material-symbols-outlined text-lg opacity-60">close</span>
            </button>
         </div>
      </Transition>

      <!-- Content -->
      <div class="p-8 max-w-[800px] mx-auto w-full">
         <div class="mb-8">
            <nav class="flex items-center gap-2 text-sm text-text-muted mb-4">
               <RouterLink to="/instructor/courses" class="hover:text-primary transition-colors cursor-pointer">إدارة
                  الدورات</RouterLink>
               <span class="material-symbols-outlined text-xs">chevron_left</span>
               <span class="text-text-main font-semibold">إنشاء دورة جديدة</span>
            </nav>
         </div>

         <!-- General Error -->
         <div v-if="generalError"
            class="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm font-bold flex items-center gap-3">
            <span class="material-symbols-outlined">error</span>
            {{ generalError }}
         </div>

         <div class="space-y-6">
            <!-- Basic Info -->
            <div
               class="bg-bg-surface p-6 rounded-2xl border border-border-base shadow-sm transition-colors duration-300">
               <div class="flex items-center gap-3 mb-6">
                  <div class="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                     <span class="material-symbols-outlined">info</span>
                  </div>
                  <h3 class="text-lg font-black text-text-main">المعلومات الأساسية</h3>
               </div>

               <div class="grid grid-cols-1 gap-6">
                  <!-- Title -->
                  <div>
                     <label class="block text-sm font-bold mb-2 text-text-main">عنوان الدورة <span
                           class="text-red-500">*</span></label>
                     <input v-model="form.title" type="text"
                        class="w-full h-12 px-4 rounded-xl border bg-bg-surface text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-text-muted/50"
                        :class="getError('title') ? 'border-red-400' : 'border-border-base'"
                        placeholder="مثال: مقدمة في البرمجة بلغة Python" />
                     <p v-if="getError('title')" class="mt-1.5 text-xs text-red-500 font-bold">{{ getError('title') }}
                     </p>
                  </div>

                  <!-- Code & Level -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                        <label class="block text-sm font-bold mb-2 text-text-main">كود الدورة <span
                              class="text-red-500">*</span></label>
                        <input v-model="form.code" type="text" dir="ltr"
                           class="w-full h-12 px-4 rounded-xl border bg-bg-surface text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-text-muted/50 uppercase"
                           :class="getError('code') ? 'border-red-400' : 'border-border-base'"
                           placeholder="مثال: CS101" />
                        <p v-if="getError('code')" class="mt-1.5 text-xs text-red-500 font-bold">{{ getError('code') }}
                        </p>
                     </div>
                     <div>
                        <label class="block text-sm font-bold mb-2 text-text-main">المستوى <span
                              class="text-red-500">*</span></label>
                        <select v-model="form.level"
                           class="w-full h-12 px-4 rounded-xl border bg-bg-surface text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none cursor-pointer"
                           :class="getError('level') ? 'border-red-400' : 'border-border-base'">
                           <option value="" disabled>اختر المستوى</option>
                           <option value="beginner">مبتدئ</option>
                           <option value="intermediate">متوسط</option>
                           <option value="advanced">متقدم</option>
                        </select>
                        <p v-if="getError('level')" class="mt-1.5 text-xs text-red-500 font-bold">{{ getError('level')
                           }}</p>
                     </div>
                  </div>

                  <!-- Description -->
                  <div>
                     <label class="block text-sm font-bold mb-2 text-text-main">وصف الدورة <span
                           class="text-red-500">*</span></label>
                     <textarea v-model="form.description" rows="4"
                        class="w-full px-4 py-3 rounded-xl border bg-bg-surface text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-y min-h-[120px] placeholder:text-text-muted/50"
                        :class="getError('description') ? 'border-red-400' : 'border-border-base'"
                        placeholder="اكتب وصفاً تفصيلياً للدورة ومحتوياتها..."></textarea>
                     <p v-if="getError('description')" class="mt-1.5 text-xs text-red-500 font-bold">{{
                        getError('description') }}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import { coursesApi } from '@/api/courses'
import { useApiErrors } from '@/composables/useApiErrors'
import { useToast } from '@/composables/useToast'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const { toast, showToast, hideToast } = useToast()
const { setErrors, clearErrors, getError, getGeneralError } = useApiErrors()

const isSubmitting = ref(false)
const submitType = ref('')
const generalError = ref('')

const form = reactive({
   title: '',
   description: '',
   level: '',
   code: '',
})

async function submitCourse(status) {
   clearErrors()
   generalError.value = ''
   isSubmitting.value = true
   submitType.value = status

   try {
      await coursesApi.createCourse({ ...form, status })

      showToast(
         status === 'draft' ? 'تم الحفظ' : 'تم إنشاء الدورة',
         status === 'draft' ? 'تم حفظ الدورة كمسودة بنجاح' : 'تم إنشاء الدورة ونشرها بنجاح',
         'success'
      )

      setTimeout(() => {
         router.push('/instructor/courses')
      }, 1500)
   } catch (error) {
      setErrors(error)
      generalError.value = getGeneralError(error)
      showToast('خطأ', generalError.value, 'error')
   } finally {
      isSubmitting.value = false
      submitType.value = ''
   }
}
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
   transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
   opacity: 0;
   transform: translate(-50%, 20px);
}
</style>
