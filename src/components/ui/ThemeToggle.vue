<template>
  <button 
    class="theme-toggle"
    @click="toggleTheme"
    :title="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
  >
    <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
  </button>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'ThemeToggle',
  setup() {
    const isDark = ref(false)
    
    const toggleTheme = () => {
      isDark.value = !isDark.value
      const theme = isDark.value ? 'dark' : 'light'
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
    }
    
    onMounted(() => {
      const savedTheme = localStorage.getItem('theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      
      isDark.value = savedTheme === 'dark' || (!savedTheme && prefersDark)
      document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
    })
    
    return {
      isDark,
      toggleTheme
    }
  }
}
</script>

<style lang="scss" scoped>
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 1px solid $gray-light;
  border-radius: $radius;
  color: $dark;
  cursor: pointer;
  transition: all $transition-fast;
  
  &:hover {
    background: $primary;
    color: $white;
    border-color: $primary;
  }
  
  i {
    font-size: $font-size-base;
  }
}
</style>

