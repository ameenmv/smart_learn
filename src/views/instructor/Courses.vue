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
  </div>
</template>

<script setup>
import { coursesApi } from '@/api/courses'
import { computed, onMounted, ref } from 'vue'

const courses = ref([])
const isLoading = ref(false)
const errorMsg = ref('')

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

async function deleteCourse(id) {
  if (!confirm('هل أنت متأكد من حذف هذه الدورة؟')) return
  try {
    await coursesApi.deleteCourse(id)
    courses.value = courses.value.filter(c => c.id !== id)
  } catch (e) {
    alert(e.response?.data?.message || 'حدث خطأ أثناء الحذف')
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
