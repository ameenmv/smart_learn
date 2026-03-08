<template>
   <Teleport to="body">
      <Transition name="confirm-overlay">
         <div v-if="visible" class="fixed inset-0 z-[200] flex items-center justify-center p-4"
            @click.self="handleCancel">
            <!-- Backdrop -->
            <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

            <!-- Dialog -->
            <Transition name="confirm-dialog">
               <div v-if="visible"
                  class="relative bg-bg-surface rounded-2xl shadow-2xl border border-border-base w-full max-w-md overflow-hidden">
                  <!-- Icon -->
                  <div class="flex justify-center pt-8 pb-4">
                     <div class="size-16 rounded-full flex items-center justify-center" :class="iconBgClass">
                        <span class="material-symbols-outlined text-3xl" :class="iconColorClass">{{ iconName }}</span>
                     </div>
                  </div>

                  <!-- Content -->
                  <div class="px-8 pb-6 text-center">
                     <h3 class="text-xl font-bold text-text-main mb-2">{{ title }}</h3>
                     <p class="text-sm text-text-muted leading-relaxed">{{ message }}</p>
                  </div>

                  <!-- Actions -->
                  <div class="flex gap-3 px-8 pb-8">
                     <button @click="handleCancel"
                        class="flex-1 px-6 py-3 rounded-xl border border-border-base font-bold text-sm text-text-main hover:bg-bg-surface-hover transition-all cursor-pointer">
                        {{ cancelText }}
                     </button>
                     <button @click="handleConfirm" :disabled="loading"
                        class="flex-1 px-6 py-3 rounded-xl font-bold text-sm text-white transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        :class="confirmBtnClass">
                        <span v-if="loading"
                           class="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        <span>{{ confirmText }}</span>
                     </button>
                  </div>
               </div>
            </Transition>
         </div>
      </Transition>
   </Teleport>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
   visible: { type: Boolean, default: false },
   title: { type: String, default: 'تأكيد' },
   message: { type: String, default: 'هل أنت متأكد من هذا الإجراء؟' },
   confirmText: { type: String, default: 'تأكيد' },
   cancelText: { type: String, default: 'إلغاء' },
   variant: { type: String, default: 'danger' }, // 'danger' | 'warning' | 'info'
   loading: { type: Boolean, default: false },
})

const emit = defineEmits(['confirm', 'cancel'])

const iconName = computed(() => {
   const icons = { danger: 'delete_forever', warning: 'warning', info: 'info' }
   return icons[props.variant] || 'warning'
})

const iconBgClass = computed(() => {
   const classes = {
      danger: 'bg-red-100 dark:bg-red-900/30',
      warning: 'bg-amber-100 dark:bg-amber-900/30',
      info: 'bg-blue-100 dark:bg-blue-900/30',
   }
   return classes[props.variant] || classes.danger
})

const iconColorClass = computed(() => {
   const classes = {
      danger: 'text-red-600 dark:text-red-400',
      warning: 'text-amber-600 dark:text-amber-400',
      info: 'text-blue-600 dark:text-blue-400',
   }
   return classes[props.variant] || classes.danger
})

const confirmBtnClass = computed(() => {
   const classes = {
      danger: 'bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/20',
      warning: 'bg-amber-600 hover:bg-amber-700 shadow-lg shadow-amber-600/20',
      info: 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20',
   }
   return classes[props.variant] || classes.danger
})

const handleConfirm = () => emit('confirm')
const handleCancel = () => {
   if (!props.loading) emit('cancel')
}
</script>

<style scoped>
/* Overlay */
.confirm-overlay-enter-active,
.confirm-overlay-leave-active {
   transition: opacity 0.25s ease;
}

.confirm-overlay-enter-from,
.confirm-overlay-leave-to {
   opacity: 0;
}

/* Dialog */
.confirm-dialog-enter-active {
   transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.confirm-dialog-leave-active {
   transition: all 0.2s ease-in;
}

.confirm-dialog-enter-from {
   opacity: 0;
   transform: scale(0.9) translateY(10px);
}

.confirm-dialog-leave-to {
   opacity: 0;
   transform: scale(0.95) translateY(5px);
}
</style>
