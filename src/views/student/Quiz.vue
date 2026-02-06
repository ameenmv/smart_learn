<template>
  <div class="bg-bg-base text-text-main min-h-screen flex flex-col transition-colors duration-200 font-display">
    <!-- Header -->
    <header class="sticky top-0 z-50 w-full bg-bg-surface border-b border-border-base shadow-sm">
      <div class="max-w-[1280px] mx-auto px-4 lg:px-10 py-3 flex items-center justify-between">
        <div class="flex items-center gap-6">
          <div class="flex items-center gap-3">
            <span class="text-xl lg:text-2xl font-bold text-text-main font-logo tracking-tight">Smart Learn</span>
            <div class="bg-primary p-1.5 rounded-xl flex items-center justify-center">
              <span class="material-symbols-outlined text-white text-2xl lg:text-3xl logo-icon-fill">school</span>
            </div>
          </div>
          <div class="h-8 w-[1px] bg-border-base hidden sm:block"></div>
          <div class="flex flex-col">
            <h2 class="text-text-main text-sm lg:text-base font-bold leading-tight">أساسيات هندسة البرمجيات</h2>
            <p class="text-text-muted text-[10px] lg:text-xs">الوحدة الثانية: لغات البرمجة</p>
          </div>
        </div>
        <div class="flex items-center gap-4 lg:gap-8">
          <div class="flex items-center gap-2 bg-bg-base px-4 py-2 rounded-lg">
            <span class="material-symbols-outlined text-primary text-xl">timer</span>
            <div class="flex gap-1 font-bold text-lg text-text-main tracking-wider tabular-nums">
              <span>00</span><span>:</span><span>45</span><span>:</span><span>00</span>
            </div>
          </div>
          <div class="hidden md:block bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20" data-alt="Student profile avatar" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBykAEwHl8V8vZ1_V7FpukYTOrjsAEqOdBLWiBrv-cJH4ckg0_KUHhE4NDR9F6P13WT3LQ6yoqY5ug6y6VwIDgGQdaOH5p5ywVsgZCQFhN85dirAKu5inxncCwYVxl5vuCRXJ3iNYvC6-7e452dhKOphrtpqte7U2O93z0p2pZfskHX_oMHEJhFLerTMue7GzyafNNwn5mVZq5CfgwxIYhmC8_AA7dfDkqlM117-h7FlcE-EK8YgdpF9bvaAV08h3pfBWoFxeuFfC-X");'></div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow flex flex-col items-center justify-start py-8 px-4 sm:px-6 lg:px-8">
      <div class="w-full max-w-[800px] flex flex-col gap-6">
        <!-- Progress Card -->
        <div class="w-full bg-bg-surface p-6 rounded-xl shadow-sm border border-border-base transition-colors duration-300">
          <div class="flex flex-col gap-3">
            <div class="flex justify-between items-center">
              <p class="text-text-main text-base font-semibold leading-normal">التقدم في الاختبار</p>
              <p class="text-primary text-sm font-bold leading-normal">25% مكتمل</p>
            </div>
            <div class="h-2.5 w-full bg-bg-base rounded-full overflow-hidden">
              <div class="h-full bg-primary transition-all duration-500 rounded-full" style="width: 25%;"></div>
            </div>
            <div class="flex justify-between">
              <p class="text-text-muted text-sm font-normal">السؤال ٥ من ٢٠</p>
              <p class="text-text-muted text-sm font-normal">باقي ١٥ سؤالاً</p>
            </div>
          </div>
        </div>

        <!-- Question Card -->
        <div class="@container w-full">
          <div class="flex flex-col items-stretch justify-start rounded-xl shadow-lg bg-bg-surface border border-border-base overflow-hidden transition-colors duration-300">
            <div class="w-full bg-center bg-no-repeat aspect-[21/9] bg-cover bg-primary/5 border-b border-border-base flex items-center justify-center" data-alt="Programming code visualization background" style="background-image: linear-gradient(135deg, rgba(19, 91, 236, 0.13) 0%, rgba(255, 255, 255, 0) 100%);">
              <span class="material-symbols-outlined text-primary/30 text-6xl">code</span>
            </div>
            <div class="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-4 p-8">
              <div class="inline-flex items-center self-start px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary mb-2">
                اختيار من متعدد
              </div>
              <h3 class="text-text-main text-xl lg:text-2xl font-bold leading-relaxed tracking-tight">
                ما هي لغة البرمجة المستخدمة في تطوير تطبيقات الأندرويد بشكل أساسي وتعتبر اللغة الرسمية المدعومة من جوجل حالياً؟
              </h3>
              <p class="text-text-muted text-base font-normal">اختر إجابة واحدة صحيحة من الخيارات التالية:</p>
            </div>
            
            <div class="flex flex-col gap-4 p-8 pt-0 radio-dot">
              <label class="group flex items-center gap-4 rounded-xl border-2 border-solid border-border-base p-4 flex-row-reverse cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all">
                <input checked class="h-6 w-6 border-2 border-border-base bg-transparent text-transparent checked:border-primary checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-primary appearance-none" name="quiz-option" type="radio"/>
                <div class="flex grow flex-col">
                  <p class="text-text-main text-base font-semibold group-hover:text-primary transition-colors">Kotlin (كوتلن)</p>
                </div>
              </label>
              <label class="group flex items-center gap-4 rounded-xl border-2 border-solid border-border-base p-4 flex-row-reverse cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all">
                <input class="h-6 w-6 border-2 border-border-base bg-transparent text-transparent checked:border-primary checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-primary appearance-none" name="quiz-option" type="radio"/>
                <div class="flex grow flex-col">
                  <p class="text-text-main text-base font-semibold group-hover:text-primary transition-colors">Swift (سويفت)</p>
                </div>
              </label>
              <label class="group flex items-center gap-4 rounded-xl border-2 border-solid border-border-base p-4 flex-row-reverse cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all">
                <input class="h-6 w-6 border-2 border-border-base bg-transparent text-transparent checked:border-primary checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-primary appearance-none" name="quiz-option" type="radio"/>
                <div class="flex grow flex-col">
                  <p class="text-text-main text-base font-semibold group-hover:text-primary transition-colors">Python (بايثون)</p>
                </div>
              </label>
              <label class="group flex items-center gap-4 rounded-xl border-2 border-solid border-border-base p-4 flex-row-reverse cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all">
                <input class="h-6 w-6 border-2 border-border-base bg-transparent text-transparent checked:border-primary checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-primary appearance-none" name="quiz-option" type="radio"/>
                <div class="flex grow flex-col">
                  <p class="text-text-main text-base font-semibold group-hover:text-primary transition-colors">C++ (سي بلس بلس)</p>
                </div>
              </label>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="flex items-center justify-between mt-4">
          <button class="flex items-center justify-center gap-2 min-w-[120px] px-6 h-12 rounded-lg border-2 border-border-base text-text-main text-base font-bold hover:bg-bg-surface-hover transition-colors cursor-pointer">
            <span class="material-symbols-outlined">arrow_forward</span>
            <span>السابق</span>
          </button>
          <div class="flex gap-4">
            <button class="flex items-center justify-center gap-2 min-w-[120px] px-6 h-12 rounded-lg border-2 border-primary/20 bg-primary/5 text-primary text-base font-bold hover:bg-primary/10 transition-colors cursor-pointer">
              <span>تخطي</span>
            </button>
            <button class="flex items-center justify-center gap-2 min-w-[140px] px-8 h-12 rounded-lg bg-primary text-white text-base font-bold hover:bg-primary/90 shadow-md shadow-primary/20 transition-all cursor-pointer">
              <span>التالي</span>
              <span class="material-symbols-outlined">arrow_back</span>
            </button>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="w-full bg-bg-surface border-t border-border-base py-4 mt-auto transition-colors duration-300">
      <div class="max-w-[1280px] mx-auto px-10 flex flex-wrap justify-center sm:justify-between items-center gap-4">
        <div class="flex gap-2">
          <span class="flex items-center gap-1 text-text-muted text-sm">
            <span class="size-2 rounded-full bg-green-500"></span>
            متصل بالنظام
          </span>
          <span class="text-border-base px-2">|</span>
          <span class="text-text-muted text-sm">آخر حفظ تلقائي: منذ ثوانٍ قليلة</span>
        </div>
        <div class="flex items-center gap-4">
          <button class="flex items-center gap-2 text-text-muted text-sm hover:text-primary transition-colors cursor-pointer">
            <span class="material-symbols-outlined text-lg">help</span>
            الدعم الفني
          </button>
          <button class="flex items-center gap-2 text-text-muted text-sm hover:text-primary transition-colors cursor-pointer">
            <span class="material-symbols-outlined text-lg">flag</span>
            إبلاغ عن خطأ
          </button>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.radio-dot {
    --radio-dot-svg: url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27%23135bec%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%274%27/%3e%3c/svg%3e');
}

input[type="radio"]:checked {
    background-image: var(--radio-dot-svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
</style>
