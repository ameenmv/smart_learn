<template>
  <aside class="w-64 flex-shrink-0 bg-bg-surface border-l border-border-base flex flex-col justify-between p-4 h-full transition-colors duration-300">
    <div class="flex flex-col gap-6">
      <!-- Logo -->
      <div class="flex items-center gap-2.5 px-2 py-4 border-b border-border-base">
        <div class="flex items-center justify-center size-9 bg-primary rounded-lg shadow-sm">
          <span class="material-symbols-outlined text-white text-xl">school</span>
        </div>
        <span class="text-xl font-bold tracking-tight text-text-main font-display">Smart Learn</span>
      </div>

      <!-- User Profile Summary -->
      <RouterLink to="/student/profile" class="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-bg-surface-hover transition-colors cursor-pointer group">
        <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 border-2 border-primary/20 group-hover:border-primary transition-colors" 
             aria-label="صورة الملف الشخصي"
             style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAvRrl-zLbMRME5_ZXm21NvDaOOyhhvHKSCYsKOJy-QqgMBibTlKedN0jo3iHQeFzCBU3DR9BuPTpkmdDki4zRSFsD9xaHTFfZnrznnHqlXBXFXGkFARsPgJWdt0nzr6R_RExEkaisv-0oSFF64VIObuVEfYfrW-lJHboFVx2rmc77K5uimZGtxhCHh42ED4jIzvRwmKv6R_FgczAcRorZuB_ZQP_1dZiwdXeCWK4iNhl7wqiDQS-kN-g73lrRjAOd_7usnj27t3AQg");'></div>
        <div class="flex flex-col">
          <h1 class="text-text-main text-base font-bold leading-normal group-hover:text-primary transition-colors">أحمد محمد</h1>
          <p class="text-text-muted text-xs font-normal leading-normal">طالب هندسة برمجيات</p>
        </div>
      </RouterLink>

      <!-- Navigation -->
      <nav class="flex flex-col gap-1">
        <RouterLink to="/student/dashboard" active-class="active-nav bg-primary/10 text-primary font-bold" class="flex items-center gap-3 px-4 py-3 rounded-lg text-text-muted hover:bg-bg-surface-hover transition-all">
          <span class="material-symbols-outlined">home</span>
          <span class="text-sm">الرئيسية</span>
        </RouterLink>
        <RouterLink to="/student/courses" active-class="active-nav bg-primary/10 text-primary font-bold" class="flex items-center gap-3 px-4 py-3 rounded-lg text-text-muted hover:bg-bg-surface-hover transition-all">
          <span class="material-symbols-outlined">school</span>
          <span class="text-sm">المقررات</span>
        </RouterLink>
        <RouterLink to="/student/assignments" active-class="active-nav bg-primary/10 text-primary font-bold" class="flex items-center gap-3 px-4 py-3 rounded-lg text-text-muted hover:bg-bg-surface-hover transition-all">
          <span class="material-symbols-outlined">assignment</span>
          <span class="text-sm">الواجبات</span>
        </RouterLink>
        <RouterLink to="/student/schedule" active-class="active-nav bg-primary/10 text-primary font-bold" class="flex items-center gap-3 px-4 py-3 rounded-lg text-text-muted hover:bg-bg-surface-hover transition-all">
          <span class="material-symbols-outlined">calendar_today</span>
          <span class="text-sm">الجدول الدراسي</span>
        </RouterLink>
        <RouterLink to="/student/certificates" active-class="active-nav bg-primary/10 text-primary font-bold" class="flex items-center gap-3 px-4 py-3 rounded-lg text-text-muted hover:bg-bg-surface-hover transition-all">
          <span class="material-symbols-outlined">workspace_premium</span>
          <span class="text-sm">الشهادات</span>
        </RouterLink>
        <RouterLink to="/student/ai-assistant" active-class="active-nav bg-primary/10 text-primary font-bold" class="flex items-center gap-3 px-4 py-3 rounded-lg text-text-muted hover:bg-bg-surface-hover transition-all">
          <span class="material-symbols-outlined">smart_toy</span>
          <span class="text-sm">المساعد الذكي</span>
        </RouterLink>
        <RouterLink to="/student/profile" active-class="active-nav bg-primary/10 text-primary font-bold" class="flex items-center gap-3 px-4 py-3 rounded-lg text-text-muted hover:bg-bg-surface-hover transition-all">
          <span class="material-symbols-outlined">settings</span>
          <span class="text-sm">الإعدادات</span>
        </RouterLink>
      </nav>
    </div>

    <!-- Logout -->
    <RouterLink to="/" class="flex items-center justify-center gap-2 rounded-lg h-11 px-4 bg-bg-surface-hover text-text-main text-sm font-bold hover:bg-red-50 hover:text-red-600 transition-all cursor-pointer">
      <span class="material-symbols-outlined">logout</span>
      <span>تسجيل الخروج</span>
    </RouterLink>
  </aside>
</template>

<style scoped>
.active-nav .material-symbols-outlined {
  font-variation-settings: 'FILL' 1;
}
</style>
