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
            <div class="flex w-full flex-1 items-stretch rounded-lg bg-bg-surface-hover overflow-hidden transition-colors duration-300">
              <div class="text-text-muted flex items-center justify-center px-4">
                <span class="material-symbols-outlined">search</span>
              </div>
              <input class="form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:outline-0 focus:ring-0 text-text-main placeholder:text-text-muted text-base font-normal px-2" placeholder="ابحث عن دورة تدريبية، مدرس، أو تخصص..."/>
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

    <!-- Courses Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(course, index) in courses" :key="index" class="flex flex-col bg-bg-surface rounded-xl overflow-hidden shadow-sm border border-border-base group hover:shadow-md transition-all duration-300">
        <div class="w-full bg-center bg-no-repeat aspect-video bg-cover relative" :style="{ backgroundImage: `url(${course.image})` }">
          <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          <div v-if="course.status === 'ongoing'" class="absolute top-3 right-3 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">مستمر</div>
        </div>
        <div class="p-5 flex flex-col gap-4">
          <div class="flex flex-col gap-1">
            <h3 class="text-text-main text-lg font-bold group-hover:text-primary transition-colors">{{ course.title }}</h3>
            <div class="flex items-center gap-2 text-text-muted">
              <span class="material-symbols-outlined text-[18px]">person</span>
              <p class="text-sm font-normal">{{ course.instructor }}</p>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <div class="flex justify-between text-xs font-bold" :class="course.progress > 0 ? '' : 'text-text-muted'">
              <span v-if="course.progress > 0" class="text-primary">نسبة الإنجاز</span>
              <span v-else>لم يبدأ بعد</span>
              <span :class="course.progress > 0 ? 'text-text-main' : ''">{{ course.progressPercent }}</span>
            </div>
            <div class="w-full bg-bg-surface-hover h-2 rounded-full overflow-hidden">
              <div class="bg-primary h-full rounded-full" :style="{ width: `${course.progress}%` }"></div>
            </div>
          </div>
          <div class="flex items-center justify-between pt-2 border-t border-border-base">
            <div class="flex items-center gap-1 text-text-muted">
              <span class="material-symbols-outlined text-[18px]">bar_chart</span>
              <span class="text-xs">{{ course.level }}</span>
            </div>
            <RouterLink v-if="course.progress > 0" to="/student/courses/101" class="bg-primary text-white px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-primary/90 transition-all cursor-pointer">
              متابعة التعلم
              <span class="material-symbols-outlined text-[18px]">arrow_back</span>
            </RouterLink>
            <button v-else class="bg-bg-surface-hover text-text-main px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-border-base transition-all cursor-pointer border border-border-base">
              عرض التفاصيل
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- View More -->
    <div v-if="visibleCoursesCount < allCourses.length" class="mt-12 flex justify-center">
      <button @click="loadMore" class="flex items-center gap-2 px-8 py-3 bg-bg-surface border border-border-base rounded-xl text-primary font-bold shadow-sm hover:shadow-md transition-all cursor-pointer">
        عرض المزيد من المقررات
        <span class="material-symbols-outlined">expand_more</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'

