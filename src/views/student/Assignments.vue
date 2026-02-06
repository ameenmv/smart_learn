<template>
  <div class="max-w-5xl mx-auto space-y-6 font-display">
    <nav class="flex flex-wrap gap-2 text-sm font-medium">
      <RouterLink class="text-text-muted hover:text-primary transition-colors" to="/student/dashboard">الرئيسية</RouterLink>
      <span class="text-text-muted">/</span>
      <RouterLink class="text-text-muted hover:text-primary transition-colors" to="/student/courses">المقررات الدراسية</RouterLink>
      <span class="text-text-muted">/</span>
      <span class="text-primary">تسليم الواجب</span>
    </nav>
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div class="flex flex-col gap-2">
        <h1 class="text-3xl md:text-4xl font-black tracking-tight text-text-main leading-tight">
          تسليم الواجب: تصميم واجهات المستخدم
        </h1>
        <p class="text-text-muted text-lg">يرجى مراجعة التعليمات قبل رفع الملف النهائي</p>
      </div>
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200 text-sm font-bold border border-yellow-200 dark:border-yellow-900/50">
        <span class="material-symbols-outlined text-base">info</span>
        لم يتم التسليم
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="flex items-center gap-4 rounded-xl p-6 bg-bg-surface border border-border-base shadow-sm transition-colors duration-300">
        <div class="flex items-center justify-center size-12 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400">
          <span class="material-symbols-outlined">event</span>
        </div>
        <div class="flex flex-col">
          <p class="text-text-muted text-xs md:text-sm font-medium">تاريخ التسليم النهائي</p>
          <p class="text-text-main text-xl font-bold">٢٥ ديسمبر، ٢٠٢٣</p>
        </div>
      </div>
      <div class="flex items-center gap-4 rounded-xl p-6 bg-bg-surface border border-border-base shadow-sm transition-colors duration-300">
        <div class="flex items-center justify-center size-12 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400">
          <span class="material-symbols-outlined">grade</span>
        </div>
        <div class="flex flex-col">
          <p class="text-text-muted text-xs md:text-sm font-medium">الدرجة الكلية</p>
          <p class="text-text-main text-xl font-bold">١٠٠ نقطة</p>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2 space-y-6">
        <div class="bg-bg-surface rounded-xl border border-border-base p-6 space-y-3 transition-colors duration-300">
          <h3 class="text-lg font-bold text-text-main">التعليمات والمتطلبات</h3>
          <p class="text-text-muted leading-relaxed">
            المطلوب هو تصميم واجهة مستخدم لتطبيق جوال تعليمي. يجب أن يتضمن التصميم شاشة الدخول، الصفحة الرئيسية، وشاشة تفاصيل المادة. يرجى التأكد من اتباع معايير تجربة المستخدم المذكورة في المحاضرة الرابعة.
          </p>
        </div>
        <div class="bg-bg-surface rounded-xl border-2 border-dashed border-border-base p-12 flex flex-col items-center justify-center text-center gap-4 hover:border-primary/50 transition-colors cursor-pointer group">
          <div class="size-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <span class="material-symbols-outlined text-primary text-4xl">cloud_upload</span>
          </div>
          <div>
            <h4 class="text-xl font-bold text-text-main">اسحب الملف هنا أو تصفح من جهازك</h4>
            <p class="text-text-muted mt-1">يدعم ملفات PDF, ZIP, JPG (بحد أقصى ٢٠ ميجابايت)</p>
          </div>
          <input class="hidden" id="fileInput" type="file"/>
          <button class="mt-2 text-primary font-bold hover:underline" onclick="document.getElementById('fileInput').click()">اختيار ملف من الجهاز</button>
        </div>
        <div class="flex flex-wrap items-center gap-4">
          <button class="flex-1 md:flex-none min-w-[180px] bg-primary text-white font-bold h-12 rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 cursor-pointer">
            <span class="material-symbols-outlined">send</span>
            ارسال الواجب
          </button>
          <button class="flex-1 md:flex-none min-w-[150px] bg-bg-surface border border-border-base text-text-main font-bold h-12 rounded-lg hover:bg-bg-surface-hover transition-all cursor-pointer">
            حفظ كمسودة
          </button>
        </div>
      </div>
      <div class="lg:col-span-1 space-y-6">
        <div class="bg-bg-surface rounded-xl border border-border-base p-6 shadow-sm transition-colors duration-300">
          <h3 class="text-lg font-bold mb-6 flex items-center gap-2 text-text-main">
            <span class="material-symbols-outlined text-primary">fact_check</span>
            قائمة التحقق
          </h3>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <div class="mt-1 size-5 rounded-md border-2 border-primary bg-primary flex items-center justify-center text-white">
                <span class="material-symbols-outlined text-xs font-bold">check</span>
              </div>
              <span class="text-sm font-medium text-text-main">تنسيق الملف PDF</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="mt-1 size-5 rounded-md border-2 border-border-base"></div>
              <span class="text-sm font-medium text-text-muted">إرفاق رابط Figma (اختياري)</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="mt-1 size-5 rounded-md border-2 border-border-base"></div>
              <span class="text-sm font-medium text-text-muted">تسمية الملف باسم الطالب</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="mt-1 size-5 rounded-md border-2 border-border-base"></div>
              <span class="text-sm font-medium text-text-muted">التأكد من دقة الصور المستخدمة</span>
            </li>
          </ul>
          <hr class="my-6 border-border-base"/>
          <div class="bg-bg-surface-hover p-4 rounded-lg">
            <p class="text-xs text-text-muted mb-1">هل لديك سؤال؟</p>
            <a class="text-sm font-bold text-primary flex items-center gap-1 cursor-pointer hover:underline" href="#">
              تواصل مع أستاذ المادة
              <span class="material-symbols-outlined text-sm">arrow_left</span>
            </a>
          </div>
        </div>
        <div class="bg-bg-surface rounded-xl border border-border-base p-6 shadow-sm transition-colors duration-300">
          <h3 class="text-base font-bold mb-4 text-text-main">المحاولات السابقة</h3>
          <div class="flex flex-col items-center justify-center py-6 text-text-muted">
            <span class="material-symbols-outlined text-3xl mb-2 opacity-50">history</span>
            <p class="text-xs">لا توجد محاولات سابقة لهذا الواجب</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
