<template>
  <div class="max-w-4xl mx-auto font-display">
    <div class="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      <!-- <div class="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        <span class="material-symbols-outlined text-5xl text-primary">calendar_off</span>
      </div> -->
      <h2 class="text-3xl font-bold text-text-main">الجدول الدراسي</h2>
      <p class="text-text-muted text-lg max-w-md">
        عذراً، لم يتم الإعلان عن الجدول الدراسي للفصل الحالي حتى الآن. يرجى التحقق مرة أخرى لاحقاً.
      </p>
      <div class="flex gap-4 mt-8">
        <RouterLink to="/student/dashboard" class="px-6 py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-colors cursor-pointer">
          العودة للرئيسية
        </RouterLink>
      </div>
    </div>
  </div>
</template>
