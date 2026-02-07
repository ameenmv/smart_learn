<template>
    <header class="flex items-center justify-between px-8 lg:px-12 py-6">
        <div class="flex items-center gap-3"> 
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
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
