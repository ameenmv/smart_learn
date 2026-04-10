<template>
  <div class="max-w-[1200px] mx-auto w-full flex flex-col gap-8 font-display">
    <!-- Welcome Section -->
    <section class="bg-bg-surface rounded-xl overflow-hidden shadow-sm border border-border-base transition-colors duration-300">
      <div class="flex flex-col md:flex-row items-center p-8 gap-8">
        <div class="flex-1">
          <h3 class="text-3xl font-bold text-text-main mb-2">أهلاً بك مجدداً، {{ studentName }} 👋</h3>
          <p class="text-text-muted text-lg leading-relaxed mb-6">لديك {{ courses.length }} {{ courses.length === 1 ? 'مقرر مسجل' : 'مقررات مسجلة' }} حالياً في Smart Learn. استمر في التعلم.</p>
          <div class="flex gap-3">
            <RouterLink to="/student/courses" class="bg-primary text-white px-6 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-primary/30 hover:bg-blue-700 transition-all cursor-pointer">
              تصفح المقررات
            </RouterLink>
            <RouterLink to="/student/certificates" class="bg-bg-base text-text-main px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-bg-base-hover transition-all cursor-pointer border border-border-base">
              شهاداتي
            </RouterLink>
          </div>
        </div>
        <div class="w-full md:w-1/3 h-48 bg-gradient-to-br from-primary/10 to-primary/30 rounded-xl flex items-center justify-center relative overflow-hidden">
          <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <span class="material-symbols-outlined text-[80px] text-primary/40">school</span>
        </div>
      </div>
    </section>

    <!-- Stats Grid -->
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-bg-surface p-6 rounded-xl border border-border-base shadow-sm flex flex-col gap-2 transition-colors duration-300">
        <div class="flex items-center justify-between mb-2">
          <span class="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">library_books</span>
        </div>
        <p class="text-text-muted text-sm">المقررات المسجلة</p>
        <p class="text-3xl font-bold text-text-main">{{ courses.length }}</p>
      </div>
      <div class="bg-bg-surface p-6 rounded-xl border border-border-base shadow-sm flex flex-col gap-2 transition-colors duration-300">
        <div class="flex items-center justify-between mb-2">
          <span class="material-symbols-outlined text-orange-500 bg-orange-50 p-2 rounded-lg dark:bg-orange-900/20">auto_stories</span>
        </div>
        <p class="text-text-muted text-sm">إجمالي المحاضرات</p>
        <p class="text-3xl font-bold text-text-main">{{ totalLectures }}</p>
      </div>
      <div class="bg-bg-surface p-6 rounded-xl border border-border-base shadow-sm flex flex-col gap-2 transition-colors duration-300">
        <div class="flex items-center justify-between mb-2">
          <span class="material-symbols-outlined text-purple-500 bg-purple-50 p-2 rounded-lg dark:bg-purple-900/20">workspace_premium</span>
        </div>
        <p class="text-text-muted text-sm">الشهادات</p>
        <p class="text-3xl font-bold text-text-main">{{ certificatesCount }}</p>
      </div>
      <div class="bg-bg-surface p-6 rounded-xl border border-border-base shadow-sm flex flex-col gap-2 transition-colors duration-300">
        <div class="flex items-center justify-between mb-2">
          <span class="material-symbols-outlined text-blue-500 bg-blue-50 p-2 rounded-lg dark:bg-blue-900/20">trending_up</span>
        </div>
        <p class="text-text-muted text-sm">المقررات النشطة</p>
        <p class="text-3xl font-bold text-text-main">{{ activeCourses }}</p>
      </div>
    </section>

    <!-- Continue Learning Section -->
    <section>
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-bold text-text-main">تابع التعلم</h2>
        <RouterLink class="text-primary text-sm font-bold hover:underline" to="/student/courses">عرض الكل</RouterLink>
      </div>

      <!-- Loading State -->
      <div v-if="isLoading" class="flex justify-center py-12">
        <span class="size-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></span>
      </div>

      <!-- Empty State -->
      <div v-else-if="courses.length === 0" class="bg-bg-surface rounded-xl border border-border-base shadow-sm p-12 text-center">
        <span class="material-symbols-outlined text-6xl text-text-muted/30 mb-4">school</span>
        <h4 class="text-lg font-bold text-text-main mb-2">لا توجد مقررات مسجلة بعد</h4>
        <p class="text-text-muted mb-6">ابدأ بتصفح المقررات المتاحة وسجل في ما يناسبك</p>
        <RouterLink to="/student/courses" class="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:brightness-110 transition-all inline-block">تصفح المقررات</RouterLink>
      </div>

      <!-- Course Cards -->
      <div v-else class="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
        <div v-for="course in courses" :key="course.id"
          class="min-w-[320px] bg-bg-surface rounded-xl overflow-hidden border border-border-base shadow-sm flex flex-col transition-colors duration-300">
          <div class="h-36 bg-center bg-cover relative" :style="course.image ? `background-image: url('${course.image}')` : ''">
            <div v-if="!course.image" class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
              <span class="material-symbols-outlined text-5xl text-primary/30">auto_stories</span>
            </div>
          </div>
          <div class="p-5 flex flex-col gap-4">
            <div>
              <h4 class="font-bold text-base text-text-main mb-1">{{ course.title }}</h4>
              <p class="text-xs text-text-muted">{{ course.instructor_name || 'محاضر' }} • {{ course.level || '' }}</p>
            </div>
            <div v-if="course.progress !== undefined">
              <div class="flex justify-between text-xs mb-1.5">
                <span class="text-text-muted">التقدم: {{ course.progress || 0 }}%</span>
                <span class="text-primary font-bold">{{ course.completed_lectures || 0 }}/{{ course.lectures_count || 0 }} درس</span>
              </div>
              <div class="w-full h-1.5 bg-bg-surface-hover rounded-full overflow-hidden">
                <div class="bg-primary h-full rounded-full transition-all" :style="`width: ${course.progress || 0}%`"></div>
              </div>
            </div>
            <RouterLink :to="`/student/courses/${course.id}`" class="w-full flex items-center justify-center py-2 bg-primary/10 text-primary font-bold text-sm rounded-lg hover:bg-primary hover:text-white transition-all cursor-pointer">استكمال المحاضرة</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { certificatesApi } from '@/api/certificates'
import { studentApi } from '@/api/student'
import { useAuthStore } from '@/stores/auth'
import { computed, onMounted, ref } from 'vue'

const authStore = useAuthStore()

const courses = ref([])
const certificatesCount = ref(0)
const isLoading = ref(true)

const studentName = computed(() => {
  return authStore.user?.name || 'طالب'
})

const totalLectures = computed(() => {
  return courses.value.reduce((sum, c) => sum + (c.lectures_count || 0), 0)
})

const activeCourses = computed(() => {
  return courses.value.filter(c => c.status === 'active' || !c.status).length
})

const fetchData = async () => {
  isLoading.value = true
  try {
    const [coursesRes, certsRes] = await Promise.allSettled([
      studentApi.getMyEnrolledCourses(),
      certificatesApi.getMyCertificates()
    ])

    if (coursesRes.status === 'fulfilled') {
      courses.value = coursesRes.value.data?.data || coursesRes.value.data || []
    }

    if (certsRes.status === 'fulfilled') {
      const certs = certsRes.value.data?.data || certsRes.value.data || []
      certificatesCount.value = Array.isArray(certs) ? certs.length : 0
    }
  } catch (error) {
    console.error('[Student Dashboard] Error:', error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchData()
})
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
