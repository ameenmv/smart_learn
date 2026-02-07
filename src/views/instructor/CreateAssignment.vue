<template>
  <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-bg-base text-text-main transition-colors duration-200 font-sans">
    
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

    <header class="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-border-base bg-bg-surface px-10 py-3">
      <div class="flex items-center gap-8">
        <div class="flex items-center gap-3">
          <div class="size-10 flex items-center justify-center bg-primary rounded-xl">
            <span class="material-symbols-outlined text-white text-[24px]" style="font-variation-settings: 'FILL' 1, 'wght' 400;">school</span>
          </div>
          <h2 class="text-text-main text-2xl font-bold leading-tight tracking-tight font-sans">Smart Learn</h2>
        </div>
        <label class="flex flex-col min-w-40 !h-10 max-w-64">
          <div class="flex w-full flex-1 items-stretch rounded-lg h-full">
            <div class="text-text-muted flex border-none bg-bg-base items-center justify-center pr-4 rounded-r-lg" data-icon="search">
              <span class="material-symbols-outlined">search</span>
            </div>
            <input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg text-text-main focus:outline-0 focus:ring-0 border-none bg-bg-base focus:border-none h-full placeholder:text-text-muted px-4 text-base font-normal leading-normal" placeholder="بحث..." value=""/>
          </div>
        </label>
      </div>
      <div class="flex flex-1 justify-end gap-8 items-center">
        <nav class="flex items-center gap-9">
          <a class="text-text-main text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer" href="#">لوحة التحكم</a>
          <a class="text-primary text-sm font-bold leading-normal border-b-2 border-primary pb-1 cursor-pointer" href="#">المقررات</a>
          <a class="text-text-main text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer" href="#">الطلاب</a>
          <a class="text-text-main text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer" href="#">التقارير</a>
        </nav>
        <div class="flex gap-2">
          <button class="flex items-center justify-center rounded-lg h-10 w-10 bg-bg-base text-text-main hover:bg-bg-surface-hover transition-colors">
            <span class="material-symbols-outlined" data-icon="notifications">notifications</span>
          </button>
          <button class="flex items-center justify-center rounded-lg h-10 w-10 bg-bg-base text-text-main hover:bg-bg-surface-hover transition-colors">
            <span class="material-symbols-outlined" data-icon="account_circle">account_circle</span>
          </button>
        </div>
        <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20" data-alt="User profile picture" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCBG48VL8SS-GouQXGvll0m_hr5wEREwy157GMUIRARUJySnqfGI5FrnhS3t607YsMmP2hWkQzzWlgSQoWj8BImCNAF9yayuM3kdv35o3MmlusD97Epo2RfNatBaxAmVwq4ShOyUn-O8hx-0V3RIp_y9GPgzPHUwJWWFaGV2uiU3JAvgjoOLHvRzNrYi66eE6f1YHikeeWl7qTDLxHE0EayE2OE7xVrDmI26xgSGt6AsU6CEAEXI_K4lZpyaLyIoQLG0YMrKZv1N1_d");'></div>
      </div>
    </header>
    <main class="flex flex-1 gap-6 p-10 max-w-[1440px] mx-auto w-full">
      <aside class="w-80 flex flex-col gap-4">
        <div class="bg-bg-surface rounded-xl border border-border-base p-6 shadow-sm flex flex-col h-full min-h-[700px]">
          <div class="mb-6">
            <h3 class="text-text-main text-lg font-bold">المقرر الدراسي</h3>
            <p class="text-text-muted text-sm">علوم الحاسب - المستوى الرابع</p>
          </div>
          <div class="flex flex-col gap-2 mb-8">
            <div class="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary border border-primary/20">
              <span class="material-symbols-outlined" data-icon="assignment">assignment</span>
              <span class="text-sm font-semibold">إنشاء واجب جديد</span>
            </div>
            <div class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-muted hover:bg-bg-base transition-colors cursor-pointer">
              <span class="material-symbols-outlined" data-icon="drafts">drafts</span>
              <span class="text-sm font-medium">المسودات (3)</span>
            </div>
            <div class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-muted hover:bg-bg-base transition-colors cursor-pointer">
              <span class="material-symbols-outlined" data-icon="archive">archive</span>
              <span class="text-sm font-medium">الواجبات المؤرشفة</span>
            </div>
          </div>
          <div class="flex-1 overflow-y-auto">
            <p class="text-text-main text-sm font-bold mb-4">الواجبات المنشورة مؤخراً</p>
            <div class="flex flex-col gap-3">
              <div class="p-3 border border-border-base rounded-lg hover:border-primary/40 transition-all group bg-bg-surface">
                <h4 class="text-xs font-bold text-text-main mb-1">الخوارزميات والتعقيد</h4>
                <div class="flex items-center gap-1 text-[10px] text-text-muted">
                  <span class="material-symbols-outlined text-[14px]">calendar_today</span>
                  <span>التسليم: 24 مايو 2024</span>
                </div>
                <div class="mt-2 flex justify-between items-center">
                  <span class="px-2 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-bold">نشط</span>
                  <span class="text-[10px] text-primary font-medium group-hover:underline cursor-pointer">تفاصيل</span>
                </div>
              </div>
              <div class="p-3 border border-border-base rounded-lg hover:border-primary/40 transition-all group bg-bg-surface">
                <h4 class="text-xs font-bold text-text-main mb-1">بنية البيانات المتقدمة</h4>
                <div class="flex items-center gap-1 text-[10px] text-text-muted">
                  <span class="material-symbols-outlined text-[14px]">calendar_today</span>
                  <span>التسليم: 15 مايو 2024</span>
                </div>
                <div class="mt-2 flex justify-between items-center">
                  <span class="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-[10px] font-bold">منتهي</span>
                  <span class="text-[10px] text-primary font-medium group-hover:underline cursor-pointer">تفاصيل</span>
                </div>
              </div>
            </div>
          </div>
          <button class="mt-6 w-full flex items-center justify-center gap-2 rounded-lg h-11 bg-primary text-white text-sm font-bold shadow-md shadow-primary/20 hover:bg-blue-700 transition-colors">
            <span class="material-symbols-outlined">arrow_forward</span>
            <span>العودة للمقرر</span>
          </button>
        </div>
      </aside>
      <section class="flex-1 flex flex-col gap-6">
        <div class="flex flex-col gap-4">
          <div class="flex flex-wrap gap-2 text-sm">
            <a class="text-text-muted font-medium hover:text-primary" href="#">الرئيسية</a>
            <span class="text-text-muted font-medium">/</span>
            <a class="text-text-muted font-medium hover:text-primary" href="#">إدارة الواجبات</a>
            <span class="text-text-muted font-medium">/</span>
            <span class="text-primary font-bold">إنشاء واجب جديد</span>
          </div>
          <div class="flex justify-between items-end">
            <div class="flex flex-col gap-1">
              <h1 class="text-text-main text-4xl font-black tracking-tight">إنشاء واجب جديد</h1>
              <p class="text-text-muted text-base">قم بتعبئة تفاصيل الواجب وتحديده للطلاب بدقة</p>
            </div>
          </div>
        </div>
        <div class="bg-bg-surface rounded-xl border border-border-base shadow-sm overflow-hidden">
          <div class="p-8 border-b border-border-base bg-bg-base/30">
            <div class="flex justify-between items-center mb-3">
              <div class="flex items-center gap-2">
                <span class="flex items-center justify-center size-6 rounded-full bg-primary text-white text-xs font-bold">1</span>
                <p class="text-text-main text-base font-bold leading-normal">المعلومات الأساسية</p>
              </div>
              <p class="text-primary text-sm font-bold leading-normal">الخطوة 1 من 3 (33%)</p>
            </div>
            <div class="h-2 rounded-full bg-border-base w-full overflow-hidden">
              <div class="h-full bg-primary transition-all duration-500" style="width: 33%;"></div>
            </div>
          </div>
          <div class="p-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="flex flex-col gap-2 md:col-span-2">
                <label class="text-sm font-bold text-text-main">عنوان الواجب <span class="text-red-500">*</span></label>
                <input v-model="formData.title" class="w-full h-12 px-4 rounded-lg border border-border-base bg-bg-surface text-text-main focus:ring-2 focus:ring-primary focus:border-primary outline-none text-base" placeholder="مثال: تحليل الخوارزميات الجزء الأول" type="text"/>
              </div>
              <div class="flex flex-col gap-2 md:col-span-2">
                <label class="text-sm font-bold text-text-main">الوصف والتعليمات <span class="text-red-500">*</span></label>
                <div class="border border-border-base rounded-lg overflow-hidden">
                  <div class="flex gap-1 p-2 bg-bg-base border-b border-border-base">
                    <button class="p-1 hover:bg-bg-surface rounded text-text-main"><span class="material-symbols-outlined text-lg">format_bold</span></button>
                    <button class="p-1 hover:bg-bg-surface rounded text-text-main"><span class="material-symbols-outlined text-lg">format_italic</span></button>
                    <button class="p-1 hover:bg-bg-surface rounded text-text-main"><span class="material-symbols-outlined text-lg">format_list_bulleted</span></button>
                    <button class="p-1 hover:bg-bg-surface rounded text-text-main"><span class="material-symbols-outlined text-lg">link</span></button>
                    <button class="p-1 hover:bg-bg-surface rounded text-text-main"><span class="material-symbols-outlined text-lg">image</span></button>
                  </div>
                  <textarea v-model="formData.description" class="w-full min-h-[160px] p-4 bg-bg-surface border-none focus:ring-0 text-base text-text-main placeholder:text-text-muted" placeholder="اكتب وصف الواجب والتعليمات المطلوبة هنا..."></textarea>
                </div>
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm font-bold text-text-main">تاريخ التسليم <span class="text-red-500">*</span></label>
                <div class="relative">
                  <input v-model="formData.dueDate" class="w-full h-12 px-4 pr-12 rounded-lg border border-border-base bg-bg-surface text-text-main placeholder:text-text-muted focus:ring-2 focus:ring-primary focus:border-primary outline-none" type="date"/>
                  <span class="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-text-muted">event</span>
                </div>
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm font-bold text-text-main">النقاط (الدرجة القصوى) <span class="text-red-500">*</span></label>
                <div class="relative">
                  <input v-model="formData.points" class="w-full h-12 px-4 pr-12 rounded-lg border border-border-base bg-bg-surface text-text-main placeholder:text-text-muted focus:ring-2 focus:ring-primary focus:border-primary outline-none" type="number"/>
                  <span class="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-text-muted">grade</span>
                </div>
              </div>
              <div class="flex flex-col gap-2 md:col-span-2">
                <label class="text-sm font-bold text-text-main">الملفات المرفقة (اختياري)</label>
                <div class="border-2 border-dashed border-border-base rounded-xl p-10 flex flex-col items-center justify-center gap-4 bg-bg-base/20 hover:bg-bg-base/40 transition-colors cursor-pointer group">
                  <div class="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <span class="material-symbols-outlined text-4xl">upload_file</span>
                  </div>
                  <div class="text-center">
                    <p class="text-base font-bold text-text-main">اضغط للتحميل أو قم بسحب الملفات هنا</p>
                    <p class="text-sm text-text-muted mt-1">PDF, DOCX, ZIP (حد أقصى 25 ميجابايت)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="p-8 border-t border-border-base bg-bg-base/10 flex justify-between items-center">
            <div class="flex items-center gap-2 text-text-muted">
              <span class="material-symbols-outlined text-lg">info</span>
              <span class="text-sm font-medium">سيتم حفظ تقدمك تلقائياً كمسودة</span>
            </div>
            <div class="flex gap-4">
              <button @click="saveDraft" :disabled="isSaving" class="px-8 h-12 rounded-lg bg-bg-surface border border-border-base text-text-main text-sm font-bold hover:bg-bg-base transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                 <span v-if="isSaving" class="size-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></span>
                 <span>{{ isSaving ? 'جاري الحفظ' : 'حفظ كمسودة' }}</span>
              </button>
              <button @click="publishAssignment" :disabled="isPublishing" class="px-10 h-12 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-primary/30 hover:bg-blue-700 transition-colors flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                <span v-if="isPublishing" class="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                <span v-else class="material-symbols-outlined">send</span>
                <span>{{ isPublishing ? 'جاري النشر...' : 'نشر الواجب' }}</span>
              </button>
            </div>
          </div>
        </div>
        <div class="flex gap-4 p-4 rounded-xl bg-blue-50 dark:bg-primary/10 border border-blue-100 dark:border-primary/20">
          <span class="material-symbols-outlined text-primary">lightbulb</span>
          <div class="flex flex-col gap-1">
            <p class="text-sm font-bold text-text-main">نصيحة تعليمية</p>
            <p class="text-sm text-text-muted">تأكد من تحديد معايير التقييم بوضوح لمساعدة الطلاب على فهم التوقعات بشكل أفضل وتقليل الاستفسارات المتكررة.</p>
          </div>
        </div>
      </section>
    </main>
    <footer class="mt-10 px-10 py-6 text-center border-t border-border-base">
      <p class="text-sm text-text-muted">© 2024 Smart Learn. جميع الحقوق محفوظة.</p>
    </footer>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const isSaving = ref(false);
const isPublishing = ref(false);

const formData = reactive({
    title: '',
    description: '',
    dueDate: '',
    points: 100
});

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
        showToast('تم الحفظ', 'تم حفظ الواجب كمسودة بنجاح');
    }, 1500);
};

const publishAssignment = () => {
    isPublishing.value = true;
    setTimeout(() => {
        isPublishing.value = false;
        showToast('تم النشر', 'تم نشر الواجب وإتاحته للطلاب بنجاح');
        
        // Clear form after publish as per request
        formData.title = '';
        formData.description = '';
        formData.dueDate = '';
        formData.points = 100;
    }, 2000);
};
</script>

<style scoped>
/* Ensure fonts and specialized inputs behave correctly */
input[type="date"]::-webkit-calendar-picker-indicator {
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
}

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