const allCourses = [
  {
    title: 'برمجة الويب المتطورة (Full-stack)',
    instructor: 'د. أحمد علي',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcArXRI2h5Xrt7OX1N96oZkYHGD_e8Cz1Qg7k6Tz9ay3hYb_p2O-PY7yq3Lp6hwFfA-3HyTetiK5_877PM0EapF8p9DBfc_qD5T_sKB8co_6NalQiCvm1f07nsme3Vcm5I694JuxX_D3qrKy5D9jlmJcrlpeYees0GFXmKqYK0HbtUs9npalxj4bSJiy7HHlbh0srek0zvLQreBI07iojectPwoa3lk7iXFp9jopBtYlYYwiMZ7WcIsqSdg33ExJ6VtCfliB7JE5YU',
    progress: 65,
    progressPercent: '٦٥٪',
    level: 'متوسط',
    status: 'ongoing'
  },
  {
    title: 'الذكاء الاصطناعي وتعلم الآلة',
    instructor: 'د. سارة محمود',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgtm6HgaQwdg4vYNnTwVZ57Ejrk9o8RZdI_wdf2dl0__UxHYlnCS0LF-c44X93_651yUKn1Lrm0tSZ2X_yS6cBEwrHLtMlJ70CEE0fc9QLZ4s3II-kftLw2OS2d56-vGAzgCq69ZINP9RKt6M7WhQFVGIz4VWD2h2ty4KJHDl4A5KoBARceUVtg4MP3GAeOSCurSGqGVu3N4P1hhYa9_hFMKHLVsMUyvd0QsmoAq57yn-8UP-lMcD1X5xeup1VlmQaQUIg8rO568M9',
    progress: 0,
    progressPercent: '٠٪',
    level: 'متقدم',
    status: 'pending'
  },
  {
    title: 'أساسيات قواعد البيانات SQL',
    instructor: 'د. محمد حسن',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBquV1MJoHnjVrIoKgaKCOZuA88m6J2qcG73A4PD5e_h_xx3MjNq30QXS9j_7xg7hrWo5AjwosbgrET_rsoFCQS4luXCzDljj_7sgCE3zzebZBW2F0ddI8vLEDVmJlOy3Vuc3NPwZaen_Wnvr4317d6VfX_jMcmGMvJQki8MAH0GNTcidsLDkXxKZGmr0SV7EE7CHq9hkRIWvfCnSwepyc7u-20WFymGU8jErNYTfzYWAwgv4w7N9u4gKjUOfgeNK3xr3iX521g9q5a',
    progress: 90,
    progressPercent: '٩٠٪',
    level: 'مبتدئ',
    status: 'ongoing'
  },
    {
    title: 'تطوير تطبيقات الموبايل',
    instructor: 'د. علي كمال',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaIreEq1PGo8L8e8tvb2fZirf4Ef8giO6fnApWFbJSU7O6sGQIIGTqQCVyIs4cAXZY8O4SKoIqVr7EqQIn-S7cir-j8FxgPicKqQJpM-yikFlfSnw0YpdGwvh6xMhztA51AiVroISWkUY3E8-yvQ2a-FXfT6D52zso0cKkibP1UB7NW9blEtB1gqm9wJply62n5hp-DMWWE0I3dubLoAHnrl2TGRsQ-rlSRudRj9mJ4vKrJw1W5YjLiV2Wt5ylf18mVk7taJdAa7EI',
    progress: 30,
    progressPercent: '٣٠٪',
    level: 'متوسط',
    status: 'ongoing'
  },
  {
    title: 'تصميم تجربة المستخدم UX',
    instructor: 'أ. ليلى سمير',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWi3LTHZh0VcQNKStLo8HIqScqmUvW-uN2cH_RUMt4OTIsC2hb9wOJuDwxm1AyPgMOf0nsCcXrPDcsl7ei2H9i2kixgiWRmOyi0Ypy44GG6tHsmKS-AaIVvCdUXAY4AAJUOdtugR-FO40UalcOVZbwwR9xXA516GLNepq7iRgr12Rt6yxtnhX-WCvGycfaGft8BpIWwcTfYFKTCqH2RhVLi_b1AoXf80KK4kiB_UwbERULECoZRwGPbEcPu1g73gY7O0pO_XfzfJnH',
    progress: 0,
    progressPercent: '٠٪',
    level: 'مبتدئ',
    status: 'pending'
  },
  {
    title: 'أمن المعلومات والشبكات',
    instructor: 'د. عمر فاروق',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXNnC5nDlDcUmyGn_0R0_szP7iRtyZ38MK_oYfxok3VyRVCWq0BX7yW4ivOtX5S3dMYnDya_7Stg0kYz2atZXkhUnj02YFtV8EDuIZm-5KAivD_mx3WEvSzfb0qEy7qNqyu0XEPwi4mSb8lph0EyMMtvn8vOAqZNr6eIbjYPEHhASFh_Yov7Jh4pNu3-6Xr9Im0gvOZ2il8ufWwgxKUwbBM0bvmbh-lTKGodG3XAejB3-qD_JAiMVIgcoEVxdiyxsoOQMwEMt4eoKq',
    progress: 10,
    progressPercent: '١٠٪',
    level: 'متقدم',
    status: 'ongoing'
  }
]

const visibleCoursesCount = ref(3)
const visibleCourses = computed(() => {
    return allCourses.length // Just show length comparison logic in template, slicing in v-for is simpler if not using computed for array
})

const courses = computed(() => allCourses.slice(0, visibleCoursesCount.value))

const loadMore = () => {
    visibleCoursesCount.value += 3
}
</script>
