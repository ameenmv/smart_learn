<template>
<div class="flex min-h-screen w-full overflow-hidden bg-bg-base transition-colors duration-300">
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

<!-- Left Side (Illustration) -->
<div class="relative hidden w-full items-center justify-center lg:flex lg:w-1/2 illustration-bg" data-alt="students collaborating in a modern university library setting">
    <div class="z-10 px-12 text-center text-white">
        <div class="mb-10 flex flex-col items-center">
            <div class="flex items-center gap-4 flex-row-reverse">
                <div class="rounded-2xl bg-white/20 p-3 backdrop-blur-md">
                    <span class="material-symbols-outlined text-4xl text-white" style="font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48">school</span>
                </div>
                <h1 class="brand-text text-5xl font-bold tracking-tight text-white">Smart Learn</h1>
            </div>
        </div>
        <h2 class="mb-6 text-3xl font-bold leading-tight lg:text-4xl">منصة تعليمية متكاملة</h2>
        <p class="mx-auto max-w-md text-lg font-medium leading-relaxed opacity-90">
            تمكين الطلاب والأكاديميين من الوصول إلى تجربة تعليمية حديثة ومبتكرة عبر أحدث تقنيات التعليم الإلكتروني.
        </p>
        <div class="mt-12 flex justify-center gap-4">
            <div class="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <span class="material-symbols-outlined text-sm">verified_user</span>
                <span class="text-sm">نظام آمن</span>
            </div>
            <div class="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <span class="material-symbols-outlined text-sm">school</span>
                <span class="text-sm">معتمد أكاديمياً</span>
            </div>
        </div>
    </div>
    <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 32px 32px;"></div>
</div>

<!-- Right Side (Form) -->
<div class="w-full lg:w-1/2 flex flex-col bg-bg-surface shadow-2xl lg:shadow-none">
    <AuthNavbar />
    <main class="flex-1 flex flex-col justify-center px-8 lg:px-24 py-12">
        <div class="w-full max-w-md mx-auto">
            <div class="mb-10 text-right">
                <h2 class="text-3xl font-bold text-text-main mb-3">تسجيل الدخول</h2>
                <p class="text-text-muted">مرحباً بك في Smart Learn! الرجاء إدخال بيانات حسابك الجامعي</p>
            </div>
            <div class="mb-8">
                <p class="text-sm font-bold text-text-main mb-4 text-right">أنا أسجل دخولي كـ:</p>
                <div class="flex gap-4 p-1 bg-bg-base rounded-xl border border-border-base">
                    <label class="flex-1 cursor-pointer group">
                        <input v-model="form.role" class="hidden peer" name="role" type="radio" value="student"/>
                        <div class="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-transparent text-text-muted peer-checked:bg-bg-surface peer-checked:text-primary peer-checked:shadow-sm transition-all duration-200">
                            <span class="material-symbols-outlined text-xl">person</span>
                            <span class="font-bold">طالب</span>
                        </div>
                    </label>
                    <label class="flex-1 cursor-pointer group">
                        <input v-model="form.role" class="hidden peer" name="role" type="radio" value="instructor"/>
                        <div class="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-transparent text-text-muted peer-checked:bg-bg-surface peer-checked:text-primary peer-checked:shadow-sm transition-all duration-200">
                            <span class="material-symbols-outlined text-xl">school</span>
                            <span class="font-bold">محاضر</span>
                        </div>
                    </label>
                </div>
            </div>
            <form class="space-y-6" @submit.prevent="handleLogin">
                <div>
                    <label class="block text-sm font-bold text-text-main mb-2 text-right" for="username">اسم المستخدم أو البريد الجامعي</label>
                    <div class="relative">
                        <input v-model="form.username" class="w-full h-12 px-12 text-right border-border-base bg-bg-surface text-text-main rounded-lg focus:ring-primary focus:border-primary transition-all outline-none border" id="username" placeholder="example@university.edu" type="text"/>
                        <div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-text-muted">
                            <span class="material-symbols-outlined">alternate_email</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex justify-between mb-2">
                        <a class="text-xs font-semibold text-primary hover:underline" href="#">نسيت كلمة المرور؟</a>
                        <label class="block text-sm font-bold text-text-main" for="password">كلمة المرور</label>
                    </div>
                    <div class="relative">
                        <input v-model="form.password" :type="showPassword ? 'text' : 'password'" class="w-full h-12 px-12 text-right border-border-base bg-bg-surface text-text-main rounded-lg focus:ring-primary focus:border-primary transition-all outline-none border" id="password" placeholder="••••••••"/>
                        <div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-text-muted">
                            <span class="material-symbols-outlined">lock</span>
                        </div>
                        <div class="absolute inset-y-0 left-0 flex items-center pl-4 cursor-pointer text-text-muted hover:text-primary" @click="showPassword = !showPassword">
                            <span class="material-symbols-outlined">{{ showPassword ? 'visibility_off' : 'visibility' }}</span>
                        </div>
                    </div>
                </div>
                <div class="flex items-center gap-2 text-right">
                    <input v-model="form.remember" class="w-4 h-4 text-primary border-border-base rounded focus:ring-primary bg-bg-surface" id="remember" type="checkbox"/>
                    <label class="text-sm text-text-muted" for="remember">تذكرني على هذا الجهاز</label>
                </div>
                <button :disabled="isLoading" class="w-full h-12 bg-primary hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed" type="submit">
                    <span v-if="isLoading" class="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    <span v-else>تسجيل الدخول</span>
                    <span v-if="!isLoading" class="material-symbols-outlined text-xl">login</span>
                </button>
            </form>
            <div class="mt-10 text-center">
                <p class="text-sm text-text-muted">
                    ليس لديك حساب؟ 
                    <RouterLink class="text-primary font-bold hover:underline" to="/register">انشئ حسابك الأن</RouterLink>
                </p>
                <p class="text-sm text-text-muted mt-2">
                    تواجه مشكلة في تسجيل الدخول؟ 
                    <a class="text-primary font-bold hover:underline" href="#">تواصل مع الدعم الفني</a>
                </p>
            </div>
        </div>
    </main>
    <AuthFooter />
</div>
</div>
</template>

<script setup>
import AuthFooter from '@/components/common/AuthFooter.vue'
import AuthNavbar from '@/components/common/AuthNavbar.vue'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const showPassword = ref(false)
const isLoading = ref(false)

const form = reactive({
role: 'student',
username: '',
password: '',
remember: false
})

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

const handleLogin = () => {
    isLoading.value = true;
    setTimeout(() => {
        isLoading.value = false;
        showToast('تسجيل الدخول', 'تم تسجيل الدخول بنجاح، جاري تحويلك...');
        
        setTimeout(() => {
            if (form.role === 'instructor') {
                router.push('/instructor/dashboard')
            } else {
                router.push('/student/dashboard')
            }
        }, 1500);
    }, 1500);
}
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
