<script setup>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <header class="sticky top-0 z-10 flex items-center justify-between bg-bg-surface border-b border-border-base px-8 py-3 transition-colors duration-300">
    <!-- Mobile Breadcrumb or Title (could be dynamic) -->
    <div class="flex items-center gap-3 md:hidden">
      <div class="size-8 text-primary">
        <span class="material-symbols-outlined text-3xl">school</span>
      </div>
      <h2 class="text-lg font-bold tracking-tight text-text-main font-display">Smart Learn</h2>
    </div>

    <!-- Desktop Title (Optional, hidden on mobile if sidebar is visible, but good placeholder) -->
    <div class="hidden md:flex items-center gap-3 opacity-0">
       <!-- Spacer or specific page title -->
    </div>

    <div class="flex items-center gap-6 w-full md:w-auto justify-end">
      <!-- Search Input -->
      <div class="relative w-full md:w-72 hidden md:block">
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
          <div :class="['flex items-center justify-center size-8 rounded-full transition-allShadow-sm', isDark ? 'bg-gray-700 text-blue-400' : 'bg-transparent text-gray-400']">
            <span class="material-symbols-outlined !text-[20px]">dark_mode</span>
          </div>
        </button>

        <!-- Notifications -->
        <button class="relative p-2 rounded-full bg-bg-surface-hover text-text-muted hover:bg-primary/10 hover:text-primary transition-all cursor-pointer">
          <span class="material-symbols-outlined">notifications</span>
          <span class="absolute top-2 left-2 size-2 bg-red-500 rounded-full border-2 border-bg-surface"></span>
        </button>

        <!-- Messages -->
        <button class="p-2 rounded-full bg-bg-surface-hover text-text-muted hover:bg-primary/10 hover:text-primary transition-all cursor-pointer">
          <span class="material-symbols-outlined">chat_bubble</span>
        </button>

        <div class="h-8 w-[1px] bg-border-base mx-1"></div>
        
        <!-- User Avatar (Small) -->
        <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer border border-border-base hover:border-primary transition-all" 
             aria-label="قائمة المستخدم"
             style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAjVsJRFTmoARmuaRiCxWdwht3h6qxDiRI4-tVB-JTxYUh9OvLSJSY3LjwCVaZOojuKgd4fwc87kuKXHQI1lzhfaV0a287k0pni8wTrw-Bar1NEqTZpIkZfe1i_GW0v0CFbLFce2t01bCG0ABrmFeEpbEK4a2byr5R-Zp-n4OiZyS4vqrXgLxzcjVWMt3G8czXGDPtpC4zBe8e7UVG3CHoGpQjrZmA0Ke3aBDCLa_DV5xH611nnw6i4ELDlkPDzwj_MnWatgZJt9Od8");'></div>
      </div>
    </div>
  </header>
</template>
