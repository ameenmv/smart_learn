<template>
  <div class="flex flex-col h-full bg-bg-base text-text-main font-sans overflow-y-auto">
    <header class="bg-bg-surface border-b border-border-base h-16 flex items-center justify-between px-8 sticky top-0 z-10 shrink-0">
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2 text-sm text-text-muted">
          <router-link class="hover:text-primary transition-colors" to="/instructor/dashboard">الرئيسية</router-link>
          <span class="material-symbols-outlined text-xs">chevron_left</span>
          <router-link class="hover:text-primary transition-colors" to="/instructor/courses">المقررات</router-link>
          <span class="material-symbols-outlined text-xs">chevron_left</span>
          <span class="text-text-main font-semibold">إدارة الطلاب - برمجة الويب</span>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <button class="w-10 h-10 flex items-center justify-center rounded-full bg-bg-base text-text-muted hover:bg-bg-base-hover transition-colors">
          <span class="material-symbols-outlined">notifications</span>
        </button>
        <router-link to="/instructor/settings" class="w-10 h-10 flex items-center justify-center rounded-full bg-bg-base text-text-muted hover:bg-bg-base-hover transition-colors">
          <span class="material-symbols-outlined">settings</span>
        </router-link>
      </div>
    </header>

    <div class="p-8 max-w-7xl mx-auto w-full flex-1">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 class="text-3xl font-black tracking-tight mb-2 text-text-main">إدارة الطلاب - برمجة الويب</h1>
          <p class="text-text-muted">متابعة أداء الطلاب وتحليل النتائج للفصل الدراسي الحالي (الشعبة أ)</p>
        </div>
        <div class="flex gap-3">
          <button class="flex items-center gap-2 bg-bg-surface border border-border-base px-4 py-2 rounded-lg font-bold text-sm hover:bg-bg-base transition-colors text-text-main cursor-pointer">
            <span class="material-symbols-outlined text-lg">download</span>
            تصدير التقارير
          </button>
          <button class="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors cursor-pointer">
            <span class="material-symbols-outlined text-lg">add</span>
            إضافة طالب
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-4 gap-8">
        <!-- Stats Card -->
        <div class="xl:col-span-1 space-y-6 order-last xl:order-first">
          <div class="bg-bg-surface p-6 rounded-xl border border-border-base shadow-sm">
            <h3 class="text-text-muted text-sm font-bold mb-4">إحصائيات المقرر</h3>
            <div class="space-y-6">
              <div>
                <div class="flex justify-between items-end mb-1">
                  <p class="text-xs font-medium text-text-muted">متوسط درجات الفصل</p>
                  <p class="text-xl font-bold text-primary">78%</p>
                </div>
                <div class="w-full bg-bg-base h-2 rounded-full overflow-hidden">
                  <div class="bg-primary h-full" style="width: 78%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between items-end mb-1">
                  <p class="text-xs font-medium text-text-muted">نسبة الإكمال</p>
                  <p class="text-xl font-bold text-emerald-500">65%</p>
                </div>
                <div class="w-full bg-bg-base h-2 rounded-full overflow-hidden">
                  <div class="bg-emerald-500 h-full" style="width: 65%"></div>
                </div>
              </div>
              <div class="pt-4 border-t border-border-base flex justify-between">
                <div class="text-center">
                  <p class="text-[10px] text-text-muted uppercase">الطلاب</p>
                  <p class="text-lg font-bold text-text-main">45</p>
                </div>
                <div class="text-center">
                  <p class="text-[10px] text-text-muted uppercase">النشطون</p>
                  <p class="text-lg font-bold text-emerald-500">42</p>
                </div>
                <div class="text-center">
                  <p class="text-[10px] text-text-muted uppercase">المتعثرون</p>
                  <p class="text-lg font-bold text-rose-500">3</p>
                </div>
              </div>
            </div>
          </div>

          <!-- AI Card -->
          <div class="bg-primary p-6 rounded-xl text-white shadow-xl shadow-primary/30 relative overflow-hidden">
            <div class="relative z-10">
              <h4 class="font-bold text-lg mb-2">تحليل الذكاء الاصطناعي</h4>
              <p class="text-sm opacity-90 mb-4 leading-relaxed">بناءً على الأنشطة الأخيرة، هناك 3 طلاب يحتاجون لتدخل سريع لضمان تجاوز المقرر.</p>
              <button class="w-full py-2 bg-white/20 backdrop-blur-md rounded-lg text-sm font-bold border border-white/30 hover:bg-white/30 transition-all cursor-pointer">مراجعة الطلاب المتعثرين</button>
            </div>
            <div class="absolute -right-4 -bottom-4 opacity-20 transform rotate-12">
              <span class="material-symbols-outlined text-8xl">auto_awesome</span>
            </div>
          </div>
        </div>

        <!-- Students Table -->
        <div class="xl:col-span-3">
          <div class="bg-bg-surface rounded-xl border border-border-base shadow-sm overflow-hidden">
            <div class="p-6 border-b border-border-base flex flex-col md:flex-row gap-4 items-center">
              <div class="relative flex-1 w-full">
                <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-text-muted">search</span>
                <input class="w-full pr-10 pl-4 py-2 bg-bg-base border-none rounded-lg focus:ring-2 focus:ring-primary text-sm transition-all text-text-main placeholder:text-text-muted" placeholder="البحث عن طالب بالاسم أو الرقم الجامعي..." type="text"/>
              </div>
              <div class="flex items-center gap-3 w-full md:w-auto">
                <button class="flex items-center gap-2 px-4 py-2 rounded-lg bg-rose-50 text-rose-600 border border-rose-100 dark:bg-rose-900/20 dark:border-rose-900/30 text-sm font-bold whitespace-nowrap hover:bg-rose-100 dark:hover:bg-rose-900/30 transition-colors cursor-pointer">
                  <span class="material-symbols-outlined text-lg">warning</span>
                  الطلاب المتعثرين
                </button>
                <button class="flex items-center gap-2 px-4 py-2 rounded-lg bg-bg-base text-text-muted text-sm font-bold border border-transparent hover:bg-bg-base-hover transition-colors cursor-pointer">
                  <span class="material-symbols-outlined text-lg">filter_list</span>
                  تصفية
                </button>
              </div>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-right">
                <thead>
                  <tr class="bg-bg-base text-text-muted text-xs font-bold uppercase tracking-wider">
                    <th class="px-6 py-4">اسم الطالب</th>
                    <th class="px-6 py-4">التقدم في المقرر</th>
                    <th class="px-6 py-4">آخر نشاط</th>
                    <th class="px-6 py-4">متوسط الدرجات</th>
                    <th class="px-6 py-4">الإجراءات</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-border-base">
                  <tr class="hover:bg-bg-base/50 transition-colors">
                    <td class="px-6 py-4">
                      <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBvc4rRjVJchqgsdfq2sHwgJn30RYaayPCMqgMXKySRGR0V9JYXzcLsTGHUIrR1aVEZaYuGlPehWNgL4pODOcC2iAPfMXza3iuDmrDjTdp6OFHXHUaDTNVUrsql3Rao74Bsx6AQduYwOYNte_pnl_K9h2S4JDkH5P5KFoOXRwzj26p91YyHgKLPp_vWGMfWMoaabwfcVs0XCmtIpf068-qXkjmwGK6weI-TLRT-sfq4kTC92ub3vSby5dCHGcxsjL2x494LY_w2qpzL')"></div>
                        <div>
                          <p class="font-bold text-sm text-text-main">عبدالرحمن خالد السعد</p>
                          <p class="text-xs text-text-muted">#441002341</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4">
                      <div class="flex items-center gap-3 min-w-32">
                        <div class="flex-1 bg-bg-base h-2 rounded-full overflow-hidden">
                          <div class="bg-primary h-full" style="width: 85%"></div>
                        </div>
                        <span class="text-xs font-bold text-text-muted">85%</span>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-xs text-text-muted">منذ ساعتين</td>
                    <td class="px-6 py-4">
                      <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                        92% - ممتاز
                      </span>
                    </td>
                    <td class="px-6 py-4">
                      <div class="flex gap-2">
                        <button class="p-2 text-text-muted hover:text-primary transition-colors cursor-pointer"><span class="material-symbols-outlined text-lg">visibility</span></button>
                        <button class="p-2 text-text-muted hover:text-primary transition-colors cursor-pointer"><span class="material-symbols-outlined text-lg">mail</span></button>
                      </div>
                    </td>
                  </tr>
                  <tr class="hover:bg-bg-base/50 transition-colors">
                      <td class="px-6 py-4">
                        <div class="flex items-center gap-3">
                          <div class="w-10 h-10 rounded-full bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBaqrrxW64wL5pmLcdJnKl4tH3TRwiMSKrXjf7ax6kJQSYQ93ddCx18RYSBq5mAz9xTNNJszcSm20OpzwDjclh3D8I9qhMzIufaay_uxVeCkHbCK6oHuTKFDh9nkMuotSRZWYSIMljPUcS8GRvYVMhDdfYn-65OgwmbFonTCXLrQpOgfdDJ6yMR8jTnfUpk-OK6rwDB4Rk1SqV5zGsT7dflIAc9Myf5gjpsDIbXDiV2SPStBG-FCu9Sf8uiQjSe6JXuFajUTviqs9gW')"></div>
                          <div>
                            <p class="font-bold text-sm text-text-main">سارة محمد الراشد</p>
                            <p class="text-xs text-text-muted">#441005622</p>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4">
                        <div class="flex items-center gap-3 min-w-32">
                          <div class="flex-1 bg-bg-base h-2 rounded-full overflow-hidden">
                            <div class="bg-primary h-full" style="width: 42%"></div>
                          </div>
                          <span class="text-xs font-bold text-text-muted">42%</span>
                        </div>
                      </td>
                      <td class="px-6 py-4 text-xs text-text-muted">يوم أمس</td>
                      <td class="px-6 py-4">
                        <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400">
                          58% - متعثر
                        </span>
                      </td>
                      <td class="px-6 py-4">
                        <div class="flex gap-2">
                          <button class="p-2 text-text-muted hover:text-primary transition-colors cursor-pointer"><span class="material-symbols-outlined text-lg">visibility</span></button>
                          <button class="p-2 text-text-muted hover:text-primary transition-colors cursor-pointer"><span class="material-symbols-outlined text-lg">mail</span></button>
                        </div>
                      </td>
                    </tr>
                    <tr class="hover:bg-bg-base/50 transition-colors">
                      <td class="px-6 py-4">
                        <div class="flex items-center gap-3">
                          <div class="w-10 h-10 rounded-full bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBL6DxQhit5jAEdSjsD6s787U7gZkpnL9l9WQV6dDXFQ5rQTcgxhJDUg6mz_rJC27jNuOqn5K19sQ7a6D_UXV6NEfVO7yG4jlYY_ef8ireBZOIgpLADE092NzCprN78jwkLidni46yxP-MVXMcEEZsoDJuXu2lZ0JX_Z_PFCAXbm8acjFYEdDA2ZQQjXZBnrbtf6da5Bnh1LCkDj97CPNJ4bwDQZq4WYXzrvkaTt_OwNhx8XMrbLo6oh4i1YpvPpJ6ibcShGcuzniA_')"></div>
                          <div>
                            <p class="font-bold text-sm text-text-main">فهد بن عبدالله</p>
                            <p class="text-xs text-text-muted">#441001189</p>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4">
                        <div class="flex items-center gap-3 min-w-32">
                          <div class="flex-1 bg-bg-base h-2 rounded-full overflow-hidden">
                            <div class="bg-primary h-full" style="width: 70%"></div>
                          </div>
                          <span class="text-xs font-bold text-text-muted">70%</span>
                        </div>
                      </td>
                      <td class="px-6 py-4 text-xs text-text-muted">منذ 3 أيام</td>
                      <td class="px-6 py-4">
                        <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                          74% - جيد
                        </span>
                      </td>
                      <td class="px-6 py-4">
                        <div class="flex gap-2">
                          <button class="p-2 text-text-muted hover:text-primary transition-colors cursor-pointer"><span class="material-symbols-outlined text-lg">visibility</span></button>
                          <button class="p-2 text-text-muted hover:text-primary transition-colors cursor-pointer"><span class="material-symbols-outlined text-lg">mail</span></button>
                        </div>
                      </td>
                    </tr>
                    <tr class="hover:bg-bg-base/50 transition-colors">
                      <td class="px-6 py-4">
                        <div class="flex items-center gap-3">
                          <div class="w-10 h-10 rounded-full bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDyUlNHHSQaw3fJJ5MzI2_gfKPFW6QAxtBXc4QoV-WaEFWyDdd0jceMtQ6HuKOyahYla7GZsbt8oKucRyHXgc0G30jSXS8xFc2-Nvq9gpPCU0AdHfPM_xOh-lo2t5XaCEuSU2vuOunGd6gsUcWY6zreKp_NuqBxfiLb2J34-r58x7nnsZQd0Eo5h2YDV-GuIV-0qpK6swP98p8dN6S1viHm5eApICA8XHCFtT4zKjb7i_Yc6llcbxBrWcyMcZTC148ZwEM4I7TRiSTM')"></div>
                          <div>
                            <p class="font-bold text-sm text-text-main">ليلى ابراهيم القحطاني</p>
                            <p class="text-xs text-text-muted">#441008823</p>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4">
                        <div class="flex items-center gap-3 min-w-32">
                          <div class="flex-1 bg-bg-base h-2 rounded-full overflow-hidden">
                            <div class="bg-primary h-full" style="width: 95%"></div>
                          </div>
                          <span class="text-xs font-bold text-text-muted">95%</span>
                        </div>
                      </td>
                      <td class="px-6 py-4 text-xs text-text-muted">الآن</td>
                      <td class="px-6 py-4">
                        <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                          98% - ممتاز
                        </span>
                      </td>
                      <td class="px-6 py-4">
                        <div class="flex gap-2">
                          <button class="p-2 text-text-muted hover:text-primary transition-colors cursor-pointer"><span class="material-symbols-outlined text-lg">visibility</span></button>
                          <button class="p-2 text-text-muted hover:text-primary transition-colors cursor-pointer"><span class="material-symbols-outlined text-lg">mail</span></button>
                        </div>
                      </td>
                    </tr>
                </tbody>
              </table>
            </div>
            <div class="p-6 border-t border-border-base flex justify-between items-center">
              <p class="text-xs text-text-muted">عرض 1-4 من أصل 45 طالب</p>
              <div class="flex gap-2">
                <button class="w-8 h-8 flex items-center justify-center rounded-lg border border-border-base hover:bg-bg-base cursor-pointer transition-colors text-text-main">
                  <span class="material-symbols-outlined text-sm">chevron_right</span>
                </button>
                <button class="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-xs cursor-pointer shadow-md">1</button>
                <button class="w-8 h-8 flex items-center justify-center rounded-lg border border-border-base hover:bg-bg-base cursor-pointer transition-colors text-text-main text-xs">2</button>
                <button class="w-8 h-8 flex items-center justify-center rounded-lg border border-border-base hover:bg-bg-base cursor-pointer transition-colors text-text-main text-xs">3</button>
                <button class="w-8 h-8 flex items-center justify-center rounded-lg border border-border-base hover:bg-bg-base cursor-pointer transition-colors text-text-main">
                  <span class="material-symbols-outlined text-sm">chevron_left</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <footer class="mt-auto py-6 px-8 text-center text-text-muted text-xs border-t border-border-base shrink-0">
      © 2024 منصة التعلم الذكي - جامعة التقنية العربية. جميع الحقوق محفوظة.
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Scoped styles overrides */
</style>
