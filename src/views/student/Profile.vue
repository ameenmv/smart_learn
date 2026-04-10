<template>
  <div class="max-w-4xl mx-auto space-y-8 font-display pb-24">
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
        <button class="hover:bg-black/5 dark:hover:bg-white/5 rounded-full p-1 transition-colors">
          <span class="material-symbols-outlined text-lg opacity-60">close</span>
        </button>
      </div>
    </Transition>

    <header class="flex items-center justify-between">
      <h2 class="text-2xl font-bold text-text-main">الإعدادات الشخصية</h2>
      <div class="flex items-center gap-4">
        <button @click="saveChanges" :disabled="isSaving"
          class="bg-primary text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2">
          <span v-if="isSaving" class="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
          <span>{{ isSaving ? 'جاري الحفظ...' : 'حفظ التغييرات' }}</span>
        </button>
      </div>
    </header>

    <!-- Account Info -->
    <section
      class="bg-bg-surface rounded-2xl border border-border-base shadow-sm overflow-hidden transition-colors duration-300">
      <div class="p-6 border-b border-border-base flex items-center gap-3">
        <span class="material-symbols-outlined text-primary">person</span>
        <h3 class="text-lg font-bold text-text-main">معلومات الحساب</h3>
      </div>
      <div class="p-8">
        <div class="flex flex-col items-center mb-10">
          <div class="relative">
            <div
              class="w-32 h-32 rounded-full border-4 border-bg-surface shadow-xl overflow-hidden bg-bg-base relative">
              <img :src="profileImage" alt="Profile" class="w-full h-full object-cover transition-opacity duration-300"
                :class="{ 'opacity-50': isUploading }" />
              <div v-if="isUploading" class="absolute inset-0 flex items-center justify-center">
                <span class="size-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></span>
              </div>
            </div>
            <button @click="triggerFileUpload"
              class="absolute bottom-1 right-1 bg-primary text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center border-4 border-bg-surface cursor-pointer">
              <span class="material-symbols-outlined text-xl">photo_camera</span>
            </button>
            <input type="file" ref="fileInput" class="hidden" accept="image/*" @change="handleImageUpload" />
          </div>
          <p @click="triggerFileUpload"
            class="mt-4 text-sm font-medium text-text-muted cursor-pointer hover:text-primary transition-colors">انقر
            لتغيير الصورة الشخصية</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-2">
            <label class="text-sm font-semibold text-text-muted">الاسم الكامل</label>
            <input v-model="profileForm.name"
              class="w-full bg-bg-base border-border-base rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-text-main"
              type="text" placeholder="أدخل اسمك الكامل" />
          </div>
          <div class="space-y-2">
            <label class="text-sm font-semibold text-text-muted">البريد الإلكتروني</label>
            <input v-model="profileForm.email"
              class="w-full bg-bg-base border-border-base rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-text-main"
              type="email" placeholder="example@university.edu" />
          </div>
          <div class="space-y-2">
            <label class="text-sm font-semibold text-text-muted">رقم الهاتف</label>
            <input v-model="profileForm.phone"
              class="w-full text-right bg-bg-base border-border-base rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-text-main"
              dir="ltr" type="tel" placeholder="+966 50 123 4567" />
          </div>
          <div class="space-y-2">
            <label class="text-sm font-semibold text-text-muted">الرقم الجامعي</label>
            <input :value="profileForm.university_id"
              class="w-full bg-bg-surface-hover border-border-base rounded-xl px-4 py-3 text-text-muted cursor-not-allowed outline-none"
              disabled type="text" />
          </div>
        </div>
      </div>
    </section>

    <!-- Language -->
    <section
      class="bg-bg-surface rounded-2xl border border-border-base shadow-sm overflow-hidden transition-colors duration-300">
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
            <button @click="changeLang('en')"
              :class="currentLang === 'en' ? 'bg-primary text-white font-bold shadow-sm' : 'text-text-muted font-medium hover:bg-bg-base'"
              class="px-6 py-2 rounded-md text-sm transition-colors cursor-pointer">
              English
            </button>
            <button @click="changeLang('ar')"
              :class="currentLang === 'ar' ? 'bg-primary text-white font-bold shadow-sm' : 'text-text-muted font-medium hover:bg-bg-base'"
              class="px-6 py-2 rounded-md text-sm transition-colors cursor-pointer">
              العربية
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Change Password -->
    <section
      class="bg-bg-surface rounded-2xl border border-border-base shadow-sm overflow-hidden transition-colors duration-300">
      <div class="p-6 border-b border-border-base flex items-center gap-3">
        <span class="material-symbols-outlined text-primary">lock</span>
        <h3 class="text-lg font-bold text-text-main">تغيير كلمة المرور</h3>
      </div>
      <div class="p-8 space-y-6">
        <div class="space-y-2">
          <label class="text-sm font-semibold text-text-muted">كلمة المرور الحالية</label>
          <input v-model="passwordForm.current"
            class="w-full bg-bg-base border-border-base rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-text-main"
            placeholder="••••••••" type="password" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-2">
            <label class="text-sm font-semibold text-text-muted">كلمة المرور الجديدة</label>
            <input v-model="passwordForm.new"
              class="w-full bg-bg-base border-border-base rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-text-main"
              placeholder="••••••••" type="password" />
          </div>
          <div class="space-y-2">
            <label class="text-sm font-semibold text-text-muted">تأكيد كلمة المرور</label>
            <input v-model="passwordForm.confirm"
              class="w-full bg-bg-base border-border-base rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-text-main"
              placeholder="••••••••" type="password" />
          </div>
        </div>
      </div>
    </section>

    <!-- Appearance -->
    <section
      class="bg-bg-surface rounded-2xl border border-border-base shadow-sm overflow-hidden transition-colors duration-300">
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
            <button @click="setTheme('light')"
              :class="currentTheme === 'light' ? 'border-primary bg-primary/5 text-primary font-bold' : 'border-transparent bg-bg-surface text-text-muted hover:border-border-base'"
              class="flex items-center justify-center gap-2 px-6 py-2 rounded-lg border-2 transition-all cursor-pointer">
              <span class="material-symbols-outlined text-sm">light_mode</span> فاتح
            </button>
            <button @click="setTheme('dark')"
              :class="currentTheme === 'dark' ? 'border-primary bg-primary/5 text-primary font-bold' : 'border-transparent bg-bg-surface text-text-muted hover:border-border-base'"
              class="flex items-center justify-center gap-2 px-6 py-2 rounded-lg border-2 transition-all cursor-pointer">
              <span class="material-symbols-outlined text-sm">dark_mode</span> داكن
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Delete Account -->
    <section
      class="bg-bg-surface rounded-2xl border border-red-200 dark:border-red-900 shadow-sm overflow-hidden transition-colors duration-300">
      <div class="p-6 border-b border-red-200 dark:border-red-900 flex items-center gap-3">
        <span class="material-symbols-outlined text-red-500">warning</span>
        <h3 class="text-lg font-bold text-red-600 dark:text-red-400">منطقة الخطر</h3>
      </div>
      <div class="p-8">
        <div class="flex items-center justify-between">
          <div>
            <p class="font-bold text-text-main">حذف الحساب نهائياً</p>
            <p class="text-sm text-text-muted mt-1">سيتم حذف جميع بياناتك ولا يمكن التراجع عن هذا الإجراء.</p>
          </div>
          <button @click="showDeleteDialog = true"
            class="bg-red-600 text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-red-700 transition-all cursor-pointer flex items-center gap-2">
            <span class="material-symbols-outlined text-lg">delete_forever</span>
            <span>حذف الحساب</span>
          </button>
        </div>
      </div>
    </section>

    <div class="flex justify-end gap-4 pt-4">
      <button
        class="px-8 py-3 rounded-xl border border-border-base font-bold hover:bg-bg-surface-hover transition-all text-text-main cursor-pointer">
        إلغاء
      </button>
      <button @click="saveChanges" :disabled="isSaving"
        class="bg-primary text-white px-12 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2">
        <span v-if="isSaving" class="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
        <span v-else>حفظ كافة التغييرات</span>
      </button>
    </div>

    <!-- Delete Account Confirmation Dialog -->
    <ConfirmDialog :visible="showDeleteDialog" title="حذف الحساب نهائياً"
      message="سيتم حذف جميع بياناتك بما في ذلك المقررات والشهادات والتقدم الدراسي. هذا الإجراء لا يمكن التراجع عنه."
      confirm-text="حذف الحساب" cancel-text="تراجع" variant="danger" :loading="isDeletingAccount"
      @confirm="deleteAccount" @cancel="showDeleteDialog = false" />
  </div>
