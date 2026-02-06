<script setup>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <header class="sticky top-0 z-10 bg-bg-surface/80 backdrop-blur-md border-b border-border-base px-8 h-16 flex items-center justify-between transition-colors duration-300">
    <div class="flex items-center gap-4">
      <div class="flex items-center gap-2 flex-row-reverse">
        <div class="bg-primary rounded-xl size-9 flex items-center justify-center">
          <span class="material-symbols-outlined text-white text-xl" style="font-variation-settings: 'FILL' 1;">school</span>
        </div>
        <h2 class="text-xl font-bold tracking-tight text-text-main font-display">Smart Learn</h2>
      </div>
    </div>
    <div class="flex items-center gap-6">
      <div class="relative w-64 group hidden md:block">
        <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors">search</span>
        <input class="w-full h-10 pr-10 bg-bg-base border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-text-muted transition-colors text-text-main" placeholder="بحث عن دورة..." type="text"/>
      </div>
      <div class="flex items-center gap-2">
        <button class="flex items-center gap-1 p-1 bg-bg-base rounded-full border border-border-base shadow-sm transition-all cursor-pointer" @click="toggleDark()">
          <div :class="['flex items-center justify-center size-8 rounded-full transition-all shadow-sm', !isDark ? 'bg-bg-surface text-yellow-500 shadow-sm' : 'bg-transparent text-text-muted']">
            <span class="material-symbols-outlined !text-[20px]">light_mode</span>
          </div>
          <div :class="['flex items-center justify-center size-8 rounded-full transition-all shadow-sm', isDark ? 'bg-bg-surface text-blue-400 shadow-sm' : 'bg-transparent text-text-muted']">
            <span class="material-symbols-outlined !text-[20px]">dark_mode</span>
          </div>
        </button>
        <button class="p-2 rounded-lg bg-bg-base text-text-muted hover:bg-bg-base-hover relative transition-colors cursor-pointer">
          <span class="material-symbols-outlined">notifications</span>
          <span class="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-bg-surface"></span>
        </button>
        <button class="p-2 rounded-lg bg-bg-base text-text-muted hover:bg-bg-base-hover transition-colors cursor-pointer">
          <span class="material-symbols-outlined">help</span>
        </button>
      </div>
    </div>
  </header>
</template>
