<template>
  <div class="text-text-main">
    <div class="flex flex-wrap items-end justify-between gap-4 mb-8">
      <div>
        <h1 class="text-4xl font-black leading-tight text-text-main">إدارة الدورات</h1>
        <p class="text-text-muted mt-2 text-lg">قم بإدارة وتحديث الدورات التدريبية والطلاب المشتركين</p>
      </div>
      <RouterLink to="/instructor/courses/create"
        class="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/25 hover:scale-[1.02] transition-transform active:scale-95 cursor-pointer">
        <span class="material-symbols-outlined">add_circle</span>
        <span>إضافة دورة جديدة</span>
      </RouterLink>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-bg-surface p-6 rounded-2xl border border-border-base shadow-sm transition-colors duration-300">
        <div class="flex justify-between items-start">
          <p class="text-text-muted font-bold">إجمالي الدورات</p>
        </div>
        <p class="text-3xl font-black mt-2 text-text-main">{{ courses.length }}</p>
      </div>
      <div class="bg-bg-surface p-6 rounded-2xl border border-border-base shadow-sm transition-colors duration-300">
        <div class="flex justify-between items-start">
          <p class="text-text-muted font-bold">الدورات النشطة</p>
        </div>
        <p class="text-3xl font-black mt-2 text-text-main">{{ activeCourses }}</p>
      </div>
      <div class="bg-bg-surface p-6 rounded-2xl border border-border-base shadow-sm transition-colors duration-300">
        <div class="flex justify-between items-start">
          <p class="text-text-muted font-bold">المسودات</p>
        </div>
        <p class="text-3xl font-black mt-2 text-text-main">{{ draftCourses }}</p>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="isLoading"
      class="bg-bg-surface border border-border-base rounded-2xl shadow-xl p-12 flex flex-col items-center justify-center transition-colors duration-300">
      <div class="size-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4"></div>
      <p class="text-text-muted font-bold">جاري تحميل الدورات...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="errorMsg"
      class="bg-bg-surface border border-border-base rounded-2xl shadow-xl p-12 flex flex-col items-center justify-center transition-colors duration-300">
      <span class="material-symbols-outlined text-4xl text-red-400 mb-4">error</span>
      <p class="text-text-main font-bold mb-2">حدث خطأ أثناء تحميل الدورات</p>
      <p class="text-text-muted text-sm mb-4">{{ errorMsg }}</p>
      <button @click="fetchCourses"
        class="bg-primary text-white px-6 py-2 rounded-xl font-bold text-sm hover:bg-primary/90 transition-all cursor-pointer">
        إعادة المحاولة
      </button>
    </div>

    <!-- Empty State -->
    <div v-else-if="courses.length === 0"
      class="bg-bg-surface border border-border-base rounded-2xl shadow-xl p-12 flex flex-col items-center justify-center transition-colors duration-300">
      <span class="material-symbols-outlined text-5xl text-text-muted/40 mb-4">school</span>
      <p class="text-text-main font-bold text-lg mb-1">لا توجد دورات حتى الآن</p>
      <p class="text-text-muted text-sm mb-6">ابدأ بإنشاء أول دورة تدريبية لك</p>
      <RouterLink to="/instructor/lectures"
        class="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/25 hover:scale-[1.02] transition-transform cursor-pointer">
        <span class="material-symbols-outlined">add_circle</span>
        <span>إضافة دورة جديدة</span>
      </RouterLink>
    </div>

    <!-- Courses Table -->
    <div v-else
      class="bg-bg-surface border border-border-base rounded-2xl shadow-xl overflow-hidden transition-colors duration-300">
      <div class="overflow-x-auto">
        <table class="w-full text-right border-collapse">
          <thead>
            <tr class="bg-bg-base border-b border-border-base transition-colors duration-300">
              <th class="px-6 py-4 text-sm font-black text-text-main">الدورة</th>
              <th class="px-6 py-4 text-sm font-black text-text-main">المستوى</th>
              <th class="px-6 py-4 text-sm font-black text-text-main">الحالة</th>
              <th class="px-6 py-4 text-sm font-black text-text-main">تاريخ الإنشاء</th>
              <th class="px-6 py-4 text-sm font-black text-text-main">الإجراءات</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border-base">
            <tr v-for="course in courses" :key="course.id" class="hover:bg-bg-base/50 transition-colors group">
              <td class="px-6 py-4">
                <div class="flex items-center gap-4">
                  <div class="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shadow-sm">
                    <span class="material-symbols-outlined">school</span>
                  </div>
                  <div>
                    <p class="font-bold text-text-main">{{ course.title }}</p>
                    <p class="text-xs text-text-muted">{{ course.code }}</p>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold"
                  :class="levelClass(course.level)">
                  {{ levelLabel(course.level) }}
                </span>
              </td>
              <td class="px-6 py-4">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold"
                  :class="statusClass(course.status)">
                  {{ statusLabel(course.status) }}
                </span>
              </td>
              <td class="px-6 py-4 font-medium text-text-muted text-sm">
                {{ formatDate(course.created_at) }}
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <RouterLink :to="`/instructor/courses/${course.id}/edit`"
                    class="p-2 hover:bg-primary/10 rounded-lg text-primary transition-colors cursor-pointer"
                    title="تعديل">
                    <span class="material-symbols-outlined">edit</span>
                  </RouterLink>
                  <button @click="deleteCourse(course.id)"
                    class="p-2 hover:bg-red-500/10 rounded-lg text-red-500 transition-colors cursor-pointer"
                    title="حذف">
                    <span class="material-symbols-outlined">delete</span>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="bg-bg-surface p-4 flex items-center justify-between border-t border-border-base transition-colors duration-300">
        <p class="text-sm text-text-muted">عرض {{ courses.length }} دورة</p>
      </div>
    </div>

    <!-- Confirm Delete Dialog -->
    <ConfirmDialog :visible="showDeleteDialog" title="حذف الدورة"
      message="هل أنت متأكد من حذف هذه الدورة؟ لا يمكن التراجع عن هذا الإجراء." confirmText="حذف الدورة"
      cancelText="إلغاء" variant="danger" :loading="isDeleting" @confirm="confirmDelete"
      @cancel="showDeleteDialog = false" />

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
  </div>