</template>

<script setup>
import { profileApi } from '@/api/profile'
import ConfirmDialog from '@/components/common/ConfirmDialog.vue'
import { useApiErrors } from '@/composables/useApiErrors'
import { useToast } from '@/composables/useToast'
import { useAuthStore } from '@/stores/auth'
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore()
const { toast, showToast } = useToast()
const { errors, setErrors, clearErrors, getError, hasError, getGeneralError } = useApiErrors()

// ── State ────────────────────────────────────────────────────────────
const DEFAULT_AVATAR = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvRrl-zLbMRME5_ZXm21NvDaOOyhhvHKSCYsKOJy-QqgMBibTlKedN0jo3iHQeFzCBU3DR9BuPTpkmdDki4zRSFsD9xaHTFfZnrznnHqlXBXFXGkFARsPgJWdt0nzr6R_RExEkaisv-0oSFF64VIObuVEfYfrW-lJHboFVx2rmc77K5uimZGtxhCHh42ED4jIzvRwmKv6R_FgczAcRorZuB_ZQP_1dZiwdXeCWK4iNhl7wqiDQS-kN-g73lrRjAOd_7usnj27t3AQg';

const profileImage = ref(authStore.user?.profile_picture || DEFAULT_AVATAR)
const fileInput = ref(null)
const currentTheme = ref('light')
const currentLang = ref('ar')
const isSaving = ref(false)
const isUploading = ref(false)
const isLoadingProfile = ref(true)

