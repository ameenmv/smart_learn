<template>
  <div class="max-w-5xl mx-auto space-y-8 font-display pb-24">
    
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
      
      <div v-for="cert in certificates" :key="cert.id" class="group bg-bg-surface rounded-xl border border-border-base overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
        <div class="relative aspect-[4/3] bg-bg-base flex items-center justify-center p-6 overflow-hidden">
          <div class="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
          
          <!-- Premium Certificate Look -->
          <div class="w-full h-full bg-white text-black rounded shadow-lg p-6 relative overflow-hidden flex flex-col items-center text-center transform group-hover:scale-105 transition-transform duration-500">
             <!-- Circular Decorations -->
             <div class="absolute top-0 right-0 w-24 h-24 bg-primary/10 -mr-12 -mt-12 rounded-full"></div>
             <div class="absolute bottom-0 left-0 w-20 h-20 bg-primary/10 -ml-10 -mb-10 rounded-full"></div>
             
             <!-- Header -->
             <div class="mb-3">
               <span class="material-symbols-outlined text-primary text-3xl">school</span>
             </div>
             
             <!-- Content -->
             <h4 class="font-black text-xs mb-1 uppercase tracking-wider">شهادة إتمام دورة</h4>
             <p class="text-[8px] text-gray-500 mb-3">تمنح هذه الشهادة تقديراً لجهود الطالب</p>
             
             <div class="w-24 h-0.5 bg-gray-100 mb-2"></div>
             <p class="font-bold text-primary text-xs mb-3 truncate max-w-full px-2">عبدالله أحمد</p>
             <p class="text-[8px] text-gray-500 leading-tight mb-2">لإتمامه بنجاح متطلبات دورة <br/> <strong class="text-black">{{ cert.course }}</strong></p>
             
             <!-- Footer with QR -->
             <div class="mt-auto flex justify-between items-end w-full">
               <div class="text-[6px] text-gray-400 text-right">
                 <p>التاريخ</p>
                 <p class="font-bold text-gray-600">{{ cert.date }}</p>
               </div>
               
               <!-- QR Code -->
               <div class="bg-white p-0.5 rounded border border-gray-100">
                 <img :src="`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${cert.id}`" class="size-8" alt="QR" />
               </div>
               
               <div class="text-[6px] text-gray-400 text-left">
                 <p>المعرف</p>
                 <p class="font-bold text-gray-600">#{{ cert.id }}</p>
               </div>
             </div>
          </div>
        </div>

        <div class="p-6 flex-1 flex flex-col">
          <h3 class="font-bold text-lg text-text-main mb-1 line-clamp-1">{{ cert.course }}</h3>
          <p class="text-sm text-text-muted mb-4">تم إصدارها في {{ cert.date }}</p>
          
          <div class="mt-auto flex gap-3">
             <button @click="downloadCertificate(cert)" class="flex-1 bg-primary text-white py-2 rounded-lg font-bold text-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20 cursor-pointer">
               <span class="material-symbols-outlined text-lg">download</span>
               <span>تحميل PDF</span>
             </button>
             <button @click="shareCertificate(cert)" class="size-10 rounded-lg border border-border-base flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-colors cursor-pointer" title="مشاركة">
               <span class="material-symbols-outlined">share</span>
             </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const certificates = ref([
  { id: 'CRT-2023-001', course: 'أساسيات هندسة البرمجيات', date: '15/10/2023' },
  { id: 'CRT-2023-002', course: 'مقدمة في الذكاء الاصطناعي', date: '20/09/2023' },
  { id: 'CRT-2023-003', course: 'تصميم واجهات المستخدم UI/UX', date: '05/08/2023' },
]);

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

const downloadCertificate = (cert) => {
    showToast('جاري التحميل', `تم بدء تحميل شهادة "${cert.course}"...`);
};

const shareCertificate = (cert) => {
    navigator.clipboard.writeText(`https://smart-learn.com/verify/${cert.id}`);
    showToast('تم النسخ', 'تم نسخ رابط التحقق من الشهادة');
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
