<template>
    <div class="flex min-h-screen w-full overflow-hidden bg-bg-base transition-colors duration-300">
        <!-- Toast Notification -->
        <Transition name="toast">
            <div v-if="toast.show"
                class="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-4 rounded-xl shadow-xl border backdrop-blur-md transition-all duration-300 min-w-[320px] cursor-pointer hover:scale-[1.02]"
                :class="toast.type === 'success' ? 'bg-emerald-50/90 border-emerald-200 dark:bg-emerald-900/90 dark:border-emerald-800' : 'bg-red-50/90 border-red-200 dark:bg-red-900/90 dark:border-red-800'"
                @click="toast.show = false">
                <div class="p-2 rounded-full"
                    :class="toast.type === 'success' ? 'bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-200' : 'bg-red-100 dark:bg-red-800 text-red-600 dark:text-red-200'">
                    <span class="material-symbols-outlined text-xl">
                        {{ toast.type === 'success' ? 'check_circle' : 'error' }}
                    </span>
                </div>
                <div class="flex flex-col flex-1">
                    <h4 class="font-bold text-sm"
                        :class="toast.type === 'success' ? 'text-emerald-900 dark:text-emerald-100' : 'text-red-900 dark:text-red-100'">
                        {{ toast.title }}</h4>
                    <p class="text-xs opacity-90"
                        :class="toast.type === 'success' ? 'text-emerald-800 dark:text-emerald-200' : 'text-red-800 dark:text-red-200'">
                        {{ toast.message }}</p>
                </div>
            </div>
        </Transition>

        <!-- Left Side (Illustration) -->
        <div class="relative hidden w-full items-center justify-center lg:flex lg:w-1/2 illustration-bg"
            data-alt="password reset illustration">
            <div class="z-10 px-12 text-center text-white">
                <div class="mb-10 flex flex-col items-center">
                    <div class="flex items-center gap-4 flex-row-reverse">
                        <div class="rounded-2xl bg-white/20 p-3 backdrop-blur-md">
                            <span class="material-symbols-outlined text-4xl text-white"
                                style="font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48">lock_reset</span>
                        </div>
                        <h1 class="brand-text text-5xl font-bold tracking-tight text-white">Smart Learn</h1>
                    </div>
                </div>
                <h2 class="mb-6 text-3xl font-bold leading-tight lg:text-4xl">استعادة كلمة المرور</h2>
                <p class="mx-auto max-w-md text-lg font-medium leading-relaxed opacity-90">
                    لا تقلق! يمكنك استعادة الوصول إلى حسابك بسهولة عبر خطوات بسيطة وآمنة.
                </p>
            </div>
            <div class="absolute inset-0 opacity-10"
                style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 32px 32px;">
            </div>
        </div>

        <!-- Right Side (Form) -->
        <div class="w-full lg:w-1/2 flex flex-col bg-bg-surface shadow-2xl lg:shadow-none">
            <AuthNavbar />
            <main class="flex-1 flex flex-col justify-center px-8 lg:px-24 py-12">
                <div class="w-full max-w-md mx-auto">
                    <!-- Step Indicator -->
                    <div class="flex items-center justify-center gap-3 mb-10">
                        <div v-for="s in 3" :key="s"
                            :class="[
                                'size-3 rounded-full transition-all duration-300',
                                step >= s ? 'bg-primary scale-110' : 'bg-border-base'
                            ]">
                        </div>
                    </div>

                    <!-- Step 1: Enter Email -->
                    <div v-if="step === 1">
                        <div class="mb-10 text-right">
                            <h2 class="text-3xl font-bold text-text-main mb-3">نسيت كلمة المرور؟</h2>
                            <p class="text-text-muted">أدخل بريدك الإلكتروني وسنرسل لك رمز التحقق</p>
                        </div>
                        <form class="space-y-6" @submit.prevent="sendOtp">
                            <div>
                                <label class="block text-sm font-bold text-text-main mb-2 text-right">البريد الإلكتروني</label>
                                <div class="relative">
                                    <input v-model="email"
                                        class="w-full h-12 px-12 text-right border-border-base bg-bg-surface text-text-main rounded-lg focus:ring-primary focus:border-primary transition-all outline-none border"
                                        placeholder="example@university.edu" type="email" required />
                                    <div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-text-muted">
                                        <span class="material-symbols-outlined">alternate_email</span>
                                    </div>
                                </div>
                            </div>
                            <button :disabled="isLoading"
                                class="w-full h-12 bg-primary hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                                type="submit">
                                <span v-if="isLoading" class="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                <span v-else>إرسال رمز التحقق</span>
                            </button>
                        </form>
                    </div>

                    <!-- Step 2: Enter OTP -->
                    <div v-else-if="step === 2">
                        <div class="mb-10 text-right">
                            <h2 class="text-3xl font-bold text-text-main mb-3">أدخل رمز التحقق</h2>
                            <p class="text-text-muted">تم إرسال رمز إلى <span class="text-primary font-bold">{{ email }}</span></p>
                        </div>
                        <form class="space-y-6" @submit.prevent="verifyOtp">
                            <div>
                                <label class="block text-sm font-bold text-text-main mb-2 text-right">رمز التحقق (OTP)</label>
                                <input v-model="otp"
                                    class="w-full h-14 text-center text-2xl tracking-[0.8em] font-bold border-border-base bg-bg-surface text-text-main rounded-lg focus:ring-primary focus:border-primary transition-all outline-none border"
                                    placeholder="000000" maxlength="6" dir="ltr" />
                            </div>
                            <button :disabled="isLoading || otp.length < 4"
                                class="w-full h-12 bg-primary hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                                type="submit">
                                <span v-if="isLoading" class="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                <span v-else>تحقق من الرمز</span>
                            </button>
                        </form>
                    </div>

                    <!-- Step 3: Reset Password -->
                    <div v-else-if="step === 3">
                        <div class="mb-10 text-right">
                            <h2 class="text-3xl font-bold text-text-main mb-3">كلمة مرور جديدة</h2>
                            <p class="text-text-muted">أدخل كلمة المرور الجديدة لحسابك</p>
                        </div>
                        <form class="space-y-6" @submit.prevent="resetPassword">
                            <div>
                                <label class="block text-sm font-bold text-text-main mb-2 text-right">كلمة المرور الجديدة</label>
                                <input v-model="password"
                                    class="w-full h-12 px-4 text-right border-border-base bg-bg-surface text-text-main rounded-lg focus:ring-primary focus:border-primary transition-all outline-none border"
                                    placeholder="••••••••" type="password" required />
                            </div>
                            <div>
                                <label class="block text-sm font-bold text-text-main mb-2 text-right">تأكيد كلمة المرور</label>
                                <input v-model="passwordConfirmation"
                                    class="w-full h-12 px-4 text-right border-border-base bg-bg-surface text-text-main rounded-lg focus:ring-primary focus:border-primary transition-all outline-none border"
                                    placeholder="••••••••" type="password" required />
                            </div>
                            <button :disabled="isLoading || !password || password !== passwordConfirmation"
                                class="w-full h-12 bg-primary hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                                type="submit">
                                <span v-if="isLoading" class="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                <span v-else>تعيين كلمة المرور</span>
                            </button>
                        </form>
                    </div>

                    <div class="mt-10 text-center">
                        <p class="text-sm text-text-muted">
                            تذكرت كلمة المرور؟
                            <RouterLink class="text-primary font-bold hover:underline" to="/login">تسجيل الدخول</RouterLink>
                        </p>
                    </div>
                </div>
            </main>
            <AuthFooter />
        </div>
    </div>