const profileForm = reactive({
  name: '',
  email: '',
  phone: '',
  university_id: '',
})

const passwordForm = reactive({
  current: '',
  new: '',
  confirm: '',
})

// ── Fetch Profile ────────────────────────────────────────────────────
const fetchProfile = async () => {
  isLoadingProfile.value = true
  try {
    const { data } = await profileApi.getProfile()
    // API returns: { success: true, data: { id, name, email, ... } }
    const userData = data.data || data

    profileForm.name = userData.name || ''
    profileForm.email = userData.email || ''
    profileForm.phone = userData.phone || ''
    profileForm.university_id = userData.university_id || ''

    if (userData.profile_image) {
      profileImage.value = userData.profile_image
    }

    // Also update the auth store user data
    authStore.user = userData
    localStorage.setItem('auth_user', JSON.stringify(userData))

    console.log('[Profile] Loaded:', userData)
  } catch (error) {
    console.error('[Profile] Failed to load:', error)
    showToast('خطأ', 'فشل تحميل بيانات الملف الشخصي.', 'error')
  } finally {
    isLoadingProfile.value = false
  }
}

// ── Save Profile ─────────────────────────────────────────────────────
const saveChanges = async () => {
  clearErrors()
  isSaving.value = true
  try {
    const payload = {
      name: profileForm.name.trim(),
      email: profileForm.email.trim(),
      phone: profileForm.phone?.trim() || null,
    }

    await profileApi.updateProfile(payload)
    showToast('تم الحفظ', 'تم حفظ التعديلات بنجاح')

    // Update auth store
    if (authStore.user) {
      authStore.user = { ...authStore.user, ...payload }
      localStorage.setItem('auth_user', JSON.stringify(authStore.user))
    }

    // Handle password change if filled
    if (passwordForm.current && passwordForm.new) {
      if (passwordForm.new !== passwordForm.confirm) {
        showToast('خطأ', 'كلمة المرور الجديدة وتأكيدها غير متطابقين.', 'error')
        return
      }
      await profileApi.changePassword({
        current_password: passwordForm.current,
        new_password: passwordForm.new,
        new_password_confirmation: passwordForm.confirm,
      })
      showToast('تم التحديث', 'تم تغيير كلمة المرور بنجاح')
      passwordForm.current = ''
      passwordForm.new = ''
      passwordForm.confirm = ''
    }
  } catch (error) {
    setErrors(error)
    const msg = getGeneralError(error)
    showToast('خطأ في الحفظ', msg, 'error')
  } finally {
    isSaving.value = false
  }
}

// ── Image Upload ─────────────────────────────────────────────────────
const triggerFileUpload = () => {
  fileInput.value.click()
}

const handleImageUpload = async (event) => {
  const file = event.target.files[0]
  if (!file) return

  isUploading.value = true
  try {
    // Show preview immediately
    const reader = new FileReader()
    reader.onload = (e) => {
      profileImage.value = e.target.result
    }
    reader.readAsDataURL(file)

    // Upload via PUT /api/update using FormData
    const formData = new FormData()
    formData.append('profile_image', file)
    formData.append('name', profileForm.name)
    formData.append('email', profileForm.email)
    if (profileForm.phone) formData.append('phone', profileForm.phone)

    const { data } = await profileApi.updateProfile(formData)
    const userData = data.data || data
    if (userData.profile_image) {
      profileImage.value = userData.profile_image
    }
    showToast('تم التحديث', 'تم تحديث الصورة الشخصية بنجاح')
  } catch (error) {
    const msg = getGeneralError(error)
    showToast('خطأ', msg, 'error')
    await fetchProfile()
  } finally {
    isUploading.value = false
  }
}

// ── Delete Account ───────────────────────────────────────────────────
const isDeletingAccount = ref(false)
const showDeleteDialog = ref(false)

const deleteAccount = async () => {
  isDeletingAccount.value = true
  try {
    await profileApi.deleteAccount()
    authStore.clearSession()
    router.replace('/login')
  } catch (error) {
    const msg = getGeneralError(error)
    showToast('خطأ', msg, 'error')
  } finally {
    isDeletingAccount.value = false
    showDeleteDialog.value = false
  }
}

// ── Theme & Language ─────────────────────────────────────────────────
const changeLang = (lang) => {
  if (currentLang.value !== lang) {
    currentLang.value = lang
    showToast('تم تغيير اللغة', `تم تغيير لغة النظام إلى ${lang === 'ar' ? 'العربية' : 'الإنجليزية'}`)
  }
}

const setTheme = (theme) => {
  currentTheme.value = theme
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// ── Init ─────────────────────────────────────────────────────────────
onMounted(() => {
  if (document.documentElement.classList.contains('dark')) {
    currentTheme.value = 'dark'
  }
  fetchProfile()
})
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

.toggle-checkbox:checked+.toggle-label {
  background-color: var(--color-primary);
}

.toggle-checkbox:checked+.toggle-label:after {
  transform: translateX(-1.25rem);
}
</style>
