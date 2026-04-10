<template>
  <div class="max-w-[1280px] mx-auto w-full font-display">
    <div class="flex flex-col gap-8 mb-10">
      <div class="flex flex-col gap-2">
        <h1 class="text-text-main text-4xl font-black leading-tight tracking-[-0.033em]">كتالوج المقررات الدراسية</h1>
        <p class="text-text-muted text-lg font-normal">استكشف وطور مهاراتك مع أحدث المساقات الجامعية المعتمدة</p>
      </div>
      
      <!-- Search and Filter -->
      <div class="flex flex-col gap-4 bg-bg-surface p-4 rounded-xl shadow-sm border border-border-base transition-colors duration-300">
        <div class="w-full">
          <label class="flex flex-col w-full h-14">
            <div class="flex w-full flex-1 items-stretch rounded-lg bg-bg-surface-hover overflow-hidden transition-colors duration-300 border border-transparent focus-within:border-primary/50">
              <div class="text-text-muted flex items-center justify-center px-4">
                <span class="material-symbols-outlined">search</span>
              </div>
              <input v-model="searchQuery" class="form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:outline-0 focus:ring-0 text-text-main placeholder:text-text-muted text-base font-normal px-2" placeholder="ابحث عن دورة تدريبية، مدرس، أو تخصص..."/>
              <button class="bg-primary text-white px-8 font-bold text-sm hover:bg-primary/90 transition-colors cursor-pointer">بحث</button>
            </div>
          </label>
        </div>
        <div class="flex gap-3 flex-wrap items-center">
          <span class="text-sm font-bold text-text-muted ml-2">تصفية حسب:</span>
          <button class="flex h-10 items-center justify-center gap-x-2 rounded-lg bg-primary text-white px-4 cursor-pointer">
            <span class="text-sm font-medium">الكل</span>
            <span class="material-symbols-outlined text-[18px]">close</span>
          </button>
          <button class="flex h-10 items-center justify-center gap-x-2 rounded-lg bg-bg-surface-hover px-4 hover:bg-border-base transition-colors cursor-pointer">
            <span class="text-text-main text-sm font-medium">علوم الحاسب</span>
            <span class="material-symbols-outlined text-text-muted text-[18px]">keyboard_arrow_down</span>
          </button>
          <button class="flex h-10 items-center justify-center gap-x-2 rounded-lg bg-bg-surface-hover px-4 hover:bg-border-base transition-colors cursor-pointer">
            <span class="text-text-main text-sm font-medium">نظم المعلومات</span>
            <span class="material-symbols-outlined text-text-muted text-[18px]">keyboard_arrow_down</span>
          </button>
          <button class="flex h-10 items-center justify-center gap-x-2 rounded-lg bg-bg-surface-hover px-4 hover:bg-border-base transition-colors cursor-pointer">
            <span class="text-text-main text-sm font-medium">المستوى</span>
            <span class="material-symbols-outlined text-text-muted text-[18px]">keyboard_arrow_down</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="isLoading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="i in 6" :key="'course-skel-'+i" class="flex flex-col bg-bg-surface rounded-xl overflow-hidden shadow-sm border border-border-base">
        <div class="w-full aspect-video bg-border-base/30 animate-pulse"></div>
        <div class="p-5 flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <div class="h-6 w-3/4 bg-border-base/50 rounded animate-pulse"></div>
            <div class="h-4 w-1/2 bg-border-base/50 rounded animate-pulse"></div>
          </div>
          <div class="flex flex-col gap-2 mt-2">
            <div class="h-3 w-1/4 bg-border-base/50 rounded animate-pulse"></div>
            <div class="h-2 w-full bg-border-base/30 rounded-full animate-pulse"></div>
          </div>
          <div class="flex items-center justify-between pt-4 border-t border-border-base mt-2">
            <div class="h-4 w-12 bg-border-base/50 rounded animate-pulse"></div>
            <div class="h-8 w-24 bg-border-base/50 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else-if="courses.length === 0" class="bg-bg-surface rounded-xl border border-border-base border-dashed p-16 flex flex-col items-center justify-center text-center">
      <span class="material-symbols-outlined text-6xl text-text-muted mb-4 opacity-50">search_off</span>
      <h3 class="text-xl font-bold text-text-main mb-2">لا توجد مقررات دراسية</h3>
      <p class="text-text-muted">لم نتمكن من العثور على أي مقررات تطابق المقررات المتاحة لك حالياً.</p>
    </div>

    <!-- Courses Grid -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="course in courses" :key="course.id" class="flex flex-col bg-bg-surface rounded-xl overflow-hidden shadow-sm border border-border-base group hover:shadow-md transition-all duration-300">
        <RouterLink :to="`/student/courses/${course.id}`" class="block w-full bg-center bg-no-repeat aspect-video bg-cover relative" :style="course.image ? { backgroundImage: `url(${course.image})` } : {}">
          <div v-if="!course.image" class="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <span class="material-symbols-outlined text-5xl text-primary/30">auto_stories</span>
          </div>
          <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          <div v-if="course.status === 'active'" class="absolute top-3 right-3 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">متاح</div>
        </RouterLink>
        <div class="p-5 flex flex-col gap-4 flex-1">
          <div class="flex flex-col gap-1">
            <RouterLink :to="`/student/courses/${course.id}`" class="text-text-main text-lg font-bold group-hover:text-primary transition-colors line-clamp-2">{{ course.title }}</RouterLink>
            <div class="flex items-center gap-2 text-text-muted">
              <span class="material-symbols-outlined text-[18px]">person</span>
              <p class="text-sm font-normal">{{ course.instructor_name || 'محاضر' }}</p>
            </div>
          </div>
          <div class="flex flex-col gap-2 mt-auto">
            <div class="flex justify-between text-xs font-bold" :class="course.progress > 0 ? '' : 'text-text-muted'">
              <span v-if="course.progress > 0" class="text-primary">نسبة الإنجاز</span>
              <span v-else>لم يبدأ بعد</span>
              <span :class="course.progress > 0 ? 'text-text-main' : ''">{{ course.progress || 0 }}%</span>
            </div>
            <div class="w-full bg-bg-surface-hover h-2 rounded-full overflow-hidden">
              <div class="bg-primary h-full rounded-full transition-all" :style="{ width: `${course.progress || 0}%` }"></div>
            </div>
          </div>
          <div class="flex items-center justify-between pt-4 border-t border-border-base mt-2">
            <div class="flex items-center gap-1 text-text-muted">
              <span class="material-symbols-outlined text-[18px]">bar_chart</span>
              <span class="text-xs">{{ course.level || 'مبتدئ' }}</span>
            </div>
            <RouterLink v-if="course.progress > 0" :to="`/student/courses/${course.id}`" class="bg-primary text-white px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-primary/90 transition-all cursor-pointer">
              متابعة التعلم
              <span class="material-symbols-outlined text-[18px]">arrow_back</span>
            </RouterLink>
            <RouterLink v-else :to="`/student/courses/${course.id}`" class="bg-bg-surface-hover text-text-main px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-border-base transition-all cursor-pointer border border-border-base">
              عرض التفاصيل
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <!-- View More -->
    <div v-if="visibleCoursesCount < filteredCourses.length" class="mt-12 flex justify-center">
      <button @click="loadMore" class="flex items-center gap-2 px-8 py-3 bg-bg-surface border border-border-base rounded-xl text-primary font-bold shadow-sm hover:shadow-md transition-all cursor-pointer">
        عرض المزيد من المقررات
        <span class="material-symbols-outlined">expand_more</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { studentApi } from '@/api/student'
import { computed, onMounted, ref } from 'vue'

const allCourses = ref([])
const isLoading = ref(true)
const searchQuery = ref('')

const filteredCourses = computed(() => {
  if (!searchQuery.value.trim()) return allCourses.value
  const q = searchQuery.value.trim().toLowerCase()
  return allCourses.value.filter(c =>
    (c.title || '').toLowerCase().includes(q) ||
    (c.instructor_name || '').toLowerCase().includes(q)
  )
})

const visibleCoursesCount = ref(6)
const courses = computed(() => filteredCourses.value.slice(0, visibleCoursesCount.value))

const loadMore = () => {
    visibleCoursesCount.value += 3
}

const fetchCourses = async () => {
  isLoading.value = true
  try {
    const { data } = await studentApi.getAvailableCourses()
    allCourses.value = data.data || data || []
  } catch (error) {
    console.error('[Student Courses] Failed to load:', error)
    allCourses.value = []
  } finally {
    isLoading.value = false
  }
}

const enrollInCourse = async (courseId) => {
  try {
    await studentApi.enrollInCourse(courseId)
    await fetchCourses()
  } catch (error) {
    console.error('[Student Courses] Enroll failed:', error)
  }
}

onMounted(() => {
  fetchCourses()
})
</script>
