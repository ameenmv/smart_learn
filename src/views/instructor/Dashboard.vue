<template>
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
    <aside class="lg:col-span-3 space-y-6 order-2 lg:order-2">
      <div class="bg-bg-surface rounded-2xl shadow-sm border border-border-base p-5 transition-colors duration-300">
        <div class="flex items-center justify-between mb-5">
          <h3 class="font-bold text-text-main flex items-center gap-2">
            <span class="material-symbols-outlined text-primary">calendar_today</span>
            الجدول الدراسي اليومي
          </h3>
          <span class="text-[10px] bg-blue-50 dark:bg-blue-900/20 text-primary px-2 py-1 rounded font-bold">اليوم</span>
        </div>
        <div class="space-y-4">
          <div class="flex gap-3 relative before:absolute before:right-2.5 before:top-8 before:bottom-0 before:w-0.5 before:bg-border-base last:before:hidden pb-4">
            <div class="size-5 rounded-full bg-primary border-4 border-bg-surface shadow-sm z-10 mt-1"></div>
            <div class="flex-1">
              <p class="text-xs font-bold text-text-main">هندسة البرمجيات</p>
              <p class="text-[10px] text-text-muted">08:00 ص - 10:00 ص</p>
              <span class="text-[10px] text-text-muted">قاعة رقم 402</span>
            </div>
          </div>
          <div class="flex gap-3 relative before:absolute before:right-2.5 before:top-8 before:bottom-0 before:w-0.5 before:bg-border-base last:before:hidden pb-4">
            <div class="size-5 rounded-full bg-amber-400 border-4 border-bg-surface shadow-sm z-10 mt-1"></div>
            <div class="flex-1">
              <p class="text-xs font-bold text-text-main">تحليل النظم</p>
              <p class="text-[10px] text-text-muted">10:30 ص - 12:30 م</p>
              <span class="text-[10px] text-text-muted">مختبر الحاسوب 1</span>
            </div>
          </div>
          <div class="flex gap-3">
            <div class="size-5 rounded-full bg-slate-300 dark:bg-slate-600 border-4 border-bg-surface shadow-sm z-10 mt-1"></div>
            <div class="flex-1">
              <p class="text-xs font-bold text-text-main">اجتماع القسم</p>
              <p class="text-[10px] text-text-muted">01:00 م - 02:00 م</p>
              <span class="text-[10px] text-text-muted">مكتب العميد</span>
            </div>
          </div>
        </div>
        <button class="w-full mt-6 py-2 border border-border-base text-xs font-bold text-text-muted hover:bg-bg-base transition-colors rounded-lg cursor-pointer">عرض الجدول كاملاً</button>
      </div>
      <div class="bg-bg-surface rounded-2xl shadow-sm border border-border-base p-5 transition-colors duration-300">
        <h3 class="font-bold text-text-main flex items-center gap-2 mb-5">
          <span class="material-symbols-outlined text-red-500">campaign</span>
          تنبيهات أكاديمية عاجلة
        </h3>
        <div class="space-y-3">
          <div class="p-3 bg-red-50 dark:bg-red-900/10 border-r-4 border-red-500 rounded-lg">
            <p class="text-xs font-bold text-red-800 dark:text-red-400 mb-1">موعد تسليم الدرجات</p>
            <p class="text-[10px] text-red-700 dark:text-red-300">ينتهي الموعد النهائي لرصد درجات الفصل الأول غداً الساعة 11:59 م.</p>
          </div>
          <div class="p-3 bg-blue-50 dark:bg-blue-900/10 border-r-4 border-primary rounded-lg">
            <p class="text-xs font-bold text-primary mb-1">اجتماع مجلس الكلية</p>
            <p class="text-[10px] text-blue-700 dark:text-blue-300">تم تعديل موعد الاجتماع ليصبح يوم الثلاثاء القادم.</p>
          </div>
        </div>
      </div>
    </aside>
    <div class="lg:col-span-9 space-y-8 order-1 lg:order-1">
      <div class="stats-card-gradient rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-primary/30">
        <div class="relative z-10">
          <h1 class="text-3xl md:text-4xl font-black mb-3">أهلاً بك {{ instructorName }}</h1>
          <p class="text-blue-100 text-lg max-w-lg leading-relaxed">نتمنى لك يوماً دراسياً ملهماً. لديك {{ courses.length }} {{ courses.length === 1 ? 'مقرر' : 'مقررات' }} نشطة حالياً.</p>
          <div class="mt-8 flex flex-wrap gap-4">
            <RouterLink to="/instructor/lectures" class="bg-white text-primary px-6 py-3 rounded-xl font-black text-sm hover:bg-blue-50 transition-all cursor-pointer inline-block">إضافة محتوى جديد</RouterLink>
            <button class="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-white/30 transition-all border border-white/30 cursor-pointer">سجل الغياب اليومي</button>
          </div>
        </div>
        <div class="absolute -bottom-20 -left-20 size-80 bg-white/10 rounded-full blur-3xl"></div>
        <div class="absolute -top-10 right-1/4 size-40 bg-white/5 rounded-full blur-2xl"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-bg-surface p-6 rounded-2xl shadow-sm border border-border-base flex items-center gap-5 transition-colors duration-300">
          <div class="size-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-primary">
            <span class="material-symbols-outlined text-3xl">groups</span>
          </div>
          <div>
            <p class="text-text-muted text-sm font-bold">عدد الطلاب الإجمالي</p>
            <h4 class="text-2xl font-black text-text-main">{{ totalStudents }}</h4>
          </div>
        </div>
        <div class="bg-bg-surface p-6 rounded-2xl shadow-sm border border-border-base flex items-center gap-5 transition-colors duration-300">
          <div class="size-14 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <span class="material-symbols-outlined text-3xl">auto_stories</span>
          </div>
          <div>
            <p class="text-text-muted text-sm font-bold">المقررات النشطة</p>
            <h4 class="text-2xl font-black text-text-main">{{ courses.length }}</h4>
          </div>
        </div>
        <div class="bg-bg-surface p-6 rounded-2xl shadow-sm border border-border-base flex items-center gap-5 transition-colors duration-300">
          <div class="size-14 bg-amber-50 dark:bg-amber-900/20 rounded-2xl flex items-center justify-center text-amber-600 dark:text-amber-400">
            <span class="material-symbols-outlined text-3xl">grading</span>
          </div>
          <div>
            <p class="text-text-muted text-sm font-bold">المقررات المتاحة</p>
            <h4 class="text-2xl font-black text-text-main">{{ courses.length }}</h4>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="isLoading" class="flex justify-center py-12">
        <span class="size-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></span>
      </div>

      <div v-else class="space-y-6">
        <div class="flex items-center justify-between">
          <h3 class="text-2xl font-black text-text-main">مقرراتي الدراسية</h3>
          <RouterLink to="/instructor/courses" class="text-primary font-bold text-sm hover:underline">عرض جميع المقررات</RouterLink>
        </div>

        <!-- Empty State -->
        <div v-if="courses.length === 0" class="bg-bg-surface rounded-2xl shadow-sm border border-border-base p-12 text-center">
          <span class="material-symbols-outlined text-6xl text-text-muted/30 mb-4">school</span>
          <h4 class="text-lg font-bold text-text-main mb-2">لا توجد مقررات بعد</h4>
          <p class="text-text-muted mb-6">ابدأ بإنشاء أول مقرر دراسي لك</p>
          <RouterLink to="/instructor/courses/create" class="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:brightness-110 transition-all inline-block">إنشاء مقرر جديد</RouterLink>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div v-for="course in displayedCourses" :key="course.id" class="bg-bg-surface rounded-2xl shadow-sm border border-border-base overflow-hidden group hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/30 transition-all duration-300">
            <div class="h-40 bg-slate-200 dark:bg-slate-700 relative">
              <img v-if="course.image" :alt="course.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" :src="course.image"/>
              <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                <span class="material-symbols-outlined text-5xl text-primary/30">auto_stories</span>
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <span class="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black text-primary">{{ course.level || 'غير محدد' }}</span>
            </div>
            <div class="p-5">
              <h4 class="text-lg font-black text-text-main mb-2">{{ course.title }}</h4>
              <div class="flex items-center gap-3 text-text-muted text-xs mb-6">
                <span class="flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">group</span>
                  {{ course.students_count || 0 }} طالب
                </span>
                <span class="flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">menu_book</span>
                  {{ course.lectures_count || 0 }} محاضرة
                </span>
              </div>
              <RouterLink :to="`/instructor/courses/${course.id}/edit`" class="w-full bg-primary text-white py-3 rounded-xl font-bold hover:brightness-110 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer">
                إدارة المقرر
                <span class="material-symbols-outlined text-sm">arrow_back</span>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { coursesApi } from '@/api/courses'
import { useAuthStore } from '@/stores/auth'
import { computed, onMounted, ref } from 'vue'

const authStore = useAuthStore()
const courses = ref([])
const isLoading = ref(true)

const instructorName = computed(() => {
  const name = authStore.user?.name
  return name ? `د. ${name}` : 'د. محاضر'
})

const totalStudents = computed(() => {
  return courses.value.reduce((sum, c) => sum + (c.students_count || 0), 0)
})

const displayedCourses = computed(() => {
  return courses.value.slice(0, 3)
})

const fetchCourses = async () => {
  isLoading.value = true
  try {
    const { data } = await coursesApi.getMyCourses()
    courses.value = data.data || data || []
  } catch (error) {
    console.error('[Dashboard] Failed to load courses:', error)
    courses.value = []
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchCourses()
})
</script>

<style scoped>
.stats-card-gradient {
  background: linear-gradient(135deg, #135bec 0%, #0a44bd 100%);
}
</style>
