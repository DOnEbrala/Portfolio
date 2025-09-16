<template>
  <transition name="fade">
    <button 
      v-if="isVisible"
      class="scroll-to-top"
      @click="scrollToTop"
      aria-label="Scroll to top"
    >
      <i class="fas fa-chevron-up"></i>
    </button>
  </transition>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'ScrollToTop',
  setup() {
    const isVisible = ref(false)
    
    const handleScroll = () => {
      isVisible.value = window.scrollY > 300
    }
    
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
    
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })
    
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
    
    return {
      isVisible,
      scrollToTop
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-to-top {
  position: fixed;
  bottom: $spacing-6;
  right: $spacing-6;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: $primary;
  color: $white;
  border: none;
  border-radius: $radius-full;
  cursor: pointer;
  box-shadow: $shadow-lg;
  transition: all $transition-fast;
  
  &:hover {
    background: $primary-dark;
    transform: translateY(-2px);
    box-shadow: $shadow-xl;
  }
  
  i {
    font-size: $font-size-lg;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity $transition-fast;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

