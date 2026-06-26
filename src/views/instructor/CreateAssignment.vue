<template>
  <div class="flex flex-col min-h-screen bg-bg-base text-text-main transition-colors duration-300">
    <!-- Header -->
    <header
      class="sticky top-0 z-10 bg-bg-surface/80 backdrop-blur-md border-b border-border-base px-8 h-16 flex items-center justify-between transition-colors duration-300">
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-3">
          <div class="flex items-center justify-center w-10 h-10 bg-primary rounded-[10px]">
            <span class="material-symbols-outlined text-white text-[24px]">assignment</span>
          </div>
          <span class="text-2xl font-bold text-text-main tracking-tight font-[Inter]">Smart Learn</span>
        </div>
        <div class="w-px h-6 bg-border-base mx-2 hidden md:block"></div>
        <h2 class="text-xl font-black tracking-tight hidden md:block text-text-main">إنشاء واجب</h2>
      </div>
      <div class="flex items-center gap-3">
        <button @click="router.push('/instructor/courses')"
          class="px-5 py-2 rounded-lg border border-border-base font-bold text-sm hover:bg-bg-base transition-colors cursor-pointer text-text-main">
          إلغاء
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
      </div>
    </Transition>

    <!-- Main -->
    <div class="p-8 max-w-[900px] mx-auto w-full flex-1">
      <nav class="flex items-center gap-2 text-sm text-text-muted mb-6">
        <RouterLink to="/instructor/courses" class="hover:text-primary transition-colors cursor-pointer">إدارة الدورات
        </RouterLink>
        <span class="material-symbols-outlined text-xs">chevron_left</span>
        <span class="text-text-main font-semibold">إنشاء واجب جديد</span>
      </nav>

      <!-- General Error -->
      <div v-if="generalError"
        class="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm font-bold flex items-center gap-3">
        <span class="material-symbols-outlined">error</span>
        {{ generalError }}
      </div>

      <!-- Success State -->
      <div v-if="isCreated" class="flex flex-col items-center justify-center py-16 text-center">
        <div class="size-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-6">
          <span class="material-symbols-outlined text-emerald-500 text-4xl">check_circle</span>
        </div>
        <h2 class="text-2xl font-black text-text-main mb-2">تم إنشاء الواجب بنجاح! 🎉</h2>
        <p class="text-text-muted font-medium mb-8">يمكن للطلاب الآن الوصول إليه وتقديم حلولهم</p>
        <RouterLink to="/instructor/courses"
          class="bg-primary text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all">
          العودة للدورات
        </RouterLink>
      </div>

      <!-- Form -->
      <div v-else class="space-y-6">
        <div class="bg-bg-surface p-6 rounded-2xl border border-border-base shadow-sm">
          <div class="flex items-center gap-3 mb-6">
            <div class="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <span class="material-symbols-outlined">edit_note</span>
            </div>
            <h3 class="text-lg font-black text-text-main">تفاصيل الواجب</h3>
          </div>
          <div class="grid grid-cols-1 gap-6">
            <!-- Title -->
            <div>
              <label class="block text-sm font-bold mb-2 text-text-main">عنوان الواجب <span
                  class="text-red-500">*</span></label>
              <input v-model="form.title" type="text"
                class="w-full h-12 px-4 rounded-xl border bg-bg-surface text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-text-muted/50"
                :class="getError('title') ? 'border-red-400' : 'border-border-base'"
                placeholder="مثال: تحليل الخوارزميات الجزء الأول" />
              <p v-if="getError('title')" class="mt-1.5 text-xs text-red-500 font-bold">{{ getError('title') }}</p>
            </div>

            <!-- Description -->
            <div>
              <label class="block text-sm font-bold mb-2 text-text-main">الوصف والتعليمات <span
                  class="text-red-500">*</span></label>
              <textarea v-model="form.description" rows="5"
                class="w-full px-4 py-3 rounded-xl border bg-bg-surface text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-text-muted/50 resize-none"
                :class="getError('description') ? 'border-red-400' : 'border-border-base'"
                placeholder="اكتب وصف الواجب والتعليمات المطلوبة هنا..."></textarea>
              <p v-if="getError('description')" class="mt-1.5 text-xs text-red-500 font-bold">{{ getError('description')
                }}</p>
            </div>

            <!-- Max Grade + Due Date -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-bold mb-2 text-text-main">الدرجة القصوى <span
                    class="text-red-500">*</span></label>
                <input v-model="form.max_grade" type="number" min="1" dir="ltr"
                  class="w-full h-12 px-4 rounded-xl border bg-bg-surface text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  :class="getError('max_grade') ? 'border-red-400' : 'border-border-base'" />
                <p v-if="getError('max_grade')" class="mt-1.5 text-xs text-red-500 font-bold">{{ getError('max_grade')
                  }}</p>
              </div>
              <div>
                <label class="block text-sm font-bold mb-2 text-text-main">تاريخ التسليم <span
                    class="text-red-500">*</span></label>
                <input v-model="form.due_date" type="date" dir="ltr"
                  class="w-full h-12 px-4 rounded-xl border bg-bg-surface text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  :class="getError('due_date') ? 'border-red-400' : 'border-border-base'" />
                <p v-if="getError('due_date')" class="mt-1.5 text-xs text-red-500 font-bold">{{ getError('due_date') }}
                </p>
              </div>
            </div>

            <!-- Attachment File Upload -->
            <div>
              <label class="block text-sm font-bold mb-2 text-text-main">المرفقات (اختياري)</label>
              <div v-if="!attachmentFile" @click="$refs.attachInput.click()" @dragover.prevent="isDragging = true"
                @dragleave.prevent="isDragging = false" @drop.prevent="handleDrop"
                class="border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all duration-200 group"
                :class="isDragging ? 'border-primary bg-primary/5 scale-[1.01]' : 'border-border-base bg-bg-base/50 hover:border-primary/50 hover:bg-primary/5'">
                <input type="file" ref="attachInput" hidden accept=".pdf,.doc,.docx,.zip,.pptx,.ppt"
                  @change="handleFileSelect" />
                <div
                  class="size-14 rounded-full flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                  :class="isDragging ? 'bg-primary/20' : 'bg-primary/10'">
                  <span class="material-symbols-outlined text-primary text-2xl">upload_file</span>
                </div>
                <p class="text-sm font-bold mb-1 text-text-main">اسحب وأفلت الملف هنا</p>
                <p class="text-xs text-text-muted">أو اضغط للتصفح • PDF, DOCX, ZIP, PPTX • الحد الأقصى 25 ميجابايت</p>
              </div>
              <!-- File Preview -->
              <div v-else
                class="flex items-center gap-4 p-4 rounded-2xl border border-border-base bg-bg-base transition-all">
                <div
                  class="size-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-blue-100 dark:bg-blue-900/30">
                  <span class="material-symbols-outlined text-xl text-blue-500">description</span>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-bold text-text-main truncate">{{ attachmentFile.name }}</p>
                  <p class="text-xs text-text-muted">{{ formatFileSize(attachmentFile.size) }}</p>
                </div>
                <button @click="attachmentFile = null" type="button"
                  class="size-8 rounded-lg flex items-center justify-center hover:bg-red-100 dark:hover:bg-red-900/20 text-text-muted hover:text-red-500 transition-all cursor-pointer">
                  <span class="material-symbols-outlined text-lg">close</span>
                </button>
              </div>
              <p v-if="getError('attachment')" class="mt-1.5 text-xs text-red-500 font-bold">{{ getError('attachment')
                }}</p>
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex justify-end gap-3">
          <button @click="submitAssignment" :disabled="isSubmitting"
            class="bg-primary text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
            <span v-if="isSubmitting"
              class="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            <span v-else class="material-symbols-outlined text-lg">send</span>
            {{ isSubmitting ? 'جاري الإنشاء...' : 'نشر الواجب' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { coursesApi } from '@/api/courses';
import { useApiErrors } from '@/composables/useApiErrors';
import { useToast } from '@/composables/useToast';
import { onMounted, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const { toast, showToast, hideToast } = useToast();
const { setErrors, clearErrors, getError, getGeneralError } = useApiErrors();

const isSubmitting = ref(false);
const generalError = ref('');
const isCreated = ref(false);
const lectureId = ref(null);
const attachmentFile = ref(null);
const isDragging = ref(false);

const form = reactive({
  title: '',
  description: '',
  max_grade: 100,
  due_date: '',
});

const MAX_SIZE = 25 * 1024 * 1024; // 25MB

// ── Auto-select Lecture ID ──────────────────────────────────────────

onMounted(() => {
  if (route.query.lectureId) {
    lectureId.value = Number(route.query.lectureId);
  }
});

// ── File Helpers ─────────────────────────────────────────────────────

function handleFileSelect(e) {
  const file = e.target.files[0];
  if (file) validateAndSetFile(file);
}

function handleDrop(e) {
  isDragging.value = false;
  const file = e.dataTransfer.files[0];
  if (file) validateAndSetFile(file);
}

function validateAndSetFile(file) {
  if (file.size > MAX_SIZE) {
    showToast('خطأ', 'حجم الملف يتجاوز 25 ميجابايت', 'error');
    return;
  }
  attachmentFile.value = file;
}

function formatFileSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

// ── Submit ───────────────────────────────────────────────────────────

async function submitAssignment() {
  clearErrors();
  generalError.value = '';

  if (!lectureId.value) {
    showToast('خطأ', 'لم يتم تحديد المحاضرة. تأكد من الرابط.', 'error');
    return;
  }

  isSubmitting.value = true;

  try {
    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('description', form.description);
    formData.append('max_grade', form.max_grade);
    formData.append('due_date', form.due_date);
    if (attachmentFile.value) {
      formData.append('attachment', attachmentFile.value);
    }

    await coursesApi.createAssignment(lectureId.value, formData);
    showToast('تم إنشاء الواجب', 'تم نشر الواجب وإتاحته للطلاب بنجاح', 'success');
    isCreated.value = true;
  } catch (error) {
    setErrors(error);
    generalError.value = getGeneralError(error);
    showToast('خطأ', generalError.value, 'error');
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<style scoped>
input[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
}

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
