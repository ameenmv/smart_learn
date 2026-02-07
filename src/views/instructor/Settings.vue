<template>
  <div class="flex flex-col h-full bg-bg-base text-text-main font-sans transition-colors duration-300 relative">
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

    <header class="sticky top-0 z-50 w-full bg-bg-surface border-b border-border-base px-4 md:px-10 py-3 transition-colors duration-300 shrink-0">
        <div class="max-w-[1440px] mx-auto flex items-center justify-between whitespace-nowrap">
            <div class="flex items-center gap-8">
                <!-- Mobile Logo (visible only on small screens if side bar is hidden) -->
                  <div class="md:hidden flex items-center gap-3">
                    <div class="size-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-sm">
                        <span class="material-symbols-outlined text-2xl">school</span>
                    </div>
                    <h2 class="text-text-main text-xl font-black leading-tight tracking-tight font-display">Smart Learn</h2>
                </div>

                <nav class="hidden md:flex items-center gap-8">
                    <router-link to="/instructor/dashboard" class="text-text-main text-sm font-medium hover:text-primary transition-colors">الرئيسية</router-link>
                    <router-link to="/instructor/courses" class="text-text-muted text-sm font-medium hover:text-primary transition-colors">المقررات</router-link>
                </nav>
            </div>
              <div class="flex items-center gap-4">
                <div class="flex gap-2">
                    <button class="flex items-center justify-center rounded-lg size-10 bg-bg-base text-text-main hover:bg-bg-base-hover transition-colors">
                        <span class="material-symbols-outlined">notifications</span>
                    </button>
                    <button class="flex items-center justify-center rounded-lg size-10 bg-bg-base text-text-main hover:bg-bg-base-hover transition-colors">
                        <span class="material-symbols-outlined">account_circle</span>
                    </button>
                </div>
            </div>
        </div>
    </header>

    <div class="max-w-[1440px] mx-auto w-full p-4 md:p-10 flex flex-col gap-6 flex-1 overflow-y-auto">
        <div class="flex flex-col gap-2">
            <nav class="flex items-center gap-2 text-sm text-text-muted mb-2">
                <router-link to="/instructor/dashboard" class="hover:text-primary">الإعدادات</router-link>
                <span class="material-symbols-outlined text-sm">chevron_left</span>
                <span class="text-text-main font-medium">إعدادات الحساب</span>
            </nav>
            <div class="flex flex-wrap justify-between items-end gap-4">
                <div class="flex flex-col gap-1">
                    <h2 class="text-3xl font-black text-text-main tracking-tight">إعدادات الحساب</h2>
                    <p class="text-text-muted">قم بتحديث معلوماتك الشخصية وتفضيلات الأمان</p>
                </div>
                <div class="flex gap-3">
                    <button @click="discardChanges" class="px-6 py-2.5 bg-bg-base text-text-main font-bold rounded-lg text-sm transition-all hover:bg-bg-base-hover cursor-pointer border border-transparent hover:border-border-base">تجاهل التغييرات</button>
                    <button @click="saveChanges" :disabled="isSaving" class="px-6 py-2.5 bg-primary text-white font-bold rounded-lg text-sm shadow-lg shadow-primary/25 transition-all hover:brightness-110 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2">
                        <span v-if="isSaving" class="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        <span>{{ isSaving ? 'جاري الحفظ...' : 'حفظ التغييرات' }}</span>
                    </button>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div class="xl:col-span-2 flex flex-col gap-6">
                <section class="bg-bg-surface rounded-xl shadow-sm border border-border-base overflow-hidden transition-colors">
                    <div class="p-6 border-b border-border-base">
                        <h3 class="text-lg font-bold text-text-main">تفضيلات اللغة والوصول</h3>
                    </div>
                    <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="flex flex-col gap-4">
                            <div class="flex flex-col gap-1">
                                <label class="text-sm font-bold text-text-main">لغة المنصة</label>
                                <p class="text-xs text-text-muted">اختر اللغة المفضلة لعرض واجهة النظام</p>
                            </div>
                            <div class="inline-flex p-1 bg-bg-base rounded-lg w-fit">
                                <button 
                                    @click="changeLang('ar')" 
                                    :class="currentLang === 'ar' ? 'bg-bg-surface text-primary shadow-sm' : 'text-text-muted hover:text-primary'" 
                                    class="px-8 py-2 text-sm font-bold rounded-md transition-all cursor-pointer">
                                    العربية
                                </button>
                                <button 
                                    @click="changeLang('en')" 
                                    :class="currentLang === 'en' ? 'bg-bg-surface text-primary shadow-sm' : 'text-text-muted hover:text-primary'" 
                                    class="px-8 py-2 text-sm font-bold rounded-md transition-all cursor-pointer">
                                    English
                                </button>
                            </div>
                        </div>
                        
                        <div class="flex flex-col gap-4">
                            <div class="flex flex-col gap-1">
                                <label class="text-sm font-bold text-text-main">الوضع الليلي</label>
                                <p class="text-xs text-text-muted">تغيير مظهر المنصة بين الفاتح والداكن</p>
                            </div>
                            <div class="flex items-center gap-3">
                                <span class="material-symbols-outlined text-text-muted text-xl">light_mode</span>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input class="sr-only peer" type="checkbox" v-model="isDarkMode" @change="toggleDarkMode"/>
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[-100%] rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary transition-colors"></div>
                                </label>
                                <span class="material-symbols-outlined text-text-muted text-xl">dark_mode</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="xl:col-span-1">
                <section class="bg-bg-surface rounded-xl shadow-sm border border-border-base p-8 flex flex-col items-center justify-center text-center transition-colors">
                    <div class="relative group cursor-pointer mb-6" @click="triggerFileUpload">
                        <div class="size-40 rounded-full border-4 border-primary/10 overflow-hidden bg-bg-base relative">
                            <div class="w-full h-full bg-center bg-no-repeat bg-cover transition-all duration-300" :style="{ backgroundImage: 'url(' + profileImage + ')' }"></div>
                             <Transition name="fade">
                                <div v-if="isUploading" class="absolute inset-0 bg-black/50 flex items-center justify-center z-10 backdrop-blur-sm">
                                    <span class="size-10 border-4 border-white/30 border-t-white rounded-full animate-spin"></span>
                                </div>
                            </Transition>
                        </div>
                        <div class="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                            <span class="material-symbols-outlined text-white text-3xl">photo_camera</span>
                        </div>
                        <button class="absolute bottom-1 right-1 size-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-900 cursor-pointer hover:bg-primary-hover transition-colors">
                            <span class="material-symbols-outlined text-xl">edit</span>
                        </button>
                    </div>
                    <input type="file" ref="fileInput" class="hidden" @change="handleFileChange" accept="image/*" />
                    
                    <div class="mb-6">
                        <h4 class="text-text-main font-bold">الصورة الشخصية</h4>
                        <p class="text-xs text-text-muted mt-1">يُنصح بصورة مربعة بحجم 500x500 بكسل</p>
                    </div>
                    <button @click="triggerFileUpload" class="w-full flex items-center justify-center gap-2 px-6 py-2.5 border-2 border-primary/20 text-primary font-bold rounded-lg text-sm hover:bg-primary/5 transition-colors cursor-pointer">
                        <span class="material-symbols-outlined text-lg">upload</span>
                        تغيير الصورة الشخصية
                    </button>
                </section>
            </div>
        </div>

        <section class="bg-bg-surface rounded-xl shadow-sm border border-border-base overflow-hidden transition-colors">
            <div class="p-6 border-b border-border-base">
                <div class="flex items-center gap-2">
                    <span class="material-symbols-outlined text-primary">lock</span>
                    <h3 class="text-lg font-bold text-text-main">تغيير كلمة المرور</h3>
                </div>
            </div>
            <div class="p-6">
                <form class="grid grid-cols-1 md:grid-cols-3 gap-6" @submit.prevent>
                    <div class="flex flex-col gap-2">
                        <label class="text-sm font-bold text-text-main">كلمة المرور الحالية</label>
                        <div class="relative">
                            <input v-model="passwords.current" class="w-full px-4 py-2.5 rounded-lg border border-border-base bg-transparent focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-text-main" placeholder="••••••••" :type="showPassword.current ? 'text' : 'password'"/>
                            <button type="button" @click="showPassword.current = !showPassword.current" class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-xl cursor-pointer hover:text-primary transition-colors">
                                {{ showPassword.current ? 'visibility' : 'visibility_off' }}
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="text-sm font-bold text-text-main">كلمة المرور الجديدة</label>
                        <div class="relative">
                            <input v-model="passwords.new" class="w-full px-4 py-2.5 rounded-lg border border-border-base bg-transparent focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-text-main" placeholder="أدخل كلمة مرور قوية" :type="showPassword.new ? 'text' : 'password'"/>
                            <button type="button" @click="showPassword.new = !showPassword.new" class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-xl cursor-pointer hover:text-primary transition-colors">
                                {{ showPassword.new ? 'visibility' : 'visibility_off' }}
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="text-sm font-bold text-text-main">تأكيد كلمة المرور</label>
                        <div class="relative">
                            <input v-model="passwords.confirm" class="w-full px-4 py-2.5 rounded-lg border border-border-base bg-transparent focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-text-main" placeholder="أعد إدخال كلمة المرور" :type="showPassword.confirm ? 'text' : 'password'"/>
                            <button type="button" @click="showPassword.confirm = !showPassword.confirm" class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-xl cursor-pointer hover:text-primary transition-colors">
                                {{ showPassword.confirm ? 'visibility' : 'visibility_off' }}
                            </button>
                        </div>
                    </div>
                </form>

                 <div class="flex justify-end mt-6 border-t border-border-base pt-6">
                         <button type="submit" @click="updatePassword" :disabled="isUpdatingPassword || !isPasswordValid" class="px-6 py-2 bg-primary text-white font-bold rounded-lg text-sm shadow-md transition-all hover:brightness-110 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2">
                            <span v-if="isUpdatingPassword" class="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            <span>{{ isUpdatingPassword ? 'جاري التحديث...' : 'تحديث كلمة المرور' }}</span>
                        </button>
                    </div>

                <div class="mt-8 p-4 bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/10 flex gap-3">
                    <span class="material-symbols-outlined text-primary">info</span>
                    <div class="text-xs text-text-muted leading-relaxed">
                        <p class="font-bold text-primary mb-1">متطلبات كلمة المرور:</p>
                        <ul class="list-disc pr-4 flex flex-col gap-1">
                            <li>يجب أن تحتوي على 8 أحرف على الأقل.</li>
                            <li>يجب أن تتضمن مزيجاً من الأحرف الكبيرة والصغيرة والأرقام.</li>
                            <li>يفضل استخدام رموز خاصة لزيادة الأمان.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-bg-surface rounded-xl shadow-sm border border-border-base p-6 flex items-center justify-between transition-colors">
            <div class="flex items-center gap-4">
                <div class="size-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                    <span class="material-symbols-outlined text-2xl">verified_user</span>
                </div>
                <div class="flex flex-col">
                    <h4 class="text-sm font-bold text-text-main">حالة حساب المحاضر</h4>
                    <p class="text-xs text-text-muted">حسابك مفعل ومرتبط بالبريد الأكاديمي الرسمي</p>
                </div>
            </div>
            <div class="flex gap-2">
                <span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-full">نشط - معتمد</span>
            </div>
        </section>
        <div class="h-20"></div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from 'vue';