</template>

<script setup>
import { coursesApi } from '@/api/courses'
import ConfirmDialog from '@/components/common/ConfirmDialog.vue'
import { useToast } from '@/composables/useToast'
import { computed, onMounted, ref } from 'vue'

const { toast, showToast, hideToast } = useToast()

const courses = ref([])
const isLoading = ref(false)
const errorMsg = ref('')

const showDeleteDialog = ref(false)
const isDeleting = ref(false)
const deleteTargetId = ref(null)

const activeCourses = computed(() => courses.value.filter(c => c.status === 'active').length)
const draftCourses = computed(() => courses.value.filter(c => c.status === 'draft').length)

// ── Fetch Courses ───────────────────────────────────────────────────

async function fetchCourses() {
  isLoading.value = true
  errorMsg.value = ''
  try {
    const { data } = await coursesApi.getMyCourses()
    courses.value = data.data || []
  } catch (e) {
    errorMsg.value = e.response?.data?.message || 'حدث خطأ في الاتصال بالسيرفر'
  } finally {
    isLoading.value = false
  }
}

onMounted(fetchCourses)

// ── Delete Course ───────────────────────────────────────────────────

function deleteCourse(id) {
  deleteTargetId.value = id
  showDeleteDialog.value = true
}

async function confirmDelete() {
  isDeleting.value = true
  try {
    await coursesApi.deleteCourse(deleteTargetId.value)
    courses.value = courses.value.filter(c => c.id !== deleteTargetId.value)
    showDeleteDialog.value = false
    showToast('تم الحذف', 'تم حذف الدورة بنجاح', 'success')
  } catch (e) {
    showToast('خطأ', e.response?.data?.message || 'حدث خطأ أثناء الحذف', 'error')
  } finally {
    isDeleting.value = false
  }
}

// ── Helpers ──────────────────────────────────────────────────────────

function levelLabel(level) {
  const map = { beginner: 'مبتدئ', intermediate: 'متوسط', advanced: 'متقدم' }
  return map[level] || level
}

function levelClass(level) {
  const map = {
    beginner: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    intermediate: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
    advanced: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  }
  return map[level] || 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
}

function statusLabel(status) {
  const map = { active: 'نشط', draft: 'مسودة' }
  return map[status] || status
}

function statusClass(status) {
  const map = {
    active: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
    draft: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
  }
  return map[status] || 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
}

function formatDate(dateStr) {
  if (!dateStr) return '—'
  const d = new Date(dateStr)
  return d.toLocaleDateString('ar-EG', { year: 'numeric', month: 'short', day: 'numeric' })
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
