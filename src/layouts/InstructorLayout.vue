<template>
  <div class="flex min-h-screen bg-bg-base text-text-main transition-colors duration-300">
    <InstructorSidebar />
    <main class="flex-1 mr-72 flex flex-col min-w-0 transition-all duration-300">
      <InstructorNavbar v-if="!route.meta.hideNavbar" />
      <div class="flex-1 overflow-x-hidden" :class="[route.meta.fullWidth ? 'p-0' : 'p-6']">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import InstructorNavbar from '../components/instructor/InstructorNavbar.vue';
import InstructorSidebar from '../components/instructor/InstructorSidebar.vue';

const route = useRoute();
</script>