const fileInput = ref(null);
const profileImage = ref('https://lh3.googleusercontent.com/aida-public/AB6AXuDp3j4DSTWIuV2PAz-OjefboYFo8iyLtMNTR4Oc8PaaRetBj4TKBUMXoO7GjdLCCr41utmq_-pSvmWQtMP86oQ1gfOfZR-rbKwq-k60US3s-uPOgBa3CbsV154HznB3sCY2UogWEALBo9YSG_yZEnpWTMfHNy95Rk571KtiShGNkEHcTPKOyXiOh58bpESOqFXUTrtvk1MQVWlNRi5SkBYVrH_UV4R7YUSbHHUj4oT9TTatixHWKMSRULvY4zsc6WYpnajyFdxlY1AX');
const isDarkMode = ref(false);
const currentLang = ref('ar');
const isSaving = ref(false);
const isUploading = ref(false);
const isUpdatingPassword = ref(false);

const passwords = reactive({
    current: '',
    new: '',
    confirm: ''
});

const showPassword = reactive({
    current: false,
    new: false,
    confirm: false
});

const toast = reactive({
    show: false,
    title: '',
    message: '',
    type: 'success'
});

const isPasswordValid = computed(() => {
    return passwords.current && passwords.new && passwords.confirm && passwords.new === passwords.confirm && passwords.new.length >= 8;
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

const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        isUploading.value = true;
        // Simulate upload
        setTimeout(() => {
            const reader = new FileReader();
            reader.onload = (e) => {
                profileImage.value = e.target.result;
                isUploading.value = false;
                showToast('تم تحديث الصورة', 'تم تغيير الصورة الشخصية بنجاح');
            };
            reader.readAsDataURL(file);
        }, 1500);
    }
};

