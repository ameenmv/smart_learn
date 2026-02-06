<template>
  <div class="flex flex-col min-h-screen bg-bg-base text-text-main font-sans transition-colors duration-300">
    <header class="h-16 flex items-center justify-between border-b border-solid border-border-base bg-bg-surface px-6 sticky top-0 z-40 transition-colors duration-300">
      <div class="flex items-center gap-2">
        <a class="text-text-muted text-sm font-medium hover:text-primary transition-colors" href="#">المقررات الدراسية</a>
        <span class="text-text-muted material-symbols-outlined text-sm">chevron_left</span>
        <a class="text-text-muted text-sm font-medium hover:text-primary transition-colors" href="#">علوم الحاسب (CS101)</a>
        <span class="text-text-muted material-symbols-outlined text-sm">chevron_left</span>
        <span class="text-primary text-sm font-bold">تصحيح الواجب الدراسي: أساسيات الخوارزميات</span>
      </div>
      <div class="flex items-center gap-4">
        <div class="flex gap-4">
          <div class="flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-lg border border-primary/20">
            <span class="text-primary text-sm font-bold">15 / 30</span>
            <span class="text-text-main text-xs font-medium">تم تصحيحه</span>
          </div>
          <div class="flex items-center gap-2 px-3 py-1.5 bg-orange-100 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
            <span class="text-orange-600 dark:text-orange-400 text-sm font-bold">15</span>
            <span class="text-text-main text-xs font-medium">قيد الانتظار</span>
          </div>
        </div>
        <div class="w-px h-6 bg-border-base"></div>
        <button class="p-2 rounded-lg bg-bg-base text-text-main hover:bg-bg-surface-hover transition-colors">
          <span class="material-symbols-outlined">notifications</span>
        </button>
      </div>
    </header>
    <main class="flex flex-1 overflow-hidden h-[calc(100vh-64px)]">
      <div class="flex-1 flex flex-col min-w-0 bg-bg-surface border-l border-border-base transition-colors duration-300">
        <div class="p-4 flex flex-col gap-4 border-b border-border-base">
          <div class="flex gap-4 items-center">
            <label class="flex-1 h-11 relative">
              <span class="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-text-muted">search</span>
              <input class="w-full h-full pr-11 pl-4 rounded-lg text-text-main border-none bg-bg-base focus:ring-2 focus:ring-primary/50 text-sm placeholder:text-text-muted" placeholder="البحث عن طالب بالاسم أو الرقم الجامعي..." value=""/>
            </label>
            <button class="flex items-center gap-2 px-4 py-2.5 bg-bg-base rounded-lg text-sm font-medium text-text-main hover:bg-bg-surface-hover transition-colors">
              <span class="material-symbols-outlined text-lg">filter_list</span>
              تصفية
            </button>
            <div class="h-6 w-px bg-border-base mx-2"></div>
            <button @click="router.push('/instructor/assignments/create')" class="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 cursor-pointer">
              <span class="material-symbols-outlined text-lg">add</span>
              إنشاء واجب جديد
            </button>
          </div>
          <div class="flex gap-3 flex-wrap">
            <button class="flex h-8 items-center gap-2 rounded-full bg-primary text-white px-4 text-xs font-bold shadow-md shadow-primary/20">الكل (30)</button>
            <button class="flex h-8 items-center gap-2 rounded-full bg-bg-base px-4 text-xs font-medium text-text-main hover:bg-bg-surface-hover transition-colors">تم التسليم (25)</button>
            <button class="flex h-8 items-center gap-2 rounded-full bg-bg-base px-4 text-xs font-medium text-red-500 hover:bg-bg-surface-hover transition-colors">متأخر (5)</button>
            <button class="flex h-8 items-center gap-2 rounded-full bg-bg-base px-4 text-xs font-medium text-text-main hover:bg-bg-surface-hover transition-colors">تم التصحيح (15)</button>
          </div>
        </div>
        <div class="overflow-y-auto flex-1">
          <table class="w-full text-right border-collapse">
            <thead>
              <tr class="bg-bg-base text-text-muted text-xs font-bold uppercase tracking-wider sticky top-0 md:text-sm">
                <th class="px-6 py-4 border-b border-border-base">الطالب</th>
                <th class="px-6 py-4 border-b border-border-base">تاريخ التسليم</th>
                <th class="px-6 py-4 border-b border-border-base">الحالة</th>
                <th class="px-6 py-4 border-b border-border-base">الدرجة</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border-base">
              <tr class="hover:bg-primary/5 cursor-pointer transition-colors bg-primary/5 border-r-4 border-primary">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <div class="size-9 rounded-full bg-cover" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCMJGxNVLJipJVLPVqrqEgVkHzjJpByFZy57GcWUFRjWKvnUruH_WkyK6s8sxILcFigkGyQ5v80hLg8UmAyQT7vg6og2stHXNAxgev5ZhK4v5rXjULa5wplclEVqc3m7IgjvTQd0rGTbDkrr2ZoNeWFgHmfT_Xrd5KqWFL1c10hMruakQCfFMMcg69leLluSQ4ucKkgoj_hG-iSmnAlKgKdgC0G0NKDWJ5kHFvVhTQF2Acnh25pWeUybQt-d9MAt3RgTokd6GXCiVKx");'></div>
                    <div>
                      <p class="text-sm font-bold text-text-main">أحمد محمود العتيبي</p>
                      <p class="text-xs text-text-muted">ID: 442001562</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 text-sm font-medium text-text-main">15 أكتوبر 2023 - 09:30 م</td>
                <td class="px-6 py-4">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">في الوقت</span>
                </td>
                <td class="px-6 py-4 text-sm font-bold text-primary">-- / 100</td>
              </tr>
              <tr class="hover:bg-bg-base cursor-pointer transition-colors">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <div class="size-9 rounded-full bg-cover" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA6yaH1gZ7ZTdq-mNMCClKriC4uRUjiu7ffJ8M-0w2gO0Cl4dnYcuCfh9DiyejEnW2O4GrMnYQVkUjeq-w7kFykFuCJzuz1qZIwvVvoFSRw3MtGlB4y7rPjTwa3PcT4BAJPCsUVOxOwLXyBUn2ZV2V0vImF2sbDw2o0C5fi2mLv4B0VkW6andrVgAqbMOSgmDoQ0CDA1zQ9-0uLQmxNWNK441O5j0XdcVA9oAZCy-gqDwK5uQf1I2KrcwHJHV6lJmjQ0xl3QtcgM6t9");'></div>
                    <div>
                      <p class="text-sm font-bold text-text-main">سارة خالد الشمري</p>
                      <p class="text-xs text-text-muted">ID: 442001984</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 text-sm font-medium text-text-main">15 أكتوبر 2023 - 11:15 م</td>
                <td class="px-6 py-4">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">متأخر (15 دقيقة)</span>
                </td>
                <td class="px-6 py-4 text-sm font-bold text-text-main">88 / 100</td>
              </tr>
              <tr class="hover:bg-bg-base cursor-pointer transition-colors">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <div class="size-9 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">ن ص</div>
                    <div>
                      <p class="text-sm font-bold text-text-main">نورة صالح الزهراني</p>
                      <p class="text-xs text-text-muted">ID: 442002133</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 text-sm font-medium text-text-main">14 أكتوبر 2023 - 02:20 م</td>
                <td class="px-6 py-4">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">في الوقت</span>
                </td>
                <td class="px-6 py-4 text-sm font-bold text-text-main">95 / 100</td>
              </tr>
              <tr class="hover:bg-bg-base cursor-pointer transition-colors">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <div class="size-9 rounded-full bg-cover" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTT35c1Z5vDJzsaZJKjzmNZzKKZsyymxqwOpjBWOzXqiApk1uFQetpGXr-V23lpjsgXrGABbpzSib2yzf67ZqSzFWXF-8-1rOmw5SmqbPY4A2i_bnSuJTaTmzsDnq76rxzt7MSNzoJHkUzDK7GFJSvBrIEDiKbCgmHjcnlGMZvp5heckkjrQzxldji-2KZCJBd412yYloaZpdu_xjRXPXMUNwCT9DmIElEVqaZnpdAJDNp8j-kVV0J3g0fd_eT-b1GeaZIKmXUnO26");'></div>
                    <div>
                      <p class="text-sm font-bold text-text-main">فيصل بن عبد العزيز</p>
                      <p class="text-xs text-text-muted">ID: 442001440</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 text-sm font-medium text-text-main">16 أكتوبر 2023 - 08:45 ص</td>
                <td class="px-6 py-4">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">لم يسلم</span>
                </td>
                <td class="px-6 py-4 text-sm font-bold text-gray-400">-- / 100</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <aside class="w-[480px] flex flex-col bg-bg-surface border-r border-border-base shadow-2xl z-40 transition-colors duration-300">
        <div class="p-4 border-b border-border-base flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="material-symbols-outlined text-primary">assignment</span>
            <h3 class="text-lg font-bold text-text-main">تصحيح التسليم</h3>
          </div>
          <button class="p-1 hover:bg-bg-base rounded-full transition-colors text-text-muted">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>
        <div class="flex-1 overflow-y-auto p-6 flex flex-col gap-8">
          <div class="flex flex-col gap-3">
            <label class="text-sm font-bold text-text-main">الملف المرفق</label>
            <div class="relative aspect-[3/4] bg-bg-base rounded-xl border-2 border-dashed border-border-base flex flex-col items-center justify-center p-6 text-center group transition-colors duration-300">
              <div class="size-16 bg-bg-surface shadow-md rounded-lg flex items-center justify-center mb-4">
                <span class="material-symbols-outlined text-red-500 text-4xl">picture_as_pdf</span>
              </div>
              <p class="text-sm font-bold text-text-main">Ahmed_Algorithms_v2.pdf</p>
              <p class="text-xs text-text-muted mt-1">1.2 MB • تم التسليم في 15 أكتوبر</p>
              <div class="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center gap-4">
                <button class="bg-white text-primary px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 shadow-lg cursor-pointer">
                  <span class="material-symbols-outlined">visibility</span>
                  عرض
                </button>
                <button class="bg-white/20 text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 border border-white/50 cursor-pointer">
                  <span class="material-symbols-outlined">download</span>
                  تحميل
                </button>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <div class="flex items-center justify-between">
              <label class="text-sm font-bold text-text-main">رصد الدرجة</label>
              <span class="text-xs text-primary font-medium">الحد الأقصى: 100</span>
            </div>
            <div class="flex items-center gap-4">
              <div class="relative flex-1">
                <input class="w-full h-12 pr-4 pl-12 rounded-lg border-border-base bg-bg-base text-text-main text-lg font-bold focus:ring-primary focus:border-primary outline-none" placeholder="0" type="number"/>
                <span class="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted font-medium">/ 100</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <label class="text-sm font-bold text-text-main">الملاحظات والتعليقات</label>
            <div class="relative">
              <textarea class="w-full p-4 rounded-lg border-border-base bg-bg-base text-sm text-text-main placeholder:text-text-muted focus:ring-primary focus:border-primary resize-none outline-none" placeholder="اكتب ملاحظاتك للطالب هنا..." rows="6"></textarea>
              <div class="absolute bottom-3 left-3 flex gap-2">
                <button class="p-1.5 hover:bg-bg-surface rounded-md text-text-muted">
                  <span class="material-symbols-outlined text-xl">attach_file</span>
                </button>
                <button class="p-1.5 hover:bg-bg-surface rounded-md text-text-muted">
                  <span class="material-symbols-outlined text-xl">mic</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="p-6 border-t border-border-base flex flex-col gap-3 bg-bg-surface transition-colors duration-300">
          <button class="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-lg font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20 cursor-pointer">
            <span class="material-symbols-outlined">save</span>
            حفظ الدرجة
          </button>
          <div class="flex gap-3">
            <button class="flex-1 bg-bg-base hover:bg-bg-surface-hover text-text-main h-11 rounded-lg font-bold flex items-center justify-center gap-2 transition-all cursor-pointer">
              <span class="material-symbols-outlined">arrow_forward_ios</span>
              الطالب السابق
            </button>
            <button class="flex-1 bg-bg-base hover:bg-bg-surface-hover text-text-main h-11 rounded-lg font-bold flex items-center justify-center gap-2 transition-all cursor-pointer">
              الطالب التالي
              <span class="material-symbols-outlined">arrow_back_ios</span>
            </button>
          </div>
        </div>
      </aside>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<style scoped>
/* Scoped styles */
</style>
