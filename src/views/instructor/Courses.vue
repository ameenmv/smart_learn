<template>
  <div class="text-text-main">
    <div class="flex flex-wrap items-end justify-between gap-4 mb-8">
      <div>
        <h1 class="text-4xl font-black leading-tight text-text-main">إدارة الدورات</h1>
        <p class="text-text-muted mt-2 text-lg">قم بإدارة وتحديث الدورات التدريبية والطلاب المشتركين</p>
      </div>
      <RouterLink to="/instructor/lectures" class="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/25 hover:scale-[1.02] transition-transform active:scale-95 cursor-pointer">
        <span class="material-symbols-outlined">add_circle</span>
        <span>إضافة دورة جديدة</span>
      </RouterLink>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-bg-surface p-6 rounded-2xl border border-border-base shadow-sm transition-colors duration-300">
        <div class="flex justify-between items-start">
          <p class="text-text-muted font-bold">إجمالي الطلاب</p>
          <span class="text-emerald-500 text-xs font-bold bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded-full">+12%</span>
        </div>
        <p class="text-3xl font-black mt-2 text-text-main">1,250</p>
      </div>
      <div class="bg-bg-surface p-6 rounded-2xl border border-border-base shadow-sm transition-colors duration-300">
        <div class="flex justify-between items-start">
          <p class="text-text-muted font-bold">الدورات النشطة</p>
          <span class="text-emerald-500 text-xs font-bold bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded-full">+2%</span>
        </div>
        <p class="text-3xl font-black mt-2 text-text-main">12</p>
      </div>
      <div class="bg-bg-surface p-6 rounded-2xl border border-border-base shadow-sm transition-colors duration-300">
        <div class="flex justify-between items-start">
          <p class="text-text-muted font-bold">ساعات التدريس</p>
          <span class="text-emerald-500 text-xs font-bold bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded-full">+5%</span>
        </div>
        <p class="text-3xl font-black mt-2 text-text-main">450</p>
      </div>
    </div>
    <div class="bg-bg-surface border border-border-base rounded-2xl shadow-xl overflow-hidden transition-colors duration-300">
      <div class="overflow-x-auto">
        <table class="w-full text-right border-collapse">
          <thead>
            <tr class="bg-bg-base border-b border-border-base transition-colors duration-300">
              <th class="px-6 py-4 text-sm font-black text-text-main">الدورة</th>
              <th class="px-6 py-4 text-sm font-black text-text-main">إجمالي الطلاب</th>
              <th class="px-6 py-4 text-sm font-black text-text-main">الدروس النشطة</th>
              <th class="px-6 py-4 text-sm font-black text-text-main">الحالة</th>
              <th class="px-6 py-4 text-sm font-black text-text-main">الإجراءات</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border-base">
            <tr class="hover:bg-bg-base/50 transition-colors group">
              <td class="px-6 py-4">
                <div class="flex items-center gap-4">
                  <div class="size-12 rounded-lg bg-cover bg-center shadow-sm" data-alt="Artificial intelligence course icon" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCVgyAJkj2rpXM7djO_vlKUA5Koh7D9StgMH0SIMjfdUAjuTmf8Q4yEb_XnMscOGLhXa_p09tf6ycMUHevlPTMZjtr596CTRabPvfFGPgkRaNzJ2nahUE6103UTP8jbPi1f6J6gR3bwCdNfEHGlrg8fjbMKMRJw4ZCaq37npe87ILUrcZV5dFYwTozsjYfzKKdgg0iX7ENbkJJENEwenTBw4ia-5cR5CECaPJ5h-jmMApoMzY-EbbckenNtNxKNATUkXrKCeFCoxZ6N');"></div>
                  <div>
                    <p class="font-bold text-text-main">مقدمة في الذكاء الاصطناعي</p>
                    <p class="text-xs text-text-muted">CS-102 • المستوى الثاني</p>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 font-semibold text-text-muted">450 طالباً</td>
              <td class="px-6 py-4">
                <div class="flex items-center gap-2 text-text-muted">
                  <span class="material-symbols-outlined text-xs text-primary">play_circle</span>
                  <span class="font-medium">18 من 24</span>
                </div>
              </td>
              <td class="px-6 py-4">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                  نشط
                </span>
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button class="p-2 hover:bg-primary/10 rounded-lg text-primary transition-colors cursor-pointer" title="تعديل">
                    <span class="material-symbols-outlined">edit</span>
                  </button>
                  <button class="p-2 hover:bg-primary/10 rounded-lg text-primary transition-colors cursor-pointer" title="التحليلات">
                    <span class="material-symbols-outlined">analytics</span>
                  </button>
                </div>
              </td>
            </tr>
            <tr class="hover:bg-bg-base/50 transition-colors group">
              <td class="px-6 py-4">
                <div class="flex items-center gap-4">
                  <div class="size-12 rounded-lg bg-cover bg-center shadow-sm" data-alt="Data structures course icon" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCBPZjhqN0jrs0zAWdXYq6XpX2mVidT8oRuDbh6L9mZSWlnm2HNXgAiwirQEkmGtfUnDeZW_Sj4dNbYH9xchZRWqC3Ey6K4vlt-NUNQRqvX0KHAPPIwG_QvjUFi_yfMRh7FsP6Y0zeiZSm9TjunFeqdyaToRz4tONnl56-6wUlHgr6D4gaPkG8ErJmaRbHeDQBCaZZh6Ve6seBzUHiymL7FBgurS8sVo45KBL2m9Jdi_iUdH2ZvqHu5YZBu0r74lpfao2FYAOueGwFf');"></div>
                  <div>
                    <p class="font-bold text-text-main">هياكل البيانات والخوارزميات</p>
                    <p class="text-xs text-text-muted">CS-205 • المستوى الثالث</p>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 font-semibold text-text-muted">320 طالباً</td>
              <td class="px-6 py-4">
                <div class="flex items-center gap-2 text-text-muted">
                  <span class="material-symbols-outlined text-xs text-primary">play_circle</span>
                  <span class="font-medium">12 من 20</span>
                </div>
              </td>
              <td class="px-6 py-4">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                  نشط
                </span>
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button class="p-2 hover:bg-primary/10 rounded-lg text-primary transition-colors cursor-pointer" title="تعديل">
                    <span class="material-symbols-outlined">edit</span>
                  </button>
                  <button class="p-2 hover:bg-primary/10 rounded-lg text-primary transition-colors cursor-pointer" title="التحليلات">
                    <span class="material-symbols-outlined">analytics</span>
                  </button>
                </div>
              </td>
            </tr>
            <tr class="hover:bg-bg-base/50 transition-colors group">
              <td class="px-6 py-4">
                <div class="flex items-center gap-4">
                  <div class="size-12 rounded-lg bg-cover bg-center shadow-sm" data-alt="UI/UX design course icon" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTxnxSXToO9uZyzVRhIIUiwkSpGxTrdxzHfBT7076-FYSrmG5zwlzyNKwzZp7P7sLqBuLPyR8cCFDU3LRl7Govs_OXwn0eAnrXBU5KJYm_D_hK2-VsvtbFpB5vJZinRGUok-GR6_jCaEZR87zkZXOsUIUqSjCz1APLtv3V1cEtuAshHjg0nzosPbJ-0EYFj4Jz_STetiw8RTf3B2B40T3N3moS9kiKQ0t7SJabcT0TmKhLE0nbWTnjkwhDP2DbxrONWCUISK91y5OS');"></div>
                  <div>
                    <p class="font-bold text-text-main">تصميم واجهة وتجربة المستخدم</p>
                    <p class="text-xs text-text-muted">UX-401 • المستوى الرابع</p>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 font-semibold text-text-muted">0 طالباً</td>
              <td class="px-6 py-4">
                <div class="flex items-center gap-2 text-text-muted">
                  <span class="material-symbols-outlined text-xs">hourglass_empty</span>
                  <span class="font-medium">غير محدد</span>
                </div>
              </td>
              <td class="px-6 py-4">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400">
                  مسودة
                </span>
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button class="p-2 hover:bg-primary/10 rounded-lg text-primary transition-colors cursor-pointer" title="تعديل">
                    <span class="material-symbols-outlined">edit</span>
                  </button>
                  <button class="p-2 hover:bg-primary/10 rounded-lg text-primary transition-colors cursor-pointer" title="التحليلات">
                    <span class="material-symbols-outlined">analytics</span>
                  </button>
                </div>
              </td>
            </tr>
            <tr class="hover:bg-bg-base/50 transition-colors group">
              <td class="px-6 py-4">
                <div class="flex items-center gap-4">
                  <div class="size-12 rounded-lg bg-cover bg-center grayscale shadow-sm" data-alt="Network security course icon" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuA-g5fDkpNiBqg_hWaHjKSRu3o8T-Hrw3YZCE6V_ej2q7fkaBvhdCP4Z_dmcGhAVYdIB1is7tXzoiZoO4vMquRP8P_7HkLfjn3INFQrF5SICRV0UmnLkuYbkOKMQ2PRkJDej0Yy7g6Nn-mlibT9CbqH0FiXrHpIowNWxMuP3BHkSFrx_Z7cK8tdWlK3ttOmE1VBRkOIDg9BcTJ2yBJt_IiWM_vMTuH5jtX_OrIxYgDxNQn1B-orpndAa5_zSzANgmbHc2Np0ONqDMTM');"></div>
                  <div>
                    <p class="font-bold text-text-main">أمن الشبكات وحمايتها</p>
                    <p class="text-xs text-text-muted">SEC-305 • الفصل الدراسي السابق</p>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 font-semibold text-text-muted">280 طالباً</td>
              <td class="px-6 py-4">
                <div class="flex items-center gap-2 text-amber-600">
                  <span class="material-symbols-outlined text-xs">check_circle</span>
                  <span class="font-medium">مكتمل</span>
                </div>
              </td>
              <td class="px-6 py-4">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                  مؤرشف
                </span>
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button class="p-2 hover:bg-primary/10 rounded-lg text-primary transition-colors cursor-pointer" title="تعديل">
                    <span class="material-symbols-outlined">edit</span>
                  </button>
                  <button class="p-2 hover:bg-primary/10 rounded-lg text-primary transition-colors cursor-pointer" title="التحليلات">
                    <span class="material-symbols-outlined">analytics</span>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="bg-bg-surface p-4 flex items-center justify-between border-t border-border-base transition-colors duration-300">
        <p class="text-sm text-text-muted">عرض 1-4 من أصل 12 دورة</p>
        <div class="flex items-center gap-1">
          <button class="size-8 flex items-center justify-center rounded-lg border border-border-base hover:bg-bg-base transition-colors cursor-pointer text-text-main">
            <span class="material-symbols-outlined rotate-180 text-sm">chevron_right</span>
          </button>
          <button class="size-8 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-sm">1</button>
          <button class="size-8 flex items-center justify-center rounded-lg border border-border-base hover:bg-bg-base transition-colors text-sm cursor-pointer text-text-main">2</button>
          <button class="size-8 flex items-center justify-center rounded-lg border border-border-base hover:bg-bg-base transition-colors text-sm cursor-pointer text-text-main">3</button>
          <button class="size-8 flex items-center justify-center rounded-lg border border-border-base hover:bg-bg-base transition-colors cursor-pointer text-text-main">
            <span class="material-symbols-outlined rotate-180 text-sm">chevron_left</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
