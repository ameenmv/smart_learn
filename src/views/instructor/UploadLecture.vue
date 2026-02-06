<template>
  <div class="flex flex-col min-h-screen">
    <header class="sticky top-0 z-10 bg-bg-surface/80 backdrop-blur-md border-b border-border-base px-8 h-16 flex items-center justify-between transition-colors duration-300">
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-3">
          <div class="flex items-center justify-center w-10 h-10 bg-primary rounded-[10px]">
            <span class="material-symbols-outlined text-white text-[24px]">school</span>
          </div>
          <span class="text-2xl font-bold text-text-main tracking-tight font-[Inter]">Smart Learn</span>
        </div>
        <div class="w-px h-6 bg-border-base mx-2 hidden md:block"></div>
        <h2 class="text-xl font-black tracking-tight hidden md:block text-text-main">رفع محاضرة جديدة</h2>
      </div>
      <div class="flex items-center gap-6">
        <button class="bg-primary text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/25 hover:opacity-90 transition-opacity cursor-pointer">
          <span>حفظ كمسودة</span>
        </button>
      </div>
    </header>

    <div class="p-8 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 w-full">
      <div class="lg:col-span-3 space-y-6">
        <div class="bg-bg-surface p-6 rounded-2xl border border-border-base shadow-sm transition-colors duration-300">
          <div class="flex items-center justify-between relative">
            <div class="absolute top-1/2 left-0 w-full h-0.5 bg-border-base -translate-y-1/2 z-0"></div>
            <div class="relative z-10 flex flex-col items-center gap-2 group">
              <div class="size-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                <span class="material-symbols-outlined text-xl">check</span>
              </div>
              <span class="text-xs font-bold text-text-muted">المعلومات الأساسية</span>
            </div>
            <div class="relative z-10 flex flex-col items-center gap-2">
              <div class="size-10 rounded-full bg-primary text-white flex items-center justify-center font-bold ring-4 ring-primary/20">2</div>
              <span class="text-xs font-bold text-primary">تحميل الفيديو</span>
            </div>
            <div class="relative z-10 flex flex-col items-center gap-2">
              <div class="size-10 rounded-full bg-bg-surface border-2 border-border-base text-gray-400 flex items-center justify-center font-bold">3</div>
              <span class="text-xs font-bold text-gray-400">المصادر الإضافية</span>
            </div>
            <div class="relative z-10 flex flex-col items-center gap-2">
              <div class="size-10 rounded-full bg-bg-surface border-2 border-border-base text-gray-400 flex items-center justify-center font-bold">4</div>
              <span class="text-xs font-bold text-gray-400">الإعدادات</span>
            </div>
          </div>
        </div>

        <div class="bg-bg-surface border-2 border-dashed border-primary/30 rounded-3xl p-12 text-center transition-colors duration-300">
          <div class="max-w-md mx-auto">
            <div class="size-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <span class="material-symbols-outlined text-4xl text-primary">cloud_upload</span>
            </div>
            <h3 class="text-2xl font-black mb-2 text-text-main">قم برفع فيديو المحاضرة</h3>
            <p class="text-text-muted mb-8">اسحب وأفلت الملف هنا أو انقر لاختيار ملف من جهازك. يدعم MP4, MKV, MOV بحد أقصى 2 جيجابايت.</p>
            <div class="bg-bg-base/50 rounded-2xl p-6 border border-border-base transition-colors duration-300">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-2 overflow-hidden">
                  <span class="material-symbols-outlined text-primary">movie</span>
                  <span class="font-bold text-sm truncate text-text-main">lecture_05_deep_learning.mp4</span>
                </div>
                <span class="text-xs font-bold text-primary">65%</span>
              </div>
              <div class="w-full h-2 bg-border-base rounded-full overflow-hidden">
                <div class="h-full bg-primary transition-all duration-300" style="width: 65%"></div>
              </div>
              <div class="flex justify-between mt-3 text-[10px] text-text-muted font-medium">
                <span>2.4 MB/s</span>
                <span>تبقي 3 دقائق</span>
              </div>
            </div>
            <div class="mt-8 flex items-center justify-center gap-4">
              <button class="px-8 py-3 rounded-xl border border-border-base font-bold hover:bg-bg-surface-hover transition-colors text-text-main cursor-pointer">إلغاء</button>
              <button class="bg-primary text-white px-10 py-3 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform cursor-pointer">التالي</button>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-bg-surface p-4 rounded-xl border border-border-base flex items-center gap-4 transition-colors duration-300">
            <div class="size-10 bg-amber-50 dark:bg-amber-900/20 rounded-lg flex items-center justify-center text-amber-600">
              <span class="material-symbols-outlined">subtitles</span>
            </div>
            <div>
              <p class="text-sm font-bold text-text-main">توليد ترجمة تلقائية</p>
              <p class="text-xs text-text-muted">استخدام الذكاء الاصطناعي لكتابة النصوص</p>
            </div>
            <input :checked="true" class="mr-auto rounded text-primary focus:ring-primary bg-bg-surface border-border-base cursor-pointer" type="checkbox"/>
          </div>
          <div class="bg-bg-surface p-4 rounded-xl border border-border-base flex items-center gap-4 transition-colors duration-300">
            <div class="size-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center text-primary">
              <span class="material-symbols-outlined">high_quality</span>
            </div>
            <div>
              <p class="text-sm font-bold text-text-main">تحسين جودة الفيديو</p>
              <p class="text-xs text-text-muted">ضغط الفيديو مع الحفاظ على دقة 4K</p>
            </div>
            <input :checked="true" class="mr-auto rounded text-primary focus:ring-primary bg-bg-surface border-border-base cursor-pointer" type="checkbox"/>
          </div>
        </div>
      </div>

      <div class="lg:col-span-1">
        <div class="bg-bg-surface border border-border-base rounded-2xl overflow-hidden sticky top-24 transition-colors duration-300">
          <div class="p-4 bg-bg-base border-b border-border-base">
            <h4 class="font-black text-sm text-text-main">هيكل المساق</h4>
            <p class="text-xs text-text-muted mt-1">مقدمة في الذكاء الاصطناعي</p>
          </div>
          <div class="p-4 space-y-4">
            <div class="space-y-2">
              <div class="flex items-center gap-2 text-emerald-500">
                <span class="material-symbols-outlined text-sm">check_circle</span>
                <span class="text-xs font-bold">المحاضرة 1: مدخل للتعلم الآلي</span>
              </div>
              <div class="flex items-center gap-2 text-emerald-500">
                <span class="material-symbols-outlined text-sm">check_circle</span>
                <span class="text-xs font-bold">المحاضرة 2: الشبكات العصبية</span>
              </div>
              <div class="flex items-center gap-2 text-emerald-500">
                <span class="material-symbols-outlined text-sm">check_circle</span>
                <span class="text-xs font-bold">المحاضرة 3: معالجة اللغات</span>
              </div>
              <div class="flex items-center gap-2 text-emerald-500">
                <span class="material-symbols-outlined text-sm">check_circle</span>
                <span class="text-xs font-bold">المحاضرة 4: الرؤية الحاسوبية</span>
              </div>
              <div class="flex items-center gap-2 text-primary bg-primary/5 p-2 rounded-lg border border-primary/10">
                <span class="material-symbols-outlined text-sm">pending</span>
                <span class="text-xs font-bold">المحاضرة 5: التعلم العميق (الحالية)</span>
              </div>
              <div class="flex items-center gap-2 text-gray-400 pr-2">
                <span class="material-symbols-outlined text-sm">radio_button_unchecked</span>
                <span class="text-xs font-bold">المحاضرة 6: أخلاقيات الذكاء الاصطناعي</span>
              </div>
            </div>
            <button class="w-full py-2 border-2 border-dashed border-border-base rounded-lg text-xs font-bold text-text-muted hover:bg-bg-base transition-colors cursor-pointer">
              + إضافة محاضرة جديدة
            </button>
          </div>
          <div class="p-4 border-t border-border-base bg-bg-base/50">
            <div class="flex justify-between items-center mb-2">
              <span class="text-[10px] font-bold text-text-muted">اكتمال المساق</span>
              <span class="text-[10px] font-bold text-primary">80%</span>
            </div>
            <div class="w-full h-1.5 bg-border-base rounded-full overflow-hidden">
              <div class="h-full bg-primary" style="width: 80%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles */
</style>
