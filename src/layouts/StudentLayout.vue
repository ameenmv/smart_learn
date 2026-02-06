<script setup>
import Navbar from '@/components/student/Navbar.vue';
import Sidebar from '@/components/student/Sidebar.vue';
</script>

<template>
  <div class="flex h-screen overflow-hidden bg-bg-base transition-colors duration-300">
    <Sidebar />
    
    <main class="flex-1 flex flex-col overflow-hidden bg-bg-base">
      <Navbar />
      
      <div class="flex-1 overflow-y-auto p-8 relative no-scrollbar">
        <RouterView />
      </div>
    </main>
  </div>
</template>
