<template>


  <div class="max-w-[1200px] mx-auto w-full flex flex-col gap-8 font-display">
    <!-- Welcome Section -->
    <section class="bg-bg-surface rounded-xl overflow-hidden shadow-sm border border-border-base transition-colors duration-300">
      <div class="flex flex-col md:flex-row items-center p-8 gap-8">
        <div class="flex-1">
          <h3 class="text-3xl font-bold text-text-main mb-2">أهلاً بك مجدداً، أحمد 👋</h3>
          <p class="text-text-muted text-lg leading-relaxed mb-6">لقد أنجزت 75% من أهدافك الأسبوعية حتى الآن في Smart Learn. استمر في هذا الأداء المتميز.</p>
          <div class="flex gap-3">
            <RouterLink to="/student/schedule" class="bg-primary text-white px-6 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-primary/30 hover:bg-blue-700 transition-all cursor-pointer">
              عرض الجدول الدراسي
            </RouterLink>
            <RouterLink to="/student/schedule" class="bg-primary text-white px-6 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-primary/30 hover:bg-blue-700 transition-all cursor-pointer">
              التقويم الأكاديمي            </RouterLink>
          
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
          <span class="text-green-600 text-sm font-bold bg-green-50 px-2 py-0.5 rounded-full">+2 جديد</span>
        </div>
        <p class="text-text-muted text-sm">المقررات المسجلة</p>
        <p class="text-3xl font-bold text-text-main">12</p>
      </div>
      <div class="bg-bg-surface p-6 rounded-xl border border-border-base shadow-sm flex flex-col gap-2 transition-colors duration-300">
        <div class="flex items-center justify-between mb-2">
          <span class="material-symbols-outlined text-orange-500 bg-orange-50 p-2 rounded-lg">stars</span>
          <span class="text-green-600 text-sm font-bold bg-green-50 px-2 py-0.5 rounded-full">+150</span>
        </div>
        <p class="text-text-muted text-sm">إجمالي النقاط</p>
        <p class="text-3xl font-bold text-text-main">1,450</p>
      </div>
      <div class="bg-bg-surface p-6 rounded-xl border border-border-base shadow-sm flex flex-col gap-2 transition-colors duration-300">
        <div class="flex items-center justify-between mb-2">
          <span class="material-symbols-outlined text-purple-500 bg-purple-50 p-2 rounded-lg">workspace_premium</span>
          <span class="text-green-600 text-sm font-bold bg-green-50 px-2 py-0.5 rounded-full">+1</span>
        </div>
        <p class="text-text-muted text-sm">الشهادات المعتمدة</p>
        <p class="text-3xl font-bold text-text-main">5</p>
      </div>
      <div class="bg-bg-surface p-6 rounded-xl border border-border-base shadow-sm flex flex-col gap-2 transition-colors duration-300">
        <div class="flex items-center justify-between mb-2">
          <span class="material-symbols-outlined text-blue-500 bg-blue-50 p-2 rounded-lg">analytics</span>
          <span class="text-green-600 text-sm font-bold bg-green-50 px-2 py-0.5 rounded-full">+0.2</span>
        </div>
        <p class="text-text-muted text-sm">المعدل التراكمي</p>
        <p class="text-3xl font-bold text-text-main">3.85</p>
      </div>
    </section>

    <!-- Continue Learning Section -->
    <section>
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-bold text-text-main">تابع التعلم</h2>
        <RouterLink class="text-primary text-sm font-bold hover:underline" to="/student/courses">عرض الكل</RouterLink>
      </div>
      <div class="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
        <!-- Card 1 -->
        <div class="min-w-[320px] bg-bg-surface rounded-xl overflow-hidden border border-border-base shadow-sm flex flex-col transition-colors duration-300">
          <div class="h-36 bg-center bg-cover" data-alt="Python programming abstract illustration" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBRMYDdXa_k9a9PTrTyKyZDgc50waLYThwPz0xDuI1mlBpw517na43bh3uaEaaVPAK5Zd8uX9GntHJ7CX2Ijy5l-1XsJgxxTmVi0ENwggYpuxK_u0IEal4_viBuC-evGYwyQFbDrgQRU54VNW6U17ODO5IFqezMPrxrFfnN2ROVFLEWhrYVNTtRFxxFXW39RU6dIZHJb5IGO6mJjiJF_GcQdsjoBwN0lCKxpjEoM6VE1QCwJO5-0meBbZ7ikasUZyGkLSt_5yrzctxV");'></div>
          <div class="p-5 flex flex-col gap-4">
            <div>
              <h4 class="font-bold text-base text-text-main mb-1">أساسيات برمجة بايثون</h4>
              <p class="text-xs text-text-muted">د. مريم السعيد • كلية تكنولوجيا المعلومات</p>
            </div>
            <div>
              <div class="flex justify-between text-xs mb-1.5">
                <span class="text-text-muted">التقدم: 65%</span>
                <span class="text-primary font-bold">12/18 درس</span>
              </div>
              <div class="w-full h-1.5 bg-bg-surface-hover rounded-full overflow-hidden">
                <div class="bg-primary h-full rounded-full" style="width: 65%"></div>
              </div>
            </div>
            <RouterLink to="/courses/101" class="w-full flex items-center justify-center py-2 bg-primary/10 text-primary font-bold text-sm rounded-lg hover:bg-primary hover:text-white transition-all cursor-pointer">استكمال المحاضرة</RouterLink>
          </div>
        </div>
        <!-- Card 2 -->
        <div class="min-w-[320px] bg-bg-surface rounded-xl overflow-hidden border border-border-base shadow-sm flex flex-col transition-colors duration-300">
          <div class="h-36 bg-center bg-cover" data-alt="User interface design pattern" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWi3LTHZh0VcQNKStLo8HIqScqmUvW-uN2cH_RUMt4OTIsC2hb9wOJuDwxm1AyPgMOf0nsCcXrPDcsl7ei2H9i2kixgiWRmOyi0Ypy44GG6tHsmKS-AaIVvCdUXAY4AAJUOdtugR-FO40UalcOVZbwwR9xXA516GLNepq7iRgr12Rt6yxtnhX-WCvGycfaGft8BpIWwcTfYFKTCqH2RhVLi_b1AoXf80KK4kiB_UwbERULECoZRwGPbEcPu1g73gY7O0pO_XfzfJnH");'></div>
          <div class="p-5 flex flex-col gap-4">
            <div>
              <h4 class="font-bold text-base text-text-main mb-1">تصميم واجهات المستخدم UI/UX</h4>
              <p class="text-xs text-text-muted">أ. خالد علي • قسم التصميم الرقمي</p>
            </div>
            <div>
              <div class="flex justify-between text-xs mb-1.5">
                <span class="text-text-muted">التقدم: 20%</span>
                <span class="text-primary font-bold">4/20 درس</span>
              </div>
              <div class="w-full h-1.5 bg-bg-surface-hover rounded-full overflow-hidden">
                <div class="bg-primary h-full rounded-full" style="width: 20%"></div>
              </div>
            </div>
            <RouterLink to="/courses/101" class="w-full flex items-center justify-center py-2 bg-primary/10 text-primary font-bold text-sm rounded-lg hover:bg-primary hover:text-white transition-all cursor-pointer">استكمال المحاضرة</RouterLink>
          </div>
        </div>
        <!-- Card 3 -->
        <div class="min-w-[320px] bg-bg-surface rounded-xl overflow-hidden border border-border-base shadow-sm flex flex-col transition-colors duration-300">
          <div class="h-36 bg-center bg-cover" data-alt="Mathematics and algorithm visualization" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBqt60lVsBrPFlCpCKgfW2ok7Xukk0R3Adx2XVnWuoMhKZ-saTz8vwL3SVOwGUvPkWYEHJ1OTR13F-5Q-kShHFb2YfEGvMlDpudHBG5URZxhGo6hFg0qDoOdqHJIsK-g2QF2oCIFpORKWXbtdijKGMxlnGI3jHPQcQA9oGPEn-6s4ZPTsbwIaYF08vLj8EnlhwnR4TTMkbj2sL0SSODPzYdpviQFYG1yqkqUK2_D0tab6xRNke5kdClsoLcCStKc0ecdU4s3gF037Xe");'></div>
          <div class="p-5 flex flex-col gap-4">
            <div>
              <h4 class="font-bold text-base text-text-main mb-1">خوارزميات وهياكل البيانات</h4>
              <p class="text-xs text-text-muted">د. يوسف عمر • قسم الحاسبات</p>
            </div>
            <div>
              <div class="flex justify-between text-xs mb-1.5">
                <span class="text-text-muted">التقدم: 90%</span>
                <span class="text-primary font-bold">18/20 درس</span>
              </div>
              <div class="w-full h-1.5 bg-bg-surface-hover rounded-full overflow-hidden">
                <div class="bg-primary h-full rounded-full" style="width: 90%"></div>
              </div>
            </div>
            <RouterLink to="/student/courses/101" class="w-full flex items-center justify-center py-2 bg-primary/10 text-primary font-bold text-sm rounded-lg hover:bg-primary hover:text-white transition-all cursor-pointer">استكمال المحاضرة</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Analytics & Recommendations -->
    <section class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
      <!-- Analytics -->
      <div class="lg:col-span-1 bg-bg-surface p-6 rounded-xl border border-border-base shadow-sm transition-colors duration-300">
        <h2 class="text-lg font-bold text-text-main mb-6">تحليلات الأداء</h2>
        <div class="flex flex-col gap-6">
          <div class="flex items-center gap-4">
            <div class="relative size-16 flex items-center justify-center">
              <svg class="size-full -rotate-90">
                <circle class="text-bg-surface-hover" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" stroke-width="6"></circle>
                <circle class="text-primary" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" stroke-dasharray="176" stroke-dashoffset="35" stroke-width="6"></circle>
              </svg>
              <span class="absolute text-xs font-bold text-primary">80%</span>
            </div>
            <div>
              <p class="text-sm font-bold text-text-main">الحضور والمشاركة</p>
              <p class="text-xs text-text-muted">ممتاز مقارنة بزملاء الدفعة</p>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="relative size-16 flex items-center justify-center">
              <svg class="size-full -rotate-90">
                <circle class="text-bg-surface-hover" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" stroke-width="6"></circle>
                <circle class="text-green-500" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" stroke-dasharray="176" stroke-dashoffset="70" stroke-width="6"></circle>
              </svg>
              <span class="absolute text-xs font-bold text-green-500">60%</span>
            </div>
            <div>
              <p class="text-sm font-bold text-text-main">إنجاز التكاليف</p>
              <p class="text-xs text-text-muted">لديك 3 تكاليف متبقية هذا الأسبوع</p>
            </div>
          </div>
          <div class="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
            <div class="flex items-center gap-2 mb-2">
              <span class="material-symbols-outlined text-primary text-sm">auto_awesome</span>
              <span class="text-xs font-bold text-primary">توصية الذكاء الاصطناعي</span>
            </div>
            <p class="text-xs text-text-muted leading-normal">
              اقضِ 30 دقيقة إضافية في مراجعة "الخوارزميات" لتحسين نتيجتك المتوقعة بنسبة 15%.
            </p>
          </div>
        </div>
      </div>

      <!-- Recommendations -->
      <div class="lg:col-span-2 bg-bg-surface p-6 rounded-xl border border-border-base shadow-sm transition-colors duration-300">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-lg font-bold text-text-main flex items-center gap-2">
            <span class="material-symbols-outlined text-primary">bolt</span>
            مقترح لك خصيصاً في Smart Learn
          </h2>
          <span class="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase tracking-wider">مدعوم بالذكاء الاصطناعي</span>
        </div>
        <div class="space-y-4">
          <div class="flex items-center gap-4 p-4 rounded-xl hover:bg-bg-surface-hover transition-all border border-transparent hover:border-border-base cursor-pointer">
            <div class="size-16 rounded-lg bg-center bg-cover flex-shrink-0" data-alt="Cyber security concept art" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAXNnC5nDlDcUmyGn_0R0_szP7iRtyZ38MK_oYfxok3VyRVCWq0BX7yW4ivOtX5S3dMYnDya_7Stg0kYz2atZXkhUnj02YFtV8EDuIZm-5KAivD_mx3WEvSzfb0qEy7qNqyu0XEPwi4mSb8lph0EyMMtvn8vOAqZNr6eIbjYPEHhASFh_Yov7Jh4pNu3-6Xr9Im0gvOZ2il8ufWwgxKUwbBM0bvmbh-lTKGodG3XAejB3-qD_JAiMVIgcoEVxdiyxsoOQMwEMt4eoKq");'></div>
            <div class="flex-1">
              <h4 class="text-sm font-bold text-text-main">الأمن السيبراني للمبتدئين</h4>
              <p class="text-xs text-text-muted mt-1">بناءً على اهتمامك ببرمجة بايثون والشبكات</p>
            </div>
            <div class="flex items-center gap-4">
              <div class="text-right">
                <p class="text-xs font-bold text-primary">1200 طالب</p>
                <p class="text-[10px] text-text-muted">4.9/5 ★</p>
              </div>
              <button class="p-2 text-primary hover:bg-primary/10 rounded-full">
                <span class="material-symbols-outlined">add_circle</span>
              </button>
            </div>
          </div>
          <div class="flex items-center gap-4 p-4 rounded-xl hover:bg-bg-surface-hover transition-all border border-transparent hover:border-border-base cursor-pointer">
            <div class="size-16 rounded-lg bg-center bg-cover flex-shrink-0" data-alt="Data visualization art" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA0MWEzTAWCh2uCUrtYUasoWfG1PiUSGKbb8F9tEHJRJPibEWmh6cJ6FMzsr65mt7MqJOLcULmliwCSGb8_cjXIJT4N0x0XtjfcoiTqB4vIQG985swVLtf7f6HK6fEoaokEFsm_5O4PGok-ERnsDhziGAGf7JykpwupTLFhIQOZh2zIDoEbBy7hEjgqhtrMS4DQ8QOcFXvDw2Ctgr-Lz_CNlS3_nxgZ6TNCwsO5SkENt4XxZVsf5b_7v78-S42KIb-kkRUqbIw2iQuJ");'></div>
            <div class="flex-1">
              <h4 class="text-sm font-bold text-text-main">تحليل البيانات الضخمة</h4>
              <p class="text-xs text-text-muted mt-1">مهارة مطلوبة في سوق العمل لمجال تخصصك</p>
            </div>
            <div class="flex items-center gap-4">
              <div class="text-right">
                <p class="text-xs font-bold text-primary">850 طالب</p>
                <p class="text-[10px] text-text-muted">4.7/5 ★</p>
              </div>
              <button class="p-2 text-primary hover:bg-primary/10 rounded-full">
                <span class="material-symbols-outlined">add_circle</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>

<script setup>
import { RouterLink } from 'vue-router';
</script>
import { RouterLink } from 'vue-router';
