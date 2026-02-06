<template>
  <div class="flex flex-col h-full bg-bg-base text-text-main font-sans transition-colors duration-300">
    <header class="sticky top-0 z-10 bg-bg-surface/80 backdrop-blur-md border-b border-border-base px-8 h-16 flex items-center justify-between transition-colors duration-300 shrink-0">
      <div class="flex items-center gap-3 flex-row-reverse">
        <div class="bg-primary text-white p-2 rounded-xl flex items-center justify-center">
          <span class="material-symbols-outlined text-[24px]">school</span>
        </div>
        <h2 class="text-xl font-bold tracking-tight hidden md:block font-brand text-text-main">Smart Learn</h2>
      </div>
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2">
          <button class="p-2 rounded-lg bg-bg-base text-text-muted hover:bg-bg-surface transition-colors relative">
            <span class="material-symbols-outlined">notifications</span>
            <span class="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-bg-base"></span>
          </button>
          <button class="p-2 rounded-lg bg-bg-base text-text-muted hover:bg-bg-surface transition-colors">
            <span class="material-symbols-outlined">help</span>
          </button>
        </div>
      </div>
    </header>
    <div class="p-8 max-w-[1200px] mx-auto w-full flex-1 overflow-y-auto">
      <nav class="flex items-center gap-2 text-sm text-text-muted mb-4">
        <router-link class="hover:text-primary transition-colors" to="/instructor/dashboard">الرئيسية</router-link>
        <span class="material-symbols-outlined text-xs">chevron_left</span>
        <router-link class="hover:text-primary transition-colors" to="/instructor/quizzes">الاختبارات</router-link>
        <span class="material-symbols-outlined text-xs">chevron_left</span>
        <span class="text-text-main font-semibold">تعيين الاختبار</span>
      </nav>
      <div class="mb-8">
        <h1 class="text-3xl font-black text-text-main">تعيين الاختبار لمقرر</h1>
        <p class="text-text-muted mt-1">الخطوة النهائية: حدد الجدول الزمني والمقرر الدراسي للاختبار.</p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2 space-y-6">
          <div class="bg-bg-surface p-8 rounded-2xl border border-border-base shadow-sm transition-colors duration-300">
            <div class="space-y-6">
              <div>
                <label class="block text-sm font-bold mb-2 text-text-main">اختر المقرر الدراسي</label>
                <div class="relative">
                  <span class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-muted">search</span>
                  <select class="w-full h-12 pr-12 pl-4 bg-bg-base border-border-base rounded-xl text-sm focus:ring-2 focus:ring-primary/20 appearance-none text-text-main">
                    <option value="">ابحث عن اسم المقرر...</option>
                    <option value="1">مقدمة في الذكاء الاصطناعي (CS-102)</option>
                    <option value="2">هياكل البيانات والخوارزميات (CS-205)</option>
                    <option value="3">تصميم واجهة المستخدم (UX-401)</option>
                  </select>
                  <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">expand_more</span>
                </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-bold mb-2 text-text-main">تاريخ البدء</label>
                  <input class="w-full h-12 px-4 bg-bg-base border-border-base rounded-xl text-sm focus:ring-2 focus:ring-primary/20 text-text-main" type="date"/>
                </div>
                <div>
                  <label class="block text-sm font-bold mb-2 text-text-main">تاريخ الانتهاء</label>
                  <input class="w-full h-12 px-4 bg-bg-base border-border-base rounded-xl text-sm focus:ring-2 focus:ring-primary/20 text-text-main" type="date"/>
                </div>
                <div>
                  <label class="block text-sm font-bold mb-2 text-text-main">المدة الزمنية (بالدقائق)</label>
                  <div class="relative">
                    <input class="w-full h-12 px-4 bg-bg-base border-border-base rounded-xl text-sm focus:ring-2 focus:ring-primary/20 text-text-main" placeholder="60" type="number"/>
                    <span class="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted text-xs font-bold">دقيقة</span>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-bold mb-2 text-text-main">عدد المحاولات المسموحة</label>
                  <input class="w-full h-12 px-4 bg-bg-base border-border-base rounded-xl text-sm focus:ring-2 focus:ring-primary/20 text-text-main" placeholder="1" type="number"/>
                </div>
              </div>
              <hr class="border-border-base"/>
              <div class="space-y-4">
                <h3 class="font-bold text-text-main">خيارات العرض</h3>
                <div class="flex items-center justify-between p-4 bg-bg-base rounded-xl">
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-primary">visibility</span>
                    <div>
                      <p class="text-sm font-bold text-text-main">ظهور النتائج فوراً</p>
                      <p class="text-xs text-text-muted">عرض الدرجة للطالب مباشرة بعد إنهاء الاختبار</p>
                    </div>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input checked="" class="sr-only peer" type="checkbox"/>
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[-100%] rtl:peer-checked:after:translate-x-[-1.25rem] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                  </label>
                </div>
                <div class="flex items-center justify-between p-4 bg-bg-base rounded-xl">
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-primary">shuffle</span>
                    <div>
                      <p class="text-sm font-bold text-text-main">عشوائية الأسئلة</p>
                      <p class="text-xs text-text-muted">تغيير ترتيب الأسئلة لكل طالب</p>
                    </div>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input class="sr-only peer" type="checkbox"/>
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[-100%] rtl:peer-checked:after:translate-x-[-1.25rem] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-end gap-4 pt-4">
              <button class="px-8 py-3 rounded-xl font-bold text-text-muted hover:bg-bg-base transition-colors cursor-pointer">حفظ كمسودة</button>
              <button class="bg-primary text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/25 hover:scale-[1.02] transition-transform active:scale-95 cursor-pointer">
                <span class="material-symbols-outlined">send</span>
                <span>نشر الاختبار وتعيينه</span>
              </button>
            </div>
          </div>
        </div>
        <div class="lg:col-span-1">
          <div class="bg-bg-surface rounded-2xl border border-border-base shadow-sm sticky top-24 overflow-hidden transition-colors duration-300">
            <div class="bg-primary/5 p-6 border-b border-border-base">
              <h3 class="font-black text-lg text-primary">ملخص الاختبار</h3>
            </div>
            <div class="p-6 space-y-4">
              <div class="flex items-start gap-4">
                <div class="size-16 rounded-xl bg-cover bg-center border border-border-base" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCP7E5lceoLjS8w-aPadHEtgkUsX3-kUSaDol30XUF9d7UBy_QjY09jmEwi8Gx7hIEMhunDH0F5Xtu_n_WKMfVVgDHEiY7fyLVJrQp2cp3na88WkzhLcH9fY0BEGKdSSthPvV3qc5aCcqawuPfMNwfcuYSLXe_m1FiiJUzLfmHyytKfXg1IExg2xcgb8qhu72AIIwFnZtAwnKCsy-1NBz0n-HrXD5jbFSolOaqmdPCRDLaW06-RL_chZnCDbG778JWCuAOMUVegj-G3');"></div>
                <div>
                  <h4 class="font-bold text-text-main leading-tight">الاختبار النصفي للذكاء الاصطناعي</h4>
                  <p class="text-xs text-text-muted mt-1">تاريخ الإنشاء: 12 أكتوبر 2023</p>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4 py-4">
                <div class="bg-bg-base p-3 rounded-xl text-center">
                  <p class="text-[10px] text-text-muted font-bold uppercase mb-1">الأسئلة</p>
                  <p class="text-xl font-black text-text-main">24</p>
                </div>
                <div class="bg-bg-base p-3 rounded-xl text-center">
                  <p class="text-[10px] text-text-muted font-bold uppercase mb-1">الدرجة الكلية</p>
                  <p class="text-xl font-black text-text-main">100</p>
                </div>
              </div>
              <ul class="space-y-3">
                <li class="flex items-center gap-3 text-sm">
                  <span class="material-symbols-outlined text-text-muted text-lg">check_circle</span>
                  <span class="text-text-muted">تم التحقق من جميع الأسئلة</span>
                </li>
                <li class="flex items-center gap-3 text-sm">
                  <span class="material-symbols-outlined text-text-muted text-lg">grading</span>
                  <span class="text-text-muted">توزيع الدرجات تلقائي</span>
                </li>
                <li class="flex items-center gap-3 text-sm">
                  <span class="material-symbols-outlined text-text-muted text-lg">description</span>
                  <span class="text-text-muted">يشمل 3 أقسام رئيسية</span>
                </li>
              </ul>
              <button class="w-full mt-4 py-3 border-2 border-dashed border-border-base text-text-muted rounded-xl text-sm font-bold hover:bg-bg-base transition-colors flex items-center justify-center gap-2 cursor-pointer">
                <span class="material-symbols-outlined text-sm">preview</span>
                معاينة الاختبار
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<style scoped>
input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(0.5);
    cursor: pointer;
}
</style>
