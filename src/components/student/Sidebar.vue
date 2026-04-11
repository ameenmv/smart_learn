<template>
  <!-- Mobile Overlay -->
  <Transition name="overlay">
    <div v-if="isMobile && isOpen" class="fixed inset-0 bg-black/40 backdrop-blur-sm z-30" @click="close"></div>
  </Transition>

  <Transition name="sidebar">
    <aside v-show="!isMobile || isOpen"
      :class="[
        'flex-shrink-0 bg-bg-surface border-l border-border-base flex flex-col justify-between p-4 transition-all duration-300',
        isMobile
          ? 'fixed top-0 right-0 h-full w-72 z-40 shadow-2xl'
          : 'w-64 h-full'
      ]">
      <div class="flex flex-col gap-6">
        <!-- Logo + Close button on mobile -->
        <div class="flex items-center gap-2.5 px-2 py-4 border-b border-border-base">
          <div class="flex items-center gap-2.5 flex-1">
            <div class="flex items-center justify-center size-9 bg-primary rounded-lg shadow-sm">
              <span class="material-symbols-outlined text-white text-xl">school</span>
            </div>
            <span class="text-xl font-bold tracking-tight text-text-main font-display">Smart Learn</span>
          </div>
          <!-- Close button for mobile -->
          <button v-if="isMobile" @click="close"
            class="flex items-center justify-center size-9 rounded-lg hover:bg-bg-surface-hover text-text-muted hover:text-text-main transition-all cursor-pointer">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>

        <!-- User Profile Summary -->
        <RouterLink to="/student/profile" @click="handleNavClick"
          class="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-bg-surface-hover transition-colors cursor-pointer group">
          <div
            class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 border-2 border-primary/20 group-hover:border-primary transition-colors flex items-center justify-center bg-primary/5"
            aria-label="صورة الملف الشخصي"
            :style="{ backgroundImage: authStore.user?.profile_picture ? `url(${authStore.user.profile_picture})` : 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuAvRrl-zLbMRME5_ZXm21NvDaOOyhhvHKSCYsKOJy-QqgMBibTlKedN0jo3iHQeFzCBU3DR9BuPTpkmdDki4zRSFsD9xaHTFfZnrznnHqlXBXFXGkFARsPgJWdt0nzr6R_RExEkaisv-0oSFF64VIObuVEfYfrW-lJHboFVx2rmc77K5uimZGtxhCHh42ED4jIzvRwmKv6R_FgczAcRorZuB_ZQP_1dZiwdXeCWK4iNhl7wqiDQS-kN-g73lrRjAOd_7usnj27t3AQg)' }">
            <span v-if="!authStore.user?.profile_picture && !authStore.user" class="material-symbols-outlined text-text-muted">person</span>
          </div>
          <div class="flex flex-col">
            <h1 class="text-text-main text-base font-bold leading-normal group-hover:text-primary transition-colors truncate max-w-[130px]">
              {{ authStore.user?.name || 'طالب' }}
            </h1>
            <p class="text-text-muted text-xs font-normal leading-normal truncate max-w-[130px]">
              {{ authStore.user?.role === 'student' ? 'طالب جامعي' : (authStore.user?.role || 'طالب') }}
            </p>
          </div>
        </RouterLink>

        <!-- Navigation -->
        <nav class="flex flex-col gap-1">
          <RouterLink to="/student/dashboard" active-class="active-nav bg-primary/10 text-primary font-bold" @click="handleNavClick"
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-text-muted hover:bg-bg-surface-hover transition-all">
            <span class="material-symbols-outlined">home</span>
            <span class="text-sm">الرئيسية</span>
          </RouterLink>
          <RouterLink to="/student/courses" active-class="active-nav bg-primary/10 text-primary font-bold" @click="handleNavClick"
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-text-muted hover:bg-bg-surface-hover transition-all">
            <span class="material-symbols-outlined">school</span>
            <span class="text-sm">المقررات</span>
          </RouterLink>
          <RouterLink to="/student/assignments" active-class="active-nav bg-primary/10 text-primary font-bold" @click="handleNavClick"
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-text-muted hover:bg-bg-surface-hover transition-all">
            <span class="material-symbols-outlined">assignment</span>
            <span class="text-sm">الواجبات</span>
          </RouterLink>
          <!-- <RouterLink to="/student/schedule" active-class="active-nav bg-primary/10 text-primary font-bold"
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-text-muted hover:bg-bg-surface-hover transition-all">
            <span class="material-symbols-outlined">calendar_today</span>
            <span class="text-sm">الجدول الدراسي</span>
          </RouterLink> -->
          <RouterLink to="/student/certificates" active-class="active-nav bg-primary/10 text-primary font-bold" @click="handleNavClick"
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-text-muted hover:bg-bg-surface-hover transition-all">
            <span class="material-symbols-outlined">workspace_premium</span>
            <span class="text-sm">الشهادات</span>
          </RouterLink>
          <RouterLink to="/student/ai-assistant" active-class="active-nav bg-primary/10 text-primary font-bold" @click="handleNavClick"
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-text-muted hover:bg-bg-surface-hover transition-all">
            <span class="material-symbols-outlined">smart_toy</span>
            <span class="text-sm">المساعد الذكي</span>
          </RouterLink>
          <RouterLink to="/student/profile" active-class="active-nav bg-primary/10 text-primary font-bold" @click="handleNavClick"
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-text-muted hover:bg-bg-surface-hover transition-all">
            <span class="material-symbols-outlined">settings</span>
            <span class="text-sm">الإعدادات</span>
          </RouterLink>
        </nav>
      </div>

      <!-- Logout -->
      <button @click="handleLogout" :disabled="isLoggingOut"
        class="flex items-center justify-center gap-2 rounded-lg h-11 px-4 w-full bg-bg-surface-hover text-text-main text-sm font-bold hover:bg-red-50 hover:text-red-600 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed">
        <span v-if="isLoggingOut"
          class="size-4 border-2 border-current/30 border-t-current rounded-full animate-spin"></span>
        <span v-else class="material-symbols-outlined">logout</span>
        <span>تسجيل الخروج</span>
      </button>
    </aside>
  </Transition>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSidebar } from '@/composables/useSidebar'

const router = useRouter()
const authStore = useAuthStore()
const isLoggingOut = ref(false)
const { isOpen, isMobile, close } = useSidebar()

const handleNavClick = () => {
  if (isMobile.value) {
    close()
  }
}

const handleLogout = async () => {
  isLoggingOut.value = true
  try {
    await authStore.logout()
  } finally {
    isLoggingOut.value = false
    router.replace('/login')
  }
}
</script>

<style scoped>
.active-nav .material-symbols-outlined {
  font-variation-settings: 'FILL' 1;
}

/* Sidebar slide transition (RTL - from right) */
.sidebar-enter-active,
.sidebar-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.sidebar-enter-from,
.sidebar-leave-to {
  transform: translateX(100%);
}

/* Overlay fade transition */
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.3s ease;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}
</style>
