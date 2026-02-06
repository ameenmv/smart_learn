<template>
<div class="flex min-h-screen w-full overflow-hidden bg-bg-base transition-colors duration-300">
<!-- Left Side (Illustration) -->
<div class="hidden lg:flex lg:w-1/2 bg-primary relative items-center justify-center p-12 overflow-hidden">
    <div class="absolute inset-0 opacity-10 pointer-events-none">
        <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="1"></path>
                </pattern>
            </defs>
            <rect fill="url(#grid)" height="100%" width="100%"></rect>
        </svg>
    </div>
    <div class="relative z-10 text-center text-white max-w-lg">
        <div class="mb-8 flex justify-center flex-col items-center gap-4">
            <div class="bg-blue-600 p-4 rounded-2xl shadow-lg border border-blue-400/30 flex items-center justify-center w-24 h-24">
                <span class="material-symbols-outlined text-5xl text-white logo-icon-fill">school</span>
            </div>
        </div>
        <h1 class="text-5xl font-bold mb-4 tracking-tight font-logo">Smart Learn</h1>
        <p class="text-xl text-blue-100 mb-8 leading-relaxed">
            منصة تعليمية متكاملة مصممة لتمكين الطلاب والأكاديميين من الوصول إلى تجربة تعليمية حديثة ومبتكرة.
        </p>
        <div class="w-full aspect-[4/3] bg-white/5 rounded-xl border border-white/20 overflow-hidden shadow-2xl">
            <div class="w-full h-full bg-center bg-no-repeat bg-cover" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDaIreEq1PGo8L8e8tvb2fZirf4Ef8giO6fnApWFbJSU7O6sGQIIGTqQCVyIs4cAXZY8O4SKoIqVr7EqQIn-S7cir-j8FxgPicKqQJpM-yikFlfSnw0YpdGwvh6xMhztA51AiVroISWkUY3E8-yvQ2a-FXfT6D52zso0cKkibP1UB7NW9blEtB1gqm9wJply62n5hp-DMWWE0I3dubLoAHnrl2TGRsQ-rlSRudRj9mJ4vKrJw1W5YjLiV2Wt5ylf18mVk7taJdAa7EI');"></div>
        </div>
    </div>
</div>

<!-- Right Side (Form) -->
<div class="w-full lg:w-1/2 flex flex-col bg-bg-surface shadow-2xl lg:shadow-none">
    <header class="flex items-center justify-between px-8 lg:px-12 py-6">
        <div class="flex items-center gap-3 flex-row-reverse"> 
            <div class="bg-primary flex items-center justify-center w-10 h-10 rounded-lg shadow-sm">
                <span class="material-symbols-outlined text-white text-2xl logo-icon-fill">school</span>
            </div>
            <RouterLink to="/" class="text-2xl font-bold text-text-main font-logo tracking-tight">Smart Learn</RouterLink>
        </div>
        <div class="flex items-center gap-6">
            <a class="text-sm font-medium text-text-muted hover:text-primary transition-colors" href="#">المساعدة</a>
            <a class="text-sm font-medium text-text-muted hover:text-primary transition-colors" href="#">اتصل بنا</a>
        </div>
    </header>
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
                            <span class="font-bold">دكتور</span>
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
                <button class="w-full h-12 bg-primary hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer" type="submit">
                    <span>تسجيل الدخول</span>
                    <span class="material-symbols-outlined text-xl">login</span>
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
    <footer class="px-8 lg:px-24 py-8 border-t border-border-base text-text-muted">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>© 2024 Smart Learn. جميع الحقوق محفوظة.</p>
            <div class="flex gap-4">
                <a class="hover:text-primary" href="#">سياسة الخصوصية</a>
                <a class="hover:text-primary" href="#">شروط الخدمة</a>
            </div>
        </div>
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
username: '',
password: '',
remember: false
})

const handleLogin = () => {
console.log('Login attempt:', form)
// Here you would implement your Zod validation and store call
alert('Login functionality to be implemented needs API.')
}
</script>

<style scoped>
/* Scoped styles specific to this page if needed, but most are global/tailwind */
</style>
