<template>
  <div class="max-w-5xl mx-auto space-y-8 font-display pb-24">
    <header class="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h2 class="text-2xl font-bold text-text-main mb-2">شهاداتي</h2>
        <p class="text-text-muted">استعرض وحمل الشهادات المعتمدة للدورات التي أتممتها</p>
      </div>
      <div class="flex items-center gap-3 bg-bg-surface p-1 rounded-lg border border-border-base shadow-sm">
        <button class="px-4 py-2 rounded-md bg-primary text-white font-bold text-sm shadow-sm flex items-center gap-2 cursor-pointer transition-all hover:bg-primary/90">
          <span class="material-symbols-outlined text-lg">grid_view</span>
          <span>شبكة</span>
        </button>
        <button class="px-4 py-2 rounded-md text-text-muted font-medium text-sm hover:bg-bg-base transition-colors flex items-center gap-2 cursor-pointer">
          <span class="material-symbols-outlined text-lg">list</span>
          <span>قائمة</span>
        </button>
      </div>
    </header>

    <!-- Stats -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-bg-surface p-6 rounded-xl border border-border-base shadow-sm flex items-center gap-4 transition-colors duration-300">
        <div class="size-12 rounded-full bg-green-100 dark:bg-green-900/20 text-green-600 flex items-center justify-center">
          <span class="material-symbols-outlined text-2xl">workspace_premium</span>
        </div>
        <div>
          <p class="text-text-muted text-sm font-medium">الشهادات المكتسبة</p>
          <p class="text-2xl font-bold text-text-main">3 شهادات</p>
        </div>
      </div>
      <div class="bg-bg-surface p-6 rounded-xl border border-border-base shadow-sm flex items-center gap-4 transition-colors duration-300">
        <div class="size-12 rounded-full bg-blue-100 dark:bg-blue-900/20 text-primary flex items-center justify-center">
          <span class="material-symbols-outlined text-2xl">school</span>
        </div>
        <div>
          <p class="text-text-muted text-sm font-medium">الدورات المكتملة</p>
          <p class="text-2xl font-bold text-text-main">4 دورات</p>
        </div>
      </div>
      <div class="bg-bg-surface p-6 rounded-xl border border-border-base shadow-sm flex items-center gap-4 transition-colors duration-300">
        <div class="size-12 rounded-full bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 flex items-center justify-center">
          <span class="material-symbols-outlined text-2xl">hourglass_top</span>
        </div>
        <div>
          <p class="text-text-muted text-sm font-medium">قيد التقدم</p>
          <p class="text-2xl font-bold text-text-main">2 دورة</p>
        </div>
      </div>
    </div>

    <!-- Certificates Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      <!-- Certificate Card 1 -->
      <div class="group bg-bg-surface rounded-xl border border-border-base overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
        <div class="relative aspect-[4/3] bg-bg-base flex items-center justify-center p-8 overflow-hidden">
          <div class="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
          <!-- Abstract Certificate Preview -->
          <div class="w-full h-full bg-white dark:bg-bg-surface border border-border-base shadow-sm p-4 flex flex-col items-center text-center justify-between transform group-hover:scale-105 transition-transform duration-500">
             <div class="flex items-center gap-2 mb-2">
               <span class="material-symbols-outlined text-primary text-3xl">school</span>
               <span class="font-bold text-xs uppercase tracking-widest text-text-muted">Smart Learn</span>
             </div>
             <div>
               <h4 class="font-black text-text-main text-sm mb-1">شهادة إتمام دورة</h4>
               <p class="text-primary font-bold text-xs">أساسيات هندسة البرمجيات</p>
             </div>
             <div class="w-full flex justify-between items-end mt-2">
               <div class="text-[10px] text-text-muted text-right">
                 <p>التاريخ</p>
                 <p class="font-bold">15/10/2023</p>
               </div>
               <span class="material-symbols-outlined text-2xl text-yellow-500">verified</span>
             </div>
          </div>
        </div>
        <div class="p-6 flex-1 flex flex-col">
          <h3 class="font-bold text-lg text-text-main mb-1">أساسيات هندسة البرمجيات</h3>
          <p class="text-sm text-text-muted mb-4">تم إصدارها في 15 أكتوبر 2023</p>
          
          <div class="mt-auto flex gap-3">
             <button class="flex-1 bg-primary text-white py-2 rounded-lg font-bold text-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20 cursor-pointer">
               <span class="material-symbols-outlined text-lg">download</span>
               <span>تحميل PDF</span>
             </button>
             <button class="size-10 rounded-lg border border-border-base flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-colors cursor-pointer" title="مشاركة">
               <span class="material-symbols-outlined">share</span>
             </button>
          </div>
        </div>
      </div>

      <!-- Certificate Card 2 -->
      <div class="group bg-bg-surface rounded-xl border border-border-base overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
        <div class="relative aspect-[4/3] bg-bg-base flex items-center justify-center p-8 overflow-hidden">
          <div class="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
           <div class="w-full h-full bg-white dark:bg-bg-surface border border-border-base shadow-sm p-4 flex flex-col items-center text-center justify-between transform group-hover:scale-105 transition-transform duration-500">
             <div class="flex items-center gap-2 mb-2">
               <span class="material-symbols-outlined text-primary text-3xl">school</span>
               <span class="font-bold text-xs uppercase tracking-widest text-text-muted">Smart Learn</span>
             </div>
             <div>
               <h4 class="font-black text-text-main text-sm mb-1">شهادة إتمام دورة</h4>
               <p class="text-primary font-bold text-xs">مقدمة في الذكاء الاصطناعي</p>
             </div>
             <div class="w-full flex justify-between items-end mt-2">
               <div class="text-[10px] text-text-muted text-right">
                 <p>التاريخ</p>
                 <p class="font-bold">20/09/2023</p>
               </div>
               <span class="material-symbols-outlined text-2xl text-yellow-500">verified</span>
             </div>
          </div>
        </div>
        <div class="p-6 flex-1 flex flex-col">
          <h3 class="font-bold text-lg text-text-main mb-1">مقدمة في الذكاء الاصطناعي</h3>
          <p class="text-sm text-text-muted mb-4">تم إصدارها في 20 سبتمبر 2023</p>
          
          <div class="mt-auto flex gap-3">
             <button class="flex-1 bg-primary text-white py-2 rounded-lg font-bold text-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20 cursor-pointer">
               <span class="material-symbols-outlined text-lg">download</span>
               <span>تحميل PDF</span>
             </button>
             <button class="size-10 rounded-lg border border-border-base flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-colors cursor-pointer" title="مشاركة">
               <span class="material-symbols-outlined">share</span>
             </button>
          </div>
        </div>
      </div>

       <!-- Certificate Card 3 -->
      <div class="group bg-bg-surface rounded-xl border border-border-base overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
        <div class="relative aspect-[4/3] bg-bg-base flex items-center justify-center p-8 overflow-hidden">
          <div class="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
           <div class="w-full h-full bg-white dark:bg-bg-surface border border-border-base shadow-sm p-4 flex flex-col items-center text-center justify-between transform group-hover:scale-105 transition-transform duration-500">
             <div class="flex items-center gap-2 mb-2">
               <span class="material-symbols-outlined text-primary text-3xl">school</span>
               <span class="font-bold text-xs uppercase tracking-widest text-text-muted">Smart Learn</span>
             </div>
             <div>
               <h4 class="font-black text-text-main text-sm mb-1">شهادة إتمام دورة</h4>
               <p class="text-primary font-bold text-xs">تصميم واجهات المستخدم UI/UX</p>
             </div>
             <div class="w-full flex justify-between items-end mt-2">
               <div class="text-[10px] text-text-muted text-right">
                 <p>التاريخ</p>
                 <p class="font-bold">05/08/2023</p>
               </div>
               <span class="material-symbols-outlined text-2xl text-yellow-500">verified</span>
             </div>
          </div>
        </div>
        <div class="p-6 flex-1 flex flex-col">
          <h3 class="font-bold text-lg text-text-main mb-1">تصميم واجهات المستخدم UI/UX</h3>
          <p class="text-sm text-text-muted mb-4">تم إصدارها في 05 أغسطس 2023</p>
          
          <div class="mt-auto flex gap-3">
             <button class="flex-1 bg-primary text-white py-2 rounded-lg font-bold text-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20 cursor-pointer">
               <span class="material-symbols-outlined text-lg">download</span>
               <span>تحميل PDF</span>
             </button>
             <button class="size-10 rounded-lg border border-border-base flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-colors cursor-pointer" title="مشاركة">
               <span class="material-symbols-outlined">share</span>
             </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
