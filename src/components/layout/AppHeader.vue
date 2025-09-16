<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled }">
    <div class="container">
      <nav class="nav">
        <router-link to="/" class="logo">
          <span class="logo-text">{{ $t('hero.name') }}</span>
        </router-link>
        
        <div class="nav-menu" :class="{ 'nav-menu-open': isMenuOpen }">
          <router-link 
            v-for="item in navItems" 
            :key="item.name"
            :to="item.path"
            class="nav-link"
            @click="closeMenu"
          >
            {{ $t(`nav.${item.name}`) }}
          </router-link>
          
          <div class="nav-actions">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
        
        <button 
          class="nav-toggle"
          @click="toggleMenu"
          aria-label="Toggle menu"
        >
          <span class="hamburger"></span>
          <span class="hamburger"></span>
          <span class="hamburger"></span>
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import LanguageSwitcher from '../ui/LanguageSwitcher.vue'
import ThemeToggle from '../ui/ThemeToggle.vue'

export default {
  name: 'AppHeader',
  components: {
    LanguageSwitcher,
    ThemeToggle
  },
  setup() {
    const isScrolled = ref(false)
    const isMenuOpen = ref(false)
    
    const navItems = [
      { name: 'home', path: '/' },
      { name: 'experience', path: '/experience' },
      { name: 'contact', path: '/contact' }
    ]
    
    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50
    }
    
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }
    
    const closeMenu = () => {
      isMenuOpen.value = false
    }
    
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })
    
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
    
    return {
      isScrolled,
      isMenuOpen,
      navItems,
      toggleMenu,
      closeMenu
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: all $transition;
  
  &.header-scrolled {
    box-shadow: $shadow-md;
  }
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.logo {
  font-size: $font-size-xl;
  font-weight: $font-weight-bold;
  color: $primary;
  text-decoration: none;
  
  &:hover {
    color: $primary-dark;
  }
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: $spacing-8;
  
  @media (max-width: $breakpoint-lg - 1px) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: $spacing-6;
    box-shadow: $shadow-lg;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all $transition;
    
    &.nav-menu-open {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }
  }
}

.nav-link {
  font-weight: $font-weight-medium;
  color: $dark;
  text-decoration: none;
  position: relative;
  transition: color $transition-fast;
  
  &:hover,
  &.router-link-active {
    color: $primary;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: $primary;
    transition: width $transition-fast;
  }
  
  &:hover::after,
  &.router-link-active::after {
    width: 100%;
  }
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: $spacing-4;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: $spacing-2;
  
  @media (max-width: $breakpoint-lg - 1px) {
    display: flex;
  }
  
  .hamburger {
    width: 24px;
    height: 2px;
    background: $dark;
    margin: 2px 0;
    transition: all $transition-fast;
    
    &:nth-child(1) {
      transform-origin: top left;
    }
    
    &:nth-child(3) {
      transform-origin: bottom left;
    }
  }
}

.nav-menu-open + .nav-toggle {
  .hamburger {
    &:nth-child(1) {
      transform: rotate(45deg);
    }
    
    &:nth-child(2) {
      opacity: 0;
    }
    
    &:nth-child(3) {
      transform: rotate(-45deg);
    }
  }
}
</style>
