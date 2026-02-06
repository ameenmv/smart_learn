<template>
  <div class="flex flex-col h-full bg-bg-base text-text-main font-sans transition-colors duration-300">
    <header class="sticky top-0 z-10 bg-bg-surface/80 backdrop-blur-md border-b border-border-base px-8 h-16 flex items-center justify-between transition-colors duration-300 shrink-0">
      <div class="flex items-center gap-4">
        <nav class="flex items-center gap-2 text-sm text-text-muted">
          <router-link class="hover:text-primary transition-colors" to="/instructor/quizzes">الاختبارات</router-link>
          <span class="material-symbols-outlined text-xs">chevron_left</span>
          <span class="text-text-main font-semibold">بناء اختبار جديد</span>
        </nav>
      </div>
      <div class="flex items-center gap-3">
        <button class="px-4 py-2 text-sm font-bold text-text-muted hover:bg-bg-base rounded-lg transition-colors flex items-center gap-2 cursor-pointer">
          <span class="material-symbols-outlined">visibility</span>
          <span>معاينة</span>
        </button>
        <button class="px-6 py-2 text-sm font-bold bg-primary text-white rounded-lg shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center gap-2 cursor-pointer">
          <span class="material-symbols-outlined">save</span>
          <span>حفظ المسودة</span>
        </button>
      </div>
    </header>
    <div class="p-8 max-w-[1000px] mx-auto w-full flex-1 overflow-y-auto">
      <div class="mb-12">
        <div class="flex items-center justify-between relative max-w-2xl mx-auto">
          <div class="flex flex-col items-center gap-2 z-10">
            <div class="size-10 rounded-full bg-emerald-500 text-white flex items-center justify-center">
              <span class="material-symbols-outlined">check</span>
            </div>
            <span class="text-xs font-bold text-text-muted">تفاصيل الاختبار</span>
          </div>
          <div class="flex flex-col items-center gap-2 z-10">
            <div class="size-10 rounded-full bg-primary text-white flex items-center justify-center ring-4 ring-primary/20">
              <span class="text-sm font-bold">2</span>
            </div>
            <span class="text-xs font-bold text-primary">بناء الأسئلة</span>
          </div>
          <div class="flex flex-col items-center gap-2 z-10">
            <div class="size-10 rounded-full bg-bg-surface border-2 border-border-base text-text-muted flex items-center justify-center transition-colors">
              <span class="text-sm font-bold">3</span>
            </div>
            <span class="text-xs font-bold text-text-muted">تعيين المقرر</span>
          </div>
          <div class="absolute top-5 left-0 w-full h-0.5 bg-border-base -z-0"></div>
          <div class="absolute top-5 right-0 w-1/2 h-0.5 bg-primary -z-0"></div>
        </div>
      </div>
      <div class="space-y-6">
        <div class="flex items-center justify-between">
          <h2 class="text-2xl font-black text-text-main">بنك الأسئلة</h2>
          <p class="text-sm text-text-muted">إجمالي النقاط: <span class="text-primary font-bold">25 درجة</span></p>
        </div>
        <div class="grid grid-cols-3 gap-4">
          <button class="flex flex-col items-center gap-3 p-6 bg-bg-surface border-2 border-dashed border-border-base rounded-2xl hover:border-primary/50 hover:bg-primary/5 transition-all group cursor-pointer">
            <div class="size-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center">
              <span class="material-symbols-outlined text-3xl">list_alt</span>
            </div>
            <span class="font-bold text-sm text-text-main">اختيار من متعدد</span>
          </button>
          <button class="flex flex-col items-center gap-3 p-6 bg-bg-surface border-2 border-dashed border-border-base rounded-2xl hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer">
            <div class="size-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 flex items-center justify-center">
              <span class="material-symbols-outlined text-3xl">check_circle</span>
            </div>
            <span class="font-bold text-sm text-text-main">صح / خطأ</span>
          </button>
          <button class="flex flex-col items-center gap-3 p-6 bg-bg-surface border-2 border-dashed border-border-base rounded-2xl hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer">
            <div class="size-12 rounded-xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 flex items-center justify-center">
              <span class="material-symbols-outlined text-3xl">short_text</span>
            </div>
            <span class="font-bold text-sm text-text-main">إجابة قصيرة</span>
          </button>
        </div>
        <div class="space-y-4 mt-8">
          <div class="bg-bg-surface rounded-2xl border border-border-base overflow-hidden transition-colors">
            <div class="p-6 border-b border-border-base flex items-center justify-between bg-bg-base/50">
              <div class="flex items-center gap-3">
                <span class="size-8 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-sm">1</span>
                <span class="font-bold text-text-main">اختيار من متعدد</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="flex items-center gap-1 bg-bg-surface px-3 py-1 rounded-lg border border-border-base">
                  <span class="text-xs text-text-muted">النقاط:</span>
                  <input class="w-10 bg-transparent border-none p-0 text-xs font-bold text-primary focus:ring-0" type="number" value="5"/>
                </div>
                <button class="p-2 text-text-muted hover:text-red-500 transition-colors cursor-pointer">
                  <span class="material-symbols-outlined">delete</span>
                </button>
                <button class="p-2 text-text-muted hover:text-primary transition-colors cursor-pointer">
                  <span class="material-symbols-outlined">drag_indicator</span>
                </button>
              </div>
            </div>
            <div class="p-6 space-y-4">
              <textarea class="w-full bg-bg-base border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 min-h-[80px] text-text-main placeholder:text-text-muted" placeholder="اكتب نص السؤال هنا..."></textarea>
              <div class="grid gap-3">
                <div class="flex items-center gap-3">
                  <input checked="" class="text-primary focus:ring-primary border-border-base bg-bg-surface" name="q1" type="radio"/>
                  <input class="flex-1 bg-emerald-50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-800/30 rounded-lg text-sm px-4 py-2 text-text-main" type="text" value="الخيار الأول (الإجابة الصحيحة)"/>
                  <button class="text-text-muted hover:text-red-500 cursor-pointer"><span class="material-symbols-outlined text-sm">close</span></button>
                </div>
                <div class="flex items-center gap-3">
                  <input class="text-primary focus:ring-primary border-border-base bg-bg-surface" name="q1" type="radio"/>
                  <input class="flex-1 bg-bg-base border-none rounded-lg text-sm px-4 py-2 text-text-main placeholder:text-text-muted" placeholder="أضف خياراً..." type="text"/>
                  <button class="text-text-muted hover:text-red-500 cursor-pointer"><span class="material-symbols-outlined text-sm">close</span></button>
                </div>
              </div>
              <button class="text-sm font-bold text-primary flex items-center gap-1 hover:underline cursor-pointer">
                <span class="material-symbols-outlined text-base">add</span>
                <span>إضافة خيار جديد</span>
              </button>
            </div>
          </div>
          <div class="bg-bg-surface rounded-2xl border border-border-base overflow-hidden transition-colors">
            <div class="p-6 border-b border-border-base flex items-center justify-between bg-bg-base/50">
              <div class="flex items-center gap-3">
                <span class="size-8 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-sm">2</span>
                <span class="font-bold text-text-main">صح أو خطأ</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="flex items-center gap-1 bg-bg-surface px-3 py-1 rounded-lg border border-border-base">
                  <span class="text-xs text-text-muted">النقاط:</span>
                  <input class="w-10 bg-transparent border-none p-0 text-xs font-bold text-primary focus:ring-0" type="number" value="2"/>
                </div>
                <button class="p-2 text-text-muted hover:text-red-500 transition-colors cursor-pointer">
                  <span class="material-symbols-outlined">delete</span>
                </button>
                <button class="p-2 text-text-muted hover:text-primary transition-colors cursor-pointer">
                  <span class="material-symbols-outlined">drag_indicator</span>
                </button>
              </div>
            </div>
            <div class="p-6 space-y-4">
              <textarea class="w-full bg-bg-base border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 min-h-[80px] text-text-main placeholder:text-text-muted" placeholder="اكتب جملة الصح أو الخطأ هنا..."></textarea>
              <div class="flex gap-4">
                <label class="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-900/10 cursor-pointer">
                  <input checked="" class="text-emerald-500 focus:ring-emerald-500 bg-bg-surface border-border-base" name="q2" type="radio"/>
                  <span class="font-bold text-emerald-700 dark:text-emerald-400">صح</span>
                </label>
                <label class="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border-2 border-transparent bg-bg-base cursor-pointer hover:bg-bg-surface-hover transition-colors">
                  <input class="text-primary focus:ring-primary bg-bg-surface border-border-base" name="q2" type="radio"/>
                  <span class="font-bold text-text-main">خطأ</span>
                </label>
              </div>
            </div>
          </div>
          <div class="bg-bg-surface rounded-2xl border border-border-base overflow-hidden opacity-80 transition-colors">
            <div class="p-6 border-b border-border-base flex items-center justify-between bg-bg-base/50">
              <div class="flex items-center gap-3">
                <span class="size-8 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-sm">3</span>
                <span class="font-bold text-text-main">إجابة قصيرة</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="flex items-center gap-1 bg-bg-surface px-3 py-1 rounded-lg border border-border-base">
                  <span class="text-xs text-text-muted">النقاط:</span>
                  <input class="w-10 bg-transparent border-none p-0 text-xs font-bold text-primary focus:ring-0" type="number" value="1"/>
                </div>
                <button class="p-2 text-text-muted hover:text-red-500 transition-colors cursor-pointer">
                  <span class="material-symbols-outlined">delete</span>
                </button>
                <button class="p-2 text-text-muted hover:text-primary transition-colors cursor-pointer">
                  <span class="material-symbols-outlined">drag_indicator</span>
                </button>
              </div>
            </div>
            <div class="p-6 space-y-4">
              <textarea class="w-full bg-bg-base border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 min-h-[80px] text-text-main placeholder:text-text-muted" placeholder="اكتب السؤال المقالي هنا..."></textarea>
              <div class="p-4 bg-amber-50 dark:bg-amber-900/10 rounded-xl border border-amber-100 dark:border-amber-900/20">
                <p class="text-xs text-amber-700 dark:text-amber-400 font-medium leading-relaxed">
                  <span class="material-symbols-outlined text-sm align-text-bottom">info</span>
                  يتطلب هذا النوع من الأسئلة تصحيحاً يدوياً من قِبل المحاضر بعد تسليم الاختبار.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between pt-8 border-t border-border-base">
          <button class="px-8 py-3 rounded-xl border border-border-base font-bold text-text-muted hover:bg-bg-surface transition-colors cursor-pointer">
            السابق
          </button>
          <button @click="router.push('/instructor/quizzes/assign')" class="px-10 py-3 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/25 hover:scale-[1.02] transition-transform cursor-pointer">
            الخطوة التالية
          </button>
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
/* Scoped styles can handle specific overrides if needed */
</style>
