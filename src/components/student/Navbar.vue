<script setup>
import { useDark, useToggle } from '@vueuse/core';
import { useAuthStore } from '@/stores/auth';
import { useSidebar } from '@/composables/useSidebar';

const isDark = useDark()
const toggleDark = useToggle(isDark)
const authStore = useAuthStore()
const { toggle, isMobile } = useSidebar()
</script>

<template>
  <header class="sticky top-0 z-10 flex items-center justify-between bg-bg-surface border-b border-border-base px-4 lg:px-8 py-3 transition-colors duration-300">
    <!-- Right Side: Hamburger + Logo -->
    <div class="flex items-center gap-3">
      <!-- Hamburger Menu (mobile only) -->
      <button v-if="isMobile" @click="toggle"
        class="flex items-center justify-center size-10 rounded-xl hover:bg-bg-surface-hover text-text-main transition-all cursor-pointer active:scale-95">
        <span class="material-symbols-outlined text-2xl">menu</span>
      </button>
      
      <!-- Mobile Logo -->
      <div class="flex items-center gap-2 lg:hidden">
        <div class="size-8 text-primary">
          <span class="material-symbols-outlined text-3xl">school</span>
        </div>
        <h2 class="text-lg font-bold tracking-tight text-text-main font-display">Smart Learn</h2>
      </div>
    </div>

    <!-- Desktop Title (Optional, hidden on mobile if sidebar is visible, but good placeholder) -->
    <div class="hidden lg:flex items-center gap-3 opacity-0">
       <!-- Spacer or specific page title -->
    </div>

    <div class="flex items-center gap-6 w-full lg:w-auto justify-end">
      <!-- Search Input -->
      <div class="relative w-full lg:w-72 hidden lg:block">
        <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-text-muted text-xl">search</span>
        <input class="w-full h-10 pr-10 pl-4 rounded-lg border-none bg-bg-surface-hover text-sm focus:ring-2 focus:ring-primary/50 text-text-main placeholder:text-text-muted outline-none transition-all" placeholder="ابحث عن دروس، معلمين، أو اختبارات..." type="text"/>
      </div>

      <!-- Actions -->
      <div class="flex items-center gap-3">
        <!-- Theme Toggle -->
        <button class="flex items-center gap-1 p-1 bg-bg-surface-hover rounded-full border border-border-base shadow-sm transition-all cursor-pointer" @click="toggleDark()">
          <div :class="['flex items-center justify-center size-8 rounded-full transition-all shadow-sm', !isDark ? 'bg-white text-yellow-500' : 'bg-transparent text-gray-500']">
            <span class="material-symbols-outlined !text-[20px]">light_mode</span>
          </div>
          <div :class="['flex items-center justify-center size-8 rounded-full transition-all shadow-sm', isDark ? 'bg-gray-700 text-blue-400' : 'bg-transparent text-gray-400']">
            <span class="material-symbols-outlined !text-[20px]">dark_mode</span>
          </div>
        </button>



        <div class="h-8 w-[1px] bg-border-base mx-1"></div>
        
        <!-- User Avatar (Small) -->
        <RouterLink to="/student/profile" class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer border border-border-base hover:border-primary transition-all flex items-center justify-center bg-primary/5" 
             aria-label="قائمة المستخدم"
             :style="{ backgroundImage: authStore.user?.profile_picture ? `url(${authStore.user.profile_picture})` : 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuAvRrl-zLbMRME5_ZXm21NvDaOOyhhvHKSCYsKOJy-QqgMBibTlKedN0jo3iHQeFzCBU3DR9BuPTpkmdDki4zRSFsD9xaHTFfZnrznnHqlXBXFXGkFARsPgJWdt0nzr6R_RExEkaisv-0oSFF64VIObuVEfYfrW-lJHboFVx2rmc77K5uimZGtxhCHh42ED4jIzvRwmKv6R_FgczAcRorZuB_ZQP_1dZiwdXeCWK4iNhl7wqiDQS-kN-g73lrRjAOd_7usnj27t3AQg)' }">
             <span v-if="!authStore.user?.profile_picture && !authStore.user" class="material-symbols-outlined text-text-muted text-[20px]">person</span>
        </RouterLink>
      </div>
    </div>
  </header>
</template>