</template>

<script setup>
import { authApi } from '@/api/auth'
import AuthFooter from '@/components/common/AuthFooter.vue'
import AuthNavbar from '@/components/common/AuthNavbar.vue'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const step = ref(1)
const email = ref('')
const otp = ref('')
const password = ref('')
const passwordConfirmation = ref('')
const isLoading = ref(false)

const toast = reactive({
    show: false,
    title: '',
    message: '',
    type: 'success'
})

const showToast = (title, message, type = 'success') => {
    toast.title = title
    toast.message = message
    toast.type = type
    toast.show = true
    setTimeout(() => { toast.show = false }, 3000)
}

const sendOtp = async () => {
    if (!email.value.trim()) return
    isLoading.value = true
    try {
        await authApi.forgetPassword({ email: email.value.trim() })
        showToast('تم الإرسال', 'تم إرسال رمز التحقق إلى بريدك الإلكتروني')
        step.value = 2
    } catch (error) {
        console.error('[ForgotPassword] Send OTP failed:', error)
        const msg = error.response?.data?.message || 'فشل إرسال رمز التحقق. تحقق من البريد الإلكتروني.'
        showToast('خطأ', msg, 'error')
    } finally {
        isLoading.value = false
    }
}

const verifyOtp = async () => {
    if (!otp.value.trim()) return
    isLoading.value = true
    try {
        await authApi.verifyOtp({ email: email.value.trim(), otp: otp.value.trim() })
        showToast('تم التحقق', 'تم التحقق من الرمز بنجاح')
        step.value = 3
    } catch (error) {
        console.error('[ForgotPassword] Verify OTP failed:', error)
        const msg = error.response?.data?.message || 'الرمز غير صحيح. حاول مرة أخرى.'
        showToast('خطأ', msg, 'error')
    } finally {
        isLoading.value = false
    }
}

const resetPassword = async () => {
    if (password.value !== passwordConfirmation.value) {
        showToast('خطأ', 'كلمتا المرور غير متطابقتين', 'error')
        return
    }
    isLoading.value = true
    try {
        await authApi.resetPassword({
            email: email.value.trim(),
            password: password.value,
            password_confirmation: passwordConfirmation.value
        })
        showToast('تم التعيين', 'تم تعيين كلمة المرور بنجاح. سيتم تحويلك لتسجيل الدخول...')
        setTimeout(() => {
            router.replace('/login')
        }, 2000)
    } catch (error) {
        console.error('[ForgotPassword] Reset failed:', error)
        const msg = error.response?.data?.message || 'فشل تعيين كلمة المرور'
        showToast('خطأ', msg, 'error')
    } finally {
        isLoading.value = false
    }
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
