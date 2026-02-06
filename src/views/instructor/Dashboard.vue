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
          <h1 class="text-3xl md:text-4xl font-black mb-3">أهلاً بك د. محمد</h1>
          <p class="text-blue-100 text-lg max-w-lg leading-relaxed">نتمنى لك يوماً دراسياً ملهماً. لديك 3 محاضرات اليوم و 12 واجباً جديداً بانتظار تصحيحك.</p>
          <div class="mt-8 flex flex-wrap gap-4">
            <button class="bg-white text-primary px-6 py-3 rounded-xl font-black text-sm hover:bg-blue-50 transition-all cursor-pointer">إضافة محتوى جديد</button>
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
            <h4 class="text-2xl font-black text-text-main">482</h4>
          </div>
        </div>
        <div class="bg-bg-surface p-6 rounded-2xl shadow-sm border border-border-base flex items-center gap-5 transition-colors duration-300">
          <div class="size-14 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <span class="material-symbols-outlined text-3xl">auto_stories</span>
          </div>
          <div>
            <p class="text-text-muted text-sm font-bold">المقررات النشطة</p>
            <h4 class="text-2xl font-black text-text-main">6</h4>
          </div>
        </div>
        <div class="bg-bg-surface p-6 rounded-2xl shadow-sm border border-border-base flex items-center gap-5 transition-colors duration-300">
          <div class="size-14 bg-amber-50 dark:bg-amber-900/20 rounded-2xl flex items-center justify-center text-amber-600 dark:text-amber-400">
            <span class="material-symbols-outlined text-3xl">grading</span>
          </div>
          <div>
            <p class="text-text-muted text-sm font-bold">الواجبات بانتظار التصحيح</p>
            <h4 class="text-2xl font-black text-text-main">12</h4>
          </div>
        </div>
      </div>
      <div class="space-y-6">
        <div class="flex items-center justify-between">
          <h3 class="text-2xl font-black text-text-main">مقرراتي الدراسية</h3>
          <RouterLink to="/instructor/courses" class="text-primary font-bold text-sm hover:underline">عرض جميع المقررات</RouterLink>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div class="bg-bg-surface rounded-2xl shadow-sm border border-border-base overflow-hidden group hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/30 transition-all duration-300">
            <div class="h-40 bg-slate-200 dark:bg-slate-700 relative">
              <img alt="Software Engineering" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVlbM3n86QxdEa95wSPnvXNvU7lONyK2nDzBgGbLYc6Oe7Q2x12Cu_1DP2faozeEPJvHwJm1o0-ajPKME7I0DC99GqyVbchod2jy--_9pbtyDoyo8BE-GnIg26TygrX4FGYGVbBI2sW33VdkRc9wuVoRLZxoZKfxU2mvTY8ZX4889O1dAfLzW1bEPbNKX8tX9lszuylas6TUVDKARVF-k0eFxADVxq4EjXKl4Cii26fo7b3I6NzqTDSPFyNA8EcCXCyS6_yVG-QaEr"/>
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <span class="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black text-primary">المستوى الرابع</span>
            </div>
            <div class="p-5">
              <h4 class="text-lg font-black text-text-main mb-2">هندسة البرمجيات</h4>
              <div class="flex items-center gap-3 text-text-muted text-xs mb-6">
                <span class="flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">group</span>
                  125 طالب
                </span>
                <span class="flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">menu_book</span>
                  12 وحدة
                </span>
              </div>
              <button class="w-full bg-primary text-white py-3 rounded-xl font-bold hover:brightness-110 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer">
                إدارة المقرر
                <span class="material-symbols-outlined text-sm">arrow_back</span>
              </button>
            </div>
          </div>
          <div class="bg-bg-surface rounded-2xl shadow-sm border border-border-base overflow-hidden group hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/30 transition-all duration-300">
            <div class="h-40 bg-slate-200 dark:bg-slate-700 relative">
              <img alt="Data Structures" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUcE7w9O_4C_UqngtRJthtxe4G-eMfbJerCdMgNQZ-dDYUQjhKYzVM1iP3eb2nNkCLgZuJiC8VkDifI9a_Xg5V6UcNTvuc2AQoq1mRM9kSQ-J8s3UCqkA1erpj5UjZmcm08NgN5Oby_PtMivF2smrBb756grwFj1WRwmFmcPvtU_jBHK4ST3zHEcp-lWt3Lc6sIsXjDLH4e5iw4dQDft6Aqvm5Dy6caFH3S5h8yOE5FG4dQdaNxbq4FR2_-QthJiMER_JAjduhCo3P"/>
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <span class="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black text-primary">المستوى الثاني</span>
            </div>
            <div class="p-5">
              <h4 class="text-lg font-black text-text-main mb-2">تراكيب البيانات</h4>
              <div class="flex items-center gap-3 text-text-muted text-xs mb-6">
                <span class="flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">group</span>
                  84 طالب
                </span>
                <span class="flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">menu_book</span>
                  10 وحدات
                </span>
              </div>
              <button class="w-full bg-primary text-white py-3 rounded-xl font-bold hover:brightness-110 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer">
                إدارة المقرر
                <span class="material-symbols-outlined text-sm">arrow_back</span>
              </button>
            </div>
          </div>
          <div class="bg-bg-surface rounded-2xl shadow-sm border border-border-base overflow-hidden group hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/30 transition-all duration-300">
            <div class="h-40 bg-slate-200 dark:bg-slate-700 relative">
              <img alt="Operating Systems" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcvw7Yt9fY_h8shn0z-3EYoe3MSvTCweUso7aA7xfJhcrBYc7FLlXSj4Zgt4KPqaviBzJMgaIVoiz_JcUTjwVQCtCukyHnA1dVHsUZwx-BVB7fGQoshNKcCv14D4HO4CXnM61plcPbJWUv4ieKY8UeaCPzYG6xFAYkAQ2mL25O5A6UClGHouaR_bByvpa2wI3i2X4A0CIltmHSIMlTBXawA1MnPjWwZD7aqSOXNH_G0viIOGmB42tB0iLLtBZL7COvY_yTiWM01D5p"/>
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <span class="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black text-primary">المستوى الثالث</span>
            </div>
            <div class="p-5">
              <h4 class="text-lg font-black text-text-main mb-2">نظم التشغيل</h4>
              <div class="flex items-center gap-3 text-text-muted text-xs mb-6">
                <span class="flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">group</span>
                  92 طالب
                </span>
                <span class="flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">menu_book</span>
                  14 وحدة
                </span>
              </div>
              <button class="w-full bg-primary text-white py-3 rounded-xl font-bold hover:brightness-110 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer">
                إدارة المقرر
                <span class="material-symbols-outlined text-sm">arrow_back</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stats-card-gradient {
  background: linear-gradient(135deg, #135bec 0%, #0a44bd 100%);
}
</style>
