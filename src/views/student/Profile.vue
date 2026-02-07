<template>
  <div class="max-w-4xl mx-auto space-y-8 font-display pb-24">
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

    <header class="flex items-center justify-between">
      <h2 class="text-2xl font-bold text-text-main">الإعدادات الشخصية</h2>
      <div class="flex items-center gap-4">
        <button @click="saveChanges" :disabled="isSaving" class="bg-primary text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2">
          <span v-if="isSaving" class="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
          <span>{{ isSaving ? 'جاري الحفظ...' : 'حفظ التغييرات' }}</span>
        </button>
      </div>
    </header>

    <!-- Account Info -->
    <section class="bg-bg-surface rounded-2xl border border-border-base shadow-sm overflow-hidden transition-colors duration-300">
      <div class="p-6 border-b border-border-base flex items-center gap-3">
        <span class="material-symbols-outlined text-primary">person</span>
        <h3 class="text-lg font-bold text-text-main">معلومات الحساب</h3>
      </div>
      <div class="p-8">
        <div class="flex flex-col items-center mb-10">
          <div class="relative">
            <div class="w-32 h-32 rounded-full border-4 border-bg-surface shadow-xl overflow-hidden bg-bg-base relative">
              <img :src="profileImage" alt="Profile" class="w-full h-full object-cover transition-opacity duration-300" :class="{'opacity-50': isUploading}"/>
               <div v-if="isUploading" class="absolute inset-0 flex items-center justify-center">
                  <span class="size-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></span>
              </div>
            </div>
            <button @click="triggerFileUpload" class="absolute bottom-1 right-1 bg-primary text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center border-4 border-bg-surface cursor-pointer">
              <span class="material-symbols-outlined text-xl">photo_camera</span>
            </button>
            <input type="file" ref="fileInput" class="hidden" accept="image/*" @change="handleImageUpload" />
          </div>
          <p @click="triggerFileUpload" class="mt-4 text-sm font-medium text-text-muted cursor-pointer hover:text-primary transition-colors">انقر لتغيير الصورة الشخصية</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-2">
            <label class="text-sm font-semibold text-text-muted">الاسم الكامل</label>
            <input class="w-full bg-bg-base border-border-base rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-text-main" type="text" value="أحمد المحمد"/>
          </div>
          <div class="space-y-2">
            <label class="text-sm font-semibold text-text-muted">البريد الإلكتروني</label>
            <input class="w-full bg-bg-base border-border-base rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-text-main" type="email" value="ahmad.m@university.edu"/>
          </div>
          <div class="space-y-2">
            <label class="text-sm font-semibold text-text-muted">رقم الهاتف</label>
            <input class="w-full text-right bg-bg-base border-border-base rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-text-main" dir="ltr" type="tel" value="+966 50 123 4567"/>
          </div>
          <div class="space-y-2">
            <label class="text-sm font-semibold text-text-muted">تخصص الطالب</label>
            <input class="w-full bg-bg-surface-hover border-border-base rounded-xl px-4 py-3 text-text-muted cursor-not-allowed outline-none" disabled type="text" value="هندسة البرمجيات"/>
          </div>
        </div>
      </div>
    </section>

    <!-- Language -->
    <section class="bg-bg-surface rounded-2xl border border-border-base shadow-sm overflow-hidden transition-colors duration-300">
      <div class="p-6 border-b border-border-base flex items-center justify-between">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-primary">language</span>
          <h3 class="text-lg font-bold text-text-main">اللغة</h3>
        </div>
        <span class="material-symbols-outlined text-primary">grid_view</span>
      </div>
      <div class="p-8">
        <div class="flex items-center justify-between p-4 bg-bg-base rounded-xl">
          <div class="flex gap-4 items-center">
            <div>
              <p class="font-bold text-lg text-text-main">لغة النظام</p>
              <p class="text-sm text-text-muted">اختر اللغة المفضلة لواجهة المستخدم</p>
            </div>
            <span class="material-symbols-outlined text-text-muted">translate</span>
          </div>
          <div class="flex bg-bg-surface p-1 rounded-lg border border-border-base shadow-sm">
            <button 
              @click="changeLang('en')"
              :class="currentLang === 'en' ? 'bg-primary text-white font-bold shadow-sm' : 'text-text-muted font-medium hover:bg-bg-base'"
              class="px-6 py-2 rounded-md text-sm transition-colors cursor-pointer"
            >
              English
            </button>
            <button 
              @click="changeLang('ar')"
              :class="currentLang === 'ar' ? 'bg-primary text-white font-bold shadow-sm' : 'text-text-muted font-medium hover:bg-bg-base'"
              class="px-6 py-2 rounded-md text-sm transition-colors cursor-pointer"
            >
              العربية
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Change Password -->
    <section class="bg-bg-surface rounded-2xl border border-border-base shadow-sm overflow-hidden transition-colors duration-300">
      <div class="p-6 border-b border-border-base flex items-center gap-3">
        <span class="material-symbols-outlined text-primary">lock</span>
        <h3 class="text-lg font-bold text-text-main">تغيير كلمة المرور</h3>
      </div>
      <div class="p-8 space-y-6">
        <div class="space-y-2">
          <label class="text-sm font-semibold text-text-muted">كلمة المرور الحالية</label>
          <input v-model="passwordForm.current" class="w-full bg-bg-base border-border-base rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-text-main" placeholder="••••••••" type="password"/>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-2">
            <label class="text-sm font-semibold text-text-muted">كلمة المرور الجديدة</label>
            <input v-model="passwordForm.new" class="w-full bg-bg-base border-border-base rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-text-main" placeholder="••••••••" type="password"/>
          </div>
          <div class="space-y-2">
            <label class="text-sm font-semibold text-text-muted">تأكيد كلمة المرور</label>
            <input v-model="passwordForm.confirm" class="w-full bg-bg-base border-border-base rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-text-main" placeholder="••••••••" type="password"/>
          </div>
        </div>
      </div>
    </section>

    <!-- Appearance -->
    <section class="bg-bg-surface rounded-2xl border border-border-base shadow-sm overflow-hidden transition-colors duration-300">
      <div class="p-6 border-b border-border-base flex items-center gap-3">
        <span class="material-symbols-outlined text-primary">palette</span>
        <h3 class="text-lg font-bold text-text-main">المظهر</h3>
      </div>
      <div class="p-8">
        <div class="flex items-center justify-between p-4 bg-bg-base rounded-xl">
          <div class="flex gap-4 items-center">
            <span class="material-symbols-outlined text-text-muted">dark_mode</span>
            <div>
              <p class="font-bold text-text-main">وضع المظهر</p>
              <p class="text-sm text-text-muted">اختر المظهر الذي يناسبك</p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <button 
              @click="setTheme('light')"
              :class="currentTheme === 'light' ? 'border-primary bg-primary/5 text-primary font-bold' : 'border-transparent bg-bg-surface text-text-muted hover:border-border-base'"
              class="flex items-center justify-center gap-2 px-6 py-2 rounded-lg border-2 transition-all cursor-pointer"
            >
              <span class="material-symbols-outlined text-sm">light_mode</span> فاتح
            </button>
            <button 
              @click="setTheme('dark')"
              :class="currentTheme === 'dark' ? 'border-primary bg-primary/5 text-primary font-bold' : 'border-transparent bg-bg-surface text-text-muted hover:border-border-base'"
              class="flex items-center justify-center gap-2 px-6 py-2 rounded-lg border-2 transition-all cursor-pointer"
            >
              <span class="material-symbols-outlined text-sm">dark_mode</span> داكن
            </button>
          </div>
        </div>
      </div>
    </section>

    <div class="flex justify-end gap-4 pt-4">
      <button class="px-8 py-3 rounded-xl border border-border-base font-bold hover:bg-bg-surface-hover transition-all text-text-main cursor-pointer">
        إلغاء
      </button>
      <button @click="saveChanges" :disabled="isSaving" class="bg-primary text-white px-12 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2">
        <span v-if="isSaving" class="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
        <span v-else>حفظ كافة التغييرات</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';

