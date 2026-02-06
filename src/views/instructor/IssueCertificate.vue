<template>
  <div class="flex h-full min-h-screen bg-background-light dark:bg-background-dark text-text-main transition-colors duration-300">
    <div class="flex-1 flex flex-col min-w-0 transition-all duration-300">
      <header class="sticky top-0 z-10 bg-white/80 dark:bg-[#1a2130]/80 backdrop-blur-md border-b border-[#dbdfe6] dark:border-[#2d3648] px-8 h-16 flex items-center justify-between transition-colors duration-300">
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-3">
            <div class="bg-primary text-white rounded-xl p-1.5 flex items-center justify-center shadow-md shadow-primary/20">
              <span class="material-symbols-outlined text-[28px]">school</span>
            </div>
            <span class="text-2xl font-black text-[#111318] dark:text-white font-display tracking-tight">Smart Learn</span>
          </div>
          <div class="w-px h-8 bg-gray-200 dark:bg-gray-700 hidden md:block mx-2"></div>
          <h2 class="text-xl font-bold tracking-tight hidden md:block text-[#616f89] dark:text-[#a1abbd]">إعداد شهادة الدورة</h2>
        </div>
        <div class="flex items-center gap-6">
          <button class="bg-primary text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/25 hover:opacity-90 transition-opacity cursor-pointer">
            <span>حفظ كمسودة</span>
          </button>
        </div>
      </header>

      <div class="p-8 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 w-full">
        <div class="lg:col-span-3 space-y-6">
          <div class="bg-white dark:bg-[#1a2130] p-6 rounded-2xl border border-[#dbdfe6] dark:border-[#2d3648] shadow-sm transition-colors duration-300">
            <div class="flex items-center justify-between relative px-4">
              <div class="absolute top-[20px] left-0 w-full h-0.5 bg-gray-100 dark:bg-gray-800 -translate-y-1/2 z-0"></div>
              <div class="relative z-10 flex flex-col items-center gap-2">
                <div class="size-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                  <span class="material-symbols-outlined text-xl">check</span>
                </div>
                <span class="text-xs font-bold text-[#616f89]">المعلومات الأساسية</span>
              </div>
              <div class="relative z-10 flex flex-col items-center gap-2">
                <div class="size-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                  <span class="material-symbols-outlined text-xl">check</span>
                </div>
                <span class="text-xs font-bold text-[#616f89]">تحميل الفيديو</span>
              </div>
              <div class="relative z-10 flex flex-col items-center gap-2">
                <div class="size-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                  <span class="material-symbols-outlined text-xl">check</span>
                </div>
                <span class="text-xs font-bold text-[#616f89]">المصادر الإضافية</span>
              </div>
              <div class="relative z-10 flex flex-col items-center gap-2">
                <div class="size-10 rounded-full bg-primary text-white flex items-center justify-center font-bold ring-4 ring-primary/20">4</div>
                <span class="text-xs font-bold text-primary">إصدار الشهادة</span>
              </div>
            </div>
          </div>

          <div class="bg-white dark:bg-[#1a2130] border border-[#dbdfe6] dark:border-[#2d3648] rounded-3xl p-8 transition-colors duration-300">
            <div class="flex items-center justify-between mb-8 pb-6 border-b border-[#dbdfe6] dark:border-[#2d3648]">
              <div>
                <h3 class="text-xl font-black mb-1 text-[#111318] dark:text-white">رفع شهادة إتمام الدورة</h3>
                <p class="text-sm text-[#616f89]">قم بتكوين قالب الشهادة التي سيحصل عليها الطلاب</p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input :checked="true" class="sr-only peer" type="checkbox"/>
                <div class="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
              </label>
            </div>
            
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <div class="space-y-6">
                <div class="border-2 border-dashed border-primary/30 rounded-2xl p-8 text-center bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
                  <div class="size-16 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <span class="material-symbols-outlined text-3xl text-primary">upload_file</span>
                  </div>
                  <h4 class="font-bold text-lg mb-1 text-[#111318] dark:text-white">اسحب قالب الشهادة هنا</h4>
                  <p class="text-xs text-[#616f89] mb-4">يدعم ملفات PDF, JPG, PNG (بحد أقصى 5 ميجابايت)</p>
                  <button class="text-sm text-primary font-bold underline cursor-pointer">اختر ملف من الجهاز</button>
                </div>
                <div class="space-y-4">
                  <div class="bg-background-light dark:bg-background-dark/50 p-4 rounded-xl border border-[#dbdfe6] dark:border-[#2d3648] flex items-center justify-between transition-colors duration-300">
                    <div class="flex items-center gap-3">
                      <div class="size-10 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center text-green-600">
                        <span class="material-symbols-outlined">verified_user</span>
                      </div>
                      <div>
                        <p class="text-sm font-bold text-[#111318] dark:text-white">إرسال تلقائي عند الإتمام</p>
                        <p class="text-xs text-[#616f89]">يتم إرسالها للبريد فور إنهاء الطالب للمساق</p>
                      </div>
                    </div>
                    <input :checked="true" class="w-5 h-5 rounded text-primary border-gray-300 dark:border-gray-600 focus:ring-primary bg-white dark:bg-background-dark" type="checkbox"/>
                  </div>
                  <div class="bg-background-light dark:bg-background-dark/50 p-4 rounded-xl border border-[#dbdfe6] dark:border-[#2d3648] flex items-center justify-between transition-colors duration-300">
                    <div class="flex items-center gap-3">
                      <div class="size-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center text-primary">
                        <span class="material-symbols-outlined">qr_code_2</span>
                      </div>
                      <div>
                        <p class="text-sm font-bold text-[#111318] dark:text-white">تضمين رمز QR للتحقق</p>
                        <p class="text-xs text-[#616f89]">إضافة رمز فريد للتحقق من صحة الشهادة</p>
                      </div>
                    </div>
                    <input :checked="true" class="w-5 h-5 rounded text-primary border-gray-300 dark:border-gray-600 focus:ring-primary bg-white dark:bg-background-dark" type="checkbox"/>
                  </div>
                </div>
              </div>

              <div class="bg-gray-100 dark:bg-gray-800/50 rounded-2xl p-4 flex flex-col items-center justify-center min-h-[300px] border border-[#dbdfe6] dark:border-[#2d3648] transition-colors duration-300">
                <div class="w-full aspect-[1.414/1] bg-white dark:bg-gray-800 rounded shadow-lg p-8 relative overflow-hidden flex flex-col items-center text-center">
                  <div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full"></div>
                  <div class="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 -ml-12 -mb-12 rounded-full"></div>
                  <div class="mb-4">
                    <span class="material-symbols-outlined text-primary text-4xl">school</span>
                  </div>
                  <h5 class="text-xl font-black text-gray-900 dark:text-white mb-2">شهادة إتمام دورة</h5>
                  <p class="text-xs text-[#616f89] mb-6">تمنح هذه الشهادة تقديراً لـ</p>
                  <div class="w-48 h-0.5 bg-gray-200 dark:bg-gray-700 mb-2"></div>
                  <p class="text-sm font-bold text-primary mb-6">[اسم الطالب يظهر هنا]</p>
                  <p class="text-[10px] text-[#616f89] max-w-[200px] leading-relaxed">لاجتيازه بنجاح متطلبات دورة "مقدمة في الذكاء الاصطناعي" المقامة عبر المنصة</p>
                  <div class="mt-auto flex justify-between w-full text-[8px] text-[#616f89]">
                    <div class="flex flex-col items-center gap-1">
                      <div class="w-12 h-6 border-b border-gray-300 dark:border-gray-600"></div>
                      <span>توقيع المحاضر</span>
                    </div>
                    <div class="size-8 bg-gray-100 dark:bg-gray-700 rounded-sm"></div>
                    <div class="flex flex-col items-center gap-1">
                      <span>2024/05/12</span>
                      <span>تاريخ الإصدار</span>
                    </div>
                  </div>
                </div>
                <p class="text-xs text-[#616f89] mt-4 font-bold flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">visibility</span>
                  معاينة القالب الحالي
                </p>
              </div>
            </div>

            <div class="mt-12 flex items-center justify-between pt-8 border-t border-[#dbdfe6] dark:border-[#2d3648]">
              <button class="px-8 py-3 rounded-xl border border-[#dbdfe6] dark:border-[#2d3648] font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-[#111318] dark:text-white cursor-pointer">السابق</button>
              <button class="bg-primary text-white px-10 py-3 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform flex items-center gap-2 cursor-pointer">
                <span>إنهاء ونشر المساق</span>
                <span class="material-symbols-outlined">rocket_launch</span>
              </button>
            </div>
          </div>
        </div>

        <div class="lg:col-span-1">
          <div class="bg-white dark:bg-[#1a2130] border border-[#dbdfe6] dark:border-[#2d3648] rounded-2xl overflow-hidden sticky top-24 transition-colors duration-300">
            <div class="p-4 bg-background-light dark:bg-[#232b3c] border-b border-[#dbdfe6] dark:border-[#2d3648]">
              <h4 class="font-black text-sm text-[#111318] dark:text-white">هيكل المساق</h4>
              <p class="text-xs text-[#616f89] mt-1">مقدمة في الذكاء الاصطناعي</p>
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
                <div class="flex items-center gap-2 text-emerald-500">
                  <span class="material-symbols-outlined text-sm">check_circle</span>
                  <span class="text-xs font-bold">المحاضرة 5: التعلم العميق</span>
                </div>
                <div class="flex items-center gap-2 text-primary bg-primary/5 p-2 rounded-lg border border-primary/10">
                  <span class="material-symbols-outlined text-sm">military_tech</span>
                  <span class="text-xs font-bold">خطوة نهائية: إصدار الشهادة</span>
                </div>
              </div>
              <button class="w-full py-2 border-2 border-dashed border-[#dbdfe6] dark:border-[#2d3648] rounded-lg text-xs font-bold text-[#616f89] hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                + إضافة محاضرة جديدة
              </button>
            </div>
            <div class="p-4 border-t border-[#dbdfe6] dark:border-[#2d3648] bg-gray-50 dark:bg-gray-800/30">
              <div class="flex justify-between items-center mb-2">
                <span class="text-[10px] font-bold text-[#616f89]">اكتمال المساق</span>
                <span class="text-[10px] font-bold text-primary">95%</span>
              </div>
              <div class="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div class="h-full bg-primary" style="width: 95%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