const toggleDarkMode = () => {
    if (isDarkMode.value) {
        document.documentElement.classList.add('dark');
        showToast('الوضع الليلي', 'تم تفعيل الوضع الليلي');
    } else {
        document.documentElement.classList.remove('dark');
        showToast('الوضع النهاري', 'تم تفعيل الوضع النهاري');
    }
};

const changeLang = (lang) => {
    currentLang.value = lang;
    const msg = lang === 'ar' ? 'تم تغيير اللغة إلى العربية' : 'Language changed to English';
    showToast(lang === 'ar' ? 'اللغة' : 'Language', msg);
};

const saveChanges = () => {
    isSaving.value = true;
    // Simulate API call
    setTimeout(() => {
        isSaving.value = false;
        showToast('تم الحفظ', 'تم حفظ جميع التغييرات بنجاح');
    }, 1500);
};

const discardChanges = () => {
    showToast('تم التجاهل', 'تم إلغاء التغييرات غير المحفوظة', 'error');
};

const updatePassword = () => {
    if (!isPasswordValid.value) return;
    
    isUpdatingPassword.value = true;
    // Simulate API call
    setTimeout(() => {
        isUpdatingPassword.value = false;
        showToast('تم التحديث', 'تم تحديث كلمة المرور بنجاح');
        
        // Clear passwords
        passwords.current = '';
        passwords.new = '';
        passwords.confirm = '';
    }, 2000);
};

onMounted(() => {
    isDarkMode.value = document.documentElement.classList.contains('dark');
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

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
