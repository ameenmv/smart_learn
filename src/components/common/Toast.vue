<template>
  <Transition name="toast">
    <div v-if="show" class="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-lg border backdrop-blur-md transition-all duration-300 min-w-[300px]"
         :class="type === 'success' ? 'bg-emerald-50/90 border-emerald-200 text-emerald-800' : 'bg-red-50/90 border-red-200 text-red-800'">
      <span class="material-symbols-outlined text-2xl" :class="type === 'success' ? 'text-emerald-600' : 'text-red-600'">
        {{ type === 'success' ? 'check_circle' : 'error' }}
      </span>
      <div class="flex flex-col">
        <h4 class="font-bold text-sm">{{ title }}</h4>
        <p class="text-xs opacity-90">{{ message }}</p>
      </div>
      <button @click="$emit('close')" class="mr-auto hover:bg-black/5 rounded-full p-1 transition-colors">
        <span class="material-symbols-outlined text-lg">close</span>
      </button>
    </div>
  </Transition>
</template>

<script setup>
import { defineEmits, defineProps, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Notification'
  },
  message: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'success',
    validator: (value) => ['success', 'error'].includes(value)
  },
  duration: {
    type: Number,
    default: 3000
  }
});

const emit = defineEmits(['close']);

let timer;

onMounted(() => {
  if (props.show) {
    startTimer();
  }
});

const startTimer = () => {
  clearTimeout(timer);
  if (props.duration > 0) {
    timer = setTimeout(() => {
      emit('close');
    }, props.duration);
  }
};

onUnmounted(() => {
  clearTimeout(timer);
});
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
