<template>
  <div class="max-w-[1440px] mx-auto font-display h-full flex flex-col">
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

    <!-- Breadcrumb -->
    <nav class="flex items-center gap-2 mb-6 text-sm flex-shrink-0">
      <RouterLink class="text-text-muted hover:text-primary transition-colors" to="/student/courses">جامعة الملك سعود</RouterLink>
      <span class="text-text-muted material-symbols-outlined text-base">chevron_left</span>
      <RouterLink class="text-text-muted hover:text-primary transition-colors" to="/student/courses/101">كلية الهندسة</RouterLink>
      <span class="text-text-muted material-symbols-outlined text-base">chevron_left</span>
      <RouterLink class="text-text-muted hover:text-primary transition-colors" to="/student/courses/101">ذكاء اصطناعي 101</RouterLink>
      <span class="text-text-muted material-symbols-outlined text-base">chevron_left</span>
      <span class="font-semibold text-primary">المحاضرة 12: الشبكات العصبية المتقدمة</span>
    </nav>

    <div class="flex flex-col lg:flex-row gap-6 flex-1 min-h-0">
      <!-- Sidebar (Course Content) -->
      <aside class="w-full lg:w-80 flex-shrink-0 flex flex-col">
        <div class="bg-bg-surface rounded-xl border border-border-base overflow-hidden flex flex-col h-full max-h-[calc(100vh-140px)] sticky top-0 transition-colors duration-300">
          <div class="p-4 border-b border-border-base flex-shrink-0">
            <h3 class="font-bold text-lg mb-1 text-text-main">محتوى الدورة</h3>
            <div class="flex items-center justify-between text-xs text-text-muted">
              <span>12 من أصل 20 درساً مكتمل</span>
              <span class="font-bold text-primary">60%</span>
            </div>
            <div class="w-full bg-bg-surface-hover h-1.5 rounded-full mt-2 overflow-hidden">
              <div class="bg-primary h-full rounded-full" style="width: 60%"></div>
            </div>
          </div>
          
          <div class="overflow-y-auto flex-1 no-scrollbar">
            <div class="p-2">
              <button class="w-full flex items-center justify-between p-2 text-sm font-bold text-text-muted hover:text-text-main transition-colors cursor-pointer">
                <span>الوحدة الثانية: أساسيات التعلم العميق</span>
                <span class="material-symbols-outlined">expand_more</span>
              </button>
              <div class="space-y-1 mt-1">
                <div class="flex items-center gap-3 p-3 rounded-lg bg-primary/10 border-r-4 border-primary cursor-pointer">
                  <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1">play_circle</span>
                  <div class="flex-1">
                    <p class="text-sm font-bold text-primary">12. الشبكات العصبية المتقدمة</p>
                    <p class="text-[10px] text-text-muted">45:00 دقيقة</p>
                  </div>
                </div>
                <div class="flex items-center gap-3 p-3 rounded-lg hover:bg-bg-surface-hover transition-colors cursor-pointer text-text-main">
                  <span class="material-symbols-outlined text-green-500" style="font-variation-settings: 'FILL' 1">check_circle</span>
                  <div class="flex-1">
                    <p class="text-sm font-medium">11. مقدمة في خوارزميات التصنيف</p>
                    <p class="text-[10px] text-text-muted">32:15 دقيقة</p>
                  </div>
                </div>
                <div class="flex items-center gap-3 p-3 rounded-lg hover:bg-bg-surface-hover transition-colors cursor-pointer opacity-70 text-text-main">
                  <span class="material-symbols-outlined text-text-muted">lock</span>
                  <div class="flex-1">
                    <p class="text-sm font-medium text-text-muted">13. تحسين النماذج والضبط</p>
                    <p class="text-[10px] text-text-muted">55:00 دقيقة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="p-4 border-t border-border-base flex-shrink-0">
            <button class="w-full py-2.5 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors cursor-pointer shadow-sm">
              خارطة الطريق التعليمية
            </button>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <div class="flex-1 min-w-0 overflow-y-auto no-scrollbar pr-1">
        <!-- Video Player -->
        <div class="bg-black rounded-xl overflow-hidden shadow-2xl relative group">
          <div class="aspect-video relative bg-cover bg-center" data-alt="فيديو تعليمي عن الشبكات العصبية" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBOk22wfLib23OIsywlvMWCIWESjUgQYeJzMBdrS-EmwH9aQTQ2lFVt57acY1E8VRVeA6Nx9edRnjrfzfOlQoIqdHyVCKoqIJXM4zOHcJae67ILJbxnC1fqNbVRM7Gya--SWNwDeWPIw6LnUWQFZgrDkqv6rCTJQhbkXSIq7rD3xnH5qbXC_9GQ8OtpZ0ldBf2XnZzhhUAdiZi7hqJaTcWqZ-pW2kQ2SPeY7gVQ9LgbgjMCLqLsPxYKC0r95Cl5Dgy0gz6Q2dXxTy0f");'>
            <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
              <button class="size-20 rounded-full bg-primary/90 text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-xl">
                <span class="material-symbols-outlined !text-4xl" style="font-variation-settings: 'FILL' 1">play_arrow</span>
              </button>
            </div>
            <div class="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="flex items-center gap-4 mb-2">
                <div class="h-1 flex-1 bg-white/30 rounded-full relative cursor-pointer">
                  <div class="absolute inset-y-0 right-0 bg-primary rounded-full" style="width: 35%"></div>
                  <div class="absolute right-[35%] top-1/2 -translate-y-1/2 size-3 bg-white rounded-full shadow-lg hover:scale-125 transition-transform"></div>
                </div>
              </div>
              <div class="flex items-center justify-between text-white">
                <div class="flex items-center gap-4">
                  <span class="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">play_arrow</span>
                  <span class="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">skip_next</span>
                  <span class="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">volume_up</span>
                  <span class="text-xs font-medium">15:40 / 45:00</span>
                </div>
                <div class="flex items-center gap-4">
                  <span class="text-xs bg-white/20 px-2 py-0.5 rounded cursor-pointer hover:bg-white/30 transition-colors">1.25x</span>
                  <span class="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">subtitles</span>
                  <span class="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">settings</span>
                  <span class="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">fullscreen</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Info & Actions -->
        <div class="mt-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 class="text-2xl lg:text-3xl font-bold mb-2 text-text-main">المحاضرة 12: الشبكات العصبية المتقدمة</h1>
            <div class="flex items-center gap-4 text-text-muted text-sm">
              <div class="flex items-center gap-1">
                <span class="material-symbols-outlined text-sm">person</span>
                <span>د. أحمد الفارسي</span>
              </div>
              <span>•</span>
              <div class="flex items-center gap-1">
                <span class="material-symbols-outlined text-sm">schedule</span>
                <span>45 دقيقة</span>
              </div>
              <span>•</span>
              <div class="flex items-center gap-1 text-yellow-500">
                <span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1">star</span>
                <span>4.9 (240 تقييم)</span>
              </div>
            </div>
          </div>
          <div class="flex gap-2">
            <button class="flex items-center gap-2 px-4 py-2 rounded-lg bg-bg-surface-hover text-text-main text-sm font-medium hover:bg-border-base transition-colors cursor-pointer border border-border-base">
              <span class="material-symbols-outlined">download</span>
              الملخص
            </button>
            <button @click="markComplete" :disabled="isCompleting" class="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors cursor-pointer shadow-sm disabled:opacity-70 disabled:cursor-not-allowed">
              <span v-if="isCompleting" class="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              <span v-else class="material-symbols-outlined">check</span>
              <span>{{ isCompleting ? 'جاري التحديث...' : 'تحديد كمكتمل' }}</span>
            </button>
          </div>
        </div>

        <!-- Notes Tabs -->
        <div class="mt-10">
          <div class="flex items-center gap-8 border-b border-border-base mb-6 overflow-x-auto no-scrollbar">
            <button class="pb-4 text-sm font-bold border-b-2 border-primary text-primary flex items-center gap-2 whitespace-nowrap cursor-pointer">
              <span class="material-symbols-outlined">description</span>
              ملاحظات الدرس
            </button>
            <button class="pb-4 text-sm font-bold text-text-muted hover:text-text-main flex items-center gap-2 whitespace-nowrap cursor-pointer transition-colors">
              <span class="material-symbols-outlined">forum</span>
              الأسئلة والأجوبة
              <span class="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">3</span>
            </button>
            <button class="pb-4 text-sm font-bold text-text-muted hover:text-text-main flex items-center gap-2 whitespace-nowrap cursor-pointer transition-colors">
              <span class="material-symbols-outlined">folder_open</span>
              المصادر الإضافية
            </button>
          </div>

          <!-- Notes Content -->
          <div class="bg-bg-surface rounded-xl border border-border-base p-6 transition-colors duration-300">
            <div class="flex items-center justify-between mb-4">
              <h4 class="font-bold text-text-main">مفكرة الطالب</h4>
              <span class="text-xs text-text-muted">تم الحفظ تلقائياً: 12:30 م</span>
            </div>
            <textarea class="w-full min-h-[200px] border-none bg-bg-surface-hover rounded-lg p-4 text-sm focus:ring-1 focus:ring-primary mb-4 text-text-main placeholder:text-text-muted outline-none transition-colors" placeholder="اكتب ملاحظاتك هنا... سيتم ربط الملاحظة بالوقت الحالي للفيديو"></textarea>
            <div class="space-y-4">
              <div class="flex items-start gap-3 p-3 bg-bg-base rounded-lg border-r-4 border-primary/40 transition-colors">
                <span class="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded cursor-pointer hover:bg-primary/20">10:24</span>
                <p class="text-sm text-text-main">شرح مفهوم الانتشار العكسي (Backpropagation) بشكل رائع، يجب مراجعة المعادلة الرياضية.</p>
              </div>
              <div class="flex items-start gap-3 p-3 bg-bg-base rounded-lg border-r-4 border-primary/40 transition-colors">
                <span class="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded cursor-pointer hover:bg-primary/20">15:10</span>
                <p class="text-sm text-text-main">الفرق الأساسي بين RNN و CNN في معالجة البيانات المتسلسلة.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- AI Assistant Floating Button -->
    <div class="fixed bottom-6 left-6 z-50">
      <button class="size-14 rounded-full bg-primary text-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform group relative cursor-pointer">
        <span class="material-symbols-outlined !text-3xl">smart_toy</span>
        <div class="absolute bottom-full mb-3 left-0 bg-bg-surface text-text-main text-xs font-bold py-2 px-3 rounded-lg shadow-lg whitespace-nowrap hidden group-hover:block border border-border-base">
          مساعد الذكاء الاصطناعي
        </div>
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const isCompleting = ref(false);

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

const markComplete = () => {
    isCompleting.value = true;
    setTimeout(() => {
        isCompleting.value = false;
        showToast('أحسنت!', 'تم تحديد المحاضرة كمكتملة');
    }, 1000);
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
