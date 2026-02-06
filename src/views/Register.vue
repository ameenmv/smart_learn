<template>
<div class="flex min-h-screen flex-col lg:flex-row bg-bg-base transition-colors duration-300">
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
        <h2 class="mb-6 text-3xl font-bold leading-tight lg:text-4xl">مستقبلك الأكاديمي يبدأ هنا</h2>
        <p class="mx-auto max-w-md text-lg font-medium leading-relaxed opacity-90">
            انضم إلى آلاف الطلاب والمحاضرين في بيئة تعليمية متطورة مصممة خصيصاً لمستقبل أكاديمي مشرق عبر منصة Smart Learn.
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
<div class="flex w-full flex-col bg-bg-surface lg:w-1/2">
    <header class="flex items-center justify-between px-6 py-6 lg:px-12 lg:py-8">
        <div class="flex items-center gap-3 lg:hidden">
            <div class="flex items-center gap-2 flex-row-reverse">
                <div class="rounded-lg bg-primary p-1.5">
                    <span class="material-symbols-outlined text-xl text-white" style="font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24">school</span>
                </div>
                <h2 class="brand-text text-xl font-bold text-text-main">Smart Learn</h2>
            </div>
        </div>
        <div class="flex items-center gap-4 mr-auto lg:mr-0">
            <span class="text-sm font-medium text-text-muted">العربية</span>
            <span class="material-symbols-outlined text-text-muted">language</span>
        </div>
    </header>
    <main class="flex flex-1 flex-col justify-center px-6 pb-12 lg:px-24">
        <div class="mx-auto w-full max-w-[480px]">
            <div class="mb-8 text-right">
                <h2 class="text-3xl font-black text-text-main lg:text-4xl">إنشاء حساب جديد</h2>
                <p class="mt-2 text-base text-text-muted">يرجى إدخال بياناتك للانضمام إلى Smart Learn</p>
            </div>
            <div class="mb-8">
                <p class="mb-3 text-sm font-semibold text-text-main">أنا أسجل كـ:</p>
                <div class="flex h-12 w-full items-center justify-center rounded-xl bg-bg-base p-1 border border-border-base">
                    <label class="flex h-full flex-1 cursor-pointer items-center justify-center rounded-lg transition-all duration-200 has-[:checked]:bg-bg-surface has-[:checked]:text-primary has-[:checked]:shadow-sm text-text-muted">
                        <span class="text-sm font-bold">طالب</span>
                        <input v-model="form.role" class="hidden" name="role" type="radio" value="student"/>
                    </label>
                    <label class="flex h-full flex-1 cursor-pointer items-center justify-center rounded-lg transition-all duration-200 has-[:checked]:bg-bg-surface has-[:checked]:text-primary has-[:checked]:shadow-sm text-text-muted">
                        <span class="text-sm font-bold">محاضر</span>
                        <input v-model="form.role" class="hidden" name="role" type="radio" value="instructor"/>
                    </label>
                </div>
            </div>
            
            <form class="space-y-5" @submit.prevent="handleRegister">
                <div class="space-y-2">
                    <label class="text-sm font-semibold text-text-main">الاسم الكامل</label>
                    <div class="relative">
                        <span class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-muted">person</span>
                        <input v-model="form.fullName" class="w-full rounded-xl border border-border-base bg-bg-surface py-3.5 pr-11 pl-4 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 text-text-main" placeholder="أدخل اسمك الثلاثي" type="text"/>
                    </div>
                </div>
                <div class="space-y-2">
                    <label class="text-sm font-semibold text-text-main">البريد الإلكتروني الجامعي</label>
                    <div class="relative">
                        <span class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-muted">mail</span>
                        <input v-model="form.email" class="w-full rounded-xl border border-border-base bg-bg-surface py-3.5 pr-11 pl-4 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 text-text-main" placeholder="example@university.edu" type="email"/>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div class="space-y-2">
                        <label class="text-sm font-semibold text-text-main">الرقم الجامعي</label>
                        <div class="relative">
                            <span class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-muted">badge</span>
                            <input v-model="form.studentId" class="w-full rounded-xl border border-border-base bg-bg-surface py-3.5 pr-11 pl-4 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 text-text-main" placeholder="ID-000000" type="text"/>
                        </div>
                    </div>
                    <div class="space-y-2">
                        <label class="text-sm font-semibold text-text-main">كلمة المرور</label>
                        <div class="relative">
                            <span class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-muted">lock</span>
                            <input v-model="form.password" :type="showPassword ? 'text' : 'password'" class="w-full rounded-xl border border-border-base bg-bg-surface py-3.5 pr-11 pl-12 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 text-text-main" placeholder="••••••••"/>
                            <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer text-text-muted hover:text-primary" @click="showPassword = !showPassword">{{ showPassword ? 'visibility_off' : 'visibility' }}</span>
                        </div>
                    </div>
                </div>
                <div class="flex items-center gap-2 py-2">
                    <input v-model="form.agreeTerms" class="h-4 w-4 rounded border-border-base text-primary focus:ring-primary bg-bg-surface" id="terms" type="checkbox"/>
                    <label class="text-xs text-text-muted" for="terms">
                        أوافق على <a class="text-primary hover:underline" href="#">شروط الخدمة</a> و <a class="text-primary hover:underline" href="#">سياسة الخصوصية</a>
                    </label>
                </div>
                <button class="w-full rounded-xl bg-primary py-4 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:shadow-primary/40 active:scale-[0.98] cursor-pointer" type="submit">
                    إنشاء حساب
                </button>
            </form>
            <div class="mt-8 text-center">
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    لديك حساب بالفعل؟
                    <RouterLink class="mr-1 font-bold text-primary hover:underline" to="/login">تسجيل الدخول</RouterLink>
                </p>
            </div>
        </div>
    </main>
    <footer class="px-6 py-8 text-center text-xs text-text-muted lg:px-12">
        © 2024 Smart Learn - المنصة التعليمية الموحدة. جميع الحقوق محفوظة.
    </footer>
</div>
</div>
</template>

<script setup>
import { reactive, ref } from 'vue'

import { useRouter } from 'vue-router'

const router = useRouter()
const showPassword = ref(false)
const form = reactive({
role: 'student',
fullName: '',
email: '',
studentId: '',
password: '',
agreeTerms: false
})

const handleRegister = () => {
console.log('Register attempt:', form)
router.push('/student/dashboard')
}
</script>