const profileImage = ref('https://lh3.googleusercontent.com/aida-public/AB6AXuBFAjg5ge9L7hJ-oXM4f_kK_ir8YtK3S9gYM9d31g_rTTHwq10JkxkIehAlGTfQ4FHdbdkyxRAJpNLuJdNFXXCIjIECSXYmWFI6gwZmuOh4D9wmEDQp9NtuG7ai8JYy6MZUQBRk7i04ic9EJcI7WstDi8cWD3CnBBdEtf1FxP0SEY5dtizWnsGQFwZCLkMudUVmuYs7wvYSsYq1mXVzdCzfRaIMTP8H_uVv0Bj0oWSN5Sa9H8mnQn2z31TTbcWE-0r5dAzox_H_rCoz');
const fileInput = ref(null);
const emailNotifications = ref(true);
const currentTheme = ref('light');
const currentLang = ref('ar');
const isSaving = ref(false);
const isUploading = ref(false);

const passwordForm = reactive({
    current: '',
    new: '',
    confirm: ''
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

const triggerFileUpload = () => {
  fileInput.value.click();
};

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    isUploading.value = true;
    // Simulate upload delay
    setTimeout(() => {
        const reader = new FileReader();
        reader.onload = (e) => {
          profileImage.value = e.target.result;
          isUploading.value = false;
          showToast('تم التحديث', 'تم تحديث الصورة الشخصية بنجاح');
        };
        reader.readAsDataURL(file);
    }, 1500);
  }
};

const changeLang = (lang) => {
    if (currentLang.value !== lang) {
        currentLang.value = lang;
        showToast('تم تغيير اللغة', `تم تغيير لغة النظام إلى ${lang === 'ar' ? 'العربية' : 'الإنجليزية'}`);
    }
}

const setTheme = (theme) => {
  currentTheme.value = theme;
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

const saveChanges = () => {
  isSaving.value = true;
  setTimeout(() => {
      isSaving.value = false;
      showToast('تم الحفظ', 'تم حفظ التعديلات بنجاح');
      
      // Clear password fields if used
      if (passwordForm.current || passwordForm.new) {
          passwordForm.current = '';
          passwordForm.new = '';
          passwordForm.confirm = '';
      }
  }, 1500);
};

onMounted(() => {
  // Check system preference or saved preference
  if (document.documentElement.classList.contains('dark')) {
    currentTheme.value = 'dark';
  } else {
    currentTheme.value = 'light';
  }
});
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

.toggle-checkbox:checked + .toggle-label {
    background-color: var(--color-primary);
}
.toggle-checkbox:checked + .toggle-label:after {
    transform: translateX(-1.25rem);
}
</style>
