import { ref, onMounted, onUnmounted, watch } from 'vue'

const isOpen = ref(false)
const isMobile = ref(false)

function checkMobile() {
  isMobile.value = window.innerWidth < 1024
  // Auto-close sidebar when switching to mobile
  if (isMobile.value) {
    isOpen.value = false
  }
}

let initialized = false

export function useSidebar() {
  if (!initialized) {
    initialized = true
    if (typeof window !== 'undefined') {
      checkMobile()
      window.addEventListener('resize', checkMobile)
    }
  }

  const toggle = () => {
    isOpen.value = !isOpen.value
  }

  const open = () => {
    isOpen.value = true
  }

  const close = () => {
    isOpen.value = false
  }

  return {
    isOpen,
    isMobile,
    toggle,
    open,
    close
  }
}
