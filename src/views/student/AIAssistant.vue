<template>
  <div class="flex h-[calc(100vh-64px)] overflow-hidden font-display -m-8">
    <!-- Sidebar Navigation (Right side in RTL) -->
    <aside class="w-80 bg-bg-surface border-l border-border-base flex flex-col shrink-0 transition-colors duration-300">
      <div class="p-4 border-b border-border-base">
        <button class="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white rounded-lg py-2.5 font-bold transition-colors cursor-pointer shadow-sm">
          <span class="material-symbols-outlined">add</span>
          <span>محادثة جديدة</span>
        </button>
      </div>
      <div class="p-4">
        <label class="relative block">
          <span class="absolute inset-y-0 right-3 flex items-center text-text-muted">
            <span class="material-symbols-outlined text-sm">search</span>
          </span>
          <input class="w-full bg-bg-base border-none rounded-lg pr-10 pl-4 py-2 text-sm focus:ring-2 focus:ring-primary placeholder:text-text-muted outline-none transition-colors" placeholder="البحث في السجل..." type="text"/>
        </label>
      </div>
      <nav class="flex-1 overflow-y-auto px-2 space-y-6 no-scrollbar">
        <!-- Recent Chats Section -->
        <div>
          <h3 class="px-3 text-[11px] font-bold text-text-muted uppercase tracking-wider mb-2">تاريخ اليوم</h3>
          <div class="space-y-1">
            <a class="flex items-center gap-3 px-3 py-2 rounded-lg bg-bg-base text-primary font-medium cursor-pointer" href="#">
              <span class="material-symbols-outlined">chat_bubble</span>
              <span class="truncate text-sm">مراجعة الرياضيات - الفصل 3</span>
            </a>
            <a class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-bg-base text-text-main cursor-pointer transition-colors" href="#">
              <span class="material-symbols-outlined">chat_bubble</span>
              <span class="truncate text-sm">استفسار عن مشروع التخرج</span>
            </a>
          </div>
        </div>
        <div>
          <h3 class="px-3 text-[11px] font-bold text-text-muted uppercase tracking-wider mb-2">الأسبوع الماضي</h3>
          <div class="space-y-1">
            <a class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-bg-base text-text-main cursor-pointer transition-colors" href="#">
              <span class="material-symbols-outlined">history</span>
              <span class="truncate text-sm">تحليل البيانات الضخمة</span>
            </a>
            <a class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-bg-base text-text-main cursor-pointer transition-colors" href="#">
              <span class="material-symbols-outlined">history</span>
              <span class="truncate text-sm">شرح معادلات ماكسويل</span>
            </a>
          </div>
        </div>
      </nav>
      <div class="p-4 border-t border-border-base space-y-2">
        <button class="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-bg-base text-text-muted transition-colors cursor-pointer">
          <span class="material-symbols-outlined">settings</span>
          <span class="text-sm font-medium">الإعدادات</span>
        </button>
        <button class="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500 transition-colors cursor-pointer">
          <span class="material-symbols-outlined">logout</span>
          <span class="text-sm font-medium">تسجيل الخروج</span>
        </button>
      </div>
    </aside>
    <!-- Main Chat Area -->
    <main class="flex-1 flex flex-col h-full bg-bg-base relative transition-colors duration-300">
      <!-- Top Navbar -->
      <header class="flex items-center justify-between bg-bg-surface px-8 py-4 border-b border-border-base z-10 shadow-sm transition-colors duration-300">
        <div class="flex items-center gap-4">
          <div class="relative">
            <div class="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
              <span class="material-symbols-outlined text-2xl">smart_toy</span>
            </div>
            <span class="absolute bottom-0 left-0 size-3 bg-green-500 border-2 border-white dark:border-border-base rounded-full"></span>
          </div>
          <div>
            <h2 class="text-lg font-bold leading-tight text-text-main">المساعد الذكي</h2>
            <p class="text-xs text-text-muted">متصل الآن - جاهز للمساعدة الأكاديمية</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <button class="p-2 text-text-muted hover:bg-bg-surface-hover rounded-lg transition-colors cursor-pointer">
            <span class="material-symbols-outlined">download</span>
          </button>
          <button class="p-2 text-text-muted hover:bg-bg-surface-hover rounded-lg transition-colors cursor-pointer">
            <span class="material-symbols-outlined">more_vert</span>
          </button>
        </div>
      </header>
      <!-- Messages Stream -->
      <section class="flex-1 overflow-y-auto p-8 space-y-8 scroll-smooth no-scrollbar">
        <!-- Student Message -->
        <div class="flex items-start gap-4 flex-row-reverse">
          <div class="size-10 shrink-0 rounded-full bg-center bg-cover border border-border-base" data-alt="User avatar icon" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBL-c6jEXOjaeup_xJDzQz-3GRHCYIeMvTFLyy8SdRBgaa_cTzjbQQe7qyEQF2X_Ge9FW-0NM8NGwHLLXfUXihyPgyB9IsUzljs8KogfhaDS7bWUvgFk28Aw0XWVywZjCJ765tTOEp2gPJFaxp2QcQu5Oq6-W_eh13iuH4_mz6CsQgjc0_GXq9jgjpuNAe047PDSRgeNUxvpW6tWiBgBBqV4dOJLqvCDPlA4XbtkXITqbJLmyuTJlyDkGXxq2C__vClm1WXjxAQxpGE");'></div>
          <div class="flex flex-col gap-1 items-start max-w-2xl">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-xs font-semibold text-text-main">أنت</span>
              <span class="text-[10px] text-text-muted">10:42 ص</span>
            </div>
            <div class="bg-primary text-white rounded-2xl rounded-tr-none px-5 py-3 shadow-sm leading-relaxed">
              مرحباً، هل يمكنك مساعدتي في فهم الفصل الثالث من مادة التفاضل والتكامل؟ أواجه صعوبة في مفهوم "المشتقات المتتابعة".
            </div>
          </div>
        </div>
        <!-- AI Response Message -->
        <div class="flex items-start gap-4">
          <div class="size-10 shrink-0 rounded-full bg-primary flex items-center justify-center text-white" data-alt="AI assistant logo">
            <span class="material-symbols-outlined">smart_toy</span>
          </div>
          <div class="flex flex-col gap-3 items-start max-w-2xl">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-xs font-semibold text-primary">المساعد الذكي</span>
              <span class="text-[10px] text-text-muted">10:43 ص</span>
            </div>
            <div class="bg-bg-surface text-text-main rounded-2xl rounded-tl-none px-5 py-4 shadow-sm border border-border-base leading-relaxed">
              <p class="mb-4">أهلاً بك! بالتأكيد، المشتقات المتتابعة (أو المشتقات ذات الرتب العليا) هي ببساطة عملية اشتقاق الدالة أكثر من مرة. إذا كانت لديك دالة f(x)، فالمشتقة الأولى هي f'(x)، والمشتقة الثانية هي اشتقاق الناتج مرة أخرى.</p>
              <p class="mb-4">إليك بعض المصادر الموصى بها من منهجك الدراسي:</p>
              <!-- Resource Cards -->
              <div class="grid grid-cols-1 gap-3">
                <div class="flex items-center gap-3 p-3 rounded-xl bg-bg-base border border-border-base hover:border-primary transition-all cursor-pointer group">
                  <div class="size-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center">
                    <span class="material-symbols-outlined">picture_as_pdf</span>
                  </div>
                  <div class="flex-1">
                    <h4 class="text-sm font-bold group-hover:text-primary transition-colors text-text-main">ملخص الفصل الثالث - التفاضل</h4>
                    <p class="text-[11px] text-text-muted">PDF • 2.4 MB</p>
                  </div>
                  <span class="material-symbols-outlined text-text-muted">download</span>
                </div>
                <div class="flex items-center gap-3 p-3 rounded-xl bg-bg-base border border-border-base hover:border-primary transition-all cursor-pointer group">
                  <div class="size-10 bg-blue-100 text-primary rounded-lg flex items-center justify-center">
                    <span class="material-symbols-outlined">play_circle</span>
                  </div>
                  <div class="flex-1">
                    <h4 class="text-sm font-bold group-hover:text-primary transition-colors text-text-main">فيديو شرح المشتقات المتتابعة</h4>
                    <p class="text-[11px] text-text-muted">محاضرة مسجلة • 15 دقيقة</p>
                  </div>
                  <span class="material-symbols-outlined text-text-muted">open_in_new</span>
                </div>
              </div>
            </div>
            <!-- Recommended Action Card -->
            <div class="w-full bg-bg-surface rounded-xl border border-primary/20 shadow-lg p-5 overflow-hidden relative">
              <div class="absolute top-0 right-0 w-1 bg-primary h-full"></div>
              <div class="flex items-stretch gap-5">
                <div class="flex flex-col flex-1 justify-between py-1">
                  <div>
                    <div class="flex items-center gap-2 mb-1">
                      <span class="material-symbols-outlined text-primary text-lg">bolt</span>
                      <p class="text-primary text-xs font-bold uppercase">إجراء مقترح</p>
                    </div>
                    <h4 class="text-text-main text-base font-bold mb-1">اختبار تقييم سريع</h4>
                    <p class="text-text-muted text-sm leading-normal">هل تود إجراء اختبار قصير مكون من 5 أسئلة لتقييم فهمك للمشتقات المتتابعة؟</p>
                  </div>
                  <button class="mt-4 flex items-center justify-center gap-2 bg-primary text-white text-sm font-bold rounded-lg px-6 py-2 w-fit hover:bg-primary/90 transition-all cursor-pointer">
                    <span>ابدأ الاختبار الآن</span>
                    <span class="material-symbols-outlined text-sm">arrow_left_alt</span>
                  </button>
                </div>
                <div class="w-32 h-32 shrink-0 bg-cover bg-center rounded-lg shadow-inner" data-alt="Abstract education pattern background" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMXoZybMH7hWm2CrDx5k25jjTvtSDKM9fGCQrtXNrnHO5bifNDe7YK720MVw8VlF535Cx2eyCBLdyovdIxc68CRq2zBqaZot-XxGoZEWcr4SRlmjDppxHEi5qY-NbKonDcmMzdcvouB4xNn8KWT1x_NZokLvkFD2GnwLW3Nz7QelKdcdyY-DzpijwQRPo7tTHkWVfRt6Qc1KXXA3ZDCr78Dopsc5NRc_cRV2q2Xb3tDjYxAADjxi63kf7DqJd6Zch3QyLBApZuM19d");'></div>
              </div>
            </div>
          </div>
        </div>
        <!-- AI is typing state -->
        <div class="flex items-start gap-4">
          <div class="size-10 shrink-0 rounded-full bg-primary flex items-center justify-center text-white">
            <span class="material-symbols-outlined">smart_toy</span>
          </div>
          <div class="bg-bg-base rounded-2xl rounded-tl-none px-4 py-3 flex gap-1">
            <span class="size-1.5 bg-text-muted rounded-full animate-bounce"></span>
            <span class="size-1.5 bg-text-muted rounded-full animate-bounce [animation-delay:0.2s]"></span>
            <span class="size-1.5 bg-text-muted rounded-full animate-bounce [animation-delay:0.4s]"></span>
          </div>
        </div>
      </section>
      <!-- Input Area -->
      <footer class="p-6 bg-bg-surface border-t border-border-base">
        <div class="max-w-4xl mx-auto relative group">
          <div class="bg-bg-base rounded-2xl p-2 focus-within:ring-2 focus-within:ring-primary/50 transition-all shadow-sm">
            <div class="flex items-end gap-2">
              <button class="p-2 text-text-muted hover:text-primary rounded-xl transition-colors cursor-pointer">
                <span class="material-symbols-outlined">attach_file</span>
              </button>
              <button class="p-2 text-text-muted hover:text-primary rounded-xl transition-colors cursor-pointer">
                <span class="material-symbols-outlined">image</span>
              </button>
              <textarea class="flex-1 bg-transparent border-none focus:ring-0 resize-none py-3 text-sm placeholder:text-text-muted max-h-40 outline-none text-text-main" placeholder="اسأل عن أي موضوع أكاديمي أو اطلب المساعدة في واجباتك..." rows="1"></textarea>
              <button class="bg-primary text-white size-11 rounded-xl flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer">
                <span class="material-symbols-outlined rotate-180">send</span>
              </button>
            </div>
          </div>
          <p class="text-center text-[10px] text-text-muted mt-3 uppercase tracking-widest font-medium">قد يرتكب المساعد الذكي أخطاء. تحقق من المعلومات الهامة.</p>
        </div>
      </footer>
    </main>
  </div>
</template>
