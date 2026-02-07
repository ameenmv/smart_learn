<template>
  <div class="flex h-full min-h-screen bg-bg-base text-text-main transition-colors duration-300">
    <!-- Toast Notification -->
    <Transition name="toast">
        <div v-if="toast.show" 
             class="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-4 rounded-xl shadow-xl border backdrop-blur-md transition-all duration-300 min-w-[320px] cursor-pointer hover:scale-[1.02]"
             :class="toast.type === 'success' ? 'bg-emerald-50/90 border-emerald-200 dark:bg-emerald-900/90 dark:border-emerald-800' : 'bg-red-50/90 border-red-200 dark:bg-red-900/90 dark:border-red-800'"
             @click="toast.show = false">
          <div class="p-2 rounded-full" :class="toast.type === 'success' ? 'bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-200' : 'bg-red-100 dark:bg-red-800 text-red-600 dark:text-red-200'">
            <span class="material-symbols-outlined text-xl">
                {{ toast.type === 'success' ? 'check_circle' : 'error' }}
            </span>
          </div>
          <div class="flex flex-col flex-1">
            <h4 class="font-bold text-sm" :class="toast.type === 'success' ? 'text-emerald-900 dark:text-emerald-100' : 'text-red-900 dark:text-red-100'">{{ toast.title }}</h4>
            <p class="text-xs opacity-90" :class="toast.type === 'success' ? 'text-emerald-800 dark:text-emerald-200' : 'text-red-800 dark:text-red-200'">{{ toast.message }}</p>
          </div>
          <button class="hover:bg-black/5 dark:hover:bg-white/5 rounded-full p-1 transition-colors">
            <span class="material-symbols-outlined text-lg opacity-60">close</span>
          </button>
        </div>
    </Transition>

    <div class="flex-1 flex flex-col min-w-0 transition-all duration-300">
      <header class="sticky top-0 z-10 bg-bg-surface/80 backdrop-blur-md border-b border-border-base px-8 h-16 flex items-center justify-between transition-colors duration-300">
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-3">
            <div class="bg-primary text-white rounded-xl p-1.5 flex items-center justify-center shadow-md shadow-primary/20">
              <span class="material-symbols-outlined text-[28px]">school</span>
            </div>
            <span class="text-2xl font-black text-text-main font-display tracking-tight">Smart Learn</span>
          </div>
          <div class="w-px h-8 bg-border-base hidden md:block mx-2"></div>
          <h2 class="text-xl font-bold tracking-tight hidden md:block text-text-muted">إعداد شهادة الدورة</h2>
        </div>
        <div class="flex items-center gap-6">
          <button @click="saveDraft" :disabled="isSaving" class="bg-primary text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/25 hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed">
            <span v-if="isSaving" class="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            <span>{{ isSaving ? 'جاري الحفظ...' : 'حفظ كمسودة' }}</span>
          </button>
        </div>
      </header>

      <div class="p-8 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 w-full">
        <div class="lg:col-span-3 space-y-6">
          <div class="bg-bg-surface p-6 rounded-2xl border border-border-base shadow-sm transition-colors duration-300">
            <div class="flex items-center justify-between relative px-4">
              <div class="absolute top-[20px] left-0 w-full h-0.5 bg-border-base -translate-y-1/2 z-0"></div>
              <div class="relative z-10 flex flex-col items-center gap-2">
                <div class="size-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                  <span class="material-symbols-outlined text-xl">check</span>
                </div>
                <span class="text-xs font-bold text-text-muted">المعلومات الأساسية</span>
              </div>
              <div class="relative z-10 flex flex-col items-center gap-2">
                <div class="size-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                  <span class="material-symbols-outlined text-xl">check</span>
                </div>
                <span class="text-xs font-bold text-text-muted">تحميل الفيديو</span>
              </div>
              <div class="relative z-10 flex flex-col items-center gap-2">
                <div class="size-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                  <span class="material-symbols-outlined text-xl">check</span>
                </div>
                <span class="text-xs font-bold text-text-muted">المصادر الإضافية</span>
              </div>
              <div class="relative z-10 flex flex-col items-center gap-2">
                <div class="size-10 rounded-full bg-primary text-white flex items-center justify-center font-bold ring-4 ring-primary/20">4</div>
                <span class="text-xs font-bold text-primary">إصدار الشهادة</span>
              </div>
            </div>
          </div>

          <div class="bg-bg-surface border border-border-base rounded-3xl p-8 transition-colors duration-300">
            <div class="flex items-center justify-between mb-8 pb-6 border-b border-border-base">
              <div>
                <h3 class="text-xl font-black mb-1 text-text-main">رفع شهادة إتمام الدورة</h3>
                <p class="text-sm text-text-muted">قم بتكوين قالب الشهادة التي سيحصل عليها الطلاب</p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input :checked="true" class="sr-only peer" type="checkbox"/>
                <div class="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
              </label>
            </div>
            
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <div class="space-y-6">
                <div class="border-2 border-dashed border-primary/30 rounded-2xl p-8 text-center bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
                  <div class="size-16 rounded-full bg-bg-surface flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <span class="material-symbols-outlined text-3xl text-primary">upload_file</span>
                  </div>
                  <h4 class="font-bold text-lg mb-1 text-text-main">اسحب قالب الشهادة هنا</h4>
                  <p class="text-xs text-text-muted mb-4">يدعم ملفات PDF, JPG, PNG (بحد أقصى 5 ميجابايت)</p>
                  <button class="text-sm text-primary font-bold underline cursor-pointer">اختر ملف من الجهاز</button>
                </div>
                <div class="space-y-4">
                  <div class="bg-bg-base/50 p-4 rounded-xl border border-border-base flex items-center justify-between transition-colors duration-300">
                    <div class="flex items-center gap-3">
                      <div class="size-10 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center text-green-600">
                        <span class="material-symbols-outlined">verified_user</span>
                      </div>
                      <div>
                        <p class="text-sm font-bold text-text-main">إرسال تلقائي عند الإتمام</p>
                        <p class="text-xs text-text-muted">يتم إرسالها للبريد فور إنهاء الطالب للمساق</p>
                      </div>
                    </div>
                    <input :checked="true" class="w-5 h-5 rounded text-primary border-gray-300 focus:ring-primary bg-bg-base border-border-base" type="checkbox"/>
                  </div>
                  <div class="bg-bg-base/50 p-4 rounded-xl border border-border-base flex items-center justify-between transition-colors duration-300">
                    <div class="flex items-center gap-3">
                      <div class="size-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center text-primary">
                        <span class="material-symbols-outlined">qr_code_2</span>
                      </div>
                      <div>
                        <p class="text-sm font-bold text-text-main">تضمين رمز QR للتحقق</p>
                        <p class="text-xs text-text-muted">إضافة رمز فريد للتحقق من صحة الشهادة</p>
                      </div>
                    </div>
                    <input :checked="true" class="w-5 h-5 rounded text-primary border-gray-300 focus:ring-primary bg-bg-base border-border-base" type="checkbox"/>
                  </div>
                </div>
              </div>

              <div class="bg-bg-base/50 rounded-2xl p-4 flex flex-col items-center justify-center min-h-[300px] border border-border-base transition-colors duration-300">
                <div class="w-full aspect-[1.414/1] bg-white rounded shadow-lg p-8 relative overflow-hidden flex flex-col items-center text-center">
                  <div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full"></div>
                  <div class="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 -ml-12 -mb-12 rounded-full"></div>
                  <div class="mb-4">
                    <span class="material-symbols-outlined text-primary text-4xl">school</span>
                  </div>
                  <h5 class="text-xl font-black text-gray-900 mb-2">شهادة إتمام دورة</h5>
                  <p class="text-xs text-gray-500 mb-6">تمنح هذه الشهادة تقديراً لـ</p>
                  <div class="w-48 h-0.5 bg-gray-200 mb-2"></div>
                  <p class="text-sm font-bold text-primary mb-6">[اسم الطالب يظهر هنا]</p>
                  <p class="text-[10px] text-gray-500 max-w-[200px] leading-relaxed">لاجتيازه بنجاح متطلبات دورة "مقدمة في الذكاء الاصطناعي" المقامة عبر المنصة</p>
                  <div class="mt-auto flex justify-between w-full text-[8px] text-gray-500">
                    <div class="flex flex-col items-center gap-1">
                      <div class="w-12 h-6 border-b border-gray-300"></div>
                      <span>توقيع المحاضر</span>
                    </div>
                    <div class="size-8 bg-gray-100 rounded-sm"></div>
                    <div class="flex flex-col items-center gap-1">
                      <span>2024/05/12</span>
                      <span>تاريخ الإصدار</span>
                    </div>
                  </div>
                </div>
                <p class="text-xs text-text-muted mt-4 font-bold flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">visibility</span>
                  معاينة القالب الحالي
                </p>
              </div>
            </div>

            <div class="mt-12 flex items-center justify-between pt-8 border-t border-border-base">
              <button class="px-8 py-3 rounded-xl border border-border-base font-bold hover:bg-bg-base transition-colors text-text-main cursor-pointer">السابق</button>
              <button @click="publishCertificate" :disabled="isPublishing" class="bg-primary text-white px-10 py-3 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform flex items-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed">
                <span v-if="isPublishing" class="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                <span v-else>إنهاء ونشر المساق</span>
                <span v-if="!isPublishing" class="material-symbols-outlined">rocket_launch</span>
              </button>
            </div>
          </div>
        </div>

        <div class="lg:col-span-1">
          <div class="bg-bg-surface border border-border-base rounded-2xl overflow-hidden sticky top-24 transition-colors duration-300">
            <div class="p-4 bg-bg-base border-b border-border-base">
              <h4 class="font-black text-sm text-text-main">هيكل المساق</h4>
              <p class="text-xs text-text-muted mt-1">مقدمة في الذكاء الاصطناعي</p>
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
              <button class="w-full py-2 border-2 border-dashed border-border-base rounded-lg text-xs font-bold text-text-muted hover:bg-bg-base transition-colors cursor-pointer">
                + إضافة محاضرة جديدة
              </button>
            </div>
            <div class="p-4 border-t border-border-base bg-bg-base/30">
              <div class="flex justify-between items-center mb-2">
                <span class="text-[10px] font-bold text-text-muted">اكتمال المساق</span>
                <span class="text-[10px] font-bold text-primary">95%</span>
              </div>
              <div class="w-full h-1.5 bg-border-base rounded-full overflow-hidden">
                <div class="h-full bg-primary" style="width: 95%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const isSaving = ref(false);
const isPublishing = ref(false);

const toast = reactive({
    show: false,
    title: '',
    message: '',
    type: 'success'
});

const showToast = (title, message, type = 'success') => {
    toast.title = title;
    toast.message = message;
    toast.type = type;
    toast.show = true;
    setTimeout(() => {
        toast.show = false;
    }, 3000);
};

const saveDraft = () => {
    isSaving.value = true;
    setTimeout(() => {
        isSaving.value = false;
        showToast('تم الحفظ', 'تم حفظ إعدادات الشهادة كمسودة');
    }, 1500);
};

const publishCertificate = () => {
    isPublishing.value = true;
    setTimeout(() => {
        isPublishing.value = false;
        showToast('تم النشر', 'تم نشر الشهادات للمساق بنجاح');
    }, 2000);
};
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
    transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
    opacity: 0;
    transform: translate(-50%, 20px);
}
</style>
